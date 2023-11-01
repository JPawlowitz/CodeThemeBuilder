<script lang="ts">
    import ColorModifier from "$lib/editing/ColorModifier.svelte";

    export let name: string;
    export let value: string;
    export let onChange: () => void;
</script>

<div class="flex items-center">
    <span class="w-24">{ name }</span>
    <div class="flex space-x-1">
        <ColorModifier bind:value={ value } onChange={ onChange } />
    </div>
</div>