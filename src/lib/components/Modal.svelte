<script>
  import Blank from "./Blank.svelte";
  import NotifyDialog from "./NotifyDialog.svelte";
  import UploadDialog from "./UploadDialog.svelte";

	let {showModal = $bindable(), component, properties, result = $bindable()} = $props();
	let dialog = $state(); // HTMLDialogElement
	let Component = $state(Blank);

	$effect(() => {
		if (showModal) dialog.showModal();
		switch (component) {
			case 'notify': Component = NotifyDialog; break;
			case 'upload': Component = UploadDialog; break;
		}
	});

	function closeModal(returnValue) {
		showModal = false;
		result = returnValue;
	}

</script>

<dialog
	bind:this={dialog}
	onclose={() => closeModal(dialog.returnValue)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div><Component bind:dialog {properties}/></div>
</dialog>



<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
