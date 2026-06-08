import type { Metadata } from 'next'
import Link              from 'next/link'
import { SECTOR_CONTENT, SECTOR_LANDING_IDS } from '@/config/sectorContent'

export const metadata: Metadata = {
  title: 'MyMarketing por sector — Peluquerías, Estética, Dentistas y más',
  description:
    'MyMarketing tiene una solución específica para cada profesional de la salud y la belleza. Descubre cómo automatizamos el marketing de tu sector.',
  alternates: { canonical: 'https://mymarketing.es/para' },
  openGraph: {
    title: 'MyMarketing por sector — Agenda y SEO automático para tu negocio',
    description: 'Elige tu sector y descubre cómo MyMarketing automatiza las citas, las reseñas y el posicionamiento en Google para profesionales como tú.',
    url: 'https://mymarketing.es/para',
    type: 'website',
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://mymarketing.es/para#webpage',
      url: 'https://mymarketing.es/para',
      name: 'MyMarketing por sector — Para cada tipo de negocio',
      description: 'Landings de MyMarketing por sector: peluquería, estética, fisioterapia, dentista, psicología.',
      isPartOf: { '@id': 'https://mymarketing.es/#website' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mymarketing.es' },
        { '@type': 'ListItem', position: 2, name: 'Para cada sector', item: 'https://mymarketing.es/para' },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Sectores disponibles en MyMarketing',
      itemListElement: SECTOR_LANDING_IDS.map((id, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://mymarketing.es/para/${id}`,
        name: `MyMarketing para ${SECTOR_CONTENT[id].label}`,
      })),
    },
  ],
}

export default function ParaIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="text-sm text-neutral-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
            <span aria-hidden="true">›</span>
            <span>Para cada sector</span>
          </nav>

          <header className="mb-12 text-center">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark mb-4">
              Hecho para tu sector
            </h1>
            <p className="text-neutral-600 text-lg max-w-xl mx-auto">
              MyMarketing se adapta a las necesidades de cada profesional.
              Elige tu sector y descubre cómo te ayudamos.
            </p>
          </header>

          {/* Grid de sectores */}
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {SECTOR_LANDING_IDS.map(id => {
              const s = SECTOR_CONTENT[id]
              return (
                <Link
                  key={id}
                  href={`/para/${id}`}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-neutral-100
                             bg-white hover:border-brand-blue hover:shadow-md transition-all"
                >
                  <span className="text-3xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <h2 className="font-heading font-bold text-dark text-base group-hover:text-brand-blue transition-colors mb-1">
                      Para {s.label}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                      {s.subheadline}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-neutral-500 text-sm mb-4">
              ¿No encuentras tu sector?{' '}
              <a href="mailto:hola@mymarketing.es" className="text-brand-blue hover:underline">
                Escríbenos
              </a>{' '}
              y lo analizamos juntos.
            </p>
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="inline-flex items-center justify-center px-8 h-14 rounded-xl
                         bg-brand-blue text-white text-base font-semibold
                         hover:opacity-90 transition-opacity"
            >
              Empieza gratis — 15 días sin tarjeta
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
