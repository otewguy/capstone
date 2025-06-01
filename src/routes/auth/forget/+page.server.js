import { APP_URL } from '$env/static/private';

export const actions = {
    default: async({request, locals: {supabase}}) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {  redirectTo: `{APP_URL}/private/reset`});
        if (error) fail(400, {error: error.message});
        return {success: true};
    }
}