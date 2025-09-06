import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL environment variable')
}

// Cliente para operaciones del servidor (con service role key)
export const supabaseServer = createClient(
  supabaseUrl,
  supabaseServiceKey || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// Cliente para operaciones del cliente (con anon key)
export const supabaseClient = createClient(
  supabaseUrl,
  process.env.VITE_SUPABASE_ANON_KEY || '',
)
