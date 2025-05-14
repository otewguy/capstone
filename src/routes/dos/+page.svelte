<script>
    import {enhance} from '$app/forms';
    import {toInputDate} from '$lib/util.js';
    let {data} = $props();
</script>

<h1>DO Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Number</th>
            <th>Customer</th>
            <th>Project</th>
            <th>Date</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.dos as _do}
            <tr>
                <td>{_do.number}</td>
                <td>{_do.customer.name}</td>
                <td>{_do.project}</td>
                <td>{toInputDate(_do.date)}</td>
                <td><button><a href={"dos/"+_do.id}>Edit</a></button></td>
                <td>
                    <form method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") {
                                location.reload();
                            }
                        }
                    }}>
                        <input type="hidden" name="id" value={_do.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"dos/new"}>Add New DO</a>