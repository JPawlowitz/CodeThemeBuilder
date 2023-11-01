<script lang="ts">
    export let value: string;
    export let onChange: () => void;
</script>

<div class="flex items-center space-x-1 h-6">
    <input type="text"
           bind:value={ value }
           on:change={onChange}
           class="text-neutral-800 h-full text-sm rounded w-20 bg-neutral-200 text-center focus:outline-0">
    <div style="background-color: { value }"
         class="h-full w-6 rounded"></div>
</div>