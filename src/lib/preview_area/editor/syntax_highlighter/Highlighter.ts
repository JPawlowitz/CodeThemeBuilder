import {javascript_features} from "$lib/preview_area/editor/syntax_highlighter/langs/javascript";

export interface LanguageFeatures {
    keywords: string
}

export function highlight(text_area: HTMLElement): [string, string[]] {
    const js_features = javascript_features;

    let with_breaks = "";
    const lines = text_area.innerHTML.split('\n');
    let indent = false;
    lines.forEach((value, i) => {
        //with_breaks += value + "<br><span>" + (i + 1) + "</span>"
        if (new RegExp("\{$").test(value)) {
            indent = true;
        } else if (new RegExp("\}$").test(value)) {
            indent = false;
        }

        if (indent && !(new RegExp("\{$").test(value))) {
            with_breaks += "<span>&nbsp;&nbsp;&nbsp;</span>"
        }

        with_breaks += value + "<br>";

    })

    text_area.innerHTML = with_breaks;
    console.log(with_breaks)

    //Find numbers. First because it would parse tailwind class numbers
    let result = text_area.innerHTML.replace(new RegExp("([0-9])", "g"),
        "<span class='text-blue-500'>$1</span>");

    //Find comments
    result = result.replace(new RegExp("(\/\/.*?\<br\>)", "g"),
        "<span class='text-neutral-500'>$1</span>");

    //Find functions
    result = result.replace(new RegExp("([A-z]+)\\(", "g"),
        "<span class='text-green-500'>$1</span>(");

    //Find literals
    result = result.replace(new RegExp("(\".*?\")", "g"),
        "<span class='text-yellow-600'>$1</span>");

    //Find class names
    result = result.replace(new RegExp("@@c\\[(.*?)\]", "g"),
        "<span class='text-sky-300'>$1</span>");

    //Find keywords
    result = result.replace(new RegExp(javascript_features.keywords, "g"),
        "<span class='text-red-500'>$1</span>");

    return [result, lines];
}