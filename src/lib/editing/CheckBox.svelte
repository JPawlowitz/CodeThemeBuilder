<script lang="ts">
    export let title: string;
    export let value: boolean;
    export let onChange: () => void;
</script>

<div class="flex h-6 items-center">
    <label class="label cursor-pointer">
        <input type="checkbox"
               bind:checked={value}
               on:change={onChange}
               class="checkbox bg-neutral-200 rounded" />
        <span class="ml-1">{title}</span>
    </label>
</div>