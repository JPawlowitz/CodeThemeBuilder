<script lang="ts">
    import TopBar from "$lib/preview_area/TopBar.svelte";
    import type {DirectoryItem} from "$lib/preview_area/project_browser/FileTree";
    import BrowserDir from "$lib/preview_area/project_browser/BrowserDir.svelte";
    import {file_tree} from "$lib/preview_area/project_browser/FileTree";

    const browser_tree: DirectoryItem = file_tree;
</script>

<div class="bg-neutral-800 flex flex-col h-full border-neutral-600 w-96">
    <TopBar />

    <div class="p-1">
        <BrowserDir dir_item={ browser_tree } />
    </div>
</div>