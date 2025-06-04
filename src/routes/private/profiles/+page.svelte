<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
</script>

<h1>Profiles Management</h1>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Account No</th>
            <th>Email</th>
            <th>Role</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.profiles as profile}
            <tr>
                <td>{profile.name}</td>
                <td>{profile.phone}</td>
                <td>{profile.account}</td>
                <td>{profile.user.email}</td>
                <td>{profile.role}</td>
                <td></td>
                <td><a href={"profiles/"+profile.id}><button>Edit</button></a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={profile.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"profiles/new"}><button>Add New Profile</button></a>