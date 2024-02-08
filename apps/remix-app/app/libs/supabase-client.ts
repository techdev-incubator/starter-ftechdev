import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string
const SUPABASE_ANON = process.env.SUPABASE_ANON as string

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)