import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import { SECTOR_CONTENT, SECTOR_LANDING_IDS } from '@/config/sectorContent'
import { CIUDADES }                            from '@/config/ciudades'

export const revalidate = 86400

interface Props { params: { sector: string } }

export function generateStaticParams() {
  return SECTOR_LANDING_IDS.map(sector => ({ sector }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector  = SECTOR_CONTENT[params.sector]
  if (!sector) return {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mymarketing.es'
  const title   = `Software para ${sector.label.toLowerCase()} en España — elige tu ciudad | MyMarketing`
  const desc    = `MyMarketing para ${sector.label.toLowerCase()}: agenda online, reseñas con IA y posicionamiento en Google y ChatGPT. Disponible en Madrid, Barcelona, Valencia y más ciudades.`

  return {
    title,
    description: desc,
    alternates: { canonical: `${siteUrl}/para/${params.sector}` },
    openGraph: { title, description: desc, url: `${siteUrl}/para/${params.sector}`, type: 'website' },
  }
}

export default function SectorHubPage({ params }: Props) {
  const sector  = SECTOR_CONTENT[params.sector]
  if (!sector) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mymarketing.es'

  // Schema.org — SoftwareApplication (hub, sin areaServed específica)
  const schema = {
    '@context':          'https://schema.org',
    '@type':             'SoftwareApplication',
    name:                `MyMarketing para ${sector.label}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem:     'Web, iOS, Android',
    description:         sector.subheadline,
    url:                 `${siteUrl}/para/${params.sector}`,
    areaServed:          { '@type': 'Country', name: 'España' },
    aggregateRating: {
      '@type':       'AggregateRating',
      ratingValue:   '4.9',
      reviewCount:   '127',
      bestRating:    '5',
      worstRating:   '1',
    },
    offers: {
      '@type':       'Offer',
      price:         '0',
      priceCurrency: 'EUR',
      description:   '15 días gratis, sin tarjeta de crédito',
      availability:  'https://schema.org/InStock',
    },
    featureList: [
      ...sector.features.map(f => f.title),
      'Indexable por GPTBot (OpenAI)',
      'Indexable por ClaudeBot (Anthropic)',
      'Indexable por PerplexityBot',
      'Indexable por Google-Extended (Gemini)',
      'Indexable por Applebot-Extended',
      'Indexable por Bytespider (ByteDance)',
      'Indexable por CCBot',
      'Indexable por Diffbot',
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="pt-20">

        {/* Hero */}
        <section className="px-4 py-16 sm:py-24 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue
                          bg-blue-50 rounded-full px-4 py-1.5 mb-6">
            <span>{sector.icon}</span>
            <span>Para {sector.label} · España</span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-dark leading-tight mb-6">
            Software para {sector.label.toLowerCase()} en España
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {sector.subheadline}
          </p>
        </section>

        {/* Grid de ciudades */}
        <section className="px-4 pb-16 max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark text-center mb-8">
            Elige tu ciudad
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CIUDADES.map(ciudad => (
              <Link
                key={ciudad.slug}
                href={`/sectores/${params.sector}/${ciudad.slug}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200
                           bg-white px-4 py-3 text-sm font-medium text-dark
                           hover:border-brand-blue hover:text-brand-blue hover:shadow-sm
                           transition-all min-h-[44px]"
              >
                <span>📍</span>
                <span>{ciudad.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Resumen de features */}
        <section className="px-4 py-12 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark text-center mb-8">
              Qué incluye MyMarketing para {sector.label.toLowerCase()}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {sector.features.map((f, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-2xl px-5 py-4 border border-neutral-100">
                  <span className="text-xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-dark text-sm">{f.title}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed mt-0.5">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
            Empieza hoy — 15 días gratis, sin tarjeta
          </h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Disponible para {sector.label.toLowerCase()} en toda España.
          </p>
          <Link
            href="https://app.mymarketing.es/onboarding"
            className="inline-flex items-center justify-center px-8 h-14 rounded-xl
                       bg-brand-blue text-white text-base font-semibold
                       hover:opacity-90 transition-opacity"
          >
            {sector.ctaText}
          </Link>
        </section>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="px-4 pb-8 text-center text-sm text-neutral-400">
          <Link href="/" className="hover:text-brand-blue transition-colors">MyMarketing</Link>
          {' › '}
          <span>{sector.label}</span>
        </nav>

      </div>
    </>
  )
}
