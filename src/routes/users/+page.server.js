import prisma from '$lib/prisma.js';

export async function load() {
    const users = await prisma.user.findMany();
    return {users};
}

export const actions = {
    delete: async ({request}) => {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const user = await prisma.user.delete({
                where: {id}
            });
            return {user};
        } catch (error) {
            return {error: error.message}
        }
    }
}