import prisma from "$lib/prisma.server";

export async function load({locals: {safeGetSession}}) {
    const {session, user} = await safeGetSession();
    const profile = await prisma.profile.findUnique({
        where: {userId: user.id}
    });
    if (!profile) return fail(400, {error: 'Cannot find user'});
    if (profile.role === 'GUEST') return fail(400, {error: 'GUEST has no privilege to view this resource'});

    const where = profile.role === 'OFFICER' ? {site: {officer: {userId: user.id}}} : {};
    let dolines = await prisma.doline.findMany({
        where,
        include: {
            do: {include: {customer: true}},
            site: {include: {officer: {include: {user: {include: {profile: {select: {name:true}}}}}}}},
            item: true,
            receipt: true
        }
    });    

    dolines = dolines.map(doline => {
        let status;
        if (doline.approved === true) {
            status = 'APPROVED';
        } else if (doline.approved === false) {
            status = 'REJECTED';
        } else if (!doline.receipt) {
            status = 'PENDING RECEIPT';
        } else if (doline.receipt && doline.approved === null) {
            status = 'PENDING REVIEW';
        }
        return {...doline, status}
    });
    return {dolines};
}