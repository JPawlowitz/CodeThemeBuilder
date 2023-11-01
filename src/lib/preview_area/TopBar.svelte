<script lang="ts">
    export let border = true;
</script>

<div class="h-12 mb-1 border-neutral-600 {border ? 'border-y' : ''}">
    <slot />
</div>