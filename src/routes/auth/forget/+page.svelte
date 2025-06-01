<h1>Forget Password</h1>

<p>Please enter your email to receive reset password link</p>

<form method="POST" use:enhance={() => {
    return async({result}) => {
        if (result.type === 'failure') {
          modal.notify('Fail', result.data.error);
        } else if (result.type === 'success') {
          modal.notify('Success', 'Please check your email for a password reset link');
        }
    };
}}>
    <label for="email">Enter your email</label>
    <input type="email" name="email" required/>
    <button type="submit">Submit</button>
</form>