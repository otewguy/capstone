import prisma from '$lib/prisma.js';

export async function load() {
    const customers = await prisma.customer.findMany();
    return {customers};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const customer = await prisma.customer.delete({
                where: {id}
            });
            return {customer};
        } catch (error) {
            return {error: error.message}
        }
    }
}