import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Precios — MyMarketing | Planes desde 49€/mes',
  description:
    'Planes de MyMarketing: Trial gratis 15 días (sin tarjeta), Plan Esencial 49€/mes y Plan Pro 79€/mes. Gestión de citas + posicionamiento en Google e IAs para profesionales.',
  alternates: {
    canonical: 'https://mymarketing.es/precios',
  },
  openGraph: {
    title: 'Precios de MyMarketing — Desde 49€/mes',
    description:
      '15 días gratis sin tarjeta. Plan Esencial 49€/mes con gestión de citas, 4 agentes IA y posicionamiento en Google y ChatGPT.',
    url: 'https://mymarketing.es/precios',
    type: 'website',
  },
}

const schemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://mymarketing.es/precios#webpage',
      url: 'https://mymarketing.es/precios',
      name: 'Precios de MyMarketing — Planes desde 49€/mes',
      description:
        'Planes y precios de MyMarketing: gestión de citas y posicionamiento en Google e IAs para profesionales.',
      isPartOf: { '@id': 'https://mymarketing.es/#website' },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://mymarketing.es' },
        { '@type': 'ListItem', position: 2, name: 'Precios', item: 'https://mymarketing.es/precios' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'MyMarketing',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: [
        {
          '@type': 'Offer',
          name: 'Plan Trial',
          description: 'Acceso completo gratuito durante 15 días sin tarjeta de crédito.',
          price: '0',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: 'https://app.mymarketing.es/onboarding',
        },
        {
          '@type': 'Offer',
          name: 'Plan Esencial',
          description:
            'Gestión de citas ilimitada, 4 agentes IA activos, posicionamiento Google e IAs, resumen semanal en el móvil, soporte prioritario.',
          price: '49',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            billingDuration: 'P1M',
            billingIncrement: 1,
            unitCode: 'MON',
          },
          url: 'https://app.mymarketing.es/onboarding',
        },
        {
          '@type': 'Offer',
          name: 'Plan Pro',
          description:
            'Todo lo del plan Esencial más contenido generado por semana adicional, análisis más profundos, canales adicionales y soporte dedicado.',
          price: '79',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            billingDuration: 'P1M',
            billingIncrement: 1,
            unitCode: 'MON',
          },
          url: 'https://app.mymarketing.es/onboarding',
        },
      ],
    },
  ],
}

