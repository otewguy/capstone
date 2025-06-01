<script>
  import { enhance } from '$app/forms';
  import { getContext } from 'svelte';
  import { goto } from '$app/navigation';


  const modal = getContext('modal');
</script>

<h1>Login</h1>
<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type === 'failure') {
          modal.notify('Fail', result.data.error);
        } else if (result.type === 'success') {
          goto('/private');
        }
    };
}}>
    <label for="email">Email</label>
    <input name="email" type="email" required/>
    <label for="password">Password</label>
    <input name="password" type="password" required/>
    <button>Login</button>
</form>

