import {javascript_features, js_example} from "$lib/preview_area/editor/syntax_highlighter/langs/javascript";
import type {Theme} from "$lib/editing/ThemeStore";

export interface LanguageFeatures {
    keywords: string
}

export function highlight(theme: Theme): number {
    const text_area = document.getElementById("text-input");
    if (!text_area) throw Error("Text area is null!");

    text_area.innerHTML = js_example;
    const lines = text_area.innerHTML.split('\n');

    let with_breaks = "";
    let indent_depth = 0;

    lines.forEach(value => {
        if (new RegExp("\{$|\\?$").test(value)) {
            indent_depth += 1;
        } else if (new RegExp("\}$").test(value)) {
            indent_depth -= 1;
        }

        for (let i = 0; i <indent_depth; i++) {
            with_breaks += "<span>&nbsp;&nbsp;&nbsp;</span>"
        }

        with_breaks += value + "<br>";
    });

    text_area.innerHTML = with_breaks;

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

    text_area.innerHTML = result;

    return lines.length;
}