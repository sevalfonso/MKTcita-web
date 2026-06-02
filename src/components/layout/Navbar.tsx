'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from '../brand/Logo'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { href: '#como-funciona',   label: 'Cómo funciona' },
  { href: '/precios',         label: 'Precios' },
  { href: '/blog',            label: 'Blog' },
  { href: '/sobre-nosotros',  label: 'Nosotros' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" aria-label="MyMarketing — inicio">
            <Logo variant="light" size="sm" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-dark hover:text-brand-blue transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="hidden md:inline-flex items-center justify-center px-5 h-11 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity min-w-[44px]"
            >
              Empieza gratis
            </Link>

            {/* Hamburguesa */}
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-neutral-50 transition-colors"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Drawer móvil */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div
            className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-xl flex flex-col pt-20 pb-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Menú principal móvil">
              <ul className="flex flex-col gap-1 list-none">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block py-3 px-4 rounded-xl text-base font-medium text-dark hover:bg-neutral-50 transition-colors min-h-[44px] flex items-center"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto">
              <Link
                href="https://app.mymarketing.es/onboarding"
                className="flex items-center justify-center w-full h-12 rounded-xl bg-brand-blue text-white font-semibold hover:opacity-90 transition-opacity"
                onClick={() => setOpen(false)}
              >
                Empieza gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
