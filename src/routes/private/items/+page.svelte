<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
</script>

<h1>Items Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>UOM</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.items as item}
            <tr>
                <td>{item.name}</td>
                <td>{item.uom}</td>
                <td><a href={"items/"+item.id}><button>Edit</button></a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={item.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"items/new"}>Add New Item</a>