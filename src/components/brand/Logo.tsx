import { Isotipo } from './Isotipo'

type LogoVariant = 'light' | 'dark' | 'transparent'

interface LogoProps {
  variant?: LogoVariant
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const GOOGLE_COLORS = ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#4285F4', '#34A853', '#FBBC05', '#EA4335', '#4285F4']
const MARKETING_LETTERS = ['M', 'a', 'r', 'k', 'e', 't', 'i', 'n', 'g']

const sizes = {
  sm: { isotipo: 28, textClass: 'text-lg' },
  md: { isotipo: 36, textClass: 'text-2xl' },
  lg: { isotipo: 48, textClass: 'text-3xl' },
}

export function Logo({ variant = 'light', size = 'md', className }: LogoProps) {
  // Sobre fondo blanco/claro: My y .es en negro puro. Sobre oscuro: blanco.
  const textColor = variant === 'dark' ? '#FFFFFF' : '#000000'
  const { isotipo, textClass } = sizes[size]

  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ''}`} aria-label="MyMarketing">
      <Isotipo size={isotipo} />
      <span className={`font-heading font-extrabold ${textClass} leading-none select-none`} aria-hidden="true">
        <span style={{ color: textColor }}>My</span>
        {MARKETING_LETTERS.map((letter, i) => (
          <span key={i} style={{ color: GOOGLE_COLORS[i] }}>{letter}</span>
        ))}
        <span style={{ color: textColor }}>.es</span>
      </span>
    </span>
  )
}
