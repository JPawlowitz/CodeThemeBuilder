<script lang="ts">
    export let value: string;
    export let onChange: () => void;
</script>

<select bind:value={ value }
        on:change={ onChange }
        class="text-center text-sm px-2 rounded h-6 bg-neutral-200 text-neutral-800 focus:outline-0">
    <slot />
</select>