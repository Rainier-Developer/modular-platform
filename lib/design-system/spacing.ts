// Sistema de espaciado centralizado
export const spacing = {
  // Espaciado base (4px = 1 unidad)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px

  // Espaciado específico
  section: '4rem',      // Espaciado entre secciones
  container: '1.5rem',  // Padding del contenedor
  card: '1.5rem',       // Padding de las cards
  button: '0.75rem 1.5rem', // Padding de botones
} as const

export type SpacingToken = keyof typeof spacing
