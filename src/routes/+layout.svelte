<script lang="ts">
    import "../app.css"
    import EditingArea from "$lib/editing/EditingArea.svelte";
    import PreviewArea from "$lib/preview_area/PreviewArea.svelte";

</script>

<div class="h-screen flex flex-col text-neutral-100 font-sans">
    <div class="h-1/3 flex">
        <EditingArea />
    </div>
    <div class="flex grow">
        <PreviewArea />
    </div>
</div>

