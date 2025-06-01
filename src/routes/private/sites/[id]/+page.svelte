<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';

    let {data} = $props();
    const modal = getContext('modal');
</script>

{#if data.site.id}
<h1>Edit Existing Site</h1>
{:else}
<h1>Add New Site</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") goto('.')
            else modal.notify('Fail', result.data.error);
    }
}}>
    <input type="hidden" name="id" value={data.site.id}>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" value={data.site.name}>
    <label for="officer">Officer:</label>
    <select name="officer">
        <option value="">Select an officer (optional)</option>
        {#each data.officers as officer}
            {#if officer.id === data.site.officer?.id}
                <option value={officer.id} selected>{officer.user.profile.name}</option>
            {:else}
                <option value={officer.id}>{officer.user.profile.name}</option>
            {/if}
        {/each}
    </select>
    <br>
    <button type="button" onclick={()=>goto('.')}>Back</button>
    <button type="submit">Save</button>
</form>