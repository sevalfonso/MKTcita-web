import { SECTORS } from '@/config/sectors'

export function Sectors() {
  return (
    <section id="sectores" className="py-16 sm:py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-12">
          Usado por profesionales de:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {SECTORS.map(({ id, label, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-neutral-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 cursor-default"
            >
              <span className="text-2xl leading-none" role="img" aria-hidden="true">{icon}</span>
              <span className="text-xs font-medium text-dark text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-neutral-500 mt-8">
          Y cualquier profesional que venda su tiempo mediante citas.
        </p>
      </div>
    </section>
  )
}
