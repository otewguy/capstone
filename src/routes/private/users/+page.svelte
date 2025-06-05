<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
    console.log(data.users);
</script>

<h1>Users Management</h1>
<table>
    <thead>
        <tr>
            <th>Email</th>
            <th colspan="3">Actions</th>
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
                <td>
                    {#if (user.email_confirmed_at == null)}
                        <form style="all:revert" method="POST" action="?/confirm" use:enhance={()=>{
                            return async({result}) => {
                                if (result.type === 'success') location.reload()
                                    else modal.notify('Fail', result.data.error);
                            }
                        }}>
                            <input type="hidden" name="id" value={user.id}>
                            <button class="button" type="submit">Confirm</button>
                        </form>
                    {/if}
                </td>                
            </tr>
        {/each}
    </tbody>
</table>
<a href={"/private/users/new"}><button>Add New User</button></a>