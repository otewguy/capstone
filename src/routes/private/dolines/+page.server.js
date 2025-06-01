import prisma from "$lib/prisma.server";

export async function load() {
    let dolines = await prisma.doline.findMany({
        include: {
            do: {include: {customer: true}},
            site: {include: {officer: {include: {user: {include: {profile: {select: {name:true}}}}}}}},
            item: true,
            receipt: true
        }
    });
    dolines = dolines.map(doline => {
        if (doline.approved === true) {
            return {...doline, status: 'APPROVED'}
        } else if (doline.approved === false) {
            return {...doline, status: 'REJECTED'}
        } else if (!doline.receipt) {
            return {...doline, status: 'PENDING RECEIPT'}
        } else if (doline.receipt && doline.approved === null) {
            return {...doline, status: 'PENDING REVIEW'}
        }
    });
    return {dolines};
}