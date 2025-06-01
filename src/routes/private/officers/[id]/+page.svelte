<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import {getContext} from 'svelte';

    let {data} = $props();
    const modal = getContext('modal');
</script>

{#if data.officer.id}
<h1>Edit Existing Officer</h1>
{:else}
<h1>Add New Officer</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") goto(".")
            else modal.notify('Fail', result.data.error);
    }
}}>
    <input type="hidden" name="id" value={data.officer.id}>
    <label for="title">Title</label>
    <input type="text" name="title" value={data.officer.title} required>
    <label for="userId">User</label>
    <select name="userId">
        <option value="" disabled hidden>Select a user by email address (optional)</option>
        {#each data.users as user}
            {#if user.id === data.officer.user?.id}
                <option value={user.id} selected>{user.email}</option>
            {:else}
                <option value={user.id}>{user.email}</option>
            {/if}
        {/each}
    </select>
    <label for="sites">Sites</label>
    {#each data.sites as site}
        {#if data.officer.sites.map(site => site.id).includes(site.id)}
            <label><input type="checkbox" name="sites" value={site.id} checked>{site.name}</label>
        {:else}
            <label><input type="checkbox" name="sites" value={site.id}>{site.name}</label>
        {/if}
    {/each}
    <button type="button" onclick={()=>goto('.')}>Back</button>
    <button type="submit">Save</button>
</form>