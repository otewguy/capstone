import { createServerClient } from "@supabase/ssr";
import { sequence } from "@sveltejs/kit/hooks";
import { redirect } from "@sveltejs/kit";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import prisma from "$lib/prisma.server";

const supabase = async({event, resolve}) => {
    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            getAll: () => event.cookies.getAll(),
            setAll: (cookiesToSet) => {
                cookiesToSet.forEach(({name, value, options}) => {
                    event.cookies.set(name, value, {...options, path: '/'})
                })
            }
        }
    });

    event.locals.safeGetSession = async() => {
        const {data: {session}} = await event.locals.supabase.auth.getSession();
        if (!session) return {session: null, user: null};
        const {data: {user}, error} = await event.locals.supabase.auth.getUser();
        if (error) return {session: null, user: null};
        const profile = await prisma.profile.findUnique({
            where: {userId: user.id}
        });
        return {session, user, role: profile?.role ?? null};
    }

    return resolve(event, {filterSerializedResponseHeaders(name) {
        return name === 'content-range' || name === 'x-supabase-api-version'
    }});
}

const authGuard = async({event, resolve}) => {
    const {session, user, role} = await event.locals.safeGetSession();
    event.locals.session = session;
    event.locals.user = user;
    event.locals.role = role;

    if (!event.locals.session) {
        redirect(303, '/auth/login');
    } 

    if (event.locals.session) {
        if (event.locals.role !== 'ADMIN' && !event.url.pathname.startsWith("/private/dolines")) {
            redirect(303,'/private');
        } else if (event.locals.role !== 'OFFICER' && event.locals.role !== 'ADMIN' && event.url.pathname.startsWith("/private/dolines")) {
            redirect(303,'/private');
        }
    }

    return resolve(event);
}

export const handle = sequence(supabase, authGuard);
