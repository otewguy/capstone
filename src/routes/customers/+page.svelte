<script>
    import {enhance} from '$app/forms';
    let {data} = $props();
</script>

<h1>Customers Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.customers as customer}
            <tr>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td><button><a href={"customers/"+customer.id}>Edit</a></button></td>
                <td>
                    <form method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") {
                                location.reload();
                            } else {
                                console.log(result.error);
                            }
                        }
                    }}>
                        <input type="hidden" name="id" value={customer.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"customers/new"}>Add New Customer</a>