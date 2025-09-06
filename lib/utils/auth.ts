import { supabase } from '../supabase'

export interface SignUpData {
  email: string
  password: string
  metadata?: Record<string, any>
}

export interface SignInData {
  email: string
  password: string
}

export interface AuthResponse {
  user: any
  error: any
}

// Función para registrarse
export async function signUp({ email, password, metadata }: SignUpData): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  })
  return { user: data.user, error }
}

// Función para iniciar sesión
export async function signIn({ email, password }: SignInData): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { user: data.user, error }
}

// Función para cerrar sesión
export async function signOut(): Promise<{ error: any }> {
  const { error } = await supabase.auth.signOut()
  return { error }
}

// Función para restablecer contraseña
export async function resetPassword(email: string): Promise<{ error: any }> {
  const { error } = await supabase.auth.resetPasswordForEmail(email)
  return { error }
}

// Función para actualizar perfil
export async function updateProfile(updates: {
  email?: string
  password?: string
  data?: Record<string, any>
}): Promise<AuthResponse> {
  const { data, error } = await supabase.auth.updateUser(updates)
  return { user: data.user, error }
}
