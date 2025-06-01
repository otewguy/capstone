import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load({params}) {
    const officers = await prisma.officer.findMany({
        include: {user: {select: {profile: {select: {name:true}}}}}
    });
    if (params.id === 'new') return {
        site: {id: null, name:'', officer: null},
        officers
    };
    const site = await prisma.site.findUnique({
        where: {id: params.id},
        include: {officer: true}
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
            const site = officer ? 
                await prisma.site.upsert({
                    where: {id},
                    update: {name, officer: {connect: {id: officer}}},
                    create: {name, officer: {connect: {id: officer}}}
                }):
                await prisma.site.upsert({
                    where: {id},
                    update: {name},
                    create: {name}
                });
            return {site};
        } catch(error){
            return fail(300, {error: error.message});
        }
    }
}