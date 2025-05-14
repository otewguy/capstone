<script>
    import {enhance} from '$app/forms';
    let {data} = $props();
</script>

<title>Users Management</title>
<br>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.users as user}
            <tr>
                <td>{user.name}</td>
                <td><button><a href={"users/"+user.id}>Edit</a></button></td>
                <td>
                    <form method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") {
                                location.reload();
                            }
                        }
                    }}>
                        <input type="hidden" name="id" value={user.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"users/new"}>Add New User</a>