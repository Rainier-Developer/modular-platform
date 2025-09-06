import { supabase } from '../supabase'
import type { Database, Tables, TablesInsert, TablesUpdate } from '../types/database'

// Función genérica para obtener datos de una tabla
export async function getTableData<T extends keyof Database['public']['Tables']>(
  table: T,
  select = '*'
) {
  const { data, error } = await supabase
    .from(table)
    .select(select)
  
  return { data, error }
}

// Función genérica para insertar datos en una tabla
export async function insertTableData<T extends keyof Database['public']['Tables']>(
  table: T,
  data: TablesInsert<T>
) {
  const { data: result, error } = await supabase
    .from(table)
    .insert(data)
    .select()
  
  return { data: result, error }
}

// Función genérica para actualizar datos en una tabla
export async function updateTableData<T extends keyof Database['public']['Tables']>(
  table: T,
  id: string,
  data: TablesUpdate<T>
) {
  const { data: result, error } = await supabase
    .from(table)
    .update(data)
    .eq('id', id)
    .select()
  
  return { data: result, error }
}

// Función genérica para eliminar datos de una tabla
export async function deleteTableData<T extends keyof Database['public']['Tables']>(
  table: T,
  id: string
) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq('id', id)
  
  return { error }
}

// Función para obtener datos por ID
export async function getTableDataById<T extends keyof Database['public']['Tables']>(
  table: T,
  id: string,
  select = '*'
) {
  const { data, error } = await supabase
    .from(table)
    .select(select)
    .eq('id', id)
    .single()
  
  return { data, error }
}
