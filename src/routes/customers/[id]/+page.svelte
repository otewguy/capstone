<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';

    let {data} = $props();
</script>

{#if data.customer.id}
<h1>Edit Existing Customer</h1>
{:else}
<h1>Add New Customer</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/customers");
        }
    }
}}>
    <input type="hidden" name="id" value={data.customer.id}>
    <label for="name">Name:</label><br>
    <input type="text" name="name" value={data.customer.name}><br>
    <label for="phone">Address:</label><br>
    <input type="text" name="address" value={data.customer.address}><br>
    <label for="phone">Phone:</label><br>
    <input type="text" name="phone" value={data.customer.phone}><br>
    <button type="submit">Save</button>
</form>