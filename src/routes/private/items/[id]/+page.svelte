<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';

    let {data} = $props();
    const modal = getContext('modal');
</script>

{#if data.item.id}
<h1>Edit Existing Item</h1>
{:else}
<h1>Add New Item</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") goto(".")
            else modal.notify('Fail', result.data.error); 
    }
}}>
    <input type="hidden" name="id" value={data.item.id}>
    <label for="name">Name:</label><br>
    <input type="text" name="name" value={data.item.name} required>
    <label for="phone">UOM:</label><br>
    <input type="text" name="uom" value={data.item.uom} required>
    <button type="button" onclick={()=>goto('.')}>Back</button>
    <button type="submit">Save</button>
</form>