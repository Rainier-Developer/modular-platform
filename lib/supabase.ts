import { createClient } from '@supabase/supabase-js'

// Usar solo variables VITE_ que funcionan en cliente y servidor
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript (puedes generar estos automáticamente con Supabase CLI)
// Los tipos de la base de datos se importan desde types/database.ts
export type { Database, Tables, Enums } from './types/database'
