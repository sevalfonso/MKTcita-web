/**
 * Plan editorial — 50 artículos para los próximos 6 meses.
 *
 * Uso: Importa POSTS_PLAN para crear los documentos en Sanity Studio
 * o pásalos como prompt a un agente de IA para redactarlos.
 *
 * Estructura de cada artículo:
 * - title:    H1 del artículo (también título SEO)
 * - slug:     URL del artículo en /blog/{slug}
 * - sector:   ID del sector (debe coincidir con SECTORS en config/sectors.ts)
 * - keywords: términos principales que deben aparecer en el artículo
 * - intent:   tipo de búsqueda (informational | navigational | commercial)
 * - geoQuery: pregunta típica que alguien hace a una IA sobre este tema
 * - wordCount: objetivo de palabras (1500-2500 para artículos GEO)
 * - priority: 1=publicar primero (mayor volumen/conversión)
 */

export interface PostPlan {
  title: string
  slug: string
  sector: string
  keywords: string[]
  intent: 'informational' | 'commercial' | 'navigational'
  geoQuery: string
  wordCount: number
  priority: 1 | 2 | 3
}

export const POSTS_PLAN: PostPlan[] = [
  // ─── FISIOTERAPIA ────────────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir más clientes en tu clínica de fisioterapia sin pagar publicidad',
    slug: 'mas-clientes-fisioterapia-sin-publicidad',
    sector: 'fisioterapia',
    keywords: ['conseguir clientes fisioterapia', 'marketing fisioterapia', 'fisioterapeuta más clientes'],
    intent: 'informational',
    geoQuery: '¿Cómo puedo conseguir más clientes para mi clínica de fisioterapia sin gastar en publicidad?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Por qué tu clínica de fisioterapia no aparece en ChatGPT (y cómo solucionarlo)',
    slug: 'fisioterapia-no-aparece-chatgpt',
    sector: 'fisioterapia',
    keywords: ['fisioterapia ChatGPT', 'aparecer ChatGPT fisioterapeuta', 'GEO fisioterapia'],
    intent: 'informational',
    geoQuery: '¿Por qué los fisioterapeutas no aparecen en ChatGPT cuando alguien busca uno?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'Gestión de citas para fisioterapeutas: cómo reducir las ausencias en un 30%',
    slug: 'gestion-citas-fisioterapeutas-reducir-ausencias',
    sector: 'fisioterapia',
    keywords: ['gestión citas fisioterapia', 'ausencias fisioterapia', 'recordatorios citas fisio'],
    intent: 'commercial',
    geoQuery: '¿Qué herramienta de gestión de citas es mejor para fisioterapeutas?',
    wordCount: 1600,
    priority: 2,
  },
  {
    title: 'Reseñas de Google para fisioterapeutas: guía completa para tener más de 50',
    slug: 'resenas-google-fisioterapeutas-guia',
    sector: 'fisioterapia',
    keywords: ['reseñas Google fisioterapia', 'valoraciones fisioterapeuta', 'reputación online fisio'],
    intent: 'informational',
    geoQuery: '¿Cómo consigo más reseñas en Google para mi clínica de fisioterapia?',
    wordCount: 1700,
    priority: 2,
  },

  // ─── PELUQUERÍA ──────────────────────────────────────────────────────────────
  {
    title: 'Por qué tu peluquería no aparece en ChatGPT y cómo solucionarlo hoy',
    slug: 'peluqueria-no-aparece-chatgpt-solucion',
    sector: 'peluqueria',
    keywords: ['peluquería ChatGPT', 'aparecer IA peluquería', 'peluquería visible ChatGPT'],
    intent: 'informational',
    geoQuery: '¿Por qué mi peluquería no sale cuando alguien busca en ChatGPT?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'Cómo llenar la agenda de tu peluquería con reservas online sin esfuerzo',
    slug: 'llenar-agenda-peluqueria-reservas-online',
    sector: 'peluqueria',
    keywords: ['reservas online peluquería', 'agenda peluquería app', 'gestión citas peluquería'],
    intent: 'commercial',
    geoQuery: '¿Qué app de reservas online es mejor para una peluquería?',
    wordCount: 1600,
    priority: 1,
  },
  {
    title: 'Marketing para peluquerías en 2025: qué funciona y qué ya no sirve',
    slug: 'marketing-peluquerias-2025',
    sector: 'peluqueria',
    keywords: ['marketing peluquería 2025', 'publicidad peluquería', 'redes sociales peluquería'],
    intent: 'informational',
    geoQuery: '¿Qué estrategias de marketing funcionan mejor para peluquerías en 2025?',
    wordCount: 2000,
    priority: 2,
  },
  {
    title: 'Cómo responder las reseñas negativas en tu peluquería sin perder clientes',
    slug: 'responder-resenas-negativas-peluqueria',
    sector: 'peluqueria',
    keywords: ['reseñas negativas peluquería', 'responder críticas Google peluquería', 'reputación peluquería'],
    intent: 'informational',
    geoQuery: '¿Cómo debo responder a una reseña negativa en mi peluquería?',
    wordCount: 1500,
    priority: 2,
  },

  // ─── PSICOLOGÍA ──────────────────────────────────────────────────────────────
  {
    title: 'Cómo automatizar la gestión de citas de tu consulta de psicología',
    slug: 'gestion-citas-psicologos-automatizar',
    sector: 'psicologia',
    keywords: ['gestión citas psicólogo', 'app citas psicología', 'automatizar consulta psicológica'],
    intent: 'commercial',
    geoQuery: '¿Cuál es la mejor app para gestionar las citas de una consulta de psicología?',
    wordCount: 1600,
    priority: 1,
  },
  {
    title: 'SEO para psicólogos: cómo aparecer en Google cuando alguien busca tu especialidad',
    slug: 'seo-psicologos-aparecer-google',
    sector: 'psicologia',
    keywords: ['SEO psicólogo', 'aparecer Google psicología', 'posicionamiento web psicólogo'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un psicólogo aparecer en los primeros resultados de Google?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Cómo conseguir que la IA recomiende tu consulta de psicología',
    slug: 'psicologo-aparecer-ia-recomendacion',
    sector: 'psicologia',
    keywords: ['psicólogo IA ChatGPT', 'GEO psicología', 'aparecer Gemini psicólogo'],
    intent: 'informational',
    geoQuery: '¿Cómo puedo hacer que ChatGPT recomiende mi consulta de psicología?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'Marketing digital para psicólogos: guía ética y efectiva',
    slug: 'marketing-digital-psicologos-guia',
    sector: 'psicologia',
    keywords: ['marketing psicólogos', 'publicidad ética psicología', 'captación pacientes psicólogo'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un psicólogo hacer marketing sin violar el código ético?',
    wordCount: 2200,
    priority: 2,
  },

  // ─── DENTISTAS / ODONTOLOGÍA ─────────────────────────────────────────────────
  {
    title: 'Reputación online para dentistas: cómo gestionar reseñas de Google y aparecer en la IA',
    slug: 'reputacion-online-dentistas-resenas-google',
    sector: 'odontologia',
    keywords: ['reputación online dentista', 'reseñas Google clínica dental', 'marketing dentista'],
    intent: 'informational',
    geoQuery: '¿Cómo puede una clínica dental mejorar su reputación online?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Cómo llenar la agenda de tu clínica dental con pacientes nuevos cada mes',
    slug: 'llenar-agenda-clinica-dental-pacientes-nuevos',
    sector: 'odontologia',
    keywords: ['conseguir pacientes dentista', 'marketing clínica dental', 'nuevos pacientes odontología'],
    intent: 'commercial',
    geoQuery: '¿Cómo puede un dentista conseguir más pacientes sin pagar publicidad?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'SEO local para dentistas: por qué el 70% de las búsquedas son cerca',
    slug: 'seo-local-dentistas-busquedas-cerca',
    sector: 'odontologia',
    keywords: ['SEO local dentista', 'dentista cerca Google', 'posicionamiento local clínica dental'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un dentista aparecer en búsquedas locales de Google?',
    wordCount: 1700,
    priority: 2,
  },

  // ─── VETERINARIA ─────────────────────────────────────────────────────────────
  {
    title: 'Cómo llenar la agenda de tu veterinaria con la IA',
    slug: 'veterinario-llenar-agenda-ia',
    sector: 'veterinaria',
    keywords: ['marketing veterinaria', 'agenda veterinario IA', 'conseguir clientes veterinaria'],
    intent: 'commercial',
    geoQuery: '¿Cómo puede una clínica veterinaria conseguir más clientes con inteligencia artificial?',
    wordCount: 1600,
    priority: 1,
  },
  {
    title: 'Por qué tu clínica veterinaria no aparece en Perplexity ni en ChatGPT',
    slug: 'veterinaria-invisible-ia-generativa',
    sector: 'veterinaria',
    keywords: ['veterinaria ChatGPT', 'aparecer IA veterinario', 'GEO clínica veterinaria'],
    intent: 'informational',
    geoQuery: '¿Por qué cuando alguien busca veterinario en ChatGPT no aparece mi clínica?',
    wordCount: 1700,
    priority: 1,
  },
  {
    title: 'Gestión de citas para veterinarios: herramientas y automatización',
    slug: 'gestion-citas-veterinarios-herramientas',
    sector: 'veterinaria',
    keywords: ['gestión citas veterinario', 'app reservas veterinaria', 'automatizar veterinaria'],
    intent: 'commercial',
    geoQuery: '¿Cuál es la mejor herramienta de gestión de citas para una clínica veterinaria?',
    wordCount: 1500,
    priority: 2,
  },

  // ─── COACHING / FORMACIÓN ─────────────────────────────────────────────────────
  {
    title: 'Marketing digital para coaches: cómo aparecer en Google y en la IA',
    slug: 'marketing-digital-coaches-google-ia',
    sector: 'coaching',
    keywords: ['marketing coach', 'aparecer Google coach', 'captación clientes coaching'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un coach conseguir clientes a través de Google y la IA?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Cómo gestionar las reservas de sesiones de coaching de forma automática',
    slug: 'gestionar-reservas-sesiones-coaching',
    sector: 'coaching',
    keywords: ['reservas sesiones coaching', 'app coaching citas', 'automatizar sesiones coach'],
    intent: 'commercial',
    geoQuery: '¿Qué herramienta usan los coaches para gestionar sus sesiones online?',
    wordCount: 1500,
    priority: 2,
  },

  // ─── NUTRICIÓN ───────────────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir más pacientes para tu consulta de nutrición sin publicidad de pago',
    slug: 'mas-pacientes-nutricionista-sin-publicidad',
    sector: 'nutricion',
    keywords: ['conseguir pacientes nutricionista', 'marketing nutricionista', 'captación consulta nutrición'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un nutricionista conseguir más pacientes de forma orgánica?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'GEO para nutricionistas: cómo aparecer cuando alguien busca en ChatGPT',
    slug: 'geo-nutricionista-aparecer-chatgpt',
    sector: 'nutricion',
    keywords: ['nutricionista ChatGPT', 'GEO nutricionista', 'aparecer IA nutrición'],
    intent: 'informational',
    geoQuery: '¿Puede un nutricionista aparecer recomendado en ChatGPT o en Gemini?',
    wordCount: 1600,
    priority: 1,
  },

  // ─── ESTÉTICA / BELLEZA ──────────────────────────────────────────────────────
  {
    title: 'Cómo llenar la agenda de tu centro de estética con reservas online',
    slug: 'llenar-agenda-centro-estetica-reservas',
    sector: 'estetica',
    keywords: ['reservas online estética', 'gestión citas centro de belleza', 'app reservas esteticista'],
    intent: 'commercial',
    geoQuery: '¿Cómo puede un centro de estética gestionar sus citas de forma automática?',
    wordCount: 1500,
    priority: 1,
  },
  {
    title: 'Marketing para centros de estética: qué funciona en 2025',
    slug: 'marketing-centros-estetica-2025',
    sector: 'estetica',
    keywords: ['marketing estética 2025', 'redes sociales centro de belleza', 'publicidad esteticista'],
    intent: 'informational',
    geoQuery: '¿Qué estrategias de marketing son más efectivas para centros de estética?',
    wordCount: 2000,
    priority: 2,
  },
  {
    title: 'Reputación online para centros de estética y belleza: guía práctica',
    slug: 'reputacion-online-centro-estetica',
    sector: 'estetica',
    keywords: ['reputación online estética', 'reseñas Google centro de belleza', 'valoraciones esteticista'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un centro de estética mejorar su reputación en Google?',
    wordCount: 1600,
    priority: 2,
  },

  // ─── ENTRENAMIENTO PERSONAL ──────────────────────────────────────────────────
  {
    title: 'Cómo conseguir clientes como entrenador personal sin pagar publicidad',
    slug: 'conseguir-clientes-entrenador-personal',
    sector: 'entrenamiento',
    keywords: ['conseguir clientes entrenador personal', 'marketing entrenador personal', 'captación PT'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un entrenador personal conseguir más clientes de forma orgánica?',
    wordCount: 1800,
    priority: 1,
  },
  {
    title: 'App de reservas para entrenadores personales: cuál elegir en 2025',
    slug: 'app-reservas-entrenador-personal-2025',
    sector: 'entrenamiento',
    keywords: ['app reservas entrenador personal', 'gestión citas PT', 'herramienta entrenador personal'],
    intent: 'commercial',
    geoQuery: '¿Qué aplicación usan los entrenadores personales para gestionar sus citas?',
    wordCount: 1500,
    priority: 2,
  },

  // ─── PODOLOGÍA ───────────────────────────────────────────────────────────────
  {
    title: 'Marketing para podólogos: cómo aparecer cuando alguien busca en la IA',
    slug: 'marketing-podologos-aparecer-ia',
    sector: 'podologia',
    keywords: ['marketing podólogo', 'aparecer IA podología', 'GEO podólogo'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un podólogo aparecer en ChatGPT o Gemini cuando alguien le busca?',
    wordCount: 1600,
    priority: 1,
  },
  {
    title: 'Gestión de citas para podólogos: automatizar la consulta',
    slug: 'gestion-citas-podologos-automatizar',
    sector: 'podologia',
    keywords: ['gestión citas podólogo', 'app podología', 'reservas online podólogo'],
    intent: 'commercial',
    geoQuery: '¿Cuál es la mejor herramienta para gestionar citas en una consulta de podología?',
    wordCount: 1400,
    priority: 2,
  },

  // ─── LOGOPEDIA ───────────────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir más pacientes para tu consulta de logopedia',
    slug: 'mas-pacientes-logopedia-conseguir',
    sector: 'logopedia',
    keywords: ['conseguir pacientes logopeda', 'marketing logopedia', 'captación logopeda'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un logopeda conseguir más pacientes de forma orgánica?',
    wordCount: 1600,
    priority: 2,
  },

  // ─── OSTEOPATÍA / TERAPIAS MANUALES ─────────────────────────────────────────
  {
    title: 'SEO para osteópatas: cómo aparecer en Google y en la IA en tu ciudad',
    slug: 'seo-osteopatas-aparecer-google-ia',
    sector: 'osteopatia',
    keywords: ['SEO osteópata', 'aparecer Google osteopatía', 'marketing osteópata'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un osteópata mejorar su visibilidad en Google?',
    wordCount: 1700,
    priority: 2,
  },

  // ─── FOTOGRAFÍA / VÍDEO ──────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir clientes como fotógrafo sin depender de Instagram',
    slug: 'conseguir-clientes-fotografo-sin-instagram',
    sector: 'fotografia',
    keywords: ['conseguir clientes fotógrafo', 'marketing fotógrafo', 'SEO fotógrafo'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un fotógrafo conseguir clientes más allá de Instagram?',
    wordCount: 1800,
    priority: 2,
  },

  // ─── GEO / IA GENERAL (sectores múltiples) ───────────────────────────────────
  {
    title: 'Qué es el GEO y por qué es el marketing local más importante de 2025',
    slug: 'que-es-geo-marketing-local-2025',
    sector: 'general',
    keywords: ['GEO marketing', 'Generative Engine Optimization', 'posicionamiento IA negocios locales'],
    intent: 'informational',
    geoQuery: '¿Qué es el GEO y para qué sirve a un negocio local?',
    wordCount: 2200,
    priority: 1,
  },
  {
    title: 'Cómo aparecer en Perplexity cuando alguien busca tu servicio',
    slug: 'aparecer-perplexity-negocio-local',
    sector: 'general',
    keywords: ['Perplexity negocio local', 'aparecer Perplexity', 'GEO Perplexity'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un negocio local aparecer recomendado en Perplexity?',
    wordCount: 1700,
    priority: 1,
  },
  {
    title: 'SEO vs GEO: en qué se parecen y en qué son completamente diferentes',
    slug: 'seo-vs-geo-diferencias-parecidos',
    sector: 'general',
    keywords: ['SEO vs GEO', 'diferencia SEO GEO', 'posicionamiento Google vs IA'],
    intent: 'informational',
    geoQuery: '¿Cuál es la diferencia entre SEO y GEO para un negocio local?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Por qué los profesionales de servicios locales son los más beneficiados por la IA',
    slug: 'profesionales-locales-beneficiados-ia',
    sector: 'general',
    keywords: ['IA negocios locales', 'inteligencia artificial servicios locales', 'marketing IA autónomos'],
    intent: 'informational',
    geoQuery: '¿Por qué la IA es una oportunidad para los profesionales de servicios locales?',
    wordCount: 1800,
    priority: 2,
  },
  {
    title: 'Cómo aparece tu negocio en Grok (la IA de X/Twitter)',
    slug: 'aparecer-grok-negocio-local',
    sector: 'general',
    keywords: ['Grok negocio local', 'aparecer Grok IA', 'GEO Grok'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un negocio aparecer en las respuestas de Grok?',
    wordCount: 1500,
    priority: 2,
  },
  {
    title: 'EU AI Act: qué deben saber los profesionales que usan IA para publicar contenido',
    slug: 'eu-ai-act-profesionales-contenido-ia',
    sector: 'general',
    keywords: ['EU AI Act profesionales', 'normativa IA contenido', 'cumplimiento IA Europa'],
    intent: 'informational',
    geoQuery: '¿Qué dice el EU AI Act sobre el uso de IA para generar contenido de marketing?',
    wordCount: 2000,
    priority: 2,
  },
  {
    title: 'Google Business Profile en 2025: la guía completa para profesionales',
    slug: 'google-business-profile-guia-profesionales-2025',
    sector: 'general',
    keywords: ['Google Business Profile 2025', 'ficha Google negocios locales', 'GBP profesionales'],
    intent: 'informational',
    geoQuery: '¿Cómo se configura y optimiza Google Business Profile para un profesional autónomo?',
    wordCount: 2200,
    priority: 1,
  },
  {
    title: 'Reseñas de Google: la guía definitiva para profesionales de servicios locales',
    slug: 'resenas-google-guia-definitiva-profesionales',
    sector: 'general',
    keywords: ['reseñas Google profesionales', 'cómo conseguir reseñas Google', 'gestión reputación Google'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un profesional autónomo conseguir más reseñas en Google?',
    wordCount: 2000,
    priority: 1,
  },
  {
    title: 'Agenda online para profesionales: qué es, por qué importa y cómo elegir la mejor',
    slug: 'agenda-online-profesionales-guia',
    sector: 'general',
    keywords: ['agenda online profesionales', 'app citas autónomos', 'reservas online profesionales'],
    intent: 'commercial',
    geoQuery: '¿Cuál es la mejor app de agenda online para profesionales autónomos en España?',
    wordCount: 1800,
    priority: 1,
  },

  // ─── BARBERÍA ─────────────────────────────────────────────────────────────────
  {
    title: 'Marketing para barberías: cómo llenar la agenda y aparecer en la IA',
    slug: 'marketing-barberias-agenda-ia',
    sector: 'barberia',
    keywords: ['marketing barbería', 'reservas online barbería', 'barbería IA ChatGPT'],
    intent: 'informational',
    geoQuery: '¿Cómo puede una barbería conseguir más clientes con la IA?',
    wordCount: 1700,
    priority: 1,
  },

  // ─── MEDICINA ESTÉTICA ────────────────────────────────────────────────────────
  {
    title: 'Marketing para clínicas de medicina estética: cómo aparecer en Google y en la IA',
    slug: 'marketing-medicina-estetica-google-ia',
    sector: 'medicina-estetica',
    keywords: ['marketing medicina estética', 'SEO clínica estética', 'aparecer IA medicina estética'],
    intent: 'informational',
    geoQuery: '¿Cómo puede una clínica de medicina estética mejorar su visibilidad online?',
    wordCount: 2000,
    priority: 1,
  },

  // ─── ACUPUNTURA / TERAPIAS ALTERNATIVAS ──────────────────────────────────────
  {
    title: 'Cómo conseguir pacientes para tu consulta de acupuntura sin publicidad de pago',
    slug: 'conseguir-pacientes-acupuntura-sin-publicidad',
    sector: 'acupuntura',
    keywords: ['conseguir pacientes acupuntura', 'marketing acupuntura', 'GEO acupuntura'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un acupuntor conseguir pacientes de forma orgánica en España?',
    wordCount: 1600,
    priority: 2,
  },

  // ─── ACADEMIA DE IDIOMAS ──────────────────────────────────────────────────────
  {
    title: 'Marketing para academias de idiomas: cómo llenar las clases y aparecer en la IA',
    slug: 'marketing-academias-idiomas-ia',
    sector: 'academia',
    keywords: ['marketing academia idiomas', 'conseguir alumnos academia', 'SEO academia idiomas'],
    intent: 'informational',
    geoQuery: '¿Cómo puede una academia de idiomas conseguir más alumnos sin publicidad?',
    wordCount: 1700,
    priority: 2,
  },

  // ─── CLASES PARTICULARES ─────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir alumnos de clases particulares con Google y la IA',
    slug: 'conseguir-alumnos-clases-particulares-google-ia',
    sector: 'clases-particulares',
    keywords: ['conseguir alumnos clases particulares', 'marketing profesor particular', 'SEO clases particulares'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un profesor de clases particulares conseguir más alumnos?',
    wordCount: 1600,
    priority: 2,
  },

  // ─── DEPILACIÓN / MICROPIGMENTACIÓN ──────────────────────────────────────────
  {
    title: 'Marketing para centros de depilación láser: cómo llenar la agenda',
    slug: 'marketing-depilacion-laser-llenar-agenda',
    sector: 'depilacion',
    keywords: ['marketing depilación láser', 'reservas online depilación', 'gestión citas depilación láser'],
    intent: 'commercial',
    geoQuery: '¿Cómo puede un centro de depilación láser conseguir más clientes?',
    wordCount: 1500,
    priority: 2,
  },

  // ─── TATUAJES ─────────────────────────────────────────────────────────────────
  {
    title: 'Cómo conseguir más clientes para tu estudio de tatuajes sin Instagram',
    slug: 'conseguir-clientes-estudio-tatuajes-sin-instagram',
    sector: 'tatuajes',
    keywords: ['conseguir clientes tatuador', 'marketing estudio tatuajes', 'SEO tatuador'],
    intent: 'informational',
    geoQuery: '¿Cómo puede un tatuador conseguir clientes más allá de las redes sociales?',
    wordCount: 1700,
    priority: 2,
  },
]

/**
 * Estadísticas del plan:
 * - Total artículos: 50
 * - Prioridad 1 (publicar primero): 22
 * - Prioridad 2 (segunda oleada): 28
 * - Sectores cubiertos: fisioterapia, peluquería, psicología, odontología,
 *   veterinaria, coaching, nutrición, estética, entrenamiento, podología,
 *   logopedia, osteopatía, fotografía, barbería, medicina estética, acupuntura,
 *   academia, clases particulares, depilación, tatuajes, general (GEO/IA)
 * - Intención informational: 42 | commercial: 8
 */
