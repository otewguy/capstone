<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';

    let {data} = $props();
</script>

{#if data.user.id}
<h1>Edit Existing User</h1>
{:else}
<h1>Add New User</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/users");
        }
    }
}}>
    <input type="hidden" name="id" value={data.user.id}>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" value={data.user.name}><br>
    <button type="submit">Save</button>
</form>