'use server'
import { createSupabaseClient } from '@/utils/client';

export async function logInterest(item, value) {
    const supabase = createSupabaseClient();
    let { data, error } = await supabase
        .from("interests")
        .upsert({ item: item, interests: value })
        .select()
    console.log(data)

    return (data)

    
}