<script lang="ts">
    import TopBar from "$lib/preview_area/TopBar.svelte";
    import type {DirectoryItem} from "$lib/preview_area/project_browser/BrowserItems";
    import BrowserDir from "$lib/preview_area/project_browser/BrowserDir.svelte";
    import {file_tree} from "$lib/preview_area/project_browser/FileTree";

    const browser_tree: DirectoryItem = file_tree;
</script>

<div class="bg-neutral-800 flex flex-col grow border-neutral-600 max-w-[20%] p-1">
    <TopBar border={false} />

    <BrowserDir dir_item={ browser_tree } />
</div>