// Generador de variables CSS para el tema oscuro
import { colors, spacing, typography } from './index'

export const generateCSSVariables = () => {
  const cssVars: Record<string, string> = {}

  // Variables de colores
  Object.entries(colors).forEach(([category, values]) => {
    if (typeof values === 'object' && values !== null) {
      Object.entries(values).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          // Para objetos anidados como button.primary
          Object.entries(value).forEach(([subKey, subValue]) => {
            cssVars[`--color-${category}-${key}-${subKey}`] = subValue as string
          })
        } else {
          cssVars[`--color-${category}-${key}`] = value as string
        }
      })
    }
  })

  // Variables de espaciado
  Object.entries(spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value
  })

  // Variables de tipografía
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value
  })

  Object.entries(typography.fontWeight).forEach(([key, value]) => {
    cssVars[`--font-weight-${key}`] = value
  })

  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    cssVars[`--line-height-${key}`] = value
  })

  return cssVars
}

// Generar las variables CSS
export const cssVariables = generateCSSVariables()
