import { TESTIMONIALS } from '@/config/testimonials'

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-neutral-500 text-center mb-12 max-w-xl mx-auto text-sm sm:text-base">
          Profesionales que ya aparecen en Google y en la IA mientras atienden a sus clientes.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-100 flex flex-col"
            >
              {/* Estrellas */}
              <div className="flex gap-0.5 mb-4" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="#FBBC05" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-neutral-700 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: t.avatarColor }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.role} · {t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-neutral-400">
          <a href="/testimonios" className="text-brand-blue hover:underline">
            Ver más testimonios →
          </a>
        </p>
      </div>
    </section>
  )
}
