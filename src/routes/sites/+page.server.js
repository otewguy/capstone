import prisma from '$lib/prisma.js';

export async function load() {
    const sites = await prisma.site.findMany({
        include: {officer: true}
    });
    return {sites};
}

export const actions = {
    delete: async ({request}) => {
        try {
            console.log('start deleting');
            const data = await request.formData();
            const id = data.get('id');
            const site = await prisma.site.delete({
                where: {id}
            });
            console.log('site deleted');
            return {site};
        } catch (error) {
            return {error: error.message}
        }
    }
}