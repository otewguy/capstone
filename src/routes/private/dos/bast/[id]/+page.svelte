<script>
    import { onMount } from 'svelte';

    let {data} = $props();
    let {supabase} = $derived(data);
    let html2pdf;

    function getURL(path) {
        if (path) {
            const { data } = supabase.storage.from('photos').getPublicUrl(path);
            return data.publicUrl;
        } else {
            return '';
        }
    }

    async function loadImageAsDataUrl(url) {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
        });
    }

    onMount(async()=> {
        html2pdf = (await import('html2pdf.js')).default;
    });

    async function printToPdf() {
        if (typeof window !== 'undefined' && html2pdf) {
            const page = document.getElementById('page');

            const images = page.querySelectorAll('img[src^="http"]');
                for (const img of images) {
                    try {
                        const dataUrl = await loadImageAsDataUrl(img.src);
                        img.src = dataUrl;
                    } catch (error) {
                        console.error('Failed to load image:', img.src, error);
                        img.style.display = 'none'; // Hide if can't load
                    }
                }
    
            const options = {
                filename: `BAST ${data._do.customer.name} ${data._do.number} ${data._do.project}.pdf`,
                margin: 10,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 3, useCORS: true, allowTaint: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }

            await new Promise(resolve => setTimeout(resolve, 500));
            html2pdf().set(options).from(page).save();
        }
    }   

</script>
    <button type="button" class="no-print" onclick={printToPdf}>Save as PDF</button>

<div id="page">
<h1 style="text-align: center">Berita Acara Serah Terima</h1>
<h3>This report is for: </h3>
<p>
Customer : {data._do.customer.name}<br>
DO Number: {data._do.number}<br>
Project  : {data._do.project}<br>
</p>

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
        {/each}
    </tbody>
</table>

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
            <td><br><br><br></td>
            <td><br><br><br></td>
        </tr>
        <tr>
            <td>Customer</td>
            <td>Ujang</td>
        </tr>
    </tbody>
</table>
</div>

<style>
  /* Hide the button when printing */
  @media print {
    .no-print {
      display: none !important;
    }
  }
</style>