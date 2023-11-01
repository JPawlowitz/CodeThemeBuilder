import {writable} from "svelte/store";

export interface Theme {
    font: GeneralFontOptions,
    backgrounds: {
        panel: string,
        editor: string,
    }
    keywords: CodeHighlightAttributes,
    methods: CodeHighlightAttributes,
    strings: CodeHighlightAttributes,
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
    backgrounds: {
        panel: "#202020",
        editor: "#202020",
    },
    keywords: { color: "#dd2200", bold: false, italic: false },
    methods: { color: "#00dddd", bold: false, italic: true },
    strings: { color: "#cc7f00", bold: false, italic: true },
};

export const theme = writable<Theme>(default_theme)
