<script lang="ts">
    export let name: string;
    export let value: string;
    export let onThemeChanged: () => void;

    function onValueChanged(event: Event) {
        value = event.target.value;

        onThemeChanged();
    }
</script>

<div class="flex h-fit items-center space-y-2">
    <span class="w-24">{ name }</span>
    <input id="keywords_color"
           type="text"
           value={value}
           on:change={onValueChanged}
           class="text-neutral-800 text-sm p-1 rounded w-20 bg-neutral-200 text-center mr-2">
    <div style="background-color: {value}"
         class="h-6 w-6 rounded"></div>
</div>