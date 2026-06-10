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

const faqs = [
  {
    q: '¿Hay permanencia o contrato?',
    a: 'No. Puedes cancelar cuando quieras desde tu móvil, sin plazos de preaviso ni penalizaciones.',
  },
  {
    q: '¿Necesito tarjeta para el trial?',
    a: 'No. El trial de 15 días no requiere tarjeta de crédito. Solo te pedimos el pago si decides continuar con un plan de pago.',
  },
  {
    q: '¿Puedo cambiar de plan en cualquier momento?',
    a: 'Sí. Puedes cambiar entre planes Esencial y Pro cuando quieras. El cambio se aplica al siguiente período de facturación.',
  },
  {
    q: '¿Hay descuento por pago anual?',
    a: 'De momento solo ofrecemos facturación mensual. Escríbenos a hola@mymarketing.es si tienes una necesidad especial.',
  },
  {
    q: '¿El WhatsApp tiene coste adicional?',
    a: 'El envío de mensajes de WhatsApp consume créditos de la plataforma de mensajería (Meta). Los primeros 100 conversaciones al mes son gratuitas; a partir de ahí se cobra por conversación según las tarifas de Meta, que trasladamos sin margen. Te avisamos antes de alcanzar el límite.',
  },
  {
    q: '¿Qué pasa cuando termina el trial de 15 días?',
    a: 'Te avisamos por email 3 días antes. Si no introduces una tarjeta, el acceso se pausa automáticamente y tus datos se conservan 30 días por si decides volver.',
  },
  {
    q: '¿Cuántos agentes IA incluye cada plan?',
    a: 'El plan Esencial incluye 4 agentes activos: reservas (A1), reseñas (A2), blog SEO (A3) y recordatorios de vuelta (A6). El plan Pro desbloquea todos los agentes, incluyendo análisis profundo y canales adicionales.',
  },
  {
    q: '¿Emite facturas con IVA para autónomos y empresas?',
    a: 'Sí. Cada mes recibirás una factura en PDF con IVA al 21% válida para la deducción fiscal. Puedes descargarlas en cualquier momento desde tu panel.',
  },
  {
    q: '¿Es compatible con Google Business Profile?',
    a: 'Sí. MyMarketing se conecta a tu ficha de Google Business Profile para publicar contenido SEO, responder reseñas y mantener actualizada tu información sin que tengas que entrar en Google.',
  },
  {
    q: '¿El soporte es en español?',
    a: 'Sí, el equipo de soporte es español. Atendemos por email y chat en horario de lunes a viernes de 9:00 a 18:00.',
  },
]

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
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
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

export default function PreciosPage({
  searchParams,
}: {
  searchParams: { expired?: string }
}) {
  const trialExpired = searchParams.expired === 'true'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />
      <main className="min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Banner trial expirado — visible solo con ?expired=true */}
          {trialExpired && (
            <div className="mb-8 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
              <p className="font-semibold text-red-800 text-base mb-1">
                Tu prueba gratuita ha terminado
              </p>
              <p className="text-red-700 text-sm mb-4">
                Tus datos están guardados. Elige un plan para recuperar el acceso
                y seguir gestionando tus citas y posicionamiento online.
              </p>
              <a
                href="https://app.mymarketing.es/settings"
                className="inline-block rounded-xl bg-red-600 text-white text-sm font-semibold
                           px-5 py-2.5 hover:bg-red-700 transition-colors"
              >
                Activar mi cuenta →
              </a>
            </div>
          )}

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
                className="plausible-event-name=cta_click plausible-event-props-plan=trial block text-center py-3 px-4 rounded-xl border border-brand-blue text-brand-blue font-medium hover:bg-brand-blue hover:text-white transition-colors text-sm"
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
                className="plausible-event-name=cta_click plausible-event-props-plan=esencial block text-center py-3 px-4 rounded-xl bg-brand-blue text-white font-medium hover:bg-brand-blue/90 transition-colors text-sm"
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
                className="plausible-event-name=cta_click plausible-event-props-plan=pro block text-center py-3 px-4 rounded-xl border border-neutral-200 text-dark font-medium hover:border-brand-blue hover:text-brand-blue transition-colors text-sm"
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
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-neutral-100 rounded-2xl p-5">
                  <h3 className="font-semibold text-dark text-sm mb-2">{q}</h3>
                  <p className="text-sm text-neutral-600">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
