import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Por qué MyMarketing te posiciona en ChatGPT, Gemini y cualquier IA',
  description:
    'Descubre cómo MyMarketing hace que tu negocio aparezca cuando alguien te busca en ChatGPT, Claude, Gemini, Perplexity o Grok. La guía completa del posicionamiento en IAs generativas para negocios locales.',
  openGraph: {
    title: 'Por qué MyMarketing te posiciona en ChatGPT, Gemini y cualquier IA',
    description:
      'El posicionamiento en IAs generativas es la nueva frontera del marketing local. Así es cómo funciona y cómo MyMarketing lo hace por ti.',
    type: 'article',
    images: [{ url: '/og-landing.png', width: 1200, height: 630, alt: 'MyMarketing — Posicionamiento en IAs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-landing.png'],
  },
}

export default function PorQueMyMarketingPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <header className="mb-12">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-dark leading-tight mb-6">
            Por qué MyMarketing te posiciona en ChatGPT, Gemini y cualquier IA
          </h1>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Cada vez más personas, en lugar de abrir Google, le preguntan directamente a una IA: «¿Dónde me corto el pelo en Madrid?» o «¿Qué fisioterapeuta me recomiendas cerca de aquí?». Esto cambia las reglas del marketing local. MyMarketing te prepara para este nuevo escenario desde el primer día.
          </p>
        </header>

        <div className="space-y-10 text-sm sm:text-base text-neutral-700 leading-relaxed">

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
              ¿Qué es el GEO (Generative Engine Optimization)?
            </h2>
            <p>
              El GEO es la disciplina de optimizar la presencia de un negocio para que los modelos de lenguaje (LLMs) como ChatGPT, Claude, Gemini, Perplexity o Grok lo conozcan, lo entiendan bien y lo recomienden cuando alguien hace una pregunta relacionada.
            </p>
            <p className="mt-3">
              A diferencia del SEO clásico —que optimiza para el ranking en páginas de resultados de búsqueda—, el GEO optimiza para ser mencionado como respuesta directa en una conversación con una IA. El mecanismo es diferente, pero la lógica de fondo es la misma: cuanto mejor entiende la IA tu negocio, más probable es que lo recomiende.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
              ¿Cómo aprenden las IAs sobre los negocios locales?
            </h2>
            <p>
              Los grandes modelos de lenguaje se entrenan con textos de internet y, en el caso de modelos con acceso en tiempo real (como Perplexity o la búsqueda de ChatGPT), también indexan contenido actual. Para que una IA conozca bien tu negocio necesitas:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li><strong>Contenido textual claro y específico</strong> sobre quién eres, qué haces y dónde estás.</li>
              <li><strong>Consistencia de marca</strong>: que tu nombre, especialidad y ubicación aparezcan de forma coherente en múltiples fuentes.</li>
              <li><strong>Autoridad en tu sector</strong>: artículos que responden preguntas que tus clientes hacen a las IAs.</li>
              <li><strong>Reputación positiva y actualizada</strong>: las reseñas en Google son una señal importante para los modelos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
              Lo que hacen los agentes de MyMarketing por tu negocio
            </h2>
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p className="font-semibold text-dark mb-2">🔍 El Estratega analiza tu mercado</p>
                <p>Detecta cómo te buscan tus clientes potenciales, qué preguntan a las IAs sobre tu sector y qué términos usan. Esto informa todo el contenido que se genera.</p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p className="font-semibold text-dark mb-2">✍️ El Creador de Contenido publica para las IAs</p>
                <p>Genera semanalmente artículos y posts de Google optimizados para que las IAs los indexen y los asocien con tu negocio, tu especialidad y tu zona. El formato pregunta-respuesta —que las IAs favorecen— es el estándar de todo el contenido.</p>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                <p className="font-semibold text-dark mb-2">⭐ El Gestor de Reputación cuida tus reseñas</p>
                <p>Las reseñas de Google son una señal de autoridad que los modelos de IA utilizan para valorar la fiabilidad de un negocio. Mantener una reputación alta y actualizada mejora directamente tu visibilidad en las IAs.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
              La ventaja de actuar ahora
            </h2>
            <p>
              El posicionamiento en IAs sigue el mismo patrón que el SEO hace 15 años: los negocios que empiezan antes construyen una ventaja que es muy difícil de revertir. En este momento, la mayoría de los profesionales de servicios locales en España ni siquiera saben que esto existe. Los que actúen ahora estarán meses por delante de su competencia cuando el fenómeno se masifique.
            </p>
            <p className="mt-3">
              MyMarketing hace este trabajo de forma automática, sin que tengas que entender de tecnología ni de SEO ni de GEO. Es el equipo de marketing que trabaja mientras tú atiendes a tus clientes.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-dark mb-4">
              El control siempre es tuyo
            </h2>
            <p>
              Todo el contenido que generan los agentes de IA de MyMarketing pasa por tu aprobación antes de publicarse. Recibes una notificación en el móvil, revisas el contenido y decides. Nada se publica sin tu visto bueno. Es un requisito de diseño, no una opción: cumple con el EU AI Act, la normativa europea que regula los sistemas de IA que generan contenido publicable.
            </p>
          </section>
        </div>

        {/* CTA final */}
        <div className="mt-16 p-8 rounded-3xl text-center" style={{ background: '#0D1117' }}>
          <p className="font-heading font-bold text-xl text-white mb-2">
            Empieza a aparecer en la IA antes que tu competencia
          </p>
          <p className="text-neutral-500 text-sm mb-6">
            15 días gratis. Sin tarjeta. Sin compromiso.
          </p>
          <Link
            href="https://app.mymarketing.es/onboarding"
            className="inline-flex items-center justify-center h-12 px-6 rounded-2xl bg-brand-blue text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Prueba MyMarketing gratis
          </Link>
        </div>

      </div>
    </div>
  )
}
