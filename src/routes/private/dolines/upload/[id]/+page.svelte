<script>
    import { error } from '@sveltejs/kit';
    import {enhance} from '$app/forms';
    import { getContext, onMount } from 'svelte';
    import {goto} from '$app/navigation';

    let {data} = $props();
    let {supabase} =$derived(data);
    const modal = getContext('modal');

    function getURL(path) {
        if (path) {
            const { data } = supabase.storage.from('photos').getPublicUrl(path);
            return data.publicUrl;
        } else {
            return '';
        }
    }

    onMount(() => {
        const preview = document.getElementById('preview');
        const fileinput = document.getElementById('fileinput');
        fileinput.addEventListener('change', (event) => {
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    preview.src = event.target.result;
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        });
    });

</script>
<h1>Upload Receipt Photo</h1>

<form method="POST" enctype="multipart/form-data" use:enhance={() => {
    return async({result}) => {
        if (result.type === 'failure') {
            modal.notify('Fail', result.data.error);
        } else {
            console.log(result.data);
            goto('..');
        }
    }
}}>
    <img id="preview" src={getURL(data.doline.receipt?.path)} alt={data.doline.receipt?.name} width=500 height=500/>
    <label for="file">Please select your receipt image file</label>
    <input id="fileinput" name="file" type="file" accept="image/*" required>
    <button>Upload</button>
</form>
