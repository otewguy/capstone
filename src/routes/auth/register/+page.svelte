<script>
  import { goto } from "$app/navigation";
  import { getContext } from "svelte";
  const modal = getContext('modal');
</script>

<h1>Login</h1>
<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type === 'failure') {
          modal.notify('Fail', result.data.error);
        } else if (result.type === 'success') {
          modal.notify('Success', 'A new user has been created');
        }
    };
}}>
    <label for="name">Name</label>
    <input name="name" type="text" required/>
    <label for="email">Email</label>
    <input name="email" type="email" required/>
    <label for="password">Password</label>
    <input name="password" type="password" required/>
    <button>Login</button>
</form>