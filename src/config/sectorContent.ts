/**
 * Contenido estático de fallback para las landings de sector.
 * Se usa cuando Sanity no tiene documento para ese sector.
 */

export interface SectorContent {
  sectorId:    string
  label:       string
  icon:        string
  headline:    string
  subheadline: string
  painPoints:  string[]
  features:    Array<{ icon: string; title: string; description: string }>
  testimonial: { name: string; business: string; quote: string } | null
  ctaText:     string
  seoTitle:    string
  seoDesc:     string
}

export const SECTOR_CONTENT: Record<string, SectorContent> = {
  peluqueria: {
    sectorId:    'peluqueria',
    label:       'Peluquería',
    icon:        '✂️',
    headline:    'Tu peluquería llena de citas, sin dedicarle un minuto al marketing',
    subheadline: 'Reservas online 24h, reseñas en Google gestionadas con IA y artículos de blog que te posicionan — todo automático.',
    painPoints: [
      'Clientes que no saben cómo reservar online y te llaman a todas horas',
      'Reseñas en Google sin contestar que hacen huir a nuevos clientes',
      'Sin tiempo para crear contenido que te diferencie de la competencia',
    ],
    features: [
      { icon: '📅', title: 'Agenda online 24/7', description: 'Tus clientes reservan desde el móvil en menos de 2 minutos, sin llamadas ni WhatsApps.' },
      { icon: '⭐', title: 'Reseñas respondidas con IA', description: 'El agente A2 detecta nuevas reseñas y propone respuestas personalizadas para que las apruebes con un clic.' },
      { icon: '📝', title: 'Blog SEO semanal', description: 'El agente A3 publica artículos de "mejores cortes en [tu ciudad]" que te ponen en los primeros resultados de Google.' },
      { icon: '🔄', title: 'Recordatorio de vuelta', description: 'El agente A6 detecta clientes que llevan semanas sin volver y les envía un recordatorio personalizado.' },
    ],
    testimonial: {
      name: 'Ana García',
      business: 'Peluquería Ana · Sevilla',
      quote: 'Antes perdía clientes porque no contestaba las reseñas. Ahora el sistema las gestiona solo y he subido de 4.1 a 4.8 estrellas en tres meses.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'MyMarketing para Peluquerías — Reservas y SEO automático',
    seoDesc:  'Gestiona citas, reseñas y posicionamiento en Google para tu peluquería con 4 agentes de IA. 15 días gratis, sin tarjeta.',
  },

  fisioterapia: {
    sectorId:    'fisioterapia',
    label:       'Fisioterapia',
    icon:        '🦴',
    headline:    'Más pacientes para tu clínica de fisioterapia, sin contratar a nadie',
    subheadline: 'Automatiza la agenda, las reseñas y el contenido educativo que convierte a tu clínica en la referencia local.',
    painPoints: [
      'Horas perdidas gestionando citas por teléfono y WhatsApp',
      'Pacientes que te buscan en Google pero encuentran a la competencia primero',
      'Sin tiempo para publicar contenido que demuestre tu experiencia clínica',
    ],
    features: [
      { icon: '📅', title: 'Citas online sin llamadas', description: 'Los pacientes reservan y cancelan solos. Tú recibes una notificación y ya está.' },
      { icon: '🔍', title: 'Posicionamiento local IA', description: 'Artículos semanales sobre "fisioterapia en [ciudad]" que Google y ChatGPT muestran cuando te buscan.' },
      { icon: '💬', title: 'Gestión de reseñas', description: 'Respuestas automáticas a reseñas negativas y positivas. Mejora tu reputación sin esfuerzo.' },
      { icon: '📊', title: 'Resumen semanal en el móvil', description: 'Cada lunes recibes un informe con las citas, reseñas y métricas de la semana para tomar decisiones.' },
    ],
    testimonial: {
      name: 'Roberto Martínez',
      business: 'Clínica FisioActiva · Zaragoza',
      quote: 'El blog automático me ha traído 12 pacientes nuevos en 2 meses que me encontraron buscando "fisioterapeuta en Zaragoza" en Google.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'MyMarketing para Fisioterapeutas — Agenda y posicionamiento local',
    seoDesc:  'Software de gestión y marketing automático para clínicas de fisioterapia. Reservas online, SEO local y reseñas con IA.',
  },

  dentista: {
    sectorId:    'dentista',
    label:       'Dentista',
    icon:        '🦷',
    headline:    'Tu clínica dental visible en Google y con la agenda siempre llena',
    subheadline: 'Reservas online, respuesta a reseñas y contenido dental que posiciona tu clínica — todo sin tocar un ordenador.',
    painPoints: [
      'Pacientes que buscan "dentista urgencias [ciudad]" y llaman a la competencia',
      'Reseñas negativas sobre esperas o precios que nadie contesta',
      'La agenda con huecos que podrían cubrirse con recordatorios automáticos',
    ],
    features: [
      { icon: '📅', title: 'Reservas online 24h', description: 'Los pacientes reservan cualquier servicio desde el móvil, incluso fuera de horario.' },
      { icon: '⭐', title: 'Reputación online gestionada', description: 'El agente IA responde las reseñas de Google con un tono clínico y empático. Tú solo apruebas.' },
      { icon: '📝', title: 'Contenido dental SEO', description: 'Artículos sobre blanqueamiento, ortodoncia, implantes… que posicionan tu clínica en Google.' },
      { icon: '🔔', title: 'Recordatorios anti-hueco', description: 'A6 detecta pacientes que llevan meses sin revisión y les manda un recordatorio personalizado.' },
    ],
    testimonial: {
      name: 'Dra. Laura Sánchez',
      business: 'Clínica Dental Sánchez · Valencia',
      quote: 'Desde que uso MyMarketing aparezco en los 3 primeros resultados cuando alguien busca dentista en mi barrio. Las llamadas han aumentado un 40%.',
    },
    ctaText:  'Empieza sin tarjeta',
    seoTitle: 'MyMarketing para Dentistas — Agenda y SEO local automático',
    seoDesc:  'Software de marketing y citas para clínicas dentales. Posicionamiento en Google, reseñas con IA y reservas online 24h.',
  },

  estetica: {
    sectorId:    'estetica',
    label:       'Estética',
    icon:        '✨',
    headline:    'Llena tu centro de estética con clientas que vuelven solas',
    subheadline: 'Reservas online, el agente de recurrencia que trae de vuelta a tus clientas y contenido de belleza que posiciona tu centro.',
    painPoints: [
      'Clientas que hacen un tratamiento y no vuelven porque nadie las recuerda',
      'Sin presencia en Instagram ni Google para atraer clientas nuevas',
      'Gestionar citas entre tratamiento y tratamiento es un caos',
    ],
    features: [
      { icon: '📅', title: 'Agenda sin interrupciones', description: 'Tus clientas reservan entre tratamiento y tratamiento. Sin llamadas en mitad de una sesión.' },
      { icon: '🔄', title: 'Agente de fidelización A6', description: 'Detecta clientas que llevan semanas sin volver y les envía un mensaje personalizado con su tratamiento habitual.' },
      { icon: '📸', title: 'Contenido de belleza SEO', description: 'El agente A3 publica artículos sobre tratamientos faciales, depilación, etc. que posicionan tu centro en Google.' },
      { icon: '⭐', title: 'Reseñas que generan confianza', description: 'Respuestas automáticas que hacen que las clientas nuevas elijan tu centro frente a la competencia.' },
    ],
    testimonial: {
      name: 'Marta Pérez',
      business: 'Centro Estética Marta · Madrid',
      quote: 'El agente de recurrencia ha recuperado un 30% de clientas que llevaban más de 2 meses sin volver. Nunca imaginé que un software pudiera hacer eso.',
    },
    ctaText:  'Probar gratis',
    seoTitle: 'MyMarketing para Centros de Estética — Fidelización y SEO',
    seoDesc:  'Gestión de citas, fidelización automática y posicionamiento en Google para centros de estética. 15 días gratis.',
  },

  psicologia: {
    sectorId:    'psicologia',
    label:       'Psicología',
    icon:        '🧠',
    headline:    'Más pacientes para tu consulta de psicología, con total confidencialidad',
    subheadline: 'Reservas discretas online, posicionamiento en Google con contenido de salud mental y gestión de tu reputación sin esfuerzo.',
    painPoints: [
      'Pacientes que buscan psicólogo online y no te encuentran porque no tienes tiempo de hacer SEO',
      'Proceso de reserva por email que genera fricción y hace perder pacientes',
      'Reseñas en Google que no sabes cómo responder sin comprometer la confidencialidad',
    ],
    features: [
      { icon: '📅', title: 'Reservas anónimas y discretas', description: 'Los pacientes reservan sin necesidad de contar su situación. Proceso limpio y confidencial.' },
      { icon: '🔍', title: 'SEO para salud mental', description: 'Artículos sobre ansiedad, terapia cognitiva o crianza que atraen pacientes que te buscan en Google.' },
      { icon: '💬', title: 'Respuestas a reseñas éticas', description: 'El agente genera respuestas respetuosas y profesionales que no comprometen la confidencialidad.' },
      { icon: '📊', title: 'Visibilidad en IAs', description: 'Cuando alguien le pregunta a ChatGPT por un psicólogo en tu ciudad, MyMarketing hace que aparezcas tú.' },
    ],
    testimonial: {
      name: 'Patricia Ruiz',
      business: 'Psicóloga · Barcelona',
      quote: 'Tenía miedo de que el marketing en redes sociales no fuera compatible con la ética de mi profesión. MyMarketing gestiona todo de forma discreta y profesional.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'MyMarketing para Psicólogos — Agenda y SEO confidencial',
    seoDesc:  'Software de gestión y posicionamiento para psicólogos y psicólogas. Reservas discretas, SEO y reseñas con IA. 15 días gratis.',
  },
}

/** Sectores disponibles como landings de sector */
export const SECTOR_LANDING_IDS = Object.keys(SECTOR_CONTENT)
