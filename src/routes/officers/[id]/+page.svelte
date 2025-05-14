<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';

    let {data} = $props();
</script>

{#if data.officer.id}
<h1>Edit Existing Officer</h1>
{:else}
<h1>Add New Officer</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/officers");
        }
    }
}}>
    <input type="hidden" name="id" value={data.officer.id}>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" value={data.officer.name}><br>
    <label for="phone">Phone:</label><br>
    <input type="text" id="name" name="phone" value={data.officer.phone}><br>
    <label for="account">Account:</label><br>
    <input type="text" id="name" name="account" value={data.officer.account}><br>
    <button type="submit">Save</button>
</form>