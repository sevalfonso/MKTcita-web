export const SECTORS = [
  // Salud y bienestar
  { id: 'fisioterapia',      label: 'Fisioterapia',          icon: '🦴', category: 'salud' },
  { id: 'osteopatia',        label: 'Osteopatía',            icon: '🤲', category: 'salud' },
  { id: 'psicologia',        label: 'Psicología',            icon: '🧠', category: 'salud' },
  { id: 'nutricion',         label: 'Nutrición',             icon: '🥗', category: 'salud' },
  { id: 'podologia',         label: 'Podología',             icon: '🦶', category: 'salud' },
  { id: 'logopedia',         label: 'Logopedia',             icon: '🗣️', category: 'salud' },
  { id: 'acupuntura',        label: 'Acupuntura',            icon: '📍', category: 'salud' },
  { id: 'entrenador',        label: 'Entrenador personal',   icon: '💪', category: 'salud' },
  // Estética y belleza
  { id: 'peluqueria',        label: 'Peluquería',            icon: '✂️', category: 'estetica' },
  { id: 'barberia',          label: 'Barbería',              icon: '💈', category: 'estetica' },
  { id: 'estetica',          label: 'Estética',              icon: '✨', category: 'estetica' },
  { id: 'manicura',          label: 'Manicura',              icon: '💅', category: 'estetica' },
  { id: 'micropigmentacion', label: 'Micropigmentación',     icon: '🎨', category: 'estetica' },
  { id: 'depilacion',        label: 'Depilación láser',      icon: '⚡', category: 'estetica' },
  { id: 'tatuajes',          label: 'Tatuajes',              icon: '🖊️', category: 'estetica' },
  // Medicina y odontología
  { id: 'dentista',          label: 'Dentista',              icon: '🦷', category: 'medicina' },
  { id: 'ortodoncista',      label: 'Ortodoncista',          icon: '😁', category: 'medicina' },
  { id: 'medicina-estetica', label: 'Medicina estética',     icon: '💉', category: 'medicina' },
  { id: 'dermatologo',       label: 'Dermatología',          icon: '🔬', category: 'medicina' },
  { id: 'oftalmologo',       label: 'Oftalmología',          icon: '👁️', category: 'medicina' },
  // Mascotas
  { id: 'veterinario',       label: 'Veterinario',           icon: '🐾', category: 'mascotas' },
  { id: 'peluqueria-canina', label: 'Peluquería canina',     icon: '🐶', category: 'mascotas' },
  { id: 'adiestramiento',    label: 'Adiestramiento canino', icon: '🦮', category: 'mascotas' },
  // Educación
  { id: 'academia',          label: 'Academia de idiomas',   icon: '🌍', category: 'educacion' },
  { id: 'clases',            label: 'Clases particulares',   icon: '📚', category: 'educacion' },
  { id: 'musica',            label: 'Escuela de música',     icon: '🎵', category: 'educacion' },
  // Servicios profesionales
  { id: 'coaching',          label: 'Coaching',              icon: '🎯', category: 'profesional' },
  { id: 'psicopedagogia',    label: 'Psicopedagogía',        icon: '📖', category: 'profesional' },
  // Creativos
  { id: 'fotografia',        label: 'Fotografía',            icon: '📷', category: 'creativo' },
  { id: 'video',             label: 'Videomaker',            icon: '🎬', category: 'creativo' },
] as const

export type SectorId = typeof SECTORS[number]['id']
export type SectorCategory = typeof SECTORS[number]['category']
