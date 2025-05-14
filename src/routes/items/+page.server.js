import prisma from '$lib/prisma.js';

export async function load() {
    const items = await prisma.item.findMany();
    return {items};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const item = await prisma.item.delete({
                where: {id}
            });
            return {item};
        } catch (error) {
            return {error: error.message}
        }
    }
}