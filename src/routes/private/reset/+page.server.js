import { fail } from '@sveltejs/kit';

export const actions = {
    default: async({request, locals: {supabase}}) => {
        const formData = await request.formData();
        const password = formData.get('password');
        const { data, error } = await supabase.auth.updateUser(password);
        if (error) fail(400, {error: error.message});
        return {success: true};
    }
}