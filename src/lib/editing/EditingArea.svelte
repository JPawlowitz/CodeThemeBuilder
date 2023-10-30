<script lang="ts">
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";
    import type {FontOptions} from "$lib/editing/ThemeStore";
    import Attribute from "$lib/editing/Attribute.svelte";
    import {onMount} from "svelte";

    let font: FontOptions = { name: "", size: "", color: "" };
    let keywords: string;
    let methods: string;

    onMount(() => {
        font = theme.font;
        keywords = theme.keywords;
        methods = theme.methods;
    })

    function updateTheme() {
        theme.font = font;
        theme.keywords = keywords;
        theme.methods = methods;

        highlight(theme);
    }
</script>

<div class="bg-neutral-900 grow flex flex-col p-4">
    <div class="flex items-center">
        <span class="w-24">Font</span>
        <div class="flex space-x-1 items-center">
            <select on:change={(event) => {
            font.name = event.target.value;
            updateTheme();
        }}
                    class="select select-sm max-w-xs bg-neutral-200 text-neutral-800">
                <option selected>Consolas</option>
                <option>Monaco</option>
            </select>
            <select on:change={(event) => {
            font.size = event.target.value;
            updateTheme();
        }}
                    class="select select-sm max-w-xs bg-neutral-200 text-neutral-800">
                <option>14</option>
                <option>13</option>
                <option selected>12</option>
                <option>11</option>
            </select>
            <input id="keywords_color"
                   type="text"
                   value={theme.font.color}
                   on:change={(event) => {
                       font.color = event.target.value;
                       updateTheme();
                   }}
                   class="text-neutral-800 text-sm p-1 rounded w-20 bg-neutral-200 text-center mr-2">
            <div style="background-color: {font.color}"
                 class="h-6 w-6 rounded"></div>
        </div>
    </div>
    <Attribute name="Keywords" bind:value={keywords} onThemeChanged={updateTheme} />
    <Attribute name="Methods" bind:value={methods} onThemeChanged={updateTheme} />
</div>