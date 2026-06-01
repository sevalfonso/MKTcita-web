const STEPS = [
  {
    number: '1',
    title: 'Te registras y configuras tu negocio en 5 minutos desde el móvil',
    description:
      'Introduces el nombre de tu negocio, tus servicios y tu horario. Sin manuales, sin formación, sin paneles complicados.',
  },
  {
    number: '2',
    title: 'Tus clientes reservan solos y reciben recordatorios automáticos',
    description:
      'Tu agenda online está disponible 24 horas. Los recordatorios se envían solos para que no haya olvidos ni ausencias.',
  },
  {
    number: '3',
    title: 'Cada semana recibes en tu móvil un resumen de cómo va tu negocio',
    description:
      'Citas, reseñas, contenido publicado y qué hay que mejorar. Todo en un mensaje claro, los lunes por la mañana.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-16">
          En marcha en menos de una hora
        </h2>

        <div className="flex flex-col gap-8 sm:gap-12">
          {STEPS.map(({ number, title, description }) => (
            <div key={number} className="flex gap-6 items-start">
              <div
                className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-heading font-extrabold text-xl sm:text-3xl text-white"
                style={{ background: '#4285F4' }}
                aria-hidden="true"
              >
                {number}
              </div>
              <div className="pt-1">
                <h3 className="font-heading font-semibold text-lg sm:text-xl text-dark mb-2">{title}</h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
