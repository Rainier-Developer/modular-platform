// Sistema de colores centralizado para la plataforma modular
export const colors = {
  // Colores de marca
  brand: {
    primary: '#3B82F6',      // Azul principal
    primaryHover: '#2563EB', // Azul hover
    primaryLight: '#60A5FA', // Azul claro
    secondary: '#8B5CF6',    // Púrpura secundario
    accent: '#10B981',       // Verde accent
  },

  // Colores de fondo
  background: {
    primary: '#0F172A',      // Fondo principal oscuro
    secondary: '#1E293B',    // Fondo secundario
    tertiary: '#334155',     // Fondo terciario
    elevated: '#475569',     // Fondo elevado (cards, modales)
    overlay: 'rgba(0, 0, 0, 0.8)', // Overlay para modales
  },

  // Colores de texto
  text: {
    primary: '#F8FAFC',      // Texto principal (alto contraste)
    secondary: '#CBD5E1',    // Texto secundario
    tertiary: '#94A3B8',     // Texto terciario
    muted: '#64748B',        // Texto deshabilitado
    inverse: '#0F172A',      // Texto sobre fondos claros
  },

  // Colores de contraste
  contrast: {
    high: '#FFFFFF',         // Contraste máximo
    medium: '#E2E8F0',       // Contraste medio
    low: '#94A3B8',          // Contraste bajo
    border: '#475569',       // Bordes
    divider: '#334155',      // Divisores
  },

  // Colores de estado
  status: {
    success: '#10B981',      // Verde éxito
    warning: '#F59E0B',      // Amarillo advertencia
    error: '#EF4444',        // Rojo error
    info: '#3B82F6',         // Azul información
  },

  // Colores de botones
  button: {
    primary: {
      bg: '#3B82F6',
      hover: '#2563EB',
      text: '#FFFFFF',
      border: '#3B82F6',
    },
    secondary: {
      bg: 'transparent',
      hover: '#1E293B',
      text: '#F8FAFC',
      border: '#475569',
    },
    outline: {
      bg: 'transparent',
      hover: '#3B82F6',
      text: '#3B82F6',
      border: '#3B82F6',
    },
    ghost: {
      bg: 'transparent',
      hover: '#1E293B',
      text: '#CBD5E1',
      border: 'transparent',
    },
    destructive: {
      bg: '#EF4444',
      hover: '#DC2626',
      text: '#FFFFFF',
      border: '#EF4444',
    },
  },

  // Colores de input
  input: {
    bg: '#1E293B',
    border: '#475569',
    borderFocus: '#3B82F6',
    text: '#F8FAFC',
    placeholder: '#64748B',
    error: '#EF4444',
  },

  // Colores de cards
  card: {
    bg: '#1E293B',
    border: '#334155',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    hover: '#334155',
  },

  // Colores de sombras
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
  },
} as const

// Tipos para TypeScript
export type ColorToken = keyof typeof colors
export type BrandColors = keyof typeof colors.brand
export type BackgroundColors = keyof typeof colors.background
export type TextColors = keyof typeof colors.text
export type StatusColors = keyof typeof colors.status
