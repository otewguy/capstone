<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
</script>

<title>Users Management</title>
<br>
<table>
    <thead>
        <tr>
            <th>Email</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.users as user}
            <tr>
                <td>{user.email}</td>
                <td><a href={"users/"+user.id} class="button">Edit</a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type === 'success') location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={user.id}>
                        <button class="button" type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"/private/users/new"}><button>Add New User</button></a>