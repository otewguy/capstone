import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabase = createClient(process.env.API_URL, process.env.SERVICE_ROLE_KEY);

async function createBucket() {
    const { data, error } = await supabase
    .storage
    .createBucket('photos', {
        public: false,
        allowedMimeTypes: ['image/*'],
        fileSizeLimit: 1024
    });
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

async function createPolicy() {
    const {data, error} = await supabase.rpc('create_bucket_policy', {
        bucket_id: 'photos',
        policy: {
            Version: '2025-05-28'
        }
    });
}

try {
    const bucket = await createBucket();
    const policy = await createPolicy();
} catch (error) {
    console.error(error);
} 
