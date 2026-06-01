import { BrandName } from '../brand/BrandName'

const ROWS = [
  {
    before: 'Recordar llamar a cada cliente para recordarle su cita',
    after:  'Los recordatorios se envían solos, sin que toques nada',
  },
  {
    before: 'Perder citas porque no puedes contestar el teléfono a todas horas',
    after:  'Tus clientes reservan a cualquier hora, tú te enteras por el móvil',
  },
  {
    before: 'No saber qué están diciendo de ti en Google',
    after:  'Sabes cada reseña en tiempo real y sabes cómo responder',
  },
  {
    before: 'Ser invisible cuando alguien busca en ChatGPT o Gemini',
    after:  'Tu negocio aparece cuando te buscan en cualquier IA',
  },
  {
    before: 'Pasar el domingo pensando en qué publicar esta semana',
    after:  'El lunes por la mañana ya tienes el resumen y el contenido listo',
  },
  {
    before: 'Pagar una agencia que no entiende tu negocio',
    after:  'Un equipo de IA que trabaja solo para ti, todos los días',
  },
]

export function BeforeAfter() {
  return (
    <section id="antes-ahora" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-12">
          Lo que cambia desde el primer día
        </h2>

        {/* Cabecera columnas */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-4">Antes</div>
          <div className="text-xs font-semibold uppercase tracking-wider px-4">Ahora con <BrandName /></div>
        </div>

        <div className="flex flex-col gap-2">
          {ROWS.map(({ before, after }, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <span className="text-neutral-400 mt-0.5 text-base leading-none flex-shrink-0" aria-hidden="true">✗</span>
                <p className="text-sm text-neutral-600 leading-relaxed">{before}</p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#34A85308] border border-[#34A85320]">
                <span className="text-brand-green mt-0.5 text-base leading-none flex-shrink-0" aria-hidden="true">✓</span>
                <p className="text-sm text-dark leading-relaxed">{after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
