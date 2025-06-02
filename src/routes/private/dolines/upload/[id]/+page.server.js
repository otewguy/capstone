import { fail } from '@sveltejs/kit';
import prisma from '$lib/prisma.server.js';

export async function load({params}) {
    const doline = await prisma.doline.findUnique({
        where: {id: params.id},
        include: {receipt: true}
    });
    return {doline}
}

export const actions = {
    default: async({request, locals: {supabase}, params}) => {
        try {
            const formData = await request.formData();
            const file = await formData.get('file');
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `receipts/${fileName}`;
            const {data: {id, path}, error} = await supabase.storage.from('photos').upload(filePath, file);
            console.log('uploading success');
            if (error) throw error;
            
            const sId  = id;
            const name = file.name;
            const size = file.size;
            const type = file.type;
            const { data: { user } } = await supabase.auth.getUser();
            const profile = await prisma.profile.findUnique({
                where: {userId: user.id}
            });
            const doline = await prisma.doline.update({
                where: {id: params.id},
                data: {
                    receipt: {
                        create: {
                                sId, path, name, size, type,
                                profile: {connect: {id: profile.id}}
                        }
                    },
                    approved: null,
                    feedback: ''
                }
            });
            return {doline};
        } catch (error) {
            console.error(error);
            return fail(303, {error: error.message});
        }
    }
}