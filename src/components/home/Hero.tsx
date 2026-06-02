import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F7F7F7 0%, #FFFFFF 60%)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="text-xs sm:text-sm font-medium uppercase mb-6"
          style={{ color: '#4285F4', letterSpacing: '3px' }}
        >
          El equipo que no sabías que tenías
        </p>

        {/* H1 */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-dark leading-tight text-balance mb-6">
          El asistente de marketing para profesionales que viven de su tiempo
        </h1>

        {/* Subheadline */}
        <div className="flex flex-col gap-2 mb-10 text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
          <p>Gestiona tus citas y cuida tu reputación en Google.</p>
          <p>
            Aparece cuando alguien te busca en{' '}
            <span className="font-medium text-dark">ChatGPT, Claude, Gemini, Perplexity, Grok</span>{' '}
            o cualquier IA.
          </p>
          <p className="text-neutral-500 text-sm sm:text-base mt-1">
            Todo desde tu móvil, sin saber de tecnología.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="https://app.mymarketing.es/onboarding"
            className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-2xl bg-brand-blue text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-md"
          >
            Prueba gratis 15 días
          </Link>
          <Link
            href="#como-funciona"
            className="w-full sm:w-auto flex items-center justify-center h-14 px-8 rounded-2xl border-2 border-brand-blue text-brand-blue font-semibold text-base hover:bg-neutral-50 transition-colors"
          >
            Ver cómo funciona
          </Link>
        </div>

        {/* Nota sin tarjeta */}
        <p className="text-xs text-neutral-400 mt-4">Sin tarjeta de crédito · Sin compromiso</p>

        {/* App screenshot */}
        <div className="mt-16 mx-auto w-56 sm:w-64 rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
          <Image
            src="/app-screenshot.png"
            alt="App MyMarketing — pantalla de configuración del negocio"
            width={390}
            height={429}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
