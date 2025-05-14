<script>
    import {goto} from '$app/navigation';
    import {enhance} from '$app/forms';

    let {data} = $props();
</script>

{#if data.site.id}
<h1>Edit Existing Site</h1>
{:else}
<h1>Add New Site</h1>
{/if}

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type=="success") {
            goto("/sites");
        }
    }
}}>
    <input type="hidden" name="id" value={data.site.id}>
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" value={data.site.name}><br>
    <label for="officer">Officer:</label><br>
    <select name="officer">
        {#each data.officers as officer}
            {#if officer.id === data.site.officer?.id}
                <option value={officer.id} selected>{officer.name}</option>
            {:else}
                <option value={officer.id}>{officer.name}</option>
            {/if}
        {/each}
    </select>
    <br>
    <button type="submit">Save</button>
</form>