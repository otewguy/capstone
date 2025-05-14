import prisma from '$lib/prisma.js';

export async function load({params}) {
    if (params.id === 'new') return {user: {
        id: null, name:''
    }};
    const user = await prisma.user.findUnique({
        where: {
            id: params.id
        }
    });
    return {user};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const user = await prisma.user.upsert({
                where: {id},
                update: {name},
                create: {name}
            });
            return {user};
        } catch(error){
            console.log(error);
            return {
                error: error.message
            };
        }
    }
}