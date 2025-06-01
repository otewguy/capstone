import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_SERVICE_KEY } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_SERVICE_KEY);
export default supabaseAdmin;