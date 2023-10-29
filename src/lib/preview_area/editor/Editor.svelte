<script lang="ts">
    import TopBar from "$lib/preview_area/TopBar.svelte";
    import {onMount} from "svelte";
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";

    let lines: string[] = [];

    onMount(() => {
        const text_input = document.getElementById("text-input");
        if (text_input) {
            const num_lines = highlight(theme);

            for (let i = 0; i < num_lines; i++) {
                lines = [...lines, (i + 1).toString()];
            }
        }
    })
</script>

<div class="bg-neutral-800 grow flex flex-col border border-neutral-600">
    <TopBar />

    <div class="flex">
        <ul class="px-2 text-neutral-600">
            {#each lines as line}
                <li>{line}</li>
            {/each}
        </ul>
        <div id="text-input" contenteditable="true" class="font-mono">
        </div>
    </div>


</div>