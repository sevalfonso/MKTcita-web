export const AGENTS = [
  {
    emoji: '🔍',
    name: 'El Estratega',
    description: 'Analiza tu mercado y tu competencia cada dos semanas para que siempre estés un paso por delante. Detecta oportunidades antes de que las vea tu competencia.',
    frequency: 'Cada 2 semanas',
    color: 'brand-blue' as const,
    accentColor: '#4285F4',
  },
  {
    emoji: '⭐',
    name: 'El Gestor de Reputación',
    description: 'Revisa tus reseñas de Google cada día. Te alerta de las negativas en tiempo real y te sugiere cómo responder para proteger tu imagen.',
    frequency: 'Cada día',
    color: 'brand-yellow' as const,
    accentColor: '#FBBC05',
  },
  {
    emoji: '✍️',
    name: 'El Creador de Contenido',
    description: 'Escribe posts para tu ficha de Google y tu blog cada semana. Contenido optimizado para que aparezcas cuando alguien te busca en Google, ChatGPT, Claude, Gemini, Perplexity, Grok o cualquier IA.',
    frequency: 'Cada semana',
    color: 'brand-green' as const,
    accentColor: '#34A853',
  },
  {
    emoji: '📊',
    name: 'El Director',
    description: 'Cada lunes por la mañana recibes en tu móvil un resumen de cómo ha ido la semana: citas, reseñas, contenido publicado y qué hay que mejorar.',
    frequency: 'Cada lunes',
    color: 'brand-red' as const,
    accentColor: '#EA4335',
  },
] as const
