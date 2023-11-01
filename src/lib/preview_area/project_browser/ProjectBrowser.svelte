<script lang="ts">
    import TopBar from "$lib/preview_area/TopBar.svelte";
    import type {DirectoryItem} from "$lib/preview_area/project_browser/FileTree";
    import BrowserDir from "$lib/preview_area/project_browser/BrowserDir.svelte";
    import {file_tree} from "$lib/preview_area/project_browser/FileTree";
    import {theme} from "$lib/editing/ThemeStore";

    const browser_tree: DirectoryItem = file_tree;
</script>

<div class="flex flex-col h-full border-neutral-600 w-96"
     style="background-color: {$theme.backgrounds.panel}">
    <TopBar />

    <div class="p-1">
        <BrowserDir dir_item={ browser_tree } />
    </div>
</div>