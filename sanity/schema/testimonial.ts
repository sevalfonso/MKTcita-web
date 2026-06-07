/**
 * schema/testimonial.ts — PA-013
 * Schema de Sanity para testimonios de clientes de MyMarketing.
 * Sustituye los datos estáticos de src/config/testimonials.ts
 */
import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name:  'testimonial',
  title: 'Testimonios',
  type:  'document',
  fields: [
    defineField({
      name:  'name',
      title: 'Nombre',
      type:  'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name:  'role',
      title: 'Profesión',
      type:  'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name:  'location',
      title: 'Ciudad',
      type:  'string',
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name:    'avatarColor',
      title:   'Color del avatar (hex)',
      type:    'string',
      initialValue: '#3B5BFC',
      validation: (Rule) =>
        Rule.required()
          .regex(/^#[0-9a-fA-F]{6}$/, { name: 'hex color', invert: false })
          .error('Debe ser un color hexadecimal válido, ej: #3B5BFC'),
    }),
    defineField({
      name:  'quote',
      title: 'Testimonio',
      type:  'text',
      rows:  4,
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name:         'order',
      title:        'Orden de visualización',
      type:         'number',
      initialValue: 10,
      validation:   (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
    }),
  },
  orderings: [
    { title: 'Orden', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
