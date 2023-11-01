import {writable} from "svelte/store";

export interface Theme {
    font: GeneralFontOptions,
    keywords: CodeHighlightAttributes,
    methods: CodeHighlightAttributes,
}

export interface GeneralFontOptions {
    name: string,
    size: string,
    color: string,
}

export interface CodeHighlightAttributes {
    color: string,
    bold: boolean,
    italic: boolean,
}

export const default_theme: Theme = {
    font: {
        name: "Consolas",
        size: "12",
        color: "#dfdfdf"
    },
    keywords: { color: "#FF0000", bold: false, italic: false },
    methods: { color: "#00FF00", bold: false, italic: true },
};

export const theme = writable<Theme>(default_theme)
