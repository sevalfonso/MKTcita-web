import Link from 'next/link'
import { Logo } from '../brand/Logo'
import { Tagline } from '../brand/Tagline'
import { LEGAL } from '@/config/legal'

const LEGAL_LINKS = [
  { href: '/aviso-legal',  label: 'Aviso Legal' },
  { href: '/privacidad',   label: 'Privacidad' },
  { href: '/cookies',      label: 'Cookies' },
  { href: '/terminos',     label: 'Términos' },
  { href: '/dpa',          label: 'DPA' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-dark text-white" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo variant="dark" size="md" />
          <Tagline variant="dark" />

          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-neutral-700 hover:text-white transition-colors min-h-[44px] flex items-center"
              >
                {label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${LEGAL.EMAIL_CONTACTO}`}
            className="text-sm text-neutral-700 hover:text-white transition-colors"
          >
            {LEGAL.EMAIL_CONTACTO}
          </a>

          <p className="text-xs text-neutral-700">
            © {year} {LEGAL.NOMBRE_LEGAL}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
