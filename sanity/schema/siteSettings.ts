import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del sitio',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción del sitio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ogImage',
      title: 'Imagen OG por defecto',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
