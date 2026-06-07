/**
 * schema/pricingPlan.ts — PA-013
 * Schema de Sanity para los planes de precios del SaaS.
 * Sustituye los precios hardcodeados en los componentes de la landing.
 */
import { defineType, defineField } from 'sanity'

export const pricingPlan = defineType({
  name:  'pricingPlan',
  title: 'Planes de precios',
  type:  'document',
  fields: [
    defineField({
      name:  'name',
      title: 'Nombre del plan',
      type:  'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name:  'price',
      title: 'Precio mensual (€/mes)',
      type:  'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name:        'yearlyPrice',
      title:       'Precio anual (€/año)',
      type:        'number',
      description: 'Opcional. Si se rellena, se muestra la opción de pago anual.',
      validation:  (Rule) => Rule.positive(),
    }),
    defineField({
      name:  'description',
      title: 'Descripción corta',
      type:  'string',
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name:  'features',
      title: 'Características incluidas',
      type:  'array',
      of:    [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name:         'highlighted',
      title:        '¿Es el plan recomendado?',
      type:         'boolean',
      initialValue: false,
      description:  'Marcará este plan con el badge "Más popular".',
    }),
    defineField({
      name:         'ctaLabel',
      title:        'Texto del botón',
      type:         'string',
      initialValue: 'Empezar gratis',
      validation:   (Rule) => Rule.required().max(40),
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
    select: { title: 'name', price: 'price' },
    prepare: ({ title, price }) => ({
      title,
      subtitle: `${price} €/mes`,
    }),
  },
  orderings: [
    { title: 'Precio', name: 'priceAsc', by: [{ field: 'price', direction: 'asc' }] },
    { title: 'Orden', name: 'orderAsc',  by: [{ field: 'order', direction: 'asc' }] },
  ],
})
