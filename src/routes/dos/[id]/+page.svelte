<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';
    import {toInputDate, fromInputDate} from '$lib/util.js';

    let {data} = $props();
    let dolines = $state(data._do.dolines);
    
    function getUOM(itemId) {
        const item = data.items.find(item => item.id == itemId);
        return item?.uom ?? ""; 
    }


    function addOrderLine() {
        dolines = [...dolines, 
            {do: data._do ?? '',site: {id: null}, item: {id: null}, qty: '', startDate: new Date(), endDate: new Date()}
        ];
    }

    function deleteOrderLine(index) {
        dolines = dolines.filter((_, i) => i !== index);
    }

</script>

{#if data._do.id}
<h1>Edit Existing DO</h1>
{:else}
<h1>Add New DO</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/dos");
        }
    }
}}>
    <input type="hidden" name="id" value={data._do.id}>
    <label for="number">Number:</label>
    <input type="text" name="number" value={data._do.number}>
    <label for="customer">Customer:</label>
    <select name="customer">
        {#each data.customers as customer}
            {#if customer.id == data._do.customer?.id}
                <option value={customer.id} selected>{customer.name}</option>
            {:else}
                <option value={customer.id}>{customer.name}</option>
            {/if}
        {/each}
    </select>
    <label for="date">Date:</label>
    <input type="date" name="date" value={toInputDate(data._do.date)} onchange={(e)=>{data._do.date = fromInputDate(e.target.value)}}>
    <label for="project">Project:</label>
    <input type="text" name="project" value={data._do.project}>
    <br>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Site</th>
                <th>Item</th>
                <th>Qty</th>
                <th>UOM</th>
                <th>Start Date</th>
                <th>Finish Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each dolines as doline, index(index)}
                <tr>
                    <td>
                        {index+1}
                        <input type="hidden" name={`dolines[${index}].id`} value={doline.id}>
                        <input type="hidden" name={`dolines[${index}].do`} value={data._do.id}>
                    </td>
                    <td>
                        <select name={`dolines[${index}].site`} bind:value={doline.site.id}>
                            {#each data.sites as site}
                                {#if doline.site.id == site.id}
                                    <option value={site.id} selected>{site.name}</option>
                                {:else}
                                    <option value={site.id}>{site.name}</option>
                                {/if}
                            {/each}
                        </select>
                    </td>
                    <td>
                        <select name={`dolines[${index}].item`} bind:value={doline.item.id}>
                            {#each data.items as item}
                                {#if doline.item.id == item.id}
                                    <option value={item.id} selected>{item.name}</option>
                                {:else}
                                    <option value={item.id}>{item.name}</option>
                                {/if}
                            {/each}
                        </select>
                    </td>
                    <td><input type="number" name={`dolines[${index}].qty`} bind:value={doline.qty}></td>
                    <td>{getUOM(doline.item.id)}</td>
                    <td><input type="date" name={`dolines[${index}].startDate`} value={toInputDate(doline.startDate)} onchange={(e)=>doline.startDate=fromInputDate(e.target.value)}></td>
                    <td><input type="date" name={`dolines[${index}].endDate`} value={toInputDate(doline.endDate)} onchange={(e)=>doline.endDate=fromInputDate(e.target.value)}></td>
                    <td><button type="button" onclick={()=>deleteOrderLine(index)}>Delete</button></td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button type="button" onclick={addOrderLine}>Add Order Line</button>
    <button type="submit">Save</button>
</form>