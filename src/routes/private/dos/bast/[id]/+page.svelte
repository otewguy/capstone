<script>
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

<h1 style="text-align: center">Berita Acara Serah Terima</h1>
<hr/>
<h3>This report is for: </h3>
<ul>
    <li>Customer : {data._do.customer.name}</li>
    <li>DO Number: {data._do.number}</li>
    <li>Project  : {data._do.project}</li>
</ul>

<hr/>


<table>
    <thead>
        <tr>
            <th>Site</th>
            <th>Officer</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Uom</th>
            <th>Receipt</th>
        </tr>
    </thead>
    <tbody>
        {#each data._do.dolines as doline}
            <tr>
                <td>{doline.site.name}</td>
                <td>{doline.site.officer.user.profile.name}</td>
                <td>{doline.item.name}</td>
                <td>{doline.qty}</td>
                <td>{doline.item.uom}</td>
                <td colspan="5">
                    <img src={getURL(doline.receipt.path)} alt={doline.receipt.name} height=100 width=100>
                </td>
            </tr>
            <!-- <tr>
                <td colspan="5">
                    <img src={getURL(doline.receipt.path)} alt={doline.receipt.name} height=500 width=500>
                </td>
            </tr> -->
        {/each}
    </tbody>
</table>
<hr/>

<p>Demikianlah berita acara ini dibuat agar dapat dipergunakan sebagaimana mestinya</p>

<table>
    <thead>
        <tr>
            <th>{data._do.customer.name}</th>
            <th>PT Persada Sokka Tama</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>Customer</td>
            <td>Ujang</td>
        </tr>
    </tbody>
</table>
