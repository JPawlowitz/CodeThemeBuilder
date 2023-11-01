<script lang="ts">
    import ColorModifier from "$lib/editing/ColorModifier.svelte";
    import type {CodeHighlightAttributes} from "$lib/editing/ThemeStore";
    import CheckBox from "$lib/editing/CheckBox.svelte";

    export let name: string;
    export let value: CodeHighlightAttributes;
    export let onThemeChanged: () => void;
</script>

<div class="flex items-center">
    <span class="w-24">{ name }</span>
    <div class="flex space-x-1">
        <ColorModifier bind:value={ value.color } onChange={ onThemeChanged } />
        <CheckBox title="Bold" bind:value={ value.bold } onChange={ onThemeChanged }  />
        <CheckBox title="Italic" bind:value={ value.italic } onChange={ onThemeChanged }  />
    </div>
</div>