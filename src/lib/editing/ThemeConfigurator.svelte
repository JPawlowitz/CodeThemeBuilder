<script lang="ts">
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";
    import Attribute from "$lib/editing/CodeAttribute.svelte";
    import Selection from "$lib/editing/Selection.svelte";
    import ColorModifier from "$lib/editing/ColorModifier.svelte";

    function updateTheme() {
        highlight($theme);
    }
</script>

<div class="bg-neutral-900 grow flex flex-col p-4">
    <div class="flex items-center">
        <span class="w-24">Font</span>
        <div class="flex space-x-1 items-center">

            <Selection bind:value={ $theme.font.name } onChange={updateTheme}>
                <option selected>Consolas</option>
                <option>Monaco</option>
            </Selection>
            <Selection bind:value={ $theme.font.size } onChange={updateTheme}>
                <option>14</option>
                <option>13</option>
                <option>12.5</option>
                <option selected>12</option>
                <option>11.5</option>
                <option>11</option>
            </Selection>
            <ColorModifier bind:value={$theme.font.color} onChange={updateTheme} />
        </div>
    </div>
    <Attribute name="Keywords" bind:value={$theme.keywords} onThemeChanged={updateTheme} />
    <Attribute name="Methods" bind:value={$theme.methods} onThemeChanged={updateTheme} />
</div>