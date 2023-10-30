import {javascript_features, js_example} from "$lib/preview_area/editor/syntax_highlighter/langs/javascript";
import type {Theme} from "$lib/editing/ThemeStore";

export interface LanguageFeatures {
    keywords: string
}

export function highlight(theme: Theme): number {
    const text_area = document.getElementById("text-input");
    if (!text_area) throw Error("Text area is null!");
    text_area.innerHTML = js_example;

    let [formatted_code, num_lines] = format_code(text_area.innerHTML);
    text_area.innerHTML = formatted_code;

    //Find numbers. First because it would parse tailwind class numbers
    let result = text_area.innerHTML.replace(new RegExp("([0-9])", "g"),
        "<span class='text-blue-500'>$1</span>");

    //Find comments
    result = result.replace(new RegExp("(\/\/.*?\<br\>)", "g"),
        "<span class='text-neutral-500'>$1</span>");

    //Find methods
    result = result.replace(new RegExp("([A-z]+)\\(", "g"),
        "<span style='color:" + theme.methods + "'>$1</span>(");

    //Find literals
    result = result.replace(new RegExp("(\".*?\")", "g"),
        "<span class='text-yellow-600'>$1</span>");

    //Find class names
    result = result.replace(new RegExp("@@c\\[(.*?)\]", "g"),
        "<span class='text-sky-300'>$1</span>");

    //Find keywords
    result = result.replace(new RegExp(javascript_features.keywords, "g"),
        "<span style='color:" + theme.keywords + "'>$1</span>");

    text_area.innerHTML = apply_font(result, theme);

    return num_lines;
}

function apply_font(text: string, theme: Theme): string {
    return "<div style='font-family:" + theme.font.name + ",monospace; font-size:" +
        theme.font.size + "pt; color:" + theme.font.color + ";'>" + text + "</div>"
}

function format_code(code: string): [string, number] {
    let formatted_code = "";
    let indent_depth = 0;
    let scope_indent = false;

    const lines = code.split('\n');
    lines.forEach(value => {
        if (new RegExp("\}$").test(value)) {
            indent_depth -= 1;
            scope_indent = false;
        }

        for (let i = 0; i <indent_depth; i++) {
            formatted_code += "<span>&nbsp;&nbsp;&nbsp;</span>"
        }

        if (new RegExp("\\?$").test(value)) {
            indent_depth += 1;
            scope_indent = true;
        }

        if (new RegExp("\{$").test(value)) {
            indent_depth += 1;
        }

        if (new RegExp("\;$").test(value) && scope_indent) {
            indent_depth -= 1;
            scope_indent = false;
        }

        formatted_code += value + "<br>";
    });

    return [formatted_code, lines.length];
}