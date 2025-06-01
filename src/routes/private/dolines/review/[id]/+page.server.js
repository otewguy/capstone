import prisma from "$lib/prisma.server";
import { fail } from "@sveltejs/kit";

export async function load({params}) {
    try {
        const doline = await prisma.doline.findUnique({
            where: {id: params.id},
            include: {receipt: true}
        });
        return {doline};
    } catch (error) {
        console.error(error);
        return fail(303, {error: error.message});
    }
}

export const actions = {
    reject: async({request, params}) => {
        try {
            const formData = await request.formData();
            const feedback = formData.get('feedback');
            console.log(feedback);
            const approved = false;
            const doline = await prisma.doline.update({
                where: {id: params.id},
                data: {approved, feedback}
            });
            return {doline};
        } catch (error) {
            console.error(error);
            return fail(300, {error: error.message});
        }
    },
    approve: async({request, params}) => {
        try {
            const formData = await request.formData();
            const feedback = formData.get('feedback');
            const approved = true;
            const doline = await prisma.doline.update({
                where: {id: params.id},
                data: {approved, feedback}
            });
            return {doline};            
        } catch (error) {
            console.error(error);
            return fail(300, {error: error.message})
        }
    }
}