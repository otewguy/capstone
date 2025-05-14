<script>
    import {enhance} from '$app/forms';
    let {data} = $props();
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
                <td>{site.officer?.name ?? ""}</td>
                <td><button><a href={"sites/"+site.id}>Edit</a></button></td>
                <td>
                    <form method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") {
                                location.reload();
                            }
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