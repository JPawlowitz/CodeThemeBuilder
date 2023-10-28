export function get_file_icon(file_name: string): string {
    const file_split = file_name.split('.');
    const file_extension = file_split[file_split.length - 1];

    switch (file_extension) {
        case "css": return "/icons/css.svg";
        case "gitignore": return "/icons/git.svg";
        case "svelte": return "icons/svelte.svg";
        case "html": return "icons/html.svg";
        case "md": return "icons/markdown.svg";
        case "js": return "icons/javascript.svg";
        case "ts": return "icons/typescript.svg";
        case "json": return "icons/json.svg";
        default: return "/icons/svg.svg";
    }
}