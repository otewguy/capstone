import prisma from '$lib/prisma.server.js';
import supabaseAdmin from '$lib/supabaseAdmin.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers();
    console.log(users);
    if (error) return fail(300, {error: error.message});
    return {users};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const {data, error}  = await supabaseAdmin.auth.admin.deleteUser(id);
            if (error) fail(400, {error: error.message});
            return {success: true};
        } catch (error) {
            return fail(300, {error: error.message});
        }
    },
    confirm: async({request}) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');   
            const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
                id, { email_confirm: true } 
            );
            if (error) fail(400, {error: error.message});
            return {success: true};
        } catch (error) {
            return fail(300, {error: error.message});
        }
    }
}