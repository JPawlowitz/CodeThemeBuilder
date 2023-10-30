export interface Theme {
    font: FontOptions,
    keywords: string,
    methods: string,
}

export interface FontOptions {
    name: string,
    size: string,
    color: string,
}

export const theme: Theme = {
    font: {
        name: "Consolas",
        size: "12",
        color: "#dfdfdf"
    },
    keywords: "#FF0000",
    methods: "#00FF00",
};
