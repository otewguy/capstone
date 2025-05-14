import prisma from '$lib/prisma.js';

export async function load() {
    const dos = await prisma.do.findMany({
        include: {customer: true}
    });
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
            return {error: error.message}
        }
    }
}