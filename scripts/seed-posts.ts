import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token:     process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const SEED_POSTS = [
  {
    _type: 'post',
    title: 'Cómo conseguir más clientes para tu clínica de fisioterapia sin gastar en publicidad',
    slug: { _type: 'slug', current: 'mas-clientes-fisioterapia-sin-publicidad' },
    sector: 'fisioterapia',
    excerpt: 'La mayoría de fisioterapeutas pierde clientes no por falta de calidad, sino por falta de visibilidad. Te explicamos cómo conseguir nuevos pacientes usando herramientas que ya existen, sin invertir en publicidad.',
    seoTitle: 'Más clientes para tu clínica de fisioterapia sin gastar en publicidad',
    seoDescription: 'Guía práctica para fisioterapeutas que quieren llenar su agenda sin pagar publicidad. Reputación en Google, IA y recordatorios automáticos.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2025-03-01').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'Si tienes una clínica de fisioterapia, probablemente ya sabes que la publicidad de pago —Google Ads, redes sociales— puede ser cara y difícil de gestionar sin conocimientos especializados. La buena noticia es que la mayoría de los nuevos pacientes de una clínica local llegan por tres vías que no cuestan dinero: las recomendaciones, las búsquedas en Google y, cada vez más, las preguntas a las IAs.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: 'Por qué Google sigue siendo el primer paso' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'Cuando alguien tiene una lumbalgia y necesita un fisioterapeuta, lo primero que hace es buscar en Google "fisioterapeuta cerca de mí". Si tu ficha de Google Business Profile no está bien optimizada —con fotos actualizadas, horario correcto, descripción detallada y reseñas recientes—, simplemente no existes para esa persona.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'Las reseñas son el activo más infrautilizado' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'La mayoría de los fisioterapeutas saben que las reseñas son importantes, pero no tienen un sistema para conseguirlas. La solución es automática: enviar un mensaje al paciente 24 horas después de la cita agradeciéndole su visita y pidiéndole que comparta su experiencia en Google. La tasa de conversión supera el 30% cuando se hace bien.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'El fenómeno de las IAs: una oportunidad que pocos están aprovechando' }] },
      { _type: 'block', _key: 'b7', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's7', text: 'Desde 2024, un número creciente de personas le pregunta directamente a ChatGPT, Claude, Gemini o Perplexity "¿qué fisioterapeuta me recomiendas en [ciudad]?". Para que una IA te recomiende necesitas contenido textual claro sobre tu especialidad, tu ubicación y tu método.' }] },
      { _type: 'block', _key: 'b8', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's8', text: 'El recordatorio automático: la cita que no se olvida' }] },
      { _type: 'block', _key: 'b9', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's9', text: 'Las ausencias sin aviso son uno de los mayores problemas de una clínica de fisioterapia. Un simple recordatorio por WhatsApp o SMS 24 horas antes de la cita reduce las ausencias entre un 40% y un 60%.' }] },
      { _type: 'block', _key: 'b10', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's10', text: 'MyMarketing hace exactamente eso: un equipo de cuatro agentes de IA que trabajan de forma autónoma para que tu clínica sea visible donde tus futuros pacientes te buscan, mientras tú te centras en tratarlos. 15 días gratis, sin tarjeta de crédito.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Por qué tu peluquería no aparece en ChatGPT y cómo solucionarlo',
    slug: { _type: 'slug', current: 'peluqueria-no-aparece-chatgpt-solucion' },
    sector: 'peluqueria',
    excerpt: 'ChatGPT, Gemini y otras IAs ya responden preguntas como "¿dónde me corto el pelo en Madrid?". Si tu peluquería no aparece en esas respuestas, estás perdiendo clientes. Así se soluciona.',
    seoTitle: 'Tu peluquería no aparece en ChatGPT: cómo solucionarlo',
    seoDescription: 'Cómo hacer que tu peluquería aparezca cuando alguien le pregunta a ChatGPT, Gemini o cualquier IA. Posicionamiento GEO para peluquerías.',
    author: 'Equipo MyMarketing',
    readingTime: 6,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-08').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'Imagina esta escena: una persona llega a tu ciudad de visita y le pregunta a ChatGPT "¿dónde me puedo cortar el pelo bien en [tu ciudad]?". ChatGPT da tres recomendaciones. La tuya no está. Esa persona llama a una de las tres que aparecen. Tú no sabes que eso ha pasado. Pero está pasando cada día.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: '¿Por qué algunas peluquerías aparecen y otras no?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'Los modelos de lenguaje como ChatGPT no tienen una base de datos de negocios locales. Lo que hacen es procesar textos de internet y construir respuestas a partir de lo que encuentran. Si no hay información suficiente sobre tu peluquería en internet, la IA simplemente no te conoce.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'El papel de las reseñas en el posicionamiento en IAs' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'Las reseñas en Google no solo sirven para convencer a los clientes que ya te han encontrado. También son una señal de autoridad que los modelos de IA utilizan para evaluar la reputación de un negocio. Una peluquería con 80 reseñas con media 4.9, con respuestas recientes del dueño, transmite a la IA que es un negocio activo y valorado.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'La ventaja de actuar ahora' }] },
      { _type: 'block', _key: 'b7', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's7', text: 'En este momento, la gran mayoría de peluquerías en España no están haciendo nada para posicionarse en las IAs. Tienes una ventana de oportunidad que no durará mucho. MyMarketing tiene un agente dedicado a crear y publicar contenido optimizado para que las IAs conozcan tu peluquería. 15 días gratis para comprobarlo.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Gestión de citas para psicólogos: cómo automatizar sin perder el trato personal',
    slug: { _type: 'slug', current: 'gestion-citas-psicologos-automatizar' },
    sector: 'psicologia',
    excerpt: 'Automatizar las citas no significa perder la calidez con el paciente. Te explicamos cómo los psicólogos pueden reducir el trabajo administrativo manteniendo la relación de confianza que define su trabajo.',
    seoTitle: 'Gestión de citas para psicólogos: automatizar sin perder el trato personal',
    seoDescription: 'Cómo los psicólogos pueden automatizar la gestión de citas y recordatorios sin perder la relación de confianza con sus pacientes.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-15').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'Para un psicólogo, la relación con el paciente lo es todo. Por eso, muchos psicólogos son reacios a automatizar cualquier aspecto de su práctica, por miedo a que esa automatización transmita una frialdad que dañe esa relación. Es un miedo comprensible pero innecesario.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: '¿Qué tareas administrativas se pueden automatizar sin problema?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'Hay tareas en la gestión de una consulta de psicología que son puramente logísticas: confirmación de citas, recordatorios de próximas sesiones, avisos de cancelación, gestión de huecos libres. Todas se pueden automatizar sin que el paciente pierda ni un gramo de la experiencia de atención personalizada.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'El recordatorio: prevenir las ausencias sin llamar a cada paciente' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'Un recordatorio automático personalizado —con el nombre del paciente, el día y la hora— enviado 24 horas antes reduce las ausencias de forma significativa. El tono importa: no es una notificación fría, es un mensaje que refleja el cuidado del psicólogo.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'Visibilidad online: el paciente que te busca en Google o en la IA' }] },
      { _type: 'block', _key: 'b7', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's7', text: 'MyMarketing gestiona de forma automática la agenda, los recordatorios, las reseñas y el contenido de posicionamiento. Todo con tu aprobación y sin que tengas que invertir tiempo en ello. Pruébalo 15 días gratis.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Reputación online para dentistas: guía práctica para conseguir más reseñas en Google',
    slug: { _type: 'slug', current: 'reputacion-online-dentistas-resenas-google' },
    sector: 'dentista',
    excerpt: 'La reputación online es el primer factor que los pacientes consultan antes de elegir dentista. Esta guía te explica cómo conseguir más reseñas, cómo gestionarlas y cómo convertirlas en nuevos pacientes.',
    seoTitle: 'Reputación online para dentistas: guía para conseguir más reseñas',
    seoDescription: 'Cómo conseguir más reseñas en Google para tu clínica dental y usarlas para atraer nuevos pacientes.',
    author: 'Equipo MyMarketing',
    readingTime: 8,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2025-03-22').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'El 93% de los pacientes lee reseñas online antes de elegir un nuevo dentista. Y sin embargo, la mayoría de las clínicas dentales tienen una gestión de su reputación online completamente reactiva: responden las reseñas negativas cuando se acuerdan y no hacen nada para conseguir más positivas.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: '¿Por qué es tan difícil conseguir reseñas?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'El problema no es la calidad del servicio. La mayoría de los pacientes salen satisfechos. El problema es que nadie les pide que lo digan. La solución: enviar un mensaje al paciente unas horas después con un enlace directo al formulario de reseñas de Google.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'Las reseñas y el posicionamiento en IAs' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'Las IAs como ChatGPT o Gemini utilizan las reseñas de Google como señal de autoridad cuando responden preguntas como "¿qué dentista me recomiendas en [ciudad]?". Una clínica con muchas reseñas recientes y alta valoración tiene mucha más probabilidad de ser mencionada.' }] },
      { _type: 'block', _key: 'b6', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'MyMarketing tiene un agente dedicado a esto: el Gestor de Reputación, que trabaja todos los días para que tu clínica dental tenga la mejor imagen posible. 15 días gratis.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Cómo un veterinario puede llenar su agenda usando la IA',
    slug: { _type: 'slug', current: 'veterinario-llenar-agenda-ia' },
    sector: 'veterinario',
    excerpt: 'Los dueños de mascotas buscan veterinarios en Google y cada vez más en las IAs. Esta guía explica cómo una clínica veterinaria puede usar la IA para tener siempre la agenda llena sin gastar en publicidad.',
    seoTitle: 'Cómo un veterinario puede llenar su agenda usando la IA',
    seoDescription: 'Guía para clínicas veterinarias: cómo usar la inteligencia artificial para conseguir más clientes y llenar la agenda.',
    author: 'Equipo MyMarketing',
    readingTime: 6,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-29').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'Los dueños de mascotas son un público especialmente fiel: cuando encuentran un buen veterinario, repiten año tras año. El problema es la adquisición: conseguir que ese primer dueño de mascota te elija a ti antes de conocerte.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: '¿Cómo buscan veterinarios los dueños de mascotas?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'Las búsquedas más comunes: "veterinario cerca de mí", "veterinario urgencias [ciudad]", y cada vez más frecuentemente preguntas directas a las IAs: "¿qué veterinario me recomiendas en [barrio]?".' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'Recordatorios para revisiones y vacunas: fidelización automática' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'Un veterinario que avisa proactivamente cuando se acerca la revisión anual o la próxima vacunación tiene una tasa de retención mucho más alta. Estos recordatorios automáticos no solo fidelizan: también llenan la agenda en períodos bajos.' }] },
      { _type: 'block', _key: 'b6', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'MyMarketing pone a disposición de cualquier clínica veterinaria un equipo de cuatro agentes de IA que trabajan de forma autónoma. Todo con aprobación humana antes de publicar. 15 días gratis.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Marketing digital para coaches: aparece cuando te buscan en Google y en la IA',
    slug: { _type: 'slug', current: 'marketing-digital-coaches-google-ia' },
    sector: 'coaching',
    excerpt: 'El mercado del coaching es competitivo y los clientes potenciales buscan en Google y en las IAs. Esta guía te explica cómo posicionarte para que te encuentren cuando te necesitan.',
    seoTitle: 'Marketing digital para coaches: posicionamiento en Google y en la IA',
    seoDescription: 'Cómo los coaches pueden aparecer en Google, ChatGPT y Gemini cuando sus clientes potenciales buscan servicios de coaching.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-04-05').toISOString(),
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: 'El coaching es una de las profesiones con mayor crecimiento en España en los últimos años. Y también una de las más competidas online. La diferenciación en digital —para los que no tienen una gran red de contactos o no invierten en publicidad— es uno de los mayores retos del sector.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's2', text: 'La especialización como ventaja competitiva' }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: 'Un coach generalista tiene mucha más competencia que uno especializado. "Coach ejecutivo para directivos del sector tecnológico en Madrid" es un nicho mucho más accesible que "coach" a secas. La IA favorece a los expertos en nichos concretos.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', markDefs: [], children: [{ _type: 'span', _key: 's4', text: 'La agenda y los recordatorios en el coaching' }] },
      { _type: 'block', _key: 'b5', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's5', text: 'La mayoría de los coaches gestionan su agenda de forma manual. Cada nuevo cliente potencial que contacta y no recibe respuesta inmediata tiene muchas probabilidades de ir a otro coach. Un sistema de reserva online disponible 24 horas elimina este problema completamente.' }] },
      { _type: 'block', _key: 'b6', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's6', text: 'Un coach que trabaja solo no puede permitirse un departamento de marketing. Pero sí puede tener un equipo de agentes de IA que trabajan de forma autónoma. Eso es exactamente lo que hace MyMarketing. 15 días gratis.' }] },
    ],
  },
]

async function main() {
  console.log(`🚀 Importando ${SEED_POSTS.length} artículos a Sanity (project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID})...`)

  for (const post of SEED_POSTS) {
    try {
      const result = await client.create(post)
      console.log(`  ✅ "${post.title.substring(0, 50)}..." → ${result._id}`)
    } catch (err: any) {
      if (err.message?.includes('already exists') || err.statusCode === 409) {
        console.log(`  ⚠️  Ya existe: "${post.title.substring(0, 50)}..."`)
      } else {
        console.error(`  ❌ Error en "${post.title.substring(0, 50)}...": ${err.message}`)
      }
    }
  }

  console.log('\n✅ Seed completado. Recarga http://localhost:3001/blog para ver los artículos.')
}

main()
