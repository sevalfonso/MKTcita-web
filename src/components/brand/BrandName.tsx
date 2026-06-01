/**
 * Renderiza "MyMarketing" con los colores del logo:
 * - "My"        → color del texto padre (heredado, negro/blanco según contexto)
 * - "Marketing" → letras con colores Google rotativos
 * - ".es"       → color del texto padre
 *
 * Uso en titulares: <h1>El equipo de <BrandName /> para tu negocio</h1>
 *
 * Para titulares donde TODO el bloque es la marca, usar variant="standalone"
 * que aplica el color de texto explícitamente.
 */

const GOOGLE_COLORS = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#4285F4', '#34A853', '#FBBC05', '#EA4335', '#4285F4']
const MARKETING_LETTERS = ['M', 'a', 'r', 'k', 'e', 't', 'i', 'n', 'g']

interface BrandNameProps {
  /** Cuando es true muestra también ".es" */
  withTld?: boolean
  /** Clase adicional para el wrapper */
  className?: string
  /** 'light' = My/.es en negro | 'dark' = My/.es en blanco */
  variant?: 'light' | 'dark'
}

export function BrandName({ withTld = false, className, variant = 'light' }: BrandNameProps) {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#000000'
  return (
    <span className={`inline whitespace-nowrap ${className ?? ''}`} aria-label="MyMarketing">
      <span style={{ color: textColor }}>My</span>
      {MARKETING_LETTERS.map((letter, i) => (
        <span key={i} style={{ color: GOOGLE_COLORS[i] }}>{letter}</span>
      ))}
      {withTld && <span style={{ color: textColor }}>.es</span>}
    </span>
  )
}
