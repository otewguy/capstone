import prisma from '$lib/prisma.server.js';

export async function load({params}) {
    if (params.id === 'new') return {customer: {
        id: null, name:'', address: '', phone: '' 
    }};
    const customer = await prisma.customer.findUnique({
        where: {
            id: params.id
        }
    });
    return {customer};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const address = data.get('address');
            const phone = data.get('phone');
            const customer = await prisma.customer.upsert({
                where: {id},
                update: {name, address, phone},
                create: {name, address, phone}
            });
            return {customer};
        } catch(error){
            console.log(error);
            return {
                error: error.message
            };
        }
    }
}