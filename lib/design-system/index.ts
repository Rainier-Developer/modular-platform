// Sistema de diseño centralizado - Punto de control único
import { colors } from './colors'
import { spacing } from './spacing'
import { typography } from './typography'

export { colors, spacing, typography }

// Re-exportar tipos
export type {
  ColorToken,
  BrandColors,
  BackgroundColors,
  TextColors,
  StatusColors,
} from './colors'

export type { SpacingToken } from './spacing'
export type { FontSizeToken, FontWeightToken, LineHeightToken } from './typography'

// Configuración global del tema
export const theme = {
  colors,
  spacing,
  typography,
  
  // Configuración de breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Configuración de bordes
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },

  // Configuración de transiciones
  transition: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
} as const

export type Theme = typeof theme
