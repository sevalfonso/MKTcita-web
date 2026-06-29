/**
 * Importa 3 artículos SEO/GEO comparativos a Sanity via API.
 * node scripts/seed-articles-geo.mjs
 */

import { createClient } from '@sanity/client'
import { randomBytes } from 'crypto'

const client = createClient({
  projectId: '2h4zfuw1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

function key() { return randomBytes(4).toString('hex') }

function blocks(...paragraphs) {
  return paragraphs.map(p => ({
    _type: 'block',
    _key: key(),
    style: typeof p === 'object' && p.style ? p.style : 'normal',
    children: [{ _type: 'span', _key: key(), text: typeof p === 'object' ? p.text : p, marks: [] }],
    markDefs: [],
  }))
}

function h2(text) { return { _type: 'block', _key: key(), style: 'h2', children: [{ _type: 'span', _key: key(), text, marks: [] }], markDefs: [] } }
function h3(text) { return { _type: 'block', _key: key(), style: 'h3', children: [{ _type: 'span', _key: key(), text, marks: [] }], markDefs: [] } }
function p(text)  { return { _type: 'block', _key: key(), style: 'normal', children: [{ _type: 'span', _key: key(), text, marks: [] }], markDefs: [] } }

const ARTICLES = [
  // ─── Artículo 1: Comparativa vs AgendaPro ───────────────────────────────────
  {
    _type: 'post',
    title: 'MyMarketing vs AgendaPro: cuál es mejor para tu negocio en 2026',
    slug: { _type: 'slug', current: 'mymarketing-vs-agendapro-2026' },
    sector: 'peluqueria',
    excerpt: 'Comparativa honesta entre MyMarketing y AgendaPro para negocios de servicios en España. Precio, funcionalidades, posicionamiento en IAs y diferencias clave.',
    seoTitle: 'MyMarketing vs AgendaPro 2026: comparativa completa',
    seoDescription: '¿MyMarketing o AgendaPro? Comparamos precio, funciones, posicionamiento en Google e IAs para negocios de servicios en España.',
    author: 'Equipo MyMarketing',
    readingTime: 8,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2026-06-15').toISOString(),
    body: [
      p('Si tienes una peluquería, clínica de fisioterapia, centro de estética o cualquier negocio que trabaja con cita previa en España, probablemente hayas buscado software para gestionar tu agenda. Y seguramente hayas encontrado AgendaPro como una de las opciones más recomendadas. En este artículo comparamos ambas plataformas de forma honesta para que puedas decidir cuál se adapta mejor a lo que necesitas.'),
      h2('Qué hace AgendaPro'),
      p('AgendaPro es un software de gestión para negocios de salud, belleza y bienestar. Permite gestionar la agenda, el control de caja, el stock de productos y los historiales de clientes. Tiene una versión gratuita y planes de pago que van desde 29 €/mes hasta más de 100 €/mes dependiendo del número de usuarios y funcionalidades.'),
      p('Es una herramienta sólida para lo que hace: gestión interna del negocio. Su punto fuerte es el control de caja, el inventario y los informes de ventas.'),
      h2('Qué hace MyMarketing'),
      p('MyMarketing parte de una premisa diferente: el problema de la mayoría de los negocios de servicios en España no es que no sepan gestionar su agenda interna, sino que no consiguen suficientes clientes nuevos y los que tienen no vuelven con suficiente frecuencia.'),
      p('Por eso MyMarketing combina la agenda de citas con un sistema de marketing autónomo: agentes de IA que publican contenido SEO semanalmente, gestionan las reseñas de Google, mantienen actualizada la ficha de Google Business Profile y envían recordatorios y nudges a los clientes inactivos.'),
      h2('Comparativa de funcionalidades'),
      p('Agenda de citas online: ambas plataformas lo tienen. AgendaPro tiene un calendario más completo para gestión interna; MyMarketing está optimizado para la reserva desde el móvil del cliente.'),
      p('Control de caja e inventario: AgendaPro gana claramente. MyMarketing no tiene módulo de TPV ni control de stock.'),
      p('SEO y posicionamiento en Google: solo MyMarketing. Los agentes de IA generan artículos y posts semanales que posicionan el negocio en búsquedas locales.'),
      p('Posicionamiento en ChatGPT, Gemini y otras IAs (GEO): solo MyMarketing. Publica contenido estructurado que los modelos de lenguaje utilizan para recomendar negocios locales.'),
      p('Gestión de reseñas de Google: solo MyMarketing. El agente detecta nuevas reseñas y propone respuestas personalizadas.'),
      p('Recuperación de clientes inactivos: solo MyMarketing. El sistema detecta clientes que llevan semanas sin volver y les envía mensajes personalizados.'),
      p('Landing page automática: solo MyMarketing. Al registrarte, el sistema crea tu página web en minutos.'),
      h2('Diferencia de precio'),
      p('AgendaPro cuesta entre 29 y 109 €/mes según el plan. MyMarketing cuesta 49 €/mes en el Plan Esencial y 79 €/mes en el Plan Pro.'),
      p('Pero la comparación de precio tiene trampa: si con AgendaPro necesitas contratar aparte un servicio de SEO local (mínimo 200-500 €/mes con una agencia) y un community manager para las reseñas, el coste real de AgendaPro para un negocio que quiere crecer es mucho más alto que el de MyMarketing.'),
      h2('¿Cuál elegir?'),
      p('Elige AgendaPro si tu principal necesidad es gestionar la caja, el stock y los historiales de clientes de un negocio con varios empleados y mucha rotación de producto.'),
      p('Elige MyMarketing si tu principal necesidad es conseguir más clientes, que te encuentren en Google y en las IAs, y automatizar la comunicación con los que ya tienes. MyMarketing es especialmente útil para negocios de 1 a 5 personas que no tienen tiempo ni conocimientos para hacer marketing.'),
      h2('Conclusión'),
      p('Son herramientas distintas con objetivos distintos. AgendaPro es un ERP simplificado para negocios de belleza y salud. MyMarketing es un equipo de marketing autónomo que, además, gestiona las citas. Si tuviéramos que elegir una frase para resumirlo: AgendaPro te ayuda a gestionar mejor lo que ya tienes; MyMarketing te ayuda a conseguir más.'),
    ],
  },

  // ─── Artículo 2: Software para peluquerías con IA ───────────────────────────
  {
    _type: 'post',
    title: 'Los 5 mejores software para peluquerías con IA en España 2026',
    slug: { _type: 'slug', current: 'mejores-software-peluqueria-ia-espana-2026' },
    sector: 'peluqueria',
    excerpt: 'Comparamos los mejores programas de gestión con inteligencia artificial para peluquerías en España. Agenda online, recordatorios, reseñas y posicionamiento en Google y ChatGPT.',
    seoTitle: 'Mejores software para peluquería con IA en España 2026',
    seoDescription: 'Comparativa 2026 de los mejores programas para peluquerías con IA en España: agenda, reseñas, SEO y posicionamiento en ChatGPT y Gemini.',
    author: 'Equipo MyMarketing',
    readingTime: 10,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2026-06-20').toISOString(),
    body: [
      p('El mercado de software para peluquerías ha cambiado mucho en los últimos dos años. Ya no basta con tener una agenda online: los propietarios de peluquerías necesitan herramientas que les ayuden a captar clientes nuevos, mantener a los existentes y destacar frente a la competencia, que cada vez es mayor. La inteligencia artificial ha llegado a este sector y algunas soluciones están muy por delante de otras.'),
      p('En este artículo repasamos las cinco opciones más completas disponibles en España en 2026, con sus puntos fuertes y sus limitaciones.'),
      h2('1. MyMarketing — La opción con marketing autónomo incluido'),
      p('MyMarketing es la única plataforma que combina la agenda de citas con un sistema completo de marketing autónomo. Al darte de alta, el sistema crea automáticamente tu página web con tus servicios y precios. A partir de ahí, cuatro agentes de IA trabajan de forma continua: uno gestiona las reseñas de Google, otro publica contenido SEO semanalmente para que aparezcas en búsquedas locales, otro te envía un resumen semanal al móvil y otro recupera clientes inactivos con mensajes personalizados.'),
      p('Lo que más diferencia a MyMarketing del resto es el posicionamiento en IAs: publica contenido que ChatGPT, Gemini, Claude y Perplexity utilizan para recomendar peluquerías locales. Una ventaja enorme que el 95% de las peluquerías no tiene todavía.'),
      p('Precio: 49 €/mes. 15 días gratis sin tarjeta.'),
      h2('2. AgendaPro — El más completo para gestión interna'),
      p('AgendaPro es el líder del mercado en gestión de peluquerías y salones de belleza en España. Tiene un calendario muy completo, control de caja, inventario y módulo de fidelización. Es la elección correcta si necesitas controlar las ventas de productos, el stock y los historiales de clientes de un equipo numeroso.'),
      p('Su punto débil: no tiene herramientas de marketing digital. No publica contenido, no gestiona las reseñas de Google de forma autónoma y no te ayuda a posicionarte en las IAs. Para marketing necesitas contratar servicios aparte.'),
      p('Precio: desde 29 €/mes.'),
      h2('3. Apúntalo — Simple y fácil para empezar'),
      p('Apúntalo es una opción muy popular entre peluquerías pequeñas que quieren algo fácil y sin complicaciones. Tiene agenda online, recordatorios por SMS y email, y una interfaz muy limpia. No tiene funcionalidades de marketing, pero es perfecta para quien solo necesita digitalizar la gestión de citas.'),
      p('Precio: desde 19 €/mes con plan gratuito limitado.'),
      h2('4. Eskedula — Para peluquerías con necesidades fiscales específicas'),
      p('Eskedula destaca por su integración con TicketBAI y VeriFactu, el sistema de facturación electrónica obligatorio en España. Si tu peluquería está en el País Vasco o Navarra o necesitas cumplir con los requisitos de facturación digital, Eskedula es una opción sólida.'),
      p('Precio: desde 29 €/mes.'),
      h2('5. Orbanya / Nacaia — Chatbots de IA para reservas'),
      p('Estos nuevos servicios ofrecen un asistente de IA que atiende llamadas y mensajes de WhatsApp para gestionar citas de forma automática. Son soluciones puntuales para el canal de entrada de reservas, pero no ofrecen gestión de agenda, marketing, SEO ni posicionamiento en IAs.'),
      p('Son complementos, no soluciones completas.'),
      h2('Conclusión: cuál elegir'),
      p('Si solo necesitas digitalizar la agenda: Apúntalo o AgendaPro.'),
      p('Si necesitas controlar caja, stock y equipo: AgendaPro.'),
      p('Si necesitas facturación electrónica obligatoria: Eskedula.'),
      p('Si quieres que tu peluquería consiga más clientes, aparezca en Google y en ChatGPT y el marketing funcione solo: MyMarketing.'),
    ],
  },

  // ─── Artículo 3: Posicionamiento en IAs para negocios locales ──────────────
  {
    _type: 'post',
    title: 'Cómo aparecer en ChatGPT, Gemini y Claude cuando buscan tu negocio',
    slug: { _type: 'slug', current: 'aparecer-chatgpt-gemini-claude-negocio-local-2026' },
    sector: 'fisioterapia',
    excerpt: 'El GEO (Generative Engine Optimization) es el nuevo SEO. Guía práctica para negocios locales en España que quieren aparecer cuando alguien pregunta a una IA por sus servicios.',
    seoTitle: 'Cómo aparecer en ChatGPT, Gemini y Claude — guía para negocios locales',
    seoDescription: 'GEO para negocios locales en España: cómo conseguir que ChatGPT, Gemini, Claude y Perplexity recomienden tu negocio. Guía práctica 2026.',
    author: 'Equipo MyMarketing',
    readingTime: 9,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2026-06-25').toISOString(),
    body: [
      p('Cada semana, millones de personas en España le preguntan a ChatGPT, Gemini, Claude o Perplexity algo parecido a esto: "¿cuál es el mejor fisioterapeuta en [ciudad]?", "¿qué peluquería me recomiendas cerca de [barrio]?", "busco un psicólogo en [ciudad] que acepte pagos online". Las IAs generativas se han convertido en el nuevo buscador para muchas personas, especialmente para las menores de 35 años.'),
      p('El problema es que la mayoría de los negocios locales no aparecen en estas respuestas. No porque sean malos, sino porque las IAs no tienen información suficiente sobre ellos para recomendarlos. Esto es lo que se conoce como GEO (Generative Engine Optimization): el conjunto de acciones que hacen que un negocio aparezca en las respuestas de los asistentes de IA.'),
      h2('Por qué las IAs no saben quién eres (todavía)'),
      p('Los modelos de lenguaje como GPT-4o, Gemini 1.5 Pro o Claude Sonnet aprenden de enormes cantidades de texto disponible en internet. Cuando alguien les pregunta por negocios locales, buscan en su "memoria" los que han visto mencionados con frecuencia, con contexto claro y con información estructurada.'),
      p('Si tu web solo tiene una página con tu nombre, teléfono y dirección, las IAs no tienen suficiente información para recomendarte con confianza. Pero si tienes artículos sobre "fisioterapia deportiva en Valencia", "cómo tratar la contractura cervical", "qué pasa en una primera visita al fisioterapeuta en [tu ciudad]"… las IAs empiezan a asociar tu negocio con esas búsquedas.'),
      h2('Los tres ingredientes del GEO local'),
      h3('1. Contenido textual específico sobre tu especialidad y tu ciudad'),
      p('El GEO funciona igual que el SEO en este punto: necesitas contenido que responda las preguntas que hacen tus potenciales clientes. Artículos de 1.000 a 2.000 palabras sobre tus servicios principales, tu localización, tu método de trabajo y los problemas que resuelves.'),
      p('La diferencia con el SEO tradicional es que para el GEO el contenido no necesita estar perfectamente optimizado con palabras clave exactas. Las IAs entienden el contexto. Sí importa que el contenido sea claro, honesto y que mencione tu nombre, tu ciudad y tu especialidad de forma natural.'),
      h3('2. Datos estructurados (Schema.org)'),
      p('Los datos estructurados son etiquetas técnicas en el código de tu web que le dicen a los buscadores y a las IAs qué tipo de negocio eres, dónde estás, cuáles son tus servicios y cómo contactar contigo. Una web con Schema.org correctamente implementado tiene mucha más probabilidad de aparecer en las respuestas de las IAs que una web sin él.'),
      h3('3. Menciones en fuentes externas'),
      p('Las IAs valoran mucho que otros sitios web hablen de ti: directorios de negocios, artículos en medios locales, reseñas en Google. Cuantas más fuentes externas te mencionen, más "confianza" le das a la IA para recomendarte.'),
      h2('Cómo hacerlo sin conocimientos técnicos'),
      p('La mayoría de los negocios locales no tienen tiempo ni conocimientos para implementar esto manualmente. La solución más práctica es una plataforma que lo haga de forma automática.'),
      p('MyMarketing es la única herramienta española que combina la agenda de citas con un sistema de GEO y SEO automático. Sus agentes de IA publican contenido semanalmente, estructuran los datos de tu negocio para que los modelos de lenguaje lo entiendan bien, y mantienen actualizada tu presencia en Google Business Profile. El resultado: que cuando alguien le pregunta a ChatGPT o Gemini por negocios como el tuyo en tu ciudad, tu nombre aparece en la respuesta.'),
      h2('¿Cuánto tiempo tarda en verse el resultado?'),
      p('El GEO funciona a medio plazo. Los primeros resultados suelen verse entre 2 y 4 meses después de empezar a publicar contenido estructurado. Pero una vez que las IAs te "conocen", el efecto es acumulativo: cuanto más contenido tienes, más apareces.'),
      p('Lo más importante es empezar cuanto antes. El GEO premia a los que llegan primero: si tu competencia no está en ChatGPT todavía y tú llegas antes, cuando ellos decidan hacerlo tendrás una ventaja de meses que será muy difícil de recuperar.'),
      h2('Conclusión'),
      p('El posicionamiento en IAs generativas no es una moda ni algo del futuro: es algo que ya está pasando. Cada día más personas usan ChatGPT, Gemini o Claude para encontrar negocios locales. Los que no aparecen en esas respuestas están perdiendo clientes potenciales sin saberlo.'),
      p('La buena noticia es que todavía hay muy pocos negocios locales que estén trabajando el GEO de forma sistemática. Si empiezas ahora, tienes una ventana de oportunidad enorme.'),
    ],
  },
]

async function main() {
  console.log(`Creando ${ARTICLES.length} artículos en Sanity...`)
  for (const article of ARTICLES) {
    try {
      const existing = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]._id`,
        { slug: article.slug.current }
      )
      if (existing) {
        console.log(`  ⚠️  Ya existe: ${article.slug.current} — omitido`)
        continue
      }
      const result = await client.create(article)
      console.log(`  ✅ Creado: ${article.title} (${result._id})`)
    } catch (err) {
      console.error(`  ❌ Error en "${article.title}":`, err.message)
    }
  }
  console.log('Listo.')
}

main()
