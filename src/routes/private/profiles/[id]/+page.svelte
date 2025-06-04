<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';

    let {data} = $props();
    const modal = getContext('modal');
</script>

{#if data.profile.id}
<h1>Edit Existing Profile</h1>
{:else}
<h1>Add New Profile</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") goto(".")
            else modal.notify('Fail', result.data.error);
    }
}}>
    <input type="hidden" name="id" value={data.profile.id}>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value={data.profile.name} required><br>
    <label for="phone">Phone</label>
    <input type="text" id="name" name="phone" value={data.profile.phone} required><br>
    <label for="account">Account Number</label>
    <input type="text" id="name" name="account" value={data.profile.account}><br>
    <label for="userId">User</label>
    <select name="userId" required>
        <option value="">Select a user by email address (optional)</option>
        {#each data.users as user}
            {#if user.id === data.profile.userId}
                <option value={user.id} selected>{user.email}</option>
            {:else}
                <option value={user.id}>{user.email}</option>
            {/if}
        {/each}
    </select>
    <label for="role">Role</label>
    <select name="role" required>
        <option value="">Select a role</option>
        {#each data.roles as role}
            {#if role === data.profile.role}
                <option value={role} selected>{role}</option>
            {:else}
                <option value={role}>{role}</option>
            {/if}
        {/each}
    </select>
    <button type="button" onclick={()=>goto('.')}>Back</button>
    <button type="submit">Save</button>
</form>