import {writable} from "svelte/store";

export interface Theme {
    keywords: string,
}

export const theme: Theme = { keywords: "#FF0000" };
