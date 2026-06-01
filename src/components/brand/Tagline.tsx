interface TaglineProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Tagline({ variant = 'light', className }: TaglineProps) {
  const color = variant === 'dark' ? '#444D5C' : '#BBBBBB'
  return (
    <p
      className={`text-xs uppercase font-light tracking-tagline ${className ?? ''}`}
      style={{ color, letterSpacing: '4px', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 300 }}
    >
      El equipo que no sabías que tenías
    </p>
  )
}
