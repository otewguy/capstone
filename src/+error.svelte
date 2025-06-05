<script>
  import { navigate } from '$app/navigation';
  import { onMount } from 'svelte';

  let errorMessage = 'An unexpected error occurred';
  
  onMount(() => {
    const timer = setTimeout(() => {
      navigate('/'); 
    }, 5000);
    
    return () => clearTimeout(timer);
  });
</script>

<div class="error-message">
  <h1>Error</h1>
  <p>{errorMessage}</p>
  <p>You will be redirected automatically in 5 seconds...</p>
</div>

<style>
  .error-message {
    padding: 2rem;
    color: #ff3e00;
    text-align: center;
  }
</style>