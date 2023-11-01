<script lang="ts">
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";
    import FontSelector from "$lib/editing/FontSelector.svelte";
    import CodeAttribute from "$lib/editing/CodeAttribute.svelte";
    import ColorAttribute from "$lib/editing/ColorAttribute.svelte";

    function updateTheme() {
        highlight($theme);
    }
</script>

<div class="bg-neutral-700 grow flex p-4">
    <div class="flex flex-col space-y-2">
        <div class="mb-2 border-b">
            General
        </div>
        <FontSelector onChange={updateTheme} />
        <div class="my-2 border-b">
            Backgrounds
        </div>
        <ColorAttribute name="Panel" bind:value={$theme.backgrounds.panel} onChange={updateTheme} />
        <ColorAttribute name="Editor" bind:value={$theme.backgrounds.editor} onChange={updateTheme} />
    </div>
    <div class="flex flex-col ml-4 space-y-2">
        <div class="mb-2 border-b">
            Code Highlighting
        </div>
        <CodeAttribute name="Keywords" bind:value={$theme.keywords} onThemeChanged={updateTheme} />
        <CodeAttribute name="Methods" bind:value={$theme.methods} onThemeChanged={updateTheme} />
        <CodeAttribute name="Strings" bind:value={$theme.strings} onThemeChanged={updateTheme} />
    </div>
</div>