<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';

    let {data} = $props();
    const modal = getContext('modal');
</script>

{#if data.user.id}
<h1>Edit Existing User</h1>
{:else}
<h1>Add New User</h1>
{/if}


<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type==="success") goto(".");
            else modal.notify('Fail', result.data.error);
    }
}}>
    <input type="hidden" name="id" value={data.user.id}>
    <label for="email">Email:</label>
    <input type="email" name="email" value={data.user.email}>
    {#if !data.user.id} 
        <label for="password">Password</label>
        <input type="password" name="password">
    {/if}
    <button type="button" onclick={()=>goto('.')}>Back</button>
    <button type="submit">Save</button>
</form>