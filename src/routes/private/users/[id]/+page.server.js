import prisma from '$lib/prisma.server.js';
import supabaseAdmin from '$lib/supabaseAdmin.server.js';
import { fail } from '@sveltejs/kit';


export async function load({params}) {
    if (params.id === 'new') {
        return {user: {id: null, email: '', name: '', role: ''}};
    }
    const user = await prisma.user.findUnique({
        where: {id: params.id}
    });
    console.log(user);
    return {user};
} 

export const actions = {
    default: async({request, locals: {supabase}}) =>  {
        try {
            const formData = await request.formData();
            console.log(formData);
            const id = formData.get('id');
            const email = formData.get('email');
            const password = formData.get('password');
            const {data, error} = id ? 
                await supabaseAdmin.auth.admin.updateUserById(id, email)
            :   await supabaseAdmin.auth.admin.createUser({email, password});
            if (error) {
                console.error(error);
                fail(400, {error: error.message});
            }
            return {data: JSON.stringify(data)};
        } catch(error){
            console.log(error);
            fail(303, {message: error.message});
        }
    }
}