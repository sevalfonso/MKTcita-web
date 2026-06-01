import { AGENTS } from '@/config/agents'
import { BrandName } from '../brand/BrandName'

export function AIAgents() {
  return (
    <section id="agentes" className="py-16 sm:py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-4">
          Tu equipo de IA trabajando mientras tú atiendes
        </h2>
        <p className="text-center text-neutral-700 mb-12 max-w-2xl mx-auto">
          Cuatro agentes especializados que trabajan juntos para que tu negocio sea visible, tenga buena reputación y llene su agenda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {AGENTS.map(({ emoji, name, description, frequency, accentColor }) => (
            <div
              key={name}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${accentColor}18` }}
                  aria-hidden="true"
                >
                  {emoji}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-dark">{name}</h3>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{ background: `${accentColor}18`, color: accentColor }}
                  >
                    {frequency}
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-10 max-w-2xl mx-auto">
          Todo el contenido que genera la IA pasa por tu aprobación antes de publicarse en <BrandName />.{' '}
          <strong className="text-dark">Tú tienes siempre la última palabra.</strong>
        </p>
      </div>
    </section>
  )
}
