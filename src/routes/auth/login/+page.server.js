import {redirect} from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
import prisma from '$lib/prisma.server.js';

export const actions = {
    default: async({request, locals: {supabase}}) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        const {data: {user}, error} = await supabase.auth.signInWithPassword({email, password});
        if (error) {
            console.error(error);
            return fail(400, {error: error.message});
        } else {
            const profile = await prisma.profile.findUnique({
                where: {userId: user.id}
            });
            return {success: true, role: profile.role};
        }
    }
}