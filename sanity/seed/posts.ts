// Seed data para importar al estudio de Sanity mediante la CLI:
// npx sanity dataset import <export-file> production
// O usar directamente en el Sanity Studio pegando como documento.

export const SEED_POSTS = [
  {
    _type: 'post',
    title: 'Cómo conseguir más clientes para tu clínica de fisioterapia sin gastar en publicidad',
    slug: { _type: 'slug', current: 'mas-clientes-fisioterapia-sin-publicidad' },
    sector: 'fisioterapia',
    excerpt:
      'La mayoría de fisioterapeutas pierde clientes no por falta de calidad, sino por falta de visibilidad. Te explicamos cómo conseguir nuevos pacientes usando herramientas que ya existen, sin invertir en publicidad.',
    seoTitle: 'Más clientes para tu clínica de fisioterapia sin gastar en publicidad',
    seoDescription:
      'Guía práctica para fisioterapeutas que quieren llenar su agenda sin pagar publicidad. Reputación en Google, IA y recordatorios automáticos.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2025-03-01').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Si tienes una clínica de fisioterapia, probablemente ya sabes que la publicidad de pago —Google Ads, redes sociales— puede ser cara y difícil de gestionar sin conocimientos especializados. La buena noticia es que la mayoría de los nuevos pacientes de una clínica local llegan por tres vías que no cuestan dinero: las recomendaciones, las búsquedas en Google y, cada vez más, las preguntas a las IAs.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Por qué Google sigue siendo el primer paso' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Cuando alguien tiene una lumbalgia y necesita un fisioterapeuta, lo primero que hace es buscar en Google "fisioterapeuta cerca de mí" o "clínica fisioterapia [ciudad]". Si tu ficha de Google Business Profile no está bien optimizada —con fotos actualizadas, horario correcto, descripción detallada y reseñas recientes—, simplemente no existes para esa persona.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'El algoritmo de Google Maps favorece los negocios con más reseñas, más recientes y con mayor interacción. Un fisioterapeuta con 40 reseñas con media 4.8 y respuestas personalizadas a cada una aparecerá antes que uno con 10 reseñas de hace dos años y sin responder.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Las reseñas son el activo más infrautilizado' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La mayoría de los fisioterapeutas saben que las reseñas son importantes, pero no tienen un sistema para conseguirlas. El problema no es la calidad del servicio —que suele ser alta—, sino que pedir una reseña cara a cara resulta incómodo y nadie lo hace de forma sistemática.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La solución es automática: enviar un mensaje al paciente 24 horas después de la cita agradeciéndole su visita y pidiéndole que comparta su experiencia en Google. Un mensaje personalizado, breve y con el enlace directo al formulario de reseñas. La tasa de conversión de este tipo de mensajes supera el 30% cuando se hace bien.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El fenómeno de las IAs: una oportunidad que pocos están aprovechando' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Desde 2024, un número creciente de personas le pregunta directamente a ChatGPT, Claude, Gemini o Perplexity "¿qué fisioterapeuta me recomiendas en [ciudad]?". Estas IAs responden basándose en la información que encuentran sobre los negocios en internet.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Para que una IA te recomiende necesitas contenido textual claro sobre tu especialidad, tu ubicación y tu método. Artículos que responden preguntas que los pacientes hacen a las IAs —como "¿cuántas sesiones necesito para una contractura?" o "¿qué fisioterapeuta trata mejor las hernias discales?"— son exactamente el tipo de contenido que los modelos de lenguaje utilizan para construir sus respuestas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El recordatorio automático: la cita que no se olvida' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las ausencias sin aviso son uno de los mayores problemas de una clínica de fisioterapia. Cada no-show son 30-60 minutos perdidos que no se pueden recuperar. Un simple recordatorio por WhatsApp o SMS 24 horas antes de la cita reduce las ausencias entre un 40% y un 60%. No es tecnología cara ni complicada: es un mensaje automático con el nombre del paciente, el día y la hora.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Un resumen: qué funciona sin publicidad' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Conseguir nuevos pacientes sin publicidad no es imposible ni complicado. Requiere constancia en cuatro cosas: mantener el perfil de Google actualizado y con reseñas recientes; tener un sistema de recordatorios que reduzca los no-shows; generar contenido que responda las preguntas que tus pacientes hacen en Google y en las IAs; y pedir reseñas de forma sistemática y automática después de cada visita.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'MyMarketing hace exactamente eso: un equipo de cuatro agentes de IA que trabajan de forma autónoma para que tu clínica sea visible donde tus futuros pacientes te buscan, mientras tú te centras en tratarlos. 15 días gratis, sin tarjeta de crédito, para que lo compruebes tú mismo.' }],
      },
    ],
  },

  {
    _type: 'post',
    title: 'Por qué tu peluquería no aparece en ChatGPT y cómo solucionarlo',
    slug: { _type: 'slug', current: 'peluqueria-no-aparece-chatgpt-solucion' },
    sector: 'peluqueria',
    excerpt:
      'ChatGPT, Gemini y otras IAs ya responden preguntas como "¿dónde me corto el pelo en Madrid?". Si tu peluquería no aparece en esas respuestas, estás perdiendo clientes. Así se soluciona.',
    seoTitle: 'Tu peluquería no aparece en ChatGPT: cómo solucionarlo',
    seoDescription:
      'Guía para que tu peluquería aparezca cuando alguien le pregunta a ChatGPT, Gemini o cualquier IA. Posicionamiento en IAs para peluquerías.',
    author: 'Equipo MyMarketing',
    readingTime: 6,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-08').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Imagina esta escena: una persona llega a tu ciudad de visita y le pregunta a ChatGPT "¿dónde me puedo cortar el pelo bien en [tu ciudad]?". ChatGPT da tres recomendaciones. La tuya no está. Esa persona llama a una de las tres que aparecen. Tú no sabes que eso ha pasado. Pero está pasando cada día, y va a pasar cada vez más.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Por qué algunas peluquerías aparecen y otras no?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Los modelos de lenguaje como ChatGPT, Claude, Gemini o Perplexity no tienen una base de datos de negocios locales como la tiene Google Maps. Lo que hacen es procesar textos de internet y construir respuestas a partir de lo que encuentran. Si no hay información suficiente y bien estructurada sobre tu peluquería en internet, la IA simplemente no te conoce.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las peluquerías que aparecen en las respuestas de las IAs generalmente tienen: un perfil de Google Business Profile bien mantenido y con reseñas recientes; artículos o contenido web que habla de sus servicios, su estilo y su zona; y menciones consistentes en múltiples plataformas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Qué tipo de preguntas hacen los clientes a las IAs sobre peluquerías?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las preguntas más comunes que los clientes hacen a las IAs sobre peluquerías son: "¿dónde me corto el pelo bien en [ciudad]?", "¿qué peluquería es buena para cortes con tijera en [barrio]?", "¿hay peluquerías que trabajen bien el cabello rizado en [zona]?", "¿cuánto cuesta un corte de pelo en [ciudad]?", "¿qué peluquerías tienen buenas reseñas en [zona]?".' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Para que la IA te incluya en las respuestas a estas preguntas, necesitas contenido que responda exactamente a esas mismas preguntas desde la perspectiva de tu peluquería. No es publicidad. Es información útil, estructurada y accesible para los crawlers de los modelos de IA.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El papel de las reseñas en el posicionamiento en IAs' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las reseñas en Google no solo sirven para convencer a los clientes que ya te han encontrado. También son una señal de autoridad que los modelos de IA utilizan para evaluar la reputación de un negocio. Una peluquería con 80 reseñas con media 4.9, con respuestas recientes del dueño, transmite a la IA que es un negocio activo, cuidado y valorado por su comunidad.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Conseguir reseñas de forma sistemática —enviando un mensaje a cada cliente después de su visita— es el primer paso para mejorar tu visibilidad tanto en Google como en las IAs.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'La ventaja de actuar ahora' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'En este momento, la gran mayoría de peluquerías en España no están haciendo nada para posicionarse en las IAs. Esto significa que tienes una ventana de oportunidad que no durará mucho: los primeros en aparecer en esas respuestas tienen una ventaja que es muy difícil de revertir una vez establecida.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'MyMarketing tiene un agente dedicado a crear y publicar contenido optimizado para que las IAs conozcan tu peluquería, tu estilo y tu zona. Lo hace cada semana, de forma automática, y nada se publica sin que tú lo apruebes. 15 días gratis para comprobarlo.' }],
      },
    ],
  },

  {
    _type: 'post',
    title: 'Gestión de citas para psicólogos: cómo automatizar sin perder el trato personal',
    slug: { _type: 'slug', current: 'gestion-citas-psicologos-automatizar' },
    sector: 'psicologia',
    excerpt:
      'Automatizar las citas no significa perder la calidez con el paciente. Te explicamos cómo los psicólogos pueden reducir el trabajo administrativo manteniendo la relación de confianza que define su trabajo.',
    seoTitle: 'Gestión de citas para psicólogos: automatizar sin perder el trato personal',
    seoDescription:
      'Cómo los psicólogos pueden automatizar la gestión de citas, recordatorios y comunicación con pacientes sin perder la relación de confianza.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-15').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Para un psicólogo, la relación con el paciente lo es todo. La confianza que se construye en consulta es el fundamento de cualquier proceso terapéutico. Por eso, muchos psicólogos son reacios a automatizar cualquier aspecto de su práctica, por miedo a que esa automatización transmita una frialdad que dañe esa relación.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Es un miedo comprensible pero innecesario. La automatización, bien aplicada, no reemplaza la calidez humana: la libera. Cuando no tienes que gestionar manualmente cada cita, cada recordatorio y cada respuesta a mensajes administrativos, tienes más energía mental y emocional para lo que realmente importa: estar presente para tu paciente.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Qué tareas administrativas se pueden automatizar sin problema?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Hay tareas en la gestión de una consulta de psicología que son puramente logísticas y no tienen ningún componente relacional: confirmación de citas, recordatorios de próximas sesiones, avisos de cancelación, gestión de huecos libres en la agenda. Todas estas tareas se pueden automatizar sin que el paciente pierda ni un gramo de la experiencia de atención personalizada.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El recordatorio: prevenir las ausencias sin llamar a cada paciente' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las ausencias sin aviso son una de las mayores fuentes de frustración para los psicólogos. Una sesión que no se presenta no solo supone una pérdida económica: también rompe el ritmo del proceso terapéutico. Un recordatorio automático personalizado —con el nombre del paciente, el día y la hora— enviado 24 horas antes reduce las ausencias de forma significativa.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'El tono del recordatorio importa. No es una notificación fría de "tienes una cita mañana". Es un mensaje que refleja el cuidado que el psicólogo tiene hacia el paciente: breve, cálido, con el nombre del profesional firmando. Ese detalle marca la diferencia.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'La reserva online: disponibilidad sin interrupciones' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Muchos pacientes potenciales deciden buscar psicólogo en momentos de alta emoción: tarde por la noche, durante un fin de semana difícil, en un momento de crisis. Si en ese momento no pueden concertar una primera consulta porque el teléfono no está disponible, es muy probable que lo dejen para otro día y ese otro día nunca llegue.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un sistema de reserva online disponible las 24 horas captura esas solicitudes en el momento en que el paciente está listo para dar el paso. No reemplaza la llamada de presentación que muchos psicólogos hacen antes de la primera sesión: simplemente asegura que el interés no se pierda.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Visibilidad online: el paciente que te busca en Google o en la IA' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un psicólogo excelente que nadie conoce no puede ayudar a nadie. La visibilidad online —tanto en Google como en las IAs generativas— es el primer paso para que los pacientes que te necesitan puedan encontrarte.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'MyMarketing gestiona de forma automática la agenda, los recordatorios, las reseñas y el contenido de posicionamiento. Todo con tu aprobación y sin que tengas que invertir tiempo en ello. Pruébalo 15 días gratis.' }],
      },
    ],
  },

  {
    _type: 'post',
    title: 'Reputación online para dentistas: guía práctica para conseguir más reseñas en Google',
    slug: { _type: 'slug', current: 'reputacion-online-dentistas-resenas-google' },
    sector: 'dentista',
    excerpt:
      'La reputación online es el primer factor que los pacientes consultan antes de elegir dentista. Esta guía te explica cómo conseguir más reseñas, cómo gestionarlas y cómo convertirlas en nuevos pacientes.',
    seoTitle: 'Reputación online para dentistas: guía para conseguir más reseñas',
    seoDescription:
      'Cómo conseguir más reseñas en Google para tu clínica dental, cómo responderlas y cómo usar tu reputación online para atraer nuevos pacientes.',
    author: 'Equipo MyMarketing',
    readingTime: 8,
    featured: true,
    source: 'manual',
    publishedAt: new Date('2025-03-22').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'El 93% de los pacientes lee reseñas online antes de elegir un nuevo dentista. No es una tendencia: es el nuevo estándar. Y sin embargo, la mayoría de las clínicas dentales tienen una gestión de su reputación online completamente reactiva: responden las reseñas negativas cuando se acuerdan y no hacen nada para conseguir más positivas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Por qué es tan difícil conseguir reseñas?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'El problema no es la calidad del servicio. La mayoría de los pacientes salen satisfechos de la clínica. El problema es que nadie les pide que lo digan. Pedir una reseña cara a cara en la recepción resulta incómodo para el personal y para el paciente. Muchos profesionales lo evitan.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La solución es simple: enviar un mensaje al paciente unas horas después de su cita, con un enlace directo al formulario de reseñas de Google. Personalizado, breve, con el nombre del paciente. Los pacientes satisfechos —que son la mayoría— agradecen que se lo pongas fácil.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Cómo responder las reseñas: el arte de la respuesta correcta' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La respuesta a una reseña positiva no es solo cortesía. Es marketing. Cuando un dentista responde a una reseña positiva, demuestra que se preocupa por sus pacientes, mejora su posicionamiento en Google y transmite una imagen profesional al paciente potencial que está leyendo las reseñas para decidir si llama o no.' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La respuesta a una reseña negativa es todavía más importante. Una respuesta empática, profesional y ofreciendo solución convierte una situación negativa en una demostración pública de la calidad del servicio al cliente. Los pacientes potenciales no esperan que un negocio sea perfecto: esperan que cuando algo falla, se gestione bien.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Las reseñas y el posicionamiento en IAs' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las IAs generativas como ChatGPT, Gemini o Perplexity utilizan las reseñas de Google como una señal de autoridad y relevancia cuando responden preguntas como "¿qué dentista me recomiendas en [ciudad]?". Una clínica dental con muchas reseñas recientes y alta valoración tiene mucha más probabilidad de ser mencionada en esas respuestas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El sistema que lo hace automático' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Gestionar la reputación online de forma consistente requiere sistema. Un mensaje de seguimiento tras cada visita, una alerta cuando llega una reseña nueva, una sugerencia de respuesta personalizada. MyMarketing tiene un agente dedicado exclusivamente a esto: el Gestor de Reputación, que trabaja todos los días para que tu clínica dental tenga la mejor imagen posible cuando alguien te busca en Google o en la IA. 15 días gratis para probarlo.' }],
      },
    ],
  },

  {
    _type: 'post',
    title: 'Cómo un veterinario puede llenar su agenda usando la IA',
    slug: { _type: 'slug', current: 'veterinario-llenar-agenda-ia' },
    sector: 'veterinario',
    excerpt:
      'Los dueños de mascotas buscan veterinarios en Google y cada vez más en las IAs. Esta guía explica cómo una clínica veterinaria puede usar la IA para tener siempre la agenda llena sin gastar en publicidad.',
    seoTitle: 'Cómo un veterinario puede llenar su agenda usando la IA',
    seoDescription:
      'Guía práctica para clínicas veterinarias: cómo usar la inteligencia artificial para conseguir más clientes, mejorar la reputación y llenar la agenda.',
    author: 'Equipo MyMarketing',
    readingTime: 6,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-03-29').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Los dueños de mascotas son un público especialmente fiel: cuando encuentran un buen veterinario, repiten año tras año. El problema es la adquisición: conseguir que ese primer dueño de mascota te elija a ti antes de conocerte. En ese momento, la reputación online y la visibilidad en buscadores e IAs son decisivas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Cómo buscan veterinarios los dueños de mascotas?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las búsquedas más comunes son: "veterinario cerca de mí", "veterinario urgencias [ciudad]", "veterinario buenas reseñas [zona]", y cada vez más frecuentemente, preguntas directas a las IAs: "¿qué veterinario me recomiendas en [barrio]?" o "¿dónde llevo a mi gato al veterinario en [ciudad]?".' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Para cada una de estas vías, la receta es similar: un perfil de Google Business Profile actualizado y con reseñas recientes, contenido web que responda las preguntas que hacen los dueños de mascotas, y un sistema de reserva disponible a cualquier hora.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El contenido que posiciona a un veterinario en las IAs' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las IAs generativas responden preguntas sobre salud animal con mucha frecuencia: "¿cuándo hay que vacunar a un cachorro?", "¿qué hago si mi gato no come?", "¿cada cuánto tiempo hay que desparasitar a un perro?". Un veterinario que tenga contenido web que responda estas preguntas de forma clara y útil tiene muchas más posibilidades de ser mencionado cuando alguien pregunta a la IA por un veterinario en su zona.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Recordatorios para revisiones y vacunas: fidelización automática' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un veterinario que avisa proactivamente a sus clientes cuando se acerca la fecha de la revisión anual o de la próxima vacunación tiene una tasa de retención mucho más alta que uno que espera a que el dueño lo recuerde. Estos recordatorios automáticos no solo fidelizan: también llenan la agenda en períodos bajos.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'La IA como equipo de marketing' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un veterinario que trabaja solo o con un equipo pequeño no tiene tiempo para gestionar su marketing. MyMarketing pone a disposición de cualquier clínica veterinaria un equipo de cuatro agentes de IA que trabajan de forma autónoma: el Estratega analiza el mercado, el Creador de Contenido publica semanalmente, el Gestor de Reputación cuida las reseñas, y el Director envía el resumen semanal. Todo con aprobación humana antes de publicar, todo desde el móvil. 15 días gratis.' }],
      },
    ],
  },

  {
    _type: 'post',
    title: 'Marketing digital para coaches: aparece cuando te buscan en Google y en la IA',
    slug: { _type: 'slug', current: 'marketing-digital-coaches-google-ia' },
    sector: 'coaching',
    excerpt:
      'El mercado del coaching es competitivo y los clientes potenciales buscan en Google y en las IAs. Esta guía te explica cómo posicionarte para que te encuentren cuando te necesitan.',
    seoTitle: 'Marketing digital para coaches: posicionamiento en Google y en la IA',
    seoDescription:
      'Cómo los coaches pueden aparecer en Google, ChatGPT y Gemini cuando sus clientes potenciales buscan servicios de coaching. Guía práctica.',
    author: 'Equipo MyMarketing',
    readingTime: 7,
    featured: false,
    source: 'manual',
    publishedAt: new Date('2025-04-05').toISOString(),
    body: [
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'El coaching es una de las profesiones con mayor crecimiento en España en los últimos años. Y también una de las más competidas online. Cada vez hay más coaches, y la diferenciación en digital —para los que no tienen una gran red de contactos o no invierten en publicidad— es uno de los mayores retos del sector.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: '¿Cómo buscan coach los clientes potenciales?' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Las búsquedas más comunes son: "coach ejecutivo Madrid", "coaching de vida Barcelona", "coach para directivos", "cómo encontrar un buen coach". Y cada vez más frecuentemente, preguntas a las IAs: "¿qué tipo de coach necesito si quiero cambiar de trabajo?" o "¿me recomiendas un coach en [ciudad]?".' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Para un coach, aparecer en esas respuestas requiere dos cosas: autoridad de contenido —artículos que demuestren expertise en una especialidad de coaching— y señales de confianza —reseñas, testimonios, consistencia de marca en todas las plataformas.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'La especialización como ventaja competitiva' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un coach generalista tiene mucha más competencia que uno especializado. "Coach ejecutivo para directivos del sector tecnológico en Madrid" es un nicho mucho más accesible que "coach" a secas. La IA, cuando busca quién recomendar, favorece a los expertos en nichos concretos por encima de los generalistas, porque puede asociar mejor el expertise del profesional con la necesidad del usuario.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'Contenido que posiciona a un coach en las IAs' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Los artículos que mejor funcionan para un coach son los que responden preguntas que sus clientes potenciales hacen a las IAs: "¿cuántas sesiones de coaching necesito para cambiar de carrera?", "¿qué diferencia hay entre un coach y un psicólogo?", "¿cómo sé si necesito un coach ejecutivo?". Este tipo de contenido responde la intención de búsqueda del cliente potencial y construye la autoridad del coach ante los modelos de IA.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'La agenda y los recordatorios en el coaching' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'La mayoría de los coaches gestionan su agenda de forma manual: WhatsApp, emails, llamadas. Cada nuevo cliente potencial que contacta y no recibe respuesta inmediata tiene muchas probabilidades de ir a otro coach. Un sistema de reserva online disponible 24 horas —con confirmación automática y recordatorio previo a la sesión— elimina este problema completamente.' }],
      },
      {
        _type: 'block', style: 'h2',
        children: [{ _type: 'span', text: 'El equipo de marketing que no necesitas contratar' }],
      },
      {
        _type: 'block', style: 'normal',
        children: [{ _type: 'span', text: 'Un coach que trabaja solo no puede permitirse un departamento de marketing. Pero sí puede tener un equipo de agentes de IA que trabajan de forma autónoma para gestionar su reputación, crear contenido de posicionamiento y mantener su agenda llena. Eso es exactamente lo que hace MyMarketing. 15 días gratis para comprobarlo sin compromiso.' }],
      },
    ],
  },
]
