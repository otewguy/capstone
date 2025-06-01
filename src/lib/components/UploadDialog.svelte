<script>
    let {data, dialog=$bindable()} = $props();
    dialog.returnValue = 'upload successful';
</script>

this is upload
<button onclick={()=>dialog.close('upload successful')}>Close</button>
