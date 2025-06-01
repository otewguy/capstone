import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

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
            return fail(300, {error: error.message});
        }
    }
}