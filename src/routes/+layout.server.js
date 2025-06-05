import prisma from '$lib/prisma.server.js';

export const load = async({locals: {safeGetSession}, cookies}) => {
    const {session, user} = await safeGetSession();
    const profile = await prisma.profile.findUnique({
        where: {userId: user.id}
    });
    return {session, role: profile.role, cookies: cookies.getAll()};
}
