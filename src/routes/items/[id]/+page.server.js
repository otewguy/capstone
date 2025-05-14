import prisma from '$lib/prisma.js';

export async function load({params}) {
    if (params.id === 'new') return {item: {
        id: null, name:'', uom: '' 
    }};
    const item = await prisma.item.findUnique({
        where: {
            id: params.id
        }
    });
    return {item};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const uom = data.get('uom');
            const item = await prisma.item.upsert({
                where: {id},
                update: {name, uom},
                create: {name, uom}
            });
            return item;
        } catch(error){
            console.log(error);
            return {
                error: error.message
            };
        }
    }
}