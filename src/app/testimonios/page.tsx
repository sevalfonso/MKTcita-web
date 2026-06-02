import type { Metadata } from 'next'
import Link from 'next/link'
import { TESTIMONIALS } from '@/config/testimonials'

export const metadata: Metadata = {
  title: 'Testimonios — Clientes de MyMarketing',
  description:
    'Lo que dicen fisioterapeutas, peluqueros, psicólogos, dentistas y otros profesionales que usan MyMarketing para aparecer en Google y en la IA.',
  alternates: {
    canonical: 'https://mymarketing.es/testimonios',
  },
  openGraph: {
    title: 'Testimonios de clientes — MyMarketing',
    description:
      'Profesionales de servicios locales en España que ya aparecen en Google y en la IA gracias a MyMarketing.',
    url: 'https://mymarketing.es/testimonios',
    type: 'website',
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://mymarketing.es/testimonios#webpage',
      url: 'https://mymarketing.es/testimonios',
      name: 'Testimonios de clientes — MyMarketing',
      description:
        'Opiniones de profesionales de servicios locales en España que usan MyMarketing.',
      isPartOf: { '@id': 'https://mymarketing.es/#website' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mymarketing.es' },
        { '@type': 'ListItem', position: 2, name: 'Testimonios', item: 'https://mymarketing.es/testimonios' },
      ],
    },
    ...TESTIMONIALS.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name, jobTitle: t.role },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: t.quote,
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: 'MyMarketing',
        '@id': 'https://mymarketing.es/#software',
      },
    })),
  ],
}

export default function TestimoniosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <nav aria-label="breadcrumb" className="text-sm text-neutral-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
            <span aria-hidden="true">›</span>
            <span>Testimonios</span>
          </nav>

          <header className="mb-12 text-center">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark mb-4">
              Lo que dicen nuestros clientes
            </h1>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              Profesionales reales que ya aparecen en Google y en la IA mientras atienden a sus clientes.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100"
              >
                <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="#FBBC05" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-neutral-700 leading-relaxed mb-6 text-sm sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold"
                    style={{ background: t.avatarColor }}
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role} · {t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl text-center" style={{ background: '#0D1117' }}>
            <p className="font-heading font-bold text-xl text-white mb-2">
              Únete a ellos. Empieza hoy gratis.
            </p>
            <p className="text-neutral-500 text-sm mb-6">
              15 días de prueba. Sin tarjeta. Sin compromiso.
            </p>
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-brand-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Prueba MyMarketing gratis
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
