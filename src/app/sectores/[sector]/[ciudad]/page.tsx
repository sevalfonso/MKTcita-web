import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import { SECTOR_CONTENT, SECTOR_LANDING_IDS } from '@/config/sectorContent'
import { CIUDAD_MAP, CIUDAD_SLUGS }            from '@/config/ciudades'
import { ComparisonTable }                     from '@/components/sector/ComparisonTable'

export const revalidate = 86400 // revalidar 1 vez al día

interface Props { params: { sector: string; ciudad: string } }

// ── Static params: 17 sectores × 12 ciudades = 204 páginas ───────────────────

export function generateStaticParams() {
  return SECTOR_LANDING_IDS.flatMap(sector =>
    CIUDAD_SLUGS.map(ciudad => ({ sector, ciudad }))
  )
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = SECTOR_CONTENT[params.sector]
  const ciudad = CIUDAD_MAP[params.ciudad]
  if (!sector || !ciudad) return {}

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mymarketing.es'
  const title   = `Software de gestión para ${sector.label.toLowerCase()} en ${ciudad.label} | MyMarketing`
  const desc    = `Agenda online 24h, reseñas respondidas con IA y posicionamiento en Google y ChatGPT para ${sector.label.toLowerCase()} en ${ciudad.label}. 15 días gratis, sin tarjeta.`

  return {
    title,
    description: desc,
    alternates: { canonical: `${siteUrl}/sectores/${params.sector}/${params.ciudad}` },
    openGraph: {
      title,
      description: desc,
      url:  `${siteUrl}/sectores/${params.sector}/${params.ciudad}`,
      type: 'website',
    },
  }
}

// ── Página ────────────────────────────────────────────────────────────────────

export default function SectorCiudadPage({ params }: Props) {
  const sector = SECTOR_CONTENT[params.sector]
  const ciudad = CIUDAD_MAP[params.ciudad]
  if (!sector || !ciudad) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mymarketing.es'

  // Schema.org — SoftwareApplication con areaServed + aggregateRating
  const appSchema = {
    '@context':          'https://schema.org',
    '@type':             'SoftwareApplication',
    name:                `MyMarketing para ${sector.label}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem:     'Web, iOS, Android',
    description:         `Software de gestión y marketing para ${sector.label.toLowerCase()} en ${ciudad.label}. Agenda online, reseñas con IA y posicionamiento en Google y ChatGPT.`,
    url:                 `${siteUrl}/sectores/${params.sector}/${params.ciudad}`,
    areaServed: {
      '@type': 'City',
      name:    ciudad.label,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name:    ciudad.provincia,
      },
    },
    aggregateRating: {
      '@type':      'AggregateRating',
      ratingValue:  '4.9',
      reviewCount:  '127',
      bestRating:   '5',
      worstRating:  '1',
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

  // Schema.org — FAQPage
  const faqSchema = sector.faqs?.length ? {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: sector.faqs.map(faq => ({
      '@type': 'Question',
      name:    faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="pt-20">

        {/* Hero */}
        <section className="px-4 py-16 sm:py-24 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue
                          bg-blue-50 rounded-full px-4 py-1.5 mb-6">
            <span>{sector.icon}</span>
            <span>{sector.label} en {ciudad.label}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-dark leading-tight mb-6">
            Software de gestión para {sector.label.toLowerCase()} en {ciudad.label}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Agenda online 24h, reseñas respondidas con IA y contenido SEO que posiciona tu negocio
            en Google y en ChatGPT cuando buscan {sector.label.toLowerCase()} en {ciudad.label}.
          </p>

          <Link
            href="https://app.mymarketing.es/onboarding"
            className="inline-flex items-center justify-center px-8 h-14 rounded-xl
                       bg-brand-blue text-white text-base font-semibold
                       hover:opacity-90 transition-opacity"
          >
            {sector.ctaText} →
          </Link>
          <p className="text-sm text-neutral-400 mt-3">Sin tarjeta de crédito · Para {sector.label.toLowerCase()} en {ciudad.label}</p>
        </section>

        {/* Pain points */}
        <section className="px-4 py-12 bg-neutral-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark text-center mb-8">
              Los problemas más comunes de {sector.label.toLowerCase()} en {ciudad.label}
            </h2>
            <div className="flex flex-col gap-3">
              {sector.painPoints.map((p, i) => (
                <div key={i}
                  className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4
                             border border-neutral-100 shadow-sm"
                >
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  <p className="text-dark text-sm sm:text-base leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-4 py-16 sm:py-20 max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark text-center mb-12">
            Qué hace MyMarketing por tu {sector.label.toLowerCase()} en {ciudad.label}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {sector.features.map((f, i) => (
              <div key={i}
                className="flex gap-4 p-6 rounded-2xl border border-neutral-100
                           bg-white hover:shadow-md transition-shadow"
              >
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{f.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tabla comparativa — HTML semántico para bots de IA */}
        <div className="bg-neutral-50">
          <ComparisonTable sectorLabel={sector.label.toLowerCase()} />
        </div>

        {/* FAQs */}
        {sector.faqs?.length > 0 && (
          <section className="px-4 py-16 sm:py-20 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark text-center mb-10">
              Preguntas frecuentes sobre MyMarketing para {sector.label.toLowerCase()} en {ciudad.label}
            </h2>
            <div className="flex flex-col gap-4">
              {sector.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-dark mb-2 text-sm sm:text-base">{faq.question}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonial */}
        {sector.testimonial && (
          <section className="px-4 py-12 bg-brand-blue/5">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-dark leading-relaxed italic mb-6">
                &ldquo;{sector.testimonial.quote}&rdquo;
              </p>
              <p className="font-semibold text-dark">{sector.testimonial.name}</p>
              <p className="text-sm text-neutral-500">{sector.testimonial.business}</p>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="px-4 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
            Empieza hoy — 15 días gratis, sin tarjeta
          </h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Únete a los profesionales de {sector.label.toLowerCase()} en {ciudad.label} que
            ya usan MyMarketing para crecer sin dedicar horas al marketing.
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
          <Link href={`/para/${params.sector}`} className="hover:text-brand-blue transition-colors">
            {sector.label}
          </Link>
          {' › '}
          <span>{ciudad.label}</span>
        </nav>

      </div>
    </>
  )
}
