interface IsotipoProps {
  size?: number
  className?: string
}

/**
 * Isotipo oficial de MyMarketing.
 * Geometría portada 1:1 desde 01_logo_fondo_blanco.svg.
 *
 * El viewBox cubre el grupo del isotipo: 0 0 192 100
 * (incluye el punto rojo y la cola inferior del bocadillo).
 */
export function Isotipo({ size = 48, className }: IsotipoProps) {
  // Ratio original: el grupo mide ~192 × 100 px
  const ratio = 100 / 192
  const height = Math.round(size * ratio)

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 192 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MyMarketing isotipo"
      className={className}
    >
      {/* Sombra del bocadillo azul */}
      <rect x="8" y="12" width="88" height="68" rx="22" fill="#4285F4" opacity="0.18" />
      {/* Bocadillo azul principal */}
      <rect x="0" y="0" width="88" height="68" rx="22" fill="#4285F4" />
      {/* Cola del bocadillo */}
      <polygon points="14,68 4,94 38,68" fill="#4285F4" />
      {/* Rayo (IA que actúa) */}
      <polygon points="50,10 36,38 48,38 42,58 60,28 48,28 56,10" fill="#FFFFFF" />

      {/* Panel rojo con mini gráfica */}
      <rect x="98" y="0" width="64" height="50" rx="15" fill="#EA4335" />
      {/* Cola del panel rojo */}
      <polygon points="110,50 100,68 132,50" fill="#EA4335" />
      {/* Barras Google dentro del panel */}
      <rect x="112" y="32" width="9" height="14" rx="2.5" fill="#4285F4" />
      <rect x="125" y="24" width="9" height="22" rx="2.5" fill="#34A853" />
      <rect x="138" y="14" width="9" height="32" rx="2.5" fill="#FBBC05" />
      {/* Punto rojo superior derecha */}
      <circle cx="176" cy="24" r="10" fill="#EA4335" opacity="0.18" />
      <circle cx="176" cy="24" r="6"  fill="#EA4335" opacity="0.5" />
    </svg>
  )
}
