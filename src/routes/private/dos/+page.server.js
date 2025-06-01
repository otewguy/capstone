import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
    let dos = await prisma.do.findMany({
        include: {customer: true, dolines: true}
    });
    dos = dos.map(_do => {
        const completed = _do.dolines.filter(doline => doline.approved === true).length;
        const total = _do.dolines.length;
        return {..._do, completion: completed/total}
    })
    return {dos};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const _do = await prisma.do.delete({
                where: {id}
            });
            return {_do};
        } catch (error) {
            return fail(300, {error: error.message})
        }
    }
}