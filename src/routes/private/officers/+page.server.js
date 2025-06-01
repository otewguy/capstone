import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    const officers = await prisma.officer.findMany({
        include: {user: {include: {profile: true}}, sites: true}
    });
    return {officers};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const officer = await prisma.officer.delete({
                where: {id}
            });
            return {officer};
        } catch (error) {
            return fail(300, {error: error.message});
        }
    }
}