export default function PreciosPage() {
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
            <span>Precios</span>
          </nav>

          <header className="mb-12 text-center">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark mb-4">
              Sin letra pequeña. Sin sorpresas.
            </h1>
            <p className="text-neutral-600 text-lg">
              Empieza gratis, elige tu plan cuando estés listo.
            </p>
          </header>

          {/* Planes */}
          <div className="grid gap-6 sm:grid-cols-3 mb-12">

            {/* Trial */}
            <div className="border border-neutral-100 rounded-2xl p-6">
              <p className="text-sm font-medium text-neutral-500 mb-1">Trial</p>
              <p className="font-heading font-bold text-2xl text-dark mb-1">Gratis</p>
              <p className="text-sm text-neutral-500 mb-4">15 días de prueba</p>
              <p className="text-sm text-neutral-600 mb-6">Acceso completo para que compruebes todo sin compromisos.</p>
              <ul className="space-y-2 mb-6 text-sm text-neutral-700">
                <li>✓ Sin tarjeta de crédito</li>
                <li>✓ Acceso completo a todos los agentes IA</li>
                <li>✓ Gestión de citas incluida</li>
                <li>✓ Soporte por email</li>
              </ul>
              <Link
                href="https://app.mymarketing.es/onboarding"
                className="block text-center py-3 px-4 rounded-xl border border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-colors text-sm"
              >
                Empieza gratis
              </Link>
            </div>

            {/* Esencial */}
            <div className="border-2 border-brand-blue rounded-2xl p-6 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                Más elegido
              </span>
              <p className="text-sm font-medium text-neutral-500 mb-1">Esencial</p>
              <p className="font-heading font-bold text-2xl text-dark mb-1">
                49€<span className="text-sm font-normal text-neutral-500">/mes</span>
              </p>
              <p className="text-sm text-neutral-500 mb-4">Sin permanencia</p>
              <p className="text-sm text-neutral-600 mb-6">Todo lo que necesita la mayoría de profesionales para crecer.</p>
              <ul className="space-y-2 mb-6 text-sm text-neutral-700">
                <li>✓ Gestión de citas ilimitada</li>
                <li>✓ 4 agentes IA activos</li>
                <li>✓ Posicionamiento Google e IAs</li>
                <li>✓ Resumen semanal en el móvil</li>
                <li>✓ Soporte prioritario</li>
              </ul>
              <Link
                href="https://app.mymarketing.es/onboarding"
                className="block text-center py-3 px-4 rounded-xl bg-brand-blue text-white font-medium hover:bg-brand-blue/90 transition-colors text-sm"
              >
                Empieza gratis
              </Link>
            </div>

            {/* Pro */}
            <div className="border border-neutral-100 rounded-2xl p-6">
              <p className="text-sm font-medium text-neutral-500 mb-1">Pro</p>
              <p className="font-heading font-bold text-2xl text-dark mb-1">
                79€<span className="text-sm font-normal text-neutral-500">/mes</span>
              </p>
              <p className="text-sm text-neutral-500 mb-4">Sin permanencia</p>
              <p className="text-sm text-neutral-600 mb-6">Para negocios con mayor volumen o necesidades de marketing más intensivas.</p>
              <ul className="space-y-2 mb-6 text-sm text-neutral-700">
                <li>✓ Todo lo del plan Esencial</li>
                <li>✓ Más contenido generado por semana</li>
                <li>✓ Análisis más profundos</li>
                <li>✓ Canales adicionales</li>
                <li>✓ Soporte dedicado</li>
              </ul>
              <Link
                href="https://app.mymarketing.es/onboarding"
                className="block text-center py-3 px-4 rounded-xl border border-neutral-200 text-dark font-medium hover:border-brand-blue hover:text-brand-blue transition-colors text-sm"
              >
                Empieza gratis
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-neutral-500 mb-16">
            Sin permanencia. Cancela cuando quieras.
          </p>

          {/* FAQ de precios — HTML plano, indexable sin JS */}
          <section aria-label="Preguntas frecuentes sobre precios" className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-dark mb-8 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              <div className="border border-neutral-100 rounded-2xl p-5">
                <h3 className="font-semibold text-dark text-sm mb-2">¿Hay permanencia o contrato?</h3>
                <p className="text-sm text-neutral-600">No. Puedes cancelar cuando quieras desde tu móvil, sin plazos de preaviso ni penalizaciones.</p>
              </div>
              <div className="border border-neutral-100 rounded-2xl p-5">
                <h3 className="font-semibold text-dark text-sm mb-2">¿Necesito tarjeta para el trial?</h3>
                <p className="text-sm text-neutral-600">No. El trial de 15 días no requiere tarjeta de crédito. Solo te pedimos el pago si decides continuar con un plan de pago.</p>
              </div>
              <div className="border border-neutral-100 rounded-2xl p-5">
                <h3 className="font-semibold text-dark text-sm mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="text-sm text-neutral-600">Sí. Puedes cambiar entre planes Esencial y Pro cuando quieras. El cambio se aplica al siguiente período de facturación.</p>
              </div>
              <div className="border border-neutral-100 rounded-2xl p-5">
                <h3 className="font-semibold text-dark text-sm mb-2">¿Hay descuento por pago anual?</h3>
                <p className="text-sm text-neutral-600">De momento solo ofrecemos facturación mensual. Escríbenos a hola@mymarketing.es si tienes una necesidad especial.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
