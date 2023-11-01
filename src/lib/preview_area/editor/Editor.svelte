<script lang="ts">
    import TopBar from "$lib/preview_area/TopBar.svelte";
    import {onMount} from "svelte";
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";

    onMount(() => {
        const text_input = document.getElementById("text-input");
        if (text_input) {
            highlight($theme);
        }
    })
</script>

<div class="bg-neutral-800 h-full w-full flex flex-col border-l border-neutral-600">
    <TopBar />

    <div class="flex overflow-y-scroll h-fit w-full">
        <ul id="line-numbers" class="px-2 text-neutral-600"></ul>
        <div id="text-input" contenteditable="true" class="focus:outline-0">
        </div>
    </div>
</div>