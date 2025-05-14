<script>
    import {enhance} from '$app/forms';
    let {data} = $props();
</script>

<h1>Officers Management</h1>
<br>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Account</th>
            <th colspan="2">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.officers as officer}
            <tr>
                <td>{officer.name}</td>
                <td>{officer.phone}</td>
                <td>{officer.account}</td>
                <td><button><a href={"officers/"+officer.id}>Edit</a></button></td>
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
                        <input type="hidden" name="id" value={officer.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"officers/new"}>Add New Officer</a>