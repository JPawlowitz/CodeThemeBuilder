<script lang="ts">
    import type {FileItem} from "$lib/preview_area/project_browser/FileTree";
    import {get_file_icon} from "$lib/preview_area/project_browser/FileIcons";

    export let file: FileItem;
    const icon_path = get_file_icon(file.name);
</script>

<li class="flex ml-[3.35rem]">
    <img src={icon_path} alt="file_icon" class="w-5" />
    <span class="ml-1">
        { file.name }
    </span>
</li>