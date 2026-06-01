import Link from 'next/link'

const PLANS = [
  {
    name: 'Trial',
    price: null,
    priceLabel: '15 días gratis',
    badge: null,
    description: 'Acceso completo para que compruebes todo sin compromisos.',
    features: [
      'Sin tarjeta de crédito',
      'Acceso completo a todos los agentes IA',
      'Gestión de citas incluida',
      'Soporte por email',
    ],
    cta: 'Empieza gratis',
    highlight: false,
  },
  {
    name: 'Esencial',
    price: 49,
    priceLabel: '49€/mes',
    badge: 'Más elegido',
    description: 'Todo lo que necesita la mayoría de profesionales para crecer.',
    features: [
      'Gestión de citas ilimitada',
      '4 agentes IA activos',
      'Posicionamiento Google e IAs',
      'Resumen semanal en el móvil',
      'Soporte prioritario',
    ],
    cta: 'Empieza gratis',
    highlight: true,
  },
  {
    name: 'Pro',
    price: 79,
    priceLabel: '79€/mes',
    badge: null,
    description: 'Para negocios con mayor volumen o necesidades de marketing más intensivas.',
    features: [
      'Todo lo del plan Esencial',
      'Más contenido generado por semana',
      'Análisis más profundos',
      'Canales adicionales',
      'Soporte dedicado',
    ],
    cta: 'Empieza gratis',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="py-16 sm:py-24 px-4 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-3">
          Sin letra pequeña. Sin sorpresas.
        </h2>
        <p className="text-center text-neutral-700 mb-12">Empieza gratis, elige tu plan cuando estés listo.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PLANS.map(({ name, priceLabel, badge, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative flex flex-col rounded-3xl p-6 sm:p-8 border transition-shadow ${
                highlight
                  ? 'bg-white border-brand-blue shadow-lg shadow-brand-blue/10'
                  : 'bg-white border-neutral-100 hover:shadow-md'
              }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold bg-brand-blue text-white whitespace-nowrap">
                  {badge}
                </span>
              )}

              <p className="font-heading font-bold text-xl text-dark mb-1">{name}</p>
              <p
                className="text-2xl font-extrabold mb-3"
                style={{ color: highlight ? '#4285F4' : '#1A1A2E' }}
              >
                {priceLabel}
              </p>
              <p className="text-sm text-neutral-700 mb-6 leading-relaxed">{description}</p>

              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-dark">
                    <span className="text-brand-green mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="https://app.mymarketing.es/onboarding"
                className={`flex items-center justify-center h-12 rounded-2xl font-semibold text-sm transition-opacity hover:opacity-90 ${
                  highlight
                    ? 'bg-brand-blue text-white'
                    : 'border-2 border-brand-blue text-brand-blue hover:bg-neutral-50'
                }`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-8">
          Sin permanencia. Cancela cuando quieras.
        </p>
      </div>
    </section>
  )
}
