import prisma from '$lib/prisma.js';

export async function load({params}) {
    if (params.id === 'new') return {officer: {
        id: null, name:'', 
    }};
    const officer = await prisma.officer.findUnique({
        where: {
            id: params.id
        }
    });
    return {officer};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const phone = data.get('phone');
            const account = data.get('account');
            const officer = await prisma.officer.upsert({
                where: {id},
                update: {name, phone, account},
                create: {name, phone, account}
            });
        } catch(error){
            console.log(error);
            return {
                error: error.message
            };
        }
    }
}