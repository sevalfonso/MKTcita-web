import Link from 'next/link'

export function FinalCTA() {
  return (
    <section
      className="py-20 sm:py-32 px-4"
      style={{ background: '#0D1117' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className="text-xs sm:text-sm font-medium uppercase mb-6"
          style={{ color: '#4285F4', letterSpacing: '4px' }}
        >
          El equipo que no sabías que tenías
        </p>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-tight text-balance mb-10">
          Tu competencia ya está apareciendo en la IA. ¿Y tú?
        </h2>

        <Link
          href="https://app.mymarketing.es/onboarding"
          className="inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-brand-blue text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
        >
          Empieza hoy. 15 días gratis, sin tarjeta, sin compromiso.
        </Link>
      </div>
    </section>
  )
}
