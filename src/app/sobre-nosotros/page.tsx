import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre nosotros — MyMarketing',
  description:
    'MyMarketing nació con una misión: hacer que cualquier profesional de servicios locales en España sea visible en Google y en la IA, sin necesidad de saber de tecnología ni de marketing.',
  alternates: {
    canonical: 'https://mymarketing.es/sobre-nosotros',
  },
  openGraph: {
    title: 'Sobre MyMarketing — Quiénes somos y por qué lo hacemos',
    description:
      'La historia, la misión y el equipo detrás de MyMarketing. SaaS de marketing autónomo para profesionales de servicios locales en España.',
    url: 'https://mymarketing.es/sobre-nosotros',
    type: 'website',
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://mymarketing.es/sobre-nosotros#webpage',
      url: 'https://mymarketing.es/sobre-nosotros',
      name: 'Sobre MyMarketing — Quiénes somos',
      description:
        'La historia y la misión detrás de MyMarketing, el SaaS de marketing autónomo para profesionales de servicios locales en España.',
      isPartOf: { '@id': 'https://mymarketing.es/#website' },
      about: { '@id': 'https://mymarketing.es/#organization' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mymarketing.es' },
        { '@type': 'ListItem', position: 2, name: 'Sobre nosotros', item: 'https://mymarketing.es/sobre-nosotros' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://mymarketing.es/#organization',
      name: 'MyMarketing',
      url: 'https://mymarketing.es',
      foundingDate: '2025',
      description:
        'SaaS de marketing autónomo y gestión de citas para profesionales de servicios locales en España. Cuatro agentes de inteligencia artificial que trabajan de forma autónoma para que tu negocio sea visible en Google, ChatGPT, Gemini, Claude, Perplexity y Grok.',
      areaServed: { '@type': 'Country', name: 'España' },
      knowsAbout: [
        'Marketing digital para profesionales',
        'Posicionamiento en inteligencias artificiales generativas',
        'GEO Generative Engine Optimization',
        'SEO para negocios locales',
        'Gestión de citas online',
        'Gestión de reputación online',
      ],
    },
  ],
}

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <nav aria-label="breadcrumb" className="text-sm text-neutral-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-brand-blue transition-colors">Inicio</Link>
            <span aria-hidden="true">›</span>
            <span>Sobre nosotros</span>
          </nav>

          <header className="mb-12">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark leading-tight mb-6">
              Hacemos que tu negocio aparezca donde buscan tus clientes
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              MyMarketing nació con una misión: que cualquier profesional de servicios locales en España sea visible en Google y en la IA, sin necesidad de saber de tecnología ni de marketing.
            </p>
          </header>

          <div className="space-y-10 text-sm sm:text-base text-neutral-700 leading-relaxed">

            <section>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
                Por qué existe MyMarketing
              </h2>
              <p>
                Hay millones de profesionales en España —fisioterapeutas, psicólogos, peluqueros, dentistas, veterinarios— que son excelentes en su trabajo pero invisibles en internet. No por falta de talento, sino porque el marketing digital es complejo, caro y lleva tiempo que ellos no tienen.
              </p>
              <p className="mt-3">
                Al mismo tiempo, el mundo está cambiando: cada vez más personas no buscan en Google, le preguntan directamente a una IA. Ese cambio deja atrás a quienes no se adaptan. MyMarketing existe para que ningún buen profesional se quede atrás por no saber de tecnología.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
                Nuestra misión
              </h2>
              <p>
                Hacer que cualquier profesional de servicios locales en España aparezca cuando alguien le busca, ya sea en Google, en ChatGPT, en Gemini, en Perplexity o en cualquier IA. De forma automática, sin complicaciones y a un precio justo.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
                Cómo lo hacemos
              </h2>
              <p>
                Con cuatro agentes de inteligencia artificial especializados que trabajan de forma autónoma: analizan el mercado, gestionan las reseñas, crean contenido y te mandan un resumen cada semana. Todo el contenido pasa por tu aprobación antes de publicarse, cumpliendo con el EU AI Act.
              </p>
              <p className="mt-3">
                El resultado: más visibilidad, más citas, menos tiempo dedicado al marketing.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
                Nuestros valores
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Simplicidad radical', body: 'Si un profesional que no sabe de tecnología no puede usarlo en cinco minutos, lo rediseñamos.' },
                  { title: 'Transparencia total', body: 'La IA trabaja para ti, no en tu nombre. Nada se publica sin tu aprobación explícita.' },
                  { title: 'Resultados antes que métricas', body: 'No medimos clics. Medimos si tu agenda se llena y si apareces cuando alguien te busca.' },
                  { title: 'Precio justo', body: 'Queremos ser accesibles para el autónomo de un local, no solo para grandes clínicas o cadenas.' },
                ].map(({ title, body }) => (
                  <div key={title} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <p className="font-semibold text-dark text-sm mb-1">{title}</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
                Tecnología y cumplimiento
              </h2>
              <p>
                MyMarketing se construye sobre modelos de lenguaje de gran escala (LLMs) alojados en infraestructura europea. Cumplimos con el RGPD, la LOPDGDD y el EU AI Act. Cada negocio tiene sus datos completamente aislados de los demás. Firmamos un Acuerdo de Encargado de Tratamiento (DPA) con todos nuestros clientes.
              </p>
            </section>

          </div>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="https://app.mymarketing.es/onboarding"
              className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-brand-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Prueba MyMarketing gratis
            </Link>
            <Link
              href="/por-que-mymarketing"
              className="inline-flex items-center justify-center h-12 px-6 rounded-2xl border border-neutral-200 text-dark font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              Por qué funciona →
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}
