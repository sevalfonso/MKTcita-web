import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import { SECTOR_CONTENT, SECTOR_LANDING_IDS } from '@/config/sectorContent'
import { client }        from '@/lib/sanity'

export const revalidate = 3600

interface Props { params: { sector: string } }

// ── Datos desde Sanity (si están disponibles) ─────────────────────────────────

async function getSanityContent(sector: string) {
  try {
    return await client.fetch(
      `*[_type == "sectorLanding" && sector.current == $sector][0]{
        headline, subheadline, pain_points, features, testimonials, cta_text,
        seo_title, seo_description, schema_name
      }`,
      { sector },
      { next: { revalidate: 3600 } }
    )
  } catch { return null }
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const fallback = SECTOR_CONTENT[params.sector]
  if (!fallback) return {}
  const sanity   = await getSanityContent(params.sector)
  const siteUrl  = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'
  const title    = sanity?.seo_title    ?? fallback.seoTitle
  const desc     = sanity?.seo_description ?? fallback.seoDesc

  return {
    title,
    description: desc,
    alternates: { canonical: `${siteUrl}/para/${params.sector}` },
    openGraph: { title, description: desc, url: `${siteUrl}/para/${params.sector}`, type: 'website' },
  }
}

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SECTOR_LANDING_IDS.map(sector => ({ sector }))
}

// ── Página ────────────────────────────────────────────────────────────────────

export default async function SectorLandingPage({ params }: Props) {
  const fallback = SECTOR_CONTENT[params.sector]
  if (!fallback) notFound()

  const sanity  = await getSanityContent(params.sector)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'

  // Merge Sanity + fallback
  const headline    = sanity?.headline    ?? fallback.headline
  const subheadline = sanity?.subheadline ?? fallback.subheadline
  const painPoints  = sanity?.pain_points ?? fallback.painPoints
  const features    = sanity?.features    ?? fallback.features
  const testimonial = sanity?.testimonials?.[0] ?? fallback.testimonial
  const ctaText     = sanity?.cta_text    ?? fallback.ctaText
  const schemaName  = sanity?.schema_name ?? `MyMarketing para ${fallback.label}`

  // Schema.org
  const schema = {
    '@context':          'https://schema.org',
    '@type':             'SoftwareApplication',
    name:                schemaName,
    applicationCategory: 'BusinessApplication',
    operatingSystem:     'Web, iOS, Android',
    description:         subheadline,
    url:                 `${siteUrl}/para/${params.sector}`,
    offers: {
      '@type':        'Offer',
      price:          '0',
      priceCurrency:  'EUR',
      description:    '15 días gratis, sin tarjeta de crédito',
      availability:   'https://schema.org/InStock',
    },
    featureList: features.map((f: { title: string }) => f.title),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-20">

        {/* Hero */}
        <section className="px-4 py-16 sm:py-24 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue
                          bg-blue-50 rounded-full px-4 py-1.5 mb-6">
            <span>{fallback.icon}</span>
            <span>Para {fallback.label}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-dark leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          <Link
            href="https://app.mymarketing.es/onboarding"
            className="inline-flex items-center justify-center px-8 h-14 rounded-xl
                       bg-brand-blue text-white text-base font-semibold
                       hover:opacity-90 transition-opacity"
          >
            {ctaText} →
          </Link>
          <p className="text-sm text-neutral-400 mt-3">Sin tarjeta de crédito</p>
        </section>

        {/* Pain points */}
        <section className="px-4 py-12 bg-neutral-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark text-center mb-8">
              ¿Te suena alguno de estos problemas?
            </h2>
            <div className="flex flex-col gap-3">
              {(painPoints as string[]).map((p, i) => (
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
            MyMarketing lo resuelve todo
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {(features as Array<{ icon: string; title: string; description: string }>)
              .map((f, i) => (
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

        {/* Testimonial */}
        {testimonial && (
          <section className="px-4 py-12 bg-brand-blue/5">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-dark leading-relaxed italic mb-6">
                &ldquo;{(testimonial as { quote: string }).quote}&rdquo;
              </p>
              <p className="font-semibold text-dark">
                {(testimonial as { name: string }).name}
              </p>
              <p className="text-sm text-neutral-500">
                {(testimonial as { business: string }).business}
              </p>
            </div>
          </section>
        )}

        {/* CTA final */}
        <section className="px-4 py-20 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-4">
            Empieza hoy — 15 días gratis, sin tarjeta
          </h2>
          <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
            Únete a los profesionales de {fallback.label.toLowerCase()} que ya
            usan MyMarketing para crecer sin dedicar horas al marketing.
          </p>
          <Link
            href="https://app.mymarketing.es/onboarding"
            className="inline-flex items-center justify-center px-8 h-14 rounded-xl
                       bg-brand-blue text-white text-base font-semibold
                       hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </Link>
        </section>

        {/* Breadcrumb */}
        <div className="px-4 pb-8 text-center">
          <Link href="/" className="text-sm text-neutral-400 hover:text-brand-blue transition-colors">
            ← Volver a MyMarketing
          </Link>
        </div>

      </div>
    </>
  )
}
