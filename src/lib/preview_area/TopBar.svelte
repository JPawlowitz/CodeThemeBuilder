<script lang="ts">
    export let border = true;
</script>

<div class="grow max-h-[10%] mb-2 border-neutral-600 {border ? 'border-y' : ''}">
    <slot />
</div>