/**
 * Tabla comparativa de características — HTML semántico puro.
 * Diseñada para ser parseada por bots de IA (GPTBot, ClaudeBot, PerplexityBot).
 * No uses 'use client' aquí — Server Component para máxima indexabilidad.
 */

interface ComparisonTableProps {
  sectorLabel: string
}

const FEATURES = [
  {
    feature:    'Reservas online 24h',
    manual:     '✗ Solo por teléfono o WhatsApp',
    otras:      '✓ Sí',
    mymarketing:'✓ Sí, sin app ni registro',
  },
  {
    feature:    'Recordatorios automáticos a clientes',
    manual:     '✗ Llamadas manuales',
    otras:      '△ Básicos por SMS',
    mymarketing:'✓ Email + WhatsApp personalizados',
  },
  {
    feature:    'Gestión de reseñas en Google',
    manual:     '✗ Manual o ignoradas',
    otras:      '✗ No incluido',
    mymarketing:'✓ Respuestas con IA en 1 clic',
  },
  {
    feature:    'Blog SEO generado automáticamente',
    manual:     '✗ No existe',
    otras:      '✗ No incluido',
    mymarketing:'✓ Artículos semanales en tu web',
  },
  {
    feature:    'Visibilidad en ChatGPT y Gemini',
    manual:     '✗ Sin presencia',
    otras:      '✗ Sin optimización GEO',
    mymarketing:'✓ Contenido estructurado para IAs',
  },
  {
    feature:    'Panel de métricas semanales',
    manual:     '✗ Sin datos',
    otras:      '△ Métricas básicas',
    mymarketing:'✓ Resumen lunes en el móvil',
  },
  {
    feature:    'Recuperación de clientes inactivos',
    manual:     '✗ Se pierden',
    otras:      '✗ No incluido',
    mymarketing:'✓ Agente A6 automático',
  },
  {
    feature:    'Precio mensual',
    manual:     '— (tiempo perdido)',
    otras:      'Desde 29 €/mes',
    mymarketing:'Desde 49 €/mes (todo incluido)',
  },
]

export function ComparisonTable({ sectorLabel }: ComparisonTableProps) {
  return (
    <section className="px-4 py-16 sm:py-20 max-w-5xl mx-auto">
      <h2 className="font-heading font-bold text-2xl sm:text-3xl text-dark text-center mb-3">
        MyMarketing vs otras opciones para {sectorLabel}
      </h2>
      <p className="text-neutral-500 text-center text-sm mb-10 max-w-xl mx-auto">
        Comparativa de herramientas de gestión y marketing para profesionales de {sectorLabel} en España.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-neutral-100 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">
            Comparativa de software de gestión para {sectorLabel}: MyMarketing frente a gestión manual y otras aplicaciones de citas.
          </caption>
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-100">
              <th scope="col" className="text-left px-5 py-4 font-semibold text-dark w-[34%]">
                Característica
              </th>
              <th scope="col" className="text-center px-4 py-4 font-semibold text-neutral-500 w-[22%]">
                Gestión manual
              </th>
              <th scope="col" className="text-center px-4 py-4 font-semibold text-neutral-500 w-[22%]">
                Otras apps de citas
              </th>
              <th scope="col" className="text-center px-4 py-4 font-semibold text-brand-blue w-[22%] bg-blue-50">
                MyMarketing
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-neutral-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/40'}`}
              >
                <th scope="row" className="text-left px-5 py-4 font-medium text-dark">
                  {row.feature}
                </th>
                <td className="text-center px-4 py-4 text-neutral-500">
                  {row.manual}
                </td>
                <td className="text-center px-4 py-4 text-neutral-500">
                  {row.otras}
                </td>
                <td className="text-center px-4 py-4 font-medium text-dark bg-blue-50/50">
                  {row.mymarketing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
