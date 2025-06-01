import prisma from "$lib/prisma.server";
import { fail } from "@sveltejs/kit";

export async function load({params}) {
    try {
        const _do = await prisma.do.findUnique({
            where: {id: params.id},
            include: {customer: true, dolines: {
                include: {item: true, receipt: true, site: {
                    include: {officer: {include: {user: {include: {profile: true}}}}}}}
            }}
        });
        return {_do};
    } catch (error) {
        console.error(error);
        return fail(300, {error: error.message});
    }
}