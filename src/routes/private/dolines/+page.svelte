<script>
    import {toInputDate} from '$lib/util.js';

    let {data} = $props();
    let {supabase} = $derived(data);

    function getURL(path) {
        if (path) {
            const { data } = supabase.storage.from('photos').getPublicUrl(path);
            return data.publicUrl;
        } else {
            return '';
        }
    }
</script>

<h1>DO Lines Management</h1>
<table>
    <thead>
        <tr>
            <th>No</th>
            <th>DO Number</th>
            <th>Customer Name</th>
            <th>Project</th>
            <th>DO Date</th>
            <th>Site</th>
            <th>Officer</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Receipt</th>
            <th>Feedback</th>
            <th>Status</th>
            <th colspan="2">Action</th>
        </tr>
    </thead>
    <tbody>
        {#each data.dolines as doline, index}
            <tr>
                <td>{index+1}</td>
                <td>{doline.do.number}</td>
                <td>{doline.do.customer.name}</td>
                <td>{doline.do.project}</td>
                <td>{toInputDate(doline.do.date)}</td>
                <td>{doline.site.name}</td>
                <td>{doline.site.officer.user.profile.name}</td>
                <td>{doline.item.name}</td>
                <td>{doline.qty}</td>
                <td><img src={getURL(doline.receipt?.path)} alt={doline.receipt?.name}/></td>
                <td>{doline.feedback}</td>
                <td>{doline.status}</td>
                <td>
                    {#if (doline.approved === false || doline.receipt === null)}
                        <a href="/private/dolines/upload/{doline.id}"><button>Upload</button></a>
                    {/if}
                <td>
                    {#if (doline.receipt && doline.approved === null)}
                        <a href="/private/dolines/review/{doline.id}"><button>Review</button></a>
                    {/if}
                </td>
            </tr>
        {/each}
    </tbody>
</table>
