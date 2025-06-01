<script>
  import { goto } from "$app/navigation";

</script>
<h1>Reset Password</h1>

<p>Please enter the new password</p>

<form method="POST" use:enhance={()=>{
    return async({result}) => {
        if (result.type == "success") {
            modal.notify('Success', 'Password has been changed');
            goto('/auth/login'); 
        }   else {
            modal.notify('Fail', result.data.error);
        }
    }
}}>
    <label for="password">New Password</label>
    <input type="password" name="password" required/>
    <button type="submit">Submit</button>
</form>