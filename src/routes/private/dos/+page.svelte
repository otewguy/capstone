<script>
    import {enhance} from '$app/forms';
    import {toInputDate} from '$lib/util.js';
    import { getContext } from 'svelte';
    let {data} = $props();
    const modal = getContext('modal');

    function formatPercentage(number) {
        return (number*100) + '%';
    }
</script>

<h1>DO Management</h1>
<table>
    <thead>
        <tr>
            <th>Number</th>
            <th>Customer</th>
            <th>Project</th>
            <th>Date</th>
            <th>Completion(%)</th>
            <th colspan="3">Actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.dos as _do}
            <tr>
                <td>{_do.number}</td>
                <td>{_do.customer.name}</td>
                <td>{_do.project}</td>
                <td>{toInputDate(_do.date)}</td>
                <td>{formatPercentage(_do.completion)}</td>
                <td><a href={"dos/"+_do.id}><button>Edit</button></a></td>
                <td>
                    <form style="all:revert" method="POST" action="?/delete" use:enhance={()=>{
                        return async({result}) => {
                            if (result.type == "success") location.reload()
                                else modal.notify('Fail', result.data.error);
                        }
                    }}>
                        <input type="hidden" name="id" value={_do.id}>
                        <button type="submit">Delete</button>
                    </form>
                </td>
                <td>
                    {#if (_do.completion === 1)}
                        <a href={"dos/bast/" + _do.id}><button>Print BAST</button></a>
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>
<a href={"dos/new"}><button>Add New DO</button></a>