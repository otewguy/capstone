<script>
    let {data, dialog = $bindable(), properties} = $props();
    const {title, content} = properties;
</script>

{#snippet header(title)}
    <h2>{title}</h2>
{/snippet}

{#snippet children(content)}
    <p>{content}</p>
{/snippet}

<div>
    {@render header?.(title)}
    {@render children?.(content)}
	<button onclick={() => dialog.close()}>close</button>
</div>