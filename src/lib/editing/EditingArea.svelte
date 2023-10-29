<script lang="ts">
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";

    function updateTheme() {
        const color = document.getElementById("keywords_color");
        if (color) {
            const color_input = color as HTMLInputElement;
            theme.keywords = color_input.value;

            highlight(theme);
        }
    }
</script>

<div class="bg-neutral-900 grow flex flex-col p-4">
    <div class="flex h-fit space-x-2 items-center">
        <span>Keywords</span>
        <input id="keywords_color"
               type="text"
               value={theme.keywords}
               on:change={updateTheme}
               class="text-black p-1">
    </div>
<!--    <div>-->
<!--        <button on:click={updateTheme} class="p-2 bg-gray-400">-->
<!--            Update-->
<!--        </button>-->
<!--    </div>-->
</div>