import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    const profiles = await prisma.profile.findMany({
        include: {user: true}
    });
    return {profiles};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const profile = await prisma.profile.delete({
                where: {id}
            });
            return {profile};
        } catch (error) {
            return fail(300, {error: error.message});
        }
    }
}