import type {DirectoryItem} from "$lib/preview_area/project_browser/BrowserItems";

const lib: DirectoryItem = {
    name: "lib",
    sub_dirs: [],
    files: [],
};
const routes: DirectoryItem = {
    name: "routes",
    sub_dirs: [],
    files: [
        { name: "+layout.svelte" },
        { name: "+page.svelte" }
    ],
};
const node_modules: DirectoryItem = {
    name: "node_modules",
    sub_dirs: [],
    files: [],
};
const src: DirectoryItem = {
    name: "src",
    sub_dirs: [lib, routes],
    files: [
        { name: "app.html" },
        { name: "app.css" },
    ]
};
const static_dir: DirectoryItem = {
    name: "static",
    sub_dirs: [],
    files: [],
};

export const file_tree: DirectoryItem = {
    name: "DemoProject",
    sub_dirs: [node_modules, src, static_dir],
    files: [
        { name: ".gitignore" },
        { name: "package.json" },
        { name: "package-lock.json" },
        { name: "README.md" },
        { name: "tsconfig.ts" },
        { name: "vite.config.ts" },
    ],
};