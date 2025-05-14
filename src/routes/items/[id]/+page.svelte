<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';

    let {data} = $props();
</script>

{#if data.item.id}
<h1>Edit Existing Item</h1>
{:else}
<h1>Add New Item</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/items");
        }
    }
}}>
    <input type="hidden" name="id" value={data.item.id}>
    <label for="name">Name:</label><br>
    <input type="text" name="name" value={data.item.name}><br>
    <label for="phone">UOM:</label><br>
    <input type="text" name="uom" value={data.item.uom}><br>
    <button type="submit">Save</button>
</form>