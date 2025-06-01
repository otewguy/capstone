<script>
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { getContext } from 'svelte';
    
    let {data} = $props();
    let {supabase} = $derived(data);
    const modal = getContext('modal');

    function getURL(path) {
        if (path) {
            const { data } = supabase.storage.from('photos').getPublicUrl(path);
            return data.publicUrl;
        } else {
            return '';
        }
    }
</script>

<h1>Review Receipt</h1>
<form method="POST" use:enhance={()=> {
    return async({result}) => {
        if (result.type==='failure') {
            modal.notify('Fail', result.data.error);
        } else {
            goto('..');
        }
    }
}}>
    <img src={getURL(data.doline.receipt?.path)} alt={data.doline.receipt?.name} width=500 height=500/>
    <div>
    <label for="feedback">Feedback</label>
    <textarea name="feedback"></textarea>   
    </div>
    <div>
    <button type="button" onclick={()=>goto('..')}>Back</button>
    <button formaction="?/reject">Reject</button>
    <button formaction="?/approve">Approve</button>
    </div>
</form>