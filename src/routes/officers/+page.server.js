import prisma from '$lib/prisma.js';

export async function load() {
    const officers = await prisma.officer.findMany();
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
            return {error: error.message}
        }
    }
}