import { createClient } from '@supabase/supabase-js'

// Función para obtener variables de entorno
function getEnvVar(key: string): string | undefined {
  if (typeof window !== 'undefined') {
    // En el cliente - usar VITE_ para desarrollo
    return import.meta.env[key]
  } else {
    // En el servidor - usar variables directas para producción
    return process.env[key]
  }
}

// En desarrollo: usar VITE_SUPABASE_URL
// En producción: usar SUPABASE_URL
const supabaseUrl = getEnvVar('VITE_SUPABASE_URL') || getEnvVar('SUPABASE_URL')
const supabaseAnonKey = getEnvVar('VITE_SUPABASE_ANON_KEY') || getEnvVar('SUPABASE_ANON_KEY')

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript (puedes generar estos automáticamente con Supabase CLI)
// Los tipos de la base de datos se importan desde types/database.ts
export type { Database, Tables, Enums } from './types/database'
