<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
</script>

<h1>Sites Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Officer</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.sites as site}
            <tr>
                <td>{site.name}</td>
                <td>{site.officer?.user?.profile?.name ?? ""}</td>
                <td><a href={"sites/"+site.id}><button>Edit</button></a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={site.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"sites/new"}>Add New Site</a>