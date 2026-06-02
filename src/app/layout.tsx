import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/layout/CookieBanner'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: false,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'MyMarketing — El equipo de marketing que no sabías que tenías',
    template: '%s | MyMarketing',
  },
  description:
    'SaaS de marketing autónomo y gestión de citas para profesionales de servicios locales en España. Aparece en Google, ChatGPT, Gemini y cualquier IA.',
  keywords: [
    'marketing automático profesionales',
    'gestión citas online',
    'aparecer en ChatGPT',
    'posicionamiento IA local',
    'fisioterapia marketing',
    'peluquería agenda online',
    'SEO para negocios locales',
    'GEO generative engine optimization',
  ],
  themeColor: '#3B5BFC',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'MyMarketing',
    title: 'MyMarketing — El equipo de marketing que no sabías que tenías',
    description:
      'Gestiona tus citas y cuida tu reputación en Google. Aparece cuando alguien te busca en ChatGPT, Claude, Gemini o cualquier IA.',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'MyMarketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyMarketing — El equipo de marketing que no sabías que tenías',
    description: 'SaaS de marketing autónomo para profesionales de servicios locales en España.',
    images: ['/og-default.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://mymarketing.es/',
    languages: {
      'es': 'https://mymarketing.es/',
      'x-default': 'https://mymarketing.es/',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="font-body antialiased text-dark bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
