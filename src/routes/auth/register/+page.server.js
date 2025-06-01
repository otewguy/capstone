import { fail } from '@sveltejs/kit';

export const actions = {
    default: async({request, locals: {supabase}}) =>  {
        try {
            const formData = await request.formData();
            const id = formData.get('id');
            const name = formData.get('name');
            const email = formData.get('email');
            const pass = formData.get('password');

            const {data, error} = await supabase.auth.signUp({email, pass,
                options: {data: {name, role: "INACTIVE"}}
            });
            if (error) fail (400, {error: error.message});

            const {password, ...dataWithoutPassword} = data;
            return {data: JSON.stringify(dataWithoutPassword)};
        } catch(error){
            console.log(error);
            fail(303, {message: error.message});
        }
    }
}