<script lang="ts">
    import {theme} from "$lib/editing/ThemeStore.js";
    import ColorModifier from "$lib/editing/ColorModifier.svelte";
    import Selection from "$lib/editing/Selection.svelte";

    export let onChange: () => void;
</script>

<div class="flex items-center">
    <span class="w-24">Font</span>
    <div class="flex space-x-1 items-center">
        <Selection bind:value={ $theme.font.name } onChange={onChange}>
            <option selected>Consolas</option>
            <option>Monaco</option>
        </Selection>
        <Selection bind:value={ $theme.font.size } onChange={onChange}>
            <option>14</option>
            <option>13</option>
            <option>12.5</option>
            <option selected>12</option>
            <option>11.5</option>
            <option>11</option>
        </Selection>
        <ColorModifier bind:value={$theme.font.color} onChange={onChange} />
    </div>
</div>