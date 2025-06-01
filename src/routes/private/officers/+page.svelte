<script>
    import {enhance} from '$app/forms';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');
</script>

<h1>Officers Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Sites</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.officers as officer}
            <tr>
                <td>{officer.title}</td>
                <td>{officer.user?.profile?.name}</td>
                <td>{officer.sites.map(site => site.name).join(', ')}</td>
                <td><a href={"officers/"+officer.id}><button>Edit</button></a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={officer.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"officers/new"}><button>Add New Officer</button></a>