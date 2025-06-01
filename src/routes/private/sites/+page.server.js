import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    const sites = await prisma.site.findMany({
        include: {officer: {select: {user: {select: {profile: {select: {name: true}}}}}}}
    });
    return {sites};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const site = await prisma.site.delete({where: {id}});
            return {site};
        } catch (error) {
            return fail(300, {error: error.message});
        }
    }
}