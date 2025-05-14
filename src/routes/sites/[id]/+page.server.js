import prisma from '$lib/prisma.js';

export async function load({params}) {
    const officers = await prisma.officer.findMany();
    if (params.id === 'new') return {
        site: {id: null, name:'', officer: null},
        officers
    };
    const site = await prisma.site.findUnique({
        where: {
            id: params.id,
        },
        include: {
            officer: true
        }
    });
    return {site, officers};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const officer = data.get('officer');
            const site = await prisma.site.upsert({
                where: {id},
                update: {name, officer: {connect: {id: officer}}},
                create: {name, officer: {connect: {id: officer}}}
            });
            return {site};
        } catch(error){
            return {
                error: error.message
            };
        }
    }
}