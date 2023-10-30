<script lang="ts">
    import {highlight} from "$lib/preview_area/editor/syntax_highlighter/Highlighter";
    import {theme} from "$lib/editing/ThemeStore";
    import Attribute from "$lib/editing/Attribute.svelte";
    import {onMount} from "svelte";

    let keywords: string;
    let methods: string;

    onMount(() => {
        keywords = theme.keywords;
        methods = theme.methods;
    })

    function updateTheme() {
        theme.keywords = keywords;
        theme.methods = methods;

        highlight(theme);
    }
</script>

<div class="bg-neutral-900 grow flex flex-col p-4">
    <Attribute name="Keywords" bind:value={keywords} onThemeChanged={updateTheme} />
    <Attribute name="Methods" bind:value={methods} onThemeChanged={updateTheme} />
</div>