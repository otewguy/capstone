import {redirect} from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

export const actions = {
    default: async({request, locals: {supabase}}) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        const {error} = await supabase.auth.signInWithPassword({email, password});
        if (error) {
            console.error(error);
            return fail(400, {error: error.message});
        } else {
            return {success: true};
        }
    }
}