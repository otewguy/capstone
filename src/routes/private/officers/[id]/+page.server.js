import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

export async function load({params}) {
    const users = await prisma.user.findMany({
        where: {officer: null, profile: {not: null}},
        select: {id: true, email: true}
    });
    const sites = await prisma.site.findMany({
        where: {officer: null}
    });
    if (params.id === 'new') return {users, sites,
        officer: {id: null, title: '', user: null, sites: []}
    };
    const officer = await prisma.officer.findUnique({
        where: {id: params.id},
        include: {user: true, sites: true}
    });
    console.log(officer);
    return {
        users: [...users, officer.user], 
        sites: [...sites, ...officer.sites], 
        officer
    };
}

export const actions = {
    default: async({request}) =>  {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const title = formData.get('title');
            const userId = formData.get('userId');
            const sites = formData.getAll('sites');
            const officer = await prisma.officer.upsert({
                where: {id},
                update: {title, user: {connect: {id: userId}}, sites: {set: sites.map(site => {return {id: site}})}},
                create: {title, user: {connect: {id: userId}}, sites: {connect: sites.map(site => {return {id: site}})}}
            });
        } catch(error){
            console.log(error);
            return fail(300, {error: error.message});
        }
    }
}