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
  faqs:        Array<{ question: string; answer: string }>
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
    headline:    'Agenda online para tu peluquería — y que ChatGPT también te recomiende',
    subheadline: 'Reservas 24h desde el móvil, reseñas en Google respondidas con IA y un blog SEO semanal que te posiciona en Google y en las IAs. Sin contratar a nadie.',
    painPoints: [
      'Una clienta te llama a las 22h para reservar, no contestas, y al día siguiente ya reservó en otra peluquería',
      'Tienes 3 reseñas de 1 estrella sin contestar en Google que asustan a cualquier cliente nuevo',
      'La peluquería de la esquina aparece cuando alguien le pregunta a ChatGPT — la tuya no',
      'Llevas meses queriendo publicar en redes o en Google pero nunca encuentras el momento',
    ],
    features: [
      { icon: '📅', title: 'Agenda online 24/7', description: 'Tus clientes reservan desde el móvil en menos de 2 minutos, sin llamadas ni WhatsApps. Tú recibes la notificación y ya está.' },
      { icon: '⭐', title: 'Reseñas respondidas con IA', description: 'El agente detecta nuevas reseñas en Google y propone una respuesta personalizada. Tú la apruebas con un clic — o la publica directamente.' },
      { icon: '🤖', title: 'Visible en ChatGPT y Gemini', description: 'Publicamos contenido estructurado que las IAs usan para responder "mejor peluquería en [tu ciudad]". Una ventaja que el 95% de las peluquerías no tiene.' },
      { icon: '🔄', title: 'Recuperación de clientes inactivos', description: 'El agente detecta clientes que llevan más de 6 semanas sin volver y les envía un recordatorio personalizado en tu nombre.' },
    ],
    faqs: [
      { question: '¿Necesito tener página web para usar MyMarketing?', answer: 'No. Te creamos una página de reservas en minutos con tus servicios, precios y fotos. Sin conocimientos técnicos.' },
      { question: '¿Mis clientes tienen que descargarse una app?', answer: 'No. Reservan desde cualquier móvil a través de un enlace — sin descargas, sin registro obligatorio.' },
      { question: '¿Cómo hace MyMarketing para que aparezca en ChatGPT?', answer: 'Publicamos artículos y páginas estructuradas con datos de tu negocio que los modelos de IA indexan. Las IAs los usan para recomendar negocios locales cuando les preguntan.' },
      { question: '¿Funciona con el software de gestión que ya tengo?', answer: 'Sí, importamos tu lista de servicios, precios y clientes. Y si no tienes ninguno, te lo montamos desde cero.' },
    ],
    testimonial: {
      name: 'Ana García',
      business: 'Peluquería Ana · Sevilla',
      quote: 'Antes perdía clientes porque no contestaba las reseñas. Ahora el sistema las gestiona solo y he subido de 4.1 a 4.8 estrellas en tres meses.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Agenda online para peluquería + marketing automático | MyMarketing',
    seoDesc:  'Reservas 24h, reseñas respondidas con IA y blog SEO semanal para tu peluquería. Aparece en Google y en ChatGPT. 15 días gratis, sin tarjeta.',
  },

  fisioterapia: {
    sectorId:    'fisioterapia',
    label:       'Fisioterapia',
    icon:        '🦴',
    headline:    'Software de gestión para fisioterapeutas que llena la agenda sin secretaria',
    subheadline: 'Citas online 24h, posicionamiento local en Google y ChatGPT, y gestión automática de reseñas. Todo para que te dediques a tus pacientes, no al marketing.',
    painPoints: [
      'Pierdes 30-45 minutos al día gestionando citas por teléfono o WhatsApp mientras atiendes a otros pacientes',
      'Un paciente busca "fisioterapeuta en [tu ciudad]" en Google y aparece la competencia — tú estás en la página 2',
      'Tienes pacientes que se curan y desaparecen: nadie los recuerda para la revisión o para volver ante una recaída',
      'Sabes que deberías publicar contenido sobre lesiones y rehabilitación, pero no tienes tiempo ni idea de por dónde empezar',
    ],
    features: [
      { icon: '📅', title: 'Citas online sin llamadas', description: 'Los pacientes reservan, cancelan y reprograman solos. Tú solo recibes la notificación. Cero interrupciones en consulta.' },
      { icon: '🔍', title: 'Posicionamiento local en Google y en IAs', description: 'Artículos semanales sobre "fisioterapia deportiva en [ciudad]", "dolor de espalda fisioterapia"… que Google indexa y ChatGPT cita.' },
      { icon: '🔄', title: 'Seguimiento automático de pacientes', description: 'El agente detecta pacientes que no han vuelto tras su alta y les manda un recordatorio personalizado para la revisión.' },
      { icon: '💬', title: 'Reseñas gestionadas sin esfuerzo', description: 'Respuestas automáticas a reseñas nuevas en Google. Mejora tu valoración media sin dedicar ni 5 minutos a la semana.' },
    ],
    faqs: [
      { question: '¿Puedo usar MyMarketing si ya tengo un software de historia clínica?', answer: 'Sí. MyMarketing se ocupa de la agenda online, el marketing y el SEO. No sustituye tu software clínico, lo complementa.' },
      { question: '¿Qué tipo de artículos publica el agente de contenido?', answer: 'Artículos sobre las lesiones más frecuentes en tu especialidad, ejercicios de rehabilitación, consejos de prevención… siempre con tu nombre y clínica como autor.' },
      { question: '¿Cómo ayuda MyMarketing a que aparezca en ChatGPT?', answer: 'Publicamos contenido estructurado con tu especialidad, ciudad y servicios. Las IAs lo indexan y te citan cuando alguien pregunta por fisioterapeutas en tu zona.' },
      { question: '¿Cuánto tiempo tarda en verse resultados en Google?', answer: 'Los primeros artículos empiezan a posicionarse entre 4 y 8 semanas. Nuestros clientes reportan nuevas consultas orgánicas a partir del segundo mes.' },
    ],
    testimonial: {
      name: 'Roberto Martínez',
      business: 'Clínica FisioActiva · Zaragoza',
      quote: 'El blog automático me ha traído 12 pacientes nuevos en 2 meses que me encontraron buscando "fisioterapeuta en Zaragoza" en Google.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Software para fisioterapeutas — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Gestiona citas, posiciónate en Google y ChatGPT, y recupera pacientes inactivos con IA. Para clínicas de fisioterapia. 15 días gratis, sin tarjeta.',
  },

  dentista: {
    sectorId:    'dentista',
    label:       'Dentista',
    icon:        '🦷',
    headline:    'Tu clínica dental en el top de Google — y con la agenda llena de revisiones',
    subheadline: 'Reservas online 24h, recordatorios de revisión automáticos y contenido dental que posiciona tu clínica en Google y en las búsquedas con IA. Sin tocar un ordenador.',
    painPoints: [
      'Un paciente busca "dentista urgencias [ciudad]" a las 9 de la noche — y llama a la primera clínica que tiene reserva online, no a la tuya',
      'Tienes reseñas negativas sobre esperas o precios que llevan meses sin contestar y condicionan la decisión de nuevos pacientes',
      'La agenda tiene huecos de 45 minutos porque los pacientes que no vinieron a la revisión nadie los llamó',
      'Tu competencia aparece en ChatGPT cuando alguien pregunta por clínicas dentales en tu zona — la tuya no tiene contenido indexado',
    ],
    features: [
      { icon: '📅', title: 'Reservas online 24h', description: 'Los pacientes reservan desde el móvil cualquier servicio — limpieza, urgencia, revisión — incluso fuera de horario. Sin secretaria.' },
      { icon: '🔔', title: 'Recordatorios de revisión automáticos', description: 'El agente detecta pacientes que llevan más de 6 meses sin revisión y les envía un recordatorio. Menos huecos en agenda, más ingresos recurrentes.' },
      { icon: '⭐', title: 'Reputación online gestionada con IA', description: 'El agente responde las reseñas de Google con tono clínico y empático. Tú apruebas cada respuesta o la deja automática. Tu valoración sube.' },
      { icon: '🤖', title: 'Contenido dental que posiciona en IAs', description: 'Artículos sobre implantes, ortodoncia, blanqueamiento… que Google indexa y que ChatGPT cita cuando alguien busca clínica dental en tu ciudad.' },
    ],
    faqs: [
      { question: '¿Puedo gestionar varios dentistas o box con MyMarketing?', answer: 'Sí. La agenda admite múltiples profesionales y box independientes, con disponibilidades distintas para cada uno.' },
      { question: '¿Las reseñas negativas se pueden gestionar sin comprometer la imagen de la clínica?', answer: 'Sí. El agente está entrenado para responder con empatía y profesionalidad, reconociendo el problema sin admitir culpas y ofreciendo solución por canal privado.' },
      { question: '¿Cómo aparece mi clínica en ChatGPT?', answer: 'Publicamos contenido estructurado con tu especialidad, nombre de clínica y ciudad que los modelos de IA indexan y citan en sus respuestas.' },
      { question: '¿Puedo probar MyMarketing sin compromiso?', answer: 'Sí. 15 días completamente gratis, sin tarjeta de crédito. Si no ves resultados, no pagas nada.' },
    ],
    testimonial: {
      name: 'Dra. Laura Sánchez',
      business: 'Clínica Dental Sánchez · Valencia',
      quote: 'Desde que uso MyMarketing aparezco en los 3 primeros resultados cuando alguien busca dentista en mi barrio. Las llamadas han aumentado un 40%.',
    },
    ctaText:  'Empieza sin tarjeta',
    seoTitle: 'Software para clínicas dentales — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de revisión, reseñas con IA y posicionamiento en Google y ChatGPT para dentistas. 15 días gratis, sin tarjeta.',
  },

  estetica: {
    sectorId:    'estetica',
    label:       'Estética',
    icon:        '✨',
    headline:    'Llena tu centro de estética — y que tus clientas vuelvan solas cada mes',
    subheadline: 'Reservas online sin interrupciones, fidelización automática que recupera clientas inactivas y contenido de belleza que te posiciona en Google y en ChatGPT.',
    painPoints: [
      'Una clienta hace un tratamiento facial, sale encantada, y no vuelve porque nadie la recordó que en 4 semanas debería repetirlo',
      'Gestionas las citas por WhatsApp mientras haces una depilación — y luego hay dobles reservas o huecos sin cubrir',
      'Tu competencia aparece en Google cuando alguien busca "centro de estética [ciudad]" — tú no tienes tiempo de hacer SEO',
      'Clientas nuevas que buscan opiniones en Google y ven tus reseñas sin contestar. Eligen otro centro',
    ],
    features: [
      { icon: '📅', title: 'Agenda online sin interrupciones', description: 'Tus clientas reservan entre tratamiento y tratamiento. Sin llamadas en mitad de una sesión de láser.' },
      { icon: '🔄', title: 'Fidelización automática de clientas', description: 'El agente detecta clientas que deberían volver (según su tratamiento habitual) y les envía un mensaje personalizado en tu nombre.' },
      { icon: '🤖', title: 'Visible en Google y en ChatGPT', description: 'Publicamos artículos sobre tratamientos faciales, depilación láser, mesoterapia… que posicionan tu centro cuando buscan online o preguntan a una IA.' },
      { icon: '⭐', title: 'Reseñas que convierten clientas nuevas', description: 'El agente responde todas las reseñas de Google de forma personalizada. Las clientas nuevas ven que cuidas a tu comunidad y eligen tu centro.' },
    ],
    faqs: [
      { question: '¿Funciona para centros con una sola esteticista?', answer: 'Sí. Muchos de nuestros clientes son autónomas que trabajan solas. La agenda, los recordatorios y el contenido funcionan igual de bien.' },
      { question: '¿El agente de fidelización sabe cuándo debe volver cada clienta?', answer: 'Sí. Aprende los tratamientos de cada clienta y sugiere el momento ideal para el recordatorio según el ciclo de cada servicio (cada 3 semanas para depilación, cada 4-6 para faciales, etc.).' },
      { question: '¿Cómo posiciona MyMarketing mi centro en ChatGPT?', answer: 'Publicamos contenido estructurado con tus servicios, zona y nombre del centro. Los modelos de IA lo indexan y te citan cuando alguien pregunta por centros de estética en tu ciudad.' },
      { question: '¿Puedo gestionar varios tipos de servicios con precios distintos?', answer: 'Sí. Creas el catálogo con duración y precio para cada servicio, y las clientas solo ven lo que tú quieres mostrar.' },
    ],
    testimonial: {
      name: 'Marta Pérez',
      business: 'Centro Estética Marta · Madrid',
      quote: 'El agente de recurrencia ha recuperado un 30% de clientas que llevaban más de 2 meses sin volver. Nunca imaginé que un software pudiera hacer eso.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Software para centros de estética — Agenda, fidelización y SEO | MyMarketing',
    seoDesc:  'Gestión de citas, fidelización automática de clientas y posicionamiento en Google y ChatGPT para centros de estética. 15 días gratis, sin tarjeta.',
  },

  psicologia: {
    sectorId:    'psicologia',
    label:       'Psicología',
    icon:        '🧠',
    headline:    'Agenda online para psicólogos — discreta, sin fricciones y que te posiciona en Google',
    subheadline: 'Reservas confidenciales, contenido de salud mental que atrae pacientes desde Google y ChatGPT, y gestión ética de reseñas. Para que te concentres en la terapia.',
    painPoints: [
      'Pacientes que buscan "psicólogo online [ciudad]" o "terapia ansiedad [ciudad]" en Google — y te encuentran en la página 2 porque no tienes tiempo de hacer SEO',
      'El proceso de reserva por email genera fricción: el paciente tiene que explicar su situación antes de tener cita, y muchos desisten',
      'Tienes reseñas en Google que no sabes cómo contestar sin comprometer la confidencialidad o la imagen profesional',
      'No puedes publicar contenido en redes como haría otra profesión — necesitas un canal que se adapte a la ética del psicólogo',
    ],
    features: [
      { icon: '📅', title: 'Reservas anónimas y sin fricción', description: 'El paciente reserva sin tener que explicar nada. Elige franja horaria, modalidad (presencial u online) y ya está. Cero barreras.' },
      { icon: '🔍', title: 'SEO para salud mental', description: 'Artículos sobre ansiedad, terapia cognitiva, crianza, duelo… firmados con tu nombre que posicionan en Google y que ChatGPT cita como referente.' },
      { icon: '🤖', title: 'Visible cuando alguien le pregunta a una IA', description: 'Cuando alguien le pregunta a ChatGPT o Gemini por psicólogos en tu ciudad, MyMarketing hace que aparezcas como referencia local.' },
      { icon: '💬', title: 'Respuestas a reseñas éticamente correctas', description: 'El agente genera respuestas respetuosas, sin confirmar si la persona es paciente y sin comprometer ningún dato. Cumple con el código deontológico.' },
    ],
    faqs: [
      { question: '¿El proceso de reserva es confidencial para el paciente?', answer: 'Sí. El paciente solo proporciona nombre, contacto y franja horaria. No tiene que explicar su motivo de consulta para reservar.' },
      { question: '¿El contenido que publica el agente está adaptado a la ética del psicólogo?', answer: 'Sí. Los artículos son informativos y divulgativos — nunca hacen diagnósticos ni prometen resultados terapéuticos. Están revisados para cumplir con el código deontológico del COP.' },
      { question: '¿Cómo puedo aparecer en ChatGPT como psicólogo en mi ciudad?', answer: 'Publicamos contenido estructurado con tu especialidad, nombre y zona. Las IAs lo indexan y te citan cuando alguien pregunta por psicólogos o terapeutas en tu área.' },
      { question: '¿Funciona para psicólogos que trabajan solo online?', answer: 'Sí. Puedes configurar la agenda solo para sesiones online (Zoom, Meet, etc.), presenciales, o una combinación de ambas.' },
    ],
    testimonial: {
      name: 'Patricia Ruiz',
      business: 'Psicóloga · Barcelona',
      quote: 'Tenía miedo de que el marketing en redes sociales no fuera compatible con la ética de mi profesión. MyMarketing gestiona todo de forma discreta y profesional.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para psicólogos — Agenda online y SEO confidencial | MyMarketing',
    seoDesc:  'Reservas discretas, posicionamiento en Google y ChatGPT, y gestión ética de reseñas para psicólogos. Sin comprometer la confidencialidad. 15 días gratis.',
  },

  barberia: {
    sectorId:    'barberia',
    label:       'Barbería',
    icon:        '💈',
    headline:    'Agenda online para tu barbería — y que ChatGPT te recomiende cuando busquen barbero en tu ciudad',
    subheadline: 'Reservas 24h desde el móvil, reseñas respondidas con IA y contenido SEO semanal que te posiciona en Google y en las IAs. Sin secretaria, sin apps raras.',
    painPoints: [
      'Un cliente te escribe a las 23h para reservar, no contestas, y al día siguiente ya fue a otra barbería',
      'Tu Google My Business tiene reseñas de 1 estrella sin contestar que assustan a cualquier cliente nuevo',
      'La barbería de enfrente aparece en ChatGPT cuando alguien pregunta por barberías en tu barrio — la tuya no',
      'Gestionas las citas por WhatsApp y siempre hay confusiones de horario o dobles reservas',
    ],
    features: [
      { icon: '📅', title: 'Agenda online 24/7', description: 'Tus clientes reservan servicio, barbero y hora desde el móvil en menos de 2 minutos. Sin llamadas, sin WhatsApps.' },
      { icon: '⭐', title: 'Reseñas respondidas con IA', description: 'El agente detecta reseñas nuevas en Google y propone una respuesta personalizada. Tú la apruebas con un clic.' },
      { icon: '🤖', title: 'Visible en ChatGPT y Gemini', description: 'Publicamos contenido estructurado con tu barbería y ciudad que las IAs usan para recomendar negocios locales.' },
      { icon: '🔄', title: 'Recuperación de clientes inactivos', description: 'El agente detecta clientes que llevan más de 4 semanas sin volver y les manda un recordatorio en tu nombre.' },
    ],
    faqs: [
      { question: '¿Puedo gestionar varios barberos con agendas independientes?', answer: 'Sí. Cada barbero tiene su propia agenda con su disponibilidad. El cliente elige al profesional que prefiere.' },
      { question: '¿Mis clientes tienen que descargarse una app?', answer: 'No. Reservan desde cualquier móvil a través de un enlace — sin descargas, sin registro obligatorio.' },
      { question: '¿Cómo aparece mi barbería en ChatGPT?', answer: 'Publicamos artículos y páginas con datos de tu negocio que los modelos de IA indexan para recomendar negocios locales.' },
      { question: '¿Funciona si solo soy yo en la barbería?', answer: 'Sí. Muchos de nuestros clientes son autónomos en solitario. La agenda, los recordatorios y el contenido funcionan igual de bien.' },
    ],
    testimonial: {
      name: 'Javier Moreno',
      business: 'Barbería JM · Málaga',
      quote: 'Antes tardaba 20 minutos al día contestando WhatsApps de reservas. Ahora todo va solo y tengo la agenda llena hasta el viernes.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Agenda online para barbería + marketing automático | MyMarketing',
    seoDesc:  'Reservas 24h, reseñas con IA y posicionamiento en Google y ChatGPT para barberías. Sin secretaria. 15 días gratis, sin tarjeta.',
  },

  dermatologia: {
    sectorId:    'dermatologia',
    label:       'Dermatología',
    icon:        '🩺',
    headline:    'Tu consulta de dermatología visible en Google — y con la agenda llena de primeras visitas',
    subheadline: 'Reservas online 24h, recordatorios automáticos y contenido dermatológico que posiciona tu consulta en Google y en las IAs. Para que te concentres en los pacientes.',
    painPoints: [
      'Pacientes que buscan "dermatologo privado [ciudad]" y llaman a la primera consulta que tiene reserva online — no a la tuya',
      'La agenda tiene huecos porque los pacientes de seguimiento no reciben recordatorio para la revisión',
      'Reseñas sin contestar que generan desconfianza en pacientes nuevos que comparan varias consultas',
      'Tu competencia aparece en ChatGPT cuando alguien pregunta por dermatólogos en tu zona — tú no tienes contenido indexado',
    ],
    features: [
      { icon: '📅', title: 'Reservas online 24h', description: 'Los pacientes reservan primera visita o revisión desde el móvil, incluso fuera de horario. Sin llamadas a la recepción.' },
      { icon: '🔔', title: 'Recordatorios de seguimiento', description: 'El agente detecta pacientes que necesitan revisión según su patología y les envía un recordatorio personalizado.' },
      { icon: '📝', title: 'Contenido dermatológico SEO', description: 'Artículos sobre acné, manchas, lunares, psoriasis… que posicionan tu consulta en Google y que ChatGPT cita como referente local.' },
      { icon: '⭐', title: 'Reputación online gestionada', description: 'El agente responde las reseñas con tono clínico y empático. Tú apruebas cada respuesta o la publica directamente.' },
    ],
    faqs: [
      { question: '¿Puedo diferenciar tipos de visita con duraciones distintas?', answer: 'Sí. Configuras primera visita, revisión, cirugía menor, etc., cada una con su duración y precio.' },
      { question: '¿El contenido que publica el agente es médicamente correcto?', answer: 'El agente genera contenido divulgativo contrastado y firmado con tu nombre. Tú puedes revisarlo antes de publicar.' },
      { question: '¿Cómo aparezco en ChatGPT como dermatólogo en mi ciudad?', answer: 'Publicamos contenido estructurado con tu especialidad, nombre y zona que los modelos de IA indexan y citan en sus respuestas.' },
      { question: '¿Funciona con mi software de historia clínica actual?', answer: 'Sí. MyMarketing se ocupa de la agenda online y el marketing. No sustituye tu software clínico, lo complementa.' },
    ],
    testimonial: {
      name: 'Dra. Carmen Iglesias',
      business: 'Consulta Dermatológica Iglesias · Bilbao',
      quote: 'Empecé a recibir pacientes nuevos que me encontraron en Google buscando "dermatologo Bilbao". Nunca había tenido visibilidad online y ahora es mi principal canal de captación.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para dermatólogos — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de seguimiento y posicionamiento en Google y ChatGPT para consultas de dermatología. 15 días gratis, sin tarjeta.',
  },

  manicura: {
    sectorId:    'manicura',
    label:       'Manicura',
    icon:        '💅',
    headline:    'Llena tu agenda de manicura — y que tus clientas vuelvan cada 3 semanas solas',
    subheadline: 'Reservas online sin interrupciones, fidelización automática que recupera clientas y contenido de nail art que te posiciona en Google y ChatGPT.',
    painPoints: [
      'Gestionas las reservas por Instagram y WhatsApp mientras trabajas — y siempre hay confusiones o dobles citas',
      'Una clienta acaba su manicura, sale encantada, y no vuelve hasta que le surge porque nadie la recordó que en 3 semanas toca',
      'Tu competencia aparece cuando alguien busca "manicura cerca" en Google — tú no tienes presencia online real',
      'Clientas nuevas que buscan en Instagram pero no encuentran forma fácil de reservar y se van a otro sitio',
    ],
    features: [
      { icon: '📅', title: 'Agenda sin interrupciones', description: 'Tus clientas reservan entre sesión y sesión. Sin abrir Instagram ni WhatsApp mientras tienes las manos ocupadas.' },
      { icon: '🔄', title: 'Recordatorio de vuelta cada 3 semanas', description: 'El agente sabe cuándo debería volver cada clienta y le manda un mensaje personalizado. Más recurrencia, más ingresos.' },
      { icon: '🤖', title: 'Visible en Google y ChatGPT', description: 'Publicamos contenido sobre tendencias de nail art, cuidado de uñas y diseños que posicionan tu negocio online.' },
      { icon: '⭐', title: 'Reseñas que atraen clientas nuevas', description: 'El agente responde todas las reseñas de Google. Las clientas nuevas ven que cuidas a tu comunidad y eligen tu negocio.' },
    ],
    faqs: [
      { question: '¿Puedo mostrar mi portfolio de diseños en la página de reservas?', answer: 'Sí. Añades fotos de tus trabajos para que las clientas vean tu estilo antes de reservar.' },
      { question: '¿El recordatorio de vuelta funciona automáticamente?', answer: 'Sí. El agente aprende el ciclo de cada clienta y envía el recordatorio en el momento óptimo — sin que tengas que hacer nada.' },
      { question: '¿Mis clientas tienen que crear una cuenta para reservar?', answer: 'No. Reservan con nombre y teléfono en menos de 1 minuto. Sin contraseñas, sin apps.' },
      { question: '¿Funciona si trabajo sola desde casa?', answer: 'Sí. La mayoría de nuestras clientas de manicura son autónomas. La agenda y los recordatorios se adaptan a tu disponibilidad.' },
    ],
    testimonial: {
      name: 'Lucía Fernández',
      business: 'Nail Studio Lucía · Valencia',
      quote: 'Antes mis clientas volvían cuando se acordaban. Ahora el sistema les recuerda y tengo la agenda completa con tres semanas de antelación.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Agenda online para manicura + fidelización automática | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de vuelta automáticos y posicionamiento en Google y ChatGPT para nail studios. 15 días gratis, sin tarjeta.',
  },

  depilacion: {
    sectorId:    'depilacion',
    label:       'Depilación',
    icon:        '✨',
    headline:    'Llena tu agenda de depilación — y que tus clientas vuelvan cada mes sin que tengas que recordárselo',
    subheadline: 'Reservas 24h, recordatorios automáticos según el ciclo de cada clienta y posicionamiento en Google y ChatGPT. Para que te concentres en el trabajo.',
    painPoints: [
      'Gestionas las citas por WhatsApp entre sesión y sesión y siempre hay alguna confusión o hueco sin cubrir',
      'Una clienta hace su sesión de láser, termina el ciclo y desaparece — nadie la avisa de que toca el mantenimiento',
      'Tu agenda tiene huecos de última hora que no consigues cubrir porque no tienes forma de avisar rápido a las clientas',
      'Clientas nuevas que buscan "depilación láser [ciudad]" en Google y encuentran a la competencia — tú no tienes presencia real',
    ],
    features: [
      { icon: '📅', title: 'Reservas online sin interrupciones', description: 'Tus clientas reservan desde el móvil. Sin WhatsApp, sin llamadas entre sesiones.' },
      { icon: '🔄', title: 'Recordatorios según el ciclo de cada clienta', description: 'El agente sabe si una clienta hace cera mensual o láser trimestral y envía el recordatorio en el momento exacto.' },
      { icon: '🔔', title: 'Lista de espera para huecos de última hora', description: 'Cuando se cancela una cita, el agente avisa automáticamente a las clientas en lista de espera. Sin huecos perdidos.' },
      { icon: '🤖', title: 'Visible en Google y en IAs', description: 'Contenido sobre depilación láser, cera, luz pulsada… que posiciona tu negocio cuando buscan online o preguntan a ChatGPT.' },
    ],
    faqs: [
      { question: '¿Puedo gestionar distintos tipos de depilación con precios diferentes?', answer: 'Sí. Configuras cada servicio — zona, técnica, duración, precio — y las clientas reservan exactamente lo que quieren.' },
      { question: '¿El recordatorio automático sabe cuándo toca la siguiente sesión de láser?', answer: 'Sí. Aprende el ciclo de cada clienta (mensual, bimestral, trimestral) y envía el recordatorio en el momento óptimo.' },
      { question: '¿Cómo me posiciona MyMarketing en ChatGPT?', answer: 'Publicamos contenido sobre depilación con tus datos de negocio y zona. Las IAs lo indexan y te citan como referente local.' },
      { question: '¿Puedo probar MyMarketing sin compromiso?', answer: 'Sí. 15 días completamente gratis, sin tarjeta de crédito.' },
    ],
    testimonial: {
      name: 'Sandra López',
      business: 'Centro Depilación Sandra · Murcia',
      quote: 'La lista de espera automática me ha salvado muchas veces. Cuando se cancela una cita, en 10 minutos ya está cubierta por otra clienta. Cero huecos perdidos.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Agenda online para depilación + recordatorios automáticos | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de ciclo y lista de espera automática para centros de depilación. Posicionamiento en Google y ChatGPT. 15 días gratis.',
  },

  veterinario: {
    sectorId:    'veterinario',
    label:       'Veterinario',
    icon:        '🐾',
    headline:    'Tu clínica veterinaria con la agenda llena — y visible cuando buscan veterinario urgente en tu zona',
    subheadline: 'Reservas online 24h para urgencias y consultas programadas, recordatorios de vacuna y desparasitación, y posicionamiento en Google y ChatGPT.',
    painPoints: [
      'A las 20h alguien busca "veterinario urgencias [ciudad]" y llama a la primera clínica que tiene reserva online — no a la tuya',
      'Pacientes que no reciben recordatorio de la vacuna anual y no vuelven hasta que hay un problema grave',
      'Reseñas emocionales (la muerte de una mascota) sin contestar que generan una imagen pésima a nuevos clientes',
      'La agenda tiene huecos en las tardes que podrían cubrirse con consultas programadas que nadie gestiona',
    ],
    features: [
      { icon: '📅', title: 'Reservas online para consultas y urgencias', description: 'Los dueños reservan desde el móvil en cualquier momento — diferenciando urgencias, consultas programadas y revisiones.' },
      { icon: '🔔', title: 'Recordatorios de vacuna y desparasitación', description: 'El agente recuerda a cada dueño cuándo toca la siguiente vacuna o desparasitación según el historial del animal.' },
      { icon: '⭐', title: 'Gestión empática de reseñas', description: 'El agente responde con empatía y profesionalidad, incluso las reseñas más duras. Tú solo apruebas la respuesta.' },
      { icon: '🤖', title: 'Visible en Google y ChatGPT', description: 'Contenido sobre salud animal, cuidados y prevención que posiciona tu clínica cuando buscan veterinario en tu ciudad.' },
    ],
    faqs: [
      { question: '¿Puedo diferenciar consultas de urgencias en la agenda?', answer: 'Sí. Configuras franjas horarias específicas para urgencias con duración distinta a las consultas programadas.' },
      { question: '¿El recordatorio de vacuna funciona para perros, gatos y otras especies?', answer: 'Sí. Configuras los calendarios de vacunación por especie y el agente envía el recordatorio personalizado a cada dueño.' },
      { question: '¿Cómo aparece mi clínica en ChatGPT cuando buscan veterinario urgente?', answer: 'Publicamos contenido con tus especialidades y zona que las IAs indexan. Las búsquedas de urgencias también las capturamos con contenido específico.' },
      { question: '¿Funciona para clínicas con varios veterinarios?', answer: 'Sí. Cada veterinario tiene su propia agenda y disponibilidad. El dueño puede elegir profesional o dejar que el sistema asigne.' },
    ],
    testimonial: {
      name: 'Dr. Miguel Ángel Torres',
      business: 'Clínica Veterinaria Torres · Sevilla',
      quote: 'Los recordatorios de vacuna han multiplicado las revisiones anuales. Pacientes que antes no volvían hasta que había un problema ahora vienen cada año puntualmente.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para clínicas veterinarias — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de vacuna y desparasitación, y posicionamiento en Google y ChatGPT para veterinarios. 15 días gratis, sin tarjeta.',
  },

  peluqueria_canina: {
    sectorId:    'peluqueria_canina',
    label:       'Peluquería Canina',
    icon:        '🐶',
    headline:    'Llena tu agenda de peluquería canina — y que los dueños vuelvan cada 6 semanas solos',
    subheadline: 'Reservas online 24h, recordatorios automáticos de la siguiente sesión y posicionamiento en Google y ChatGPT para tu peluquería canina.',
    painPoints: [
      'Los dueños te llaman o escriben por WhatsApp para reservar mientras estás con las manos en la bañera de un perro',
      'Un cliente acaba la sesión, queda genial, y no vuelve hasta que el perro está hecho un desastre — nadie le recordó',
      'Tu agenda tiene huecos los martes y miércoles que podrías cubrir si pudieras avisar rápido a los clientes en lista de espera',
      'Cuando alguien busca "peluquería canina [ciudad]" en Google aparece la competencia — tú no tienes presencia online',
    ],
    features: [
      { icon: '📅', title: 'Reservas online sin interrupciones', description: 'Los dueños reservan desde el móvil mientras tú trabajas. Sin llamadas, sin WhatsApps en mitad de un corte.' },
      { icon: '🔄', title: 'Recordatorio de vuelta cada 6 semanas', description: 'El agente sabe cuándo debería volver cada perro y avisa al dueño en el momento exacto. Más recurrencia, menos huecos.' },
      { icon: '🔔', title: 'Lista de espera para huecos de última hora', description: 'Cuando se cancela una cita, el agente avisa automáticamente a los clientes en espera. Cero huecos perdidos.' },
      { icon: '🤖', title: 'Visible en Google y ChatGPT', description: 'Contenido sobre cuidado de razas, cortes y consejos que posiciona tu negocio cuando buscan peluquería canina en tu zona.' },
    ],
    faqs: [
      { question: '¿Puedo configurar precios distintos según la raza o el tamaño del perro?', answer: 'Sí. Configuras el catálogo por tamaño, raza o tipo de servicio. El dueño elige y ve el precio antes de reservar.' },
      { question: '¿El recordatorio de vuelta es automático?', answer: 'Sí. El agente aprende el ciclo de cada perro y envía el recordatorio al dueño en el momento óptimo sin que tengas que hacer nada.' },
      { question: '¿Cómo me posiciona MyMarketing en ChatGPT?', answer: 'Publicamos contenido sobre cuidado canino con tus datos de negocio. Las IAs lo indexan y te citan cuando alguien pregunta por peluquerías caninas en tu ciudad.' },
      { question: '¿Funciona si trabajo sola?', answer: 'Sí. Muchos de nuestros clientes de peluquería canina son autónomos en solitario. La agenda se adapta a tu disponibilidad real.' },
    ],
    testimonial: {
      name: 'Cristina Navarro',
      business: 'Pelukans · Zaragoza',
      quote: 'Antes mis clientes volvían cuando se acordaban. Ahora el sistema les avisa y tengo la agenda llena con dos semanas de antelación. Es un cambio brutal.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Agenda online para peluquería canina + recordatorios automáticos | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de vuelta y lista de espera para peluquerías caninas. Posicionamiento en Google y ChatGPT. 15 días gratis, sin tarjeta.',
  },

  osteopatia: {
    sectorId:    'osteopatia',
    label:       'Osteopatía',
    icon:        '🦴',
    headline:    'Tu consulta de osteopatía visible en Google — y con pacientes que vuelven para el seguimiento',
    subheadline: 'Reservas online 24h, recordatorios de revisión automáticos y contenido sobre osteopatía que te posiciona en Google y en ChatGPT como referente local.',
    painPoints: [
      'Pacientes que se sienten bien tras la sesión y no vuelven para el seguimiento — y luego vuelven con el mismo problema meses después',
      'Pierdes tiempo gestionando citas por teléfono o WhatsApp entre sesión y sesión',
      'Cuando alguien busca "osteópata [ciudad]" en Google aparece la competencia — tú no tienes contenido indexado',
      'No tienes tiempo para explicar en internet qué es la osteopatía y para qué sirve — y eso frena la captación de pacientes nuevos',
    ],
    features: [
      { icon: '📅', title: 'Citas online sin llamadas', description: 'Los pacientes reservan, cancelan y reprograman solos. Tú solo recibes la notificación. Cero interrupciones en sesión.' },
      { icon: '🔄', title: 'Seguimiento automático de pacientes', description: 'El agente detecta pacientes que deberían volver para revisión y les envía un recordatorio personalizado.' },
      { icon: '📝', title: 'Contenido divulgativo sobre osteopatía', description: 'Artículos sobre dolor de espalda, migrañas, lesiones deportivas… que atraen pacientes nuevos desde Google y ChatGPT.' },
      { icon: '⭐', title: 'Reseñas gestionadas con IA', description: 'El agente responde las reseñas de Google con tono profesional. Mejora tu valoración sin dedicar tiempo a ello.' },
    ],
    faqs: [
      { question: '¿Puedo usar MyMarketing si también tengo fisioterapia en la misma consulta?', answer: 'Sí. Configuras los servicios por separado y los pacientes reservan exactamente lo que necesitan.' },
      { question: '¿El contenido que publica el agente está adaptado a la osteopatía?', answer: 'Sí. Los artículos son divulgativos y firmados con tu nombre — nunca hacen promesas terapéuticas no fundadas.' },
      { question: '¿Cómo aparezco en ChatGPT como osteópata en mi ciudad?', answer: 'Publicamos contenido estructurado con tu especialidad, nombre y zona. Las IAs lo indexan y te citan en sus respuestas.' },
      { question: '¿Cuánto tiempo tarda en verse resultados?', answer: 'Los primeros artículos posicionan entre 4 y 8 semanas. Nuestros clientes reportan nuevas consultas orgánicas a partir del segundo mes.' },
    ],
    testimonial: {
      name: 'Álvaro Serrano',
      business: 'Osteopatía Serrano · Granada',
      quote: 'Empecé a recibir pacientes que me encontraron buscando "osteópata Granada" en Google. Antes era imposible — no tenía ni tiempo para crear contenido.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para osteópatas — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, seguimiento automático de pacientes y posicionamiento en Google y ChatGPT para consultas de osteopatía. 15 días gratis, sin tarjeta.',
  },

  nutricion: {
    sectorId:    'nutricion',
    label:       'Nutrición',
    icon:        '🥗',
    headline:    'Tu consulta de nutrición con la agenda llena — y visible cuando buscan nutricionista en tu ciudad',
    subheadline: 'Reservas online discretas, recordatorios de revisión mensual automáticos y contenido nutricional que te posiciona en Google y ChatGPT. Para que te concentres en tus pacientes.',
    painPoints: [
      'Pacientes que empiezan la dieta, ven resultados las primeras semanas y dejan de venir — nadie les recuerda la revisión mensual',
      'Pierdes 20-30 minutos al día gestionando citas por WhatsApp o email que podrían reservarse solas',
      'Cuando alguien busca "nutricionista [ciudad]" o "dietista online" en Google aparece la competencia — tú no tienes visibilidad real',
      'Sabes que publicar recetas o consejos nutricionales te daría pacientes, pero no tienes tiempo de crear ese contenido',
    ],
    features: [
      { icon: '📅', title: 'Reservas online discretas', description: 'Los pacientes reservan modalidad presencial u online sin tener que explicar su situación. Proceso limpio y sin fricción.' },
      { icon: '🔄', title: 'Recordatorio de revisión mensual', description: 'El agente detecta pacientes que no han vuelto para la revisión y les envía un recordatorio personalizado en tu nombre.' },
      { icon: '📝', title: 'Contenido nutricional SEO', description: 'Artículos sobre pérdida de peso, nutrición deportiva, intolerancias… que atraen pacientes nuevos desde Google y ChatGPT.' },
      { icon: '🤖', title: 'Visible en IAs cuando buscan dietista', description: 'Cuando alguien le pregunta a ChatGPT por nutricionistas en tu ciudad, MyMarketing hace que aparezcas como referente.' },
    ],
    faqs: [
      { question: '¿Puedo ofrecer consultas online y presenciales con MyMarketing?', answer: 'Sí. Configuras ambas modalidades con su disponibilidad y precio. El paciente elige al reservar.' },
      { question: '¿Qué tipo de contenido publica el agente?', answer: 'Artículos divulgativos sobre nutrición — recetas saludables, mitos alimentarios, consejos por objetivos — siempre firmados con tu nombre.' },
      { question: '¿Cómo aparezco en ChatGPT como nutricionista en mi zona?', answer: 'Publicamos contenido estructurado con tu especialidad, ciudad y nombre. Las IAs lo indexan y te citan en sus respuestas.' },
      { question: '¿Funciona para dietistas que trabajan solo con pacientes online?', answer: 'Sí. Puedes configurar la agenda solo para consultas online y llegar a pacientes de toda España.' },
    ],
    testimonial: {
      name: 'Elena Castro',
      business: 'Nutrición con Elena · Madrid',
      quote: 'Los recordatorios de revisión han reducido el abandono a la mitad. Los pacientes que antes desaparecían después del mes 2 ahora siguen el plan completo.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Software para nutricionistas — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de revisión y posicionamiento en Google y ChatGPT para dietistas y nutricionistas. 15 días gratis, sin tarjeta.',
  },

  podologia: {
    sectorId:    'podologia',
    label:       'Podología',
    icon:        '🦶',
    headline:    'Tu clínica de podología en Google — y con pacientes de seguimiento que vuelven solos',
    subheadline: 'Reservas online 24h, recordatorios automáticos de revisión y contenido podológico que posiciona tu clínica en Google y en ChatGPT como referente local.',
    painPoints: [
      'Pacientes que se tratan la uña encarnada o la fascitis, se curan y no vuelven para el seguimiento — hasta que vuelve el problema',
      'Cuando alguien busca "podólogo [ciudad]" en Google aparece la competencia — tú no tienes contenido indexado ni reseñas recientes',
      'Gestionas las citas por teléfono y WhatsApp entre consulta y consulta, lo que genera confusiones y tiempo perdido',
      'Pacientes diabéticos que deberían venir trimestralmente pero que nadie les recuerda — y tú no puedes estar encima de todos',
    ],
    features: [
      { icon: '📅', title: 'Reservas online 24h', description: 'Los pacientes reservan desde el móvil, incluso fuera de horario. Sin llamadas, sin WhatsApps.' },
      { icon: '🔔', title: 'Recordatorios de revisión periódica', description: 'El agente recuerda a cada paciente cuándo toca su revisión — trimestral para diabéticos, anual para el resto.' },
      { icon: '📝', title: 'Contenido podológico SEO', description: 'Artículos sobre juanetes, fascitis plantar, uñas encarnadas, pie diabético… que posicionan tu clínica en Google y ChatGPT.' },
      { icon: '⭐', title: 'Reseñas respondidas con IA', description: 'El agente responde todas las reseñas de Google con tono clínico y profesional. Tu valoración mejora sin esfuerzo.' },
    ],
    faqs: [
      { question: '¿Puedo configurar recordatorios distintos para pacientes diabéticos?', answer: 'Sí. Creas el perfil de seguimiento para cada tipo de paciente y el agente envía el recordatorio según el ciclo correspondiente.' },
      { question: '¿El contenido que publica el agente es médicamente correcto?', answer: 'Sí. Los artículos son divulgativos y revisables antes de publicar. Nunca hacen promesas diagnósticas no fundadas.' },
      { question: '¿Cómo aparezco en ChatGPT como podólogo en mi ciudad?', answer: 'Publicamos contenido estructurado con tu especialidad, nombre y zona. Las IAs lo indexan y te citan cuando alguien pregunta por podólogos.' },
      { question: '¿Funciona para clínicas con más de un podólogo?', answer: 'Sí. Cada profesional tiene su agenda independiente y los pacientes pueden elegir con quién reservar.' },
    ],
    testimonial: {
      name: 'Dr. Antonio Vega',
      business: 'Podología Vega · Alicante',
      quote: 'Los recordatorios para pacientes diabéticos han sido un antes y un después. Ahora vienen trimestralmente sin que yo tenga que estar encima de cada uno.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para podólogos — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de revisión periódica y posicionamiento en Google y ChatGPT para clínicas de podología. 15 días gratis, sin tarjeta.',
  },

  micropigmentacion: {
    sectorId:    'micropigmentacion',
    label:       'Micropigmentación',
    icon:        '🎨',
    headline:    'Llena tu agenda de micropigmentación — y aparece en Google y ChatGPT cuando busquen en tu ciudad',
    subheadline: 'Reservas online con consulta previa, recordatorios automáticos de retoque y contenido que posiciona tu trabajo como referente en micropigmentación.',
    painPoints: [
      'Los clientes potenciales buscan "micropigmentación cejas [ciudad]" y encuentran a la competencia — tú no tienes visibilidad real en Google',
      'Gestionas las consultas previas y las reservas por Instagram y WhatsApp y siempre hay malentendidos o citas perdidas',
      'Clientes que hacen la sesión y no vuelven para el retoque de los 30 días porque nadie les recordó',
      'Sin portfolio online visible en Google: tu Instagram existe, pero no posiciona ni atrae clientes sin publicidad de pago',
    ],
    features: [
      { icon: '📅', title: 'Reservas con consulta previa', description: 'Configuras una consulta previa obligatoria antes de la sesión. Los clientes reservan el flujo completo desde el móvil.' },
      { icon: '🔔', title: 'Recordatorio de retoque a los 30 días', description: 'El agente avisa a cada cliente cuando toca el retoque obligatorio. Menos olvidos, mejor resultado final, más satisfacción.' },
      { icon: '🤖', title: 'Visible en Google y ChatGPT', description: 'Contenido sobre micropigmentación de cejas, labios, areola… que posiciona tu trabajo en Google y que ChatGPT cita como referente local.' },
      { icon: '⭐', title: 'Reseñas que construyen confianza', description: 'El agente responde todas las reseñas con cuidado. Las nuevas clientas ven que cuidas el resultado y eligen tu negocio.' },
    ],
    faqs: [
      { question: '¿Puedo configurar una consulta previa obligatoria antes de la sesión?', answer: 'Sí. Creas el flujo: primero consulta gratuita, luego sesión de micropigmentación. El cliente lo reserva todo de golpe.' },
      { question: '¿El recordatorio de retoque funciona automáticamente?', answer: 'Sí. El agente envía el recordatorio de retoque exactamente a los 30 días de la sesión sin que tengas que hacer nada.' },
      { question: '¿Cómo aparezco en ChatGPT como especialista en micropigmentación en mi ciudad?', answer: 'Publicamos contenido sobre tus técnicas, zona y especialidades. Las IAs lo indexan y te citan cuando alguien pregunta.' },
      { question: '¿Puedo mostrar mi portfolio en la página de reservas?', answer: 'Sí. Añades fotos de antes/después para que las clientas vean tu estilo y calidad antes de reservar.' },
    ],
    testimonial: {
      name: 'Nuria Blanco',
      business: 'Micropigmentación by Nuria · Barcelona',
      quote: 'El recordatorio de retoque ha sido clave. Antes la mitad de las clientas olvidaban volver a los 30 días. Ahora viene casi el 90% y el resultado final es mucho mejor.',
    },
    ctaText:  'Probar gratis 15 días',
    seoTitle: 'Agenda online para micropigmentación + SEO local | MyMarketing',
    seoDesc:  'Reservas con consulta previa, recordatorios de retoque y posicionamiento en Google y ChatGPT para micropigmentación. 15 días gratis, sin tarjeta.',
  },

  ortodoncista: {
    sectorId:    'ortodoncista',
    label:       'Ortodoncia',
    icon:        '😁',
    headline:    'Tu clínica de ortodoncia visible en Google — y con la agenda de revisiones siempre llena',
    subheadline: 'Reservas online 24h, recordatorios automáticos de revisión mensual y contenido dental que posiciona tu clínica en Google y ChatGPT. Para que te concentres en los pacientes.',
    painPoints: [
      'Pacientes que empiezan el tratamiento y faltan a revisiones porque nadie les recuerda — lo que alarga el tratamiento y genera fricción',
      'Cuando alguien busca "ortodoncia invisible [ciudad]" o "brackets [ciudad]" en Google aparece la competencia — tú no tienes contenido indexado',
      'La recepcionista pierde horas llamando para confirmar revisiones mensuales — un trabajo que podría ser automático',
      'Pacientes potenciales que piden presupuesto y no reservan primera visita porque el proceso es complicado',
    ],
    features: [
      { icon: '📅', title: 'Reservas online para primeras visitas y revisiones', description: 'Pacientes nuevos y de seguimiento reservan desde el móvil. Con confirmación automática y recordatorio 24h antes.' },
      { icon: '🔔', title: 'Recordatorios automáticos de revisión mensual', description: 'El agente envía el recordatorio de revisión a cada paciente en el momento correcto según su calendario de tratamiento.' },
      { icon: '📝', title: 'Contenido de ortodoncia SEO', description: 'Artículos sobre Invisalign, brackets, ortodoncia lingual, retención… que posicionan tu clínica en Google y ChatGPT.' },
      { icon: '⭐', title: 'Reputación online gestionada con IA', description: 'El agente responde las reseñas de Google con tono clínico y cercano. Tu valoración mejora sin esfuerzo.' },
    ],
    faqs: [
      { question: '¿Puedo configurar el recordatorio según la fase del tratamiento de cada paciente?', answer: 'Sí. Creas los calendarios de revisión por tipo de tratamiento y el agente envía el recordatorio en el momento exacto para cada paciente.' },
      { question: '¿Funciona para clínicas que ofrecen Invisalign y brackets?', answer: 'Sí. Configuras los servicios por separado con su duración y flujo. El paciente reserva primera visita y el sistema hace el resto.' },
      { question: '¿Cómo aparezco en ChatGPT como ortodoncista en mi ciudad?', answer: 'Publicamos contenido sobre tus tratamientos y zona. Las IAs lo indexan y te citan cuando alguien pregunta por ortodoncia invisible o brackets en tu ciudad.' },
      { question: '¿Puedo integrar los recordatorios con los pacientes que ya tengo?', answer: 'Sí. Importamos tu lista de pacientes y configuramos los recordatorios según la fase del tratamiento en la que está cada uno.' },
    ],
    testimonial: {
      name: 'Dr. Pablo Ramos',
      business: 'Clínica Ortodoncia Ramos · Valladolid',
      quote: 'Los recordatorios automáticos han reducido las faltas a revisión de un 25% a menos del 5%. Los tratamientos terminan antes y los pacientes están más satisfechos.',
    },
    ctaText:  'Empieza sin tarjeta',
    seoTitle: 'Software para ortodoncistas — Agenda y recordatorios automáticos | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de revisión mensual y posicionamiento en Google y ChatGPT para clínicas de ortodoncia. 15 días gratis, sin tarjeta.',
  },

  oftalmologia: {
    sectorId:    'oftalmologia',
    label:       'Oftalmología',
    icon:        '👁️',
    headline:    'Tu consulta de oftalmología visible en Google — y con revisiones anuales que no se olvidan',
    subheadline: 'Reservas online 24h, recordatorios automáticos de revisión anual y contenido oftalmológico que posiciona tu consulta en Google y en las IAs como referente local.',
    painPoints: [
      'Pacientes que hacen la revisión anual y no vuelven hasta que tienen un problema — porque nadie les recuerda cuándo toca la siguiente',
      'Cuando alguien busca "oftalmólogo privado [ciudad]" en Google aparece la competencia — tú no tienes contenido que posicione',
      'La agenda tiene huecos en tardes y primeras horas de la mañana que podrían cubrirse con reservas online automáticas',
      'Pacientes con glaucoma o DMAE que necesitan seguimiento frecuente pero que nadie gestiona de forma sistemática',
    ],
    features: [
      { icon: '📅', title: 'Reservas online para revisiones y urgencias', description: 'Los pacientes reservan desde el móvil — primera visita, revisión anual, urgencia ocular — incluso fuera de horario.' },
      { icon: '🔔', title: 'Recordatorios de revisión anual o periódica', description: 'El agente recuerda a cada paciente cuándo toca su revisión — anual para adultos, más frecuente para pacientes con patología.' },
      { icon: '📝', title: 'Contenido oftalmológico SEO', description: 'Artículos sobre cataratas, miopía, glaucoma, cirugía láser… que posicionan tu consulta en Google y que ChatGPT cita como referente.' },
      { icon: '⭐', title: 'Reseñas respondidas con IA', description: 'El agente responde las reseñas con tono clínico y empático. Mejora tu valoración media sin dedicar tiempo a ello.' },
    ],
    faqs: [
      { question: '¿Puedo configurar frecuencias de revisión distintas para glaucoma, DMAE y pacientes sanos?', answer: 'Sí. Creas perfiles de seguimiento por patología y el agente envía los recordatorios según la frecuencia de cada tipo de paciente.' },
      { question: '¿El sistema funciona para consultas con óptica integrada?', answer: 'Sí. Configuras los servicios por separado — consulta médica, adaptación de lentillas, revisión de gafa — con sus duraciones y precios.' },
      { question: '¿Cómo aparezco en ChatGPT como oftalmólogo en mi ciudad?', answer: 'Publicamos contenido sobre tus especialidades y zona. Las IAs lo indexan y te citan cuando alguien pregunta por oftalmólogos privados en tu área.' },
      { question: '¿Funciona para clínicas con varios oftalmólogos y especialidades distintas?', answer: 'Sí. Cada médico tiene su agenda independiente y los pacientes pueden reservar con el especialista que necesitan.' },
    ],
    testimonial: {
      name: 'Dra. Isabel Romero',
      business: 'Clínica Oftalmológica Romero · Córdoba',
      quote: 'Los recordatorios de revisión anual han cambiado todo. Pacientes que antes no volvían hasta que tenían un problema ahora vienen cada año puntualmente. Y el volumen de primeras visitas ha subido gracias al SEO.',
    },
    ctaText:  'Empieza gratis 15 días',
    seoTitle: 'Software para oftalmólogos — Agenda online y SEO local | MyMarketing',
    seoDesc:  'Reservas 24h, recordatorios de revisión periódica y posicionamiento en Google y ChatGPT para consultas de oftalmología. 15 días gratis, sin tarjeta.',
  },
}

/** Sectores disponibles como landings de sector */
export const SECTOR_LANDING_IDS = Object.keys(SECTOR_CONTENT)
