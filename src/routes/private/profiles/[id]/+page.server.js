import prisma from '$lib/prisma.server.js';
import {Role} from '@prisma/client';

export async function load({params}) {
    const users = await prisma.user.findMany({
        where: {profile: null},
        select: {id: true, email: true}
    });
    const roles = Object.values(Role);
    if (params.id === 'new') return {users, roles, 
        profile: {id: null, name:'', phone: '', account: '', userId: null, role: null}
    };
    const profile = await prisma.profile.findUnique({
        where: {id: params.id},
        include: {user: {select: {id: true, email: true}}}
    });
    return {users: [...users, profile.user], roles, profile};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            const id = data.get('id');
            const name = data.get('name');
            const phone = data.get('phone');
            const account = data.get('account');
            const userId = data.get('userId');
            const role = data.get('role');
            const profile = await prisma.profile.upsert({
                where: {id},
                update: {name, phone, account, user: {connect: {id: userId}}, role},
                create: {name, phone, account, user: {connect: {id: userId}}, role}
            });
            return {profile};
        } catch(error){
            console.log(error);
            return fail(300, {error: error.message});
        }
    }
}