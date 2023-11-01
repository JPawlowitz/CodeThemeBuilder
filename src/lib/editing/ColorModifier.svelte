<script lang="ts">
    export let value: string;
    export let onChange: () => void;
</script>

<div class="flex items-center space-x-1">
    <input type="text"
           bind:value={ value }
           on:change={onChange}
           class="text-neutral-800 text-sm rounded h-6 w-20 bg-neutral-200 text-center focus:outline-0">
    <div style="background-color: { value }"
         class="h-6 w-6 rounded"></div>
</div>