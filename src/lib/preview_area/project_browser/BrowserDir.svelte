<script lang="ts">
    import type {DirectoryItem} from "$lib/preview_area/project_browser/FileTree";
    import BrowserFile from "$lib/preview_area/project_browser/BrowserFile.svelte";

    export let dir_item: DirectoryItem;
</script>

<ul class="flex flex-col { dir_item.name === 'DemoProject' ? '' : 'ml-6' }">
    <li class="flex">
        <span class="material-symbols-outlined mr-1">
            { dir_item.sub_dirs.length > 0 || dir_item.files.length > 0 ?
                "expand_more" : "chevron_right"}
        </span>
        <span class="material-symbols-outlined mr-2 font-thin">
            folder
        </span>
        <span>
            { dir_item.name }
        </span>
    </li>

    {#each dir_item.sub_dirs as sub_dir}
        <svelte:self dir_item={sub_dir} />
    {/each}
    {#each dir_item.files as file}
        <BrowserFile {file} />
    {/each}
</ul>