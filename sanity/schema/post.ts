import { defineType, defineField } from 'sanity'

const SECTOR_IDS = [
  'fisioterapia', 'osteopatia', 'psicologia', 'nutricion', 'podologia',
  'logopedia', 'acupuntura', 'entrenador', 'peluqueria', 'barberia',
  'estetica', 'manicura', 'micropigmentacion', 'depilacion', 'tatuajes',
  'dentista', 'ortodoncista', 'medicina-estetica', 'dermatologo', 'oftalmologo',
  'veterinario', 'peluqueria-canina', 'adiestramiento', 'academia', 'clases',
  'musica', 'coaching', 'psicopedagogia', 'fotografia', 'video',
] as const

export const post = defineType({
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: SECTOR_IDS.map((id) => ({ title: id, value: id })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumen (máx. 160 caracteres)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Título SEO (máx. 60 caracteres)',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta descripción SEO (máx. 160 caracteres)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen OG (1200x630)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'string',
      initialValue: 'Equipo MyMarketing',
    }),
    defineField({
      name: 'readingTime',
      title: 'Tiempo de lectura (minutos)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(60),
    }),
    defineField({
      name: 'featured',
      title: 'Artículo destacado',
      type: 'boolean',
      initialValue: false,
    }),
    // Preparado para agente A5
    defineField({
      name: 'source',
      title: 'Origen del contenido',
      type: 'string',
      options: {
        list: [
          { title: 'Manual', value: 'manual' },
          { title: 'Agente IA (A5)', value: 'ai_agent' },
        ],
      },
      initialValue: 'manual',
    }),
    defineField({
      name: 'approvedAt',
      title: 'Fecha de aprobación (contenido IA)',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sector',
      media: 'mainImage',
    },
  },
})
