import { createClient } from '@supabase/supabase-js'

// Función para obtener variables de entorno que funcione tanto en cliente como servidor
function getEnvVar(key: string): string | undefined {
  if (typeof window !== 'undefined') {
    // En el cliente
    return import.meta.env[key]
  } else {
    // En el servidor
    return process.env[key]
  }
}

const supabaseUrl = getEnvVar('SUPABASE_URL') || getEnvVar('VITE_SUPABASE_URL')
const supabaseAnonKey = getEnvVar('SUPABASE_ANON_KEY') || getEnvVar('VITE_SUPABASE_ANON_KEY')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript (puedes generar estos automáticamente con Supabase CLI)
// Los tipos de la base de datos se importan desde types/database.ts
export type { Database, Tables, Enums } from './types/database'
