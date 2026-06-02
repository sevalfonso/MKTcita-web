import { Hero } from '@/components/home/Hero'
import { Sectors } from '@/components/home/Sectors'
import { HowItWorks } from '@/components/home/HowItWorks'
import { AIAgents } from '@/components/home/AIAgents'
import { BeforeAfter } from '@/components/home/BeforeAfter'
import { Pricing } from '@/components/home/Pricing'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { FinalCTA } from '@/components/home/FinalCTA'
import { FAQ as faqData } from '@/config/faq'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mymarketing.es'

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'MyMarketing',
      alternateName: 'MyMarketing.es',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.svg`,
        width: 512,
        height: 512,
      },
      description: 'SaaS de marketing autónomo y gestión de citas para profesionales de servicios locales en España. Cuatro agentes de inteligencia artificial que trabajan de forma autónoma para que tu negocio sea visible en Google, ChatGPT, Gemini, Claude, Perplexity y Grok.',
      foundingDate: '2025',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hola@mymarketing.es',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
        areaServed: 'ES',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ES',
        addressLocality: 'España',
      },
      areaServed: {
        '@type': 'Country',
        name: 'España',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#software`,
      name: 'MyMarketing',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '49',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          billingDuration: 'P1M',
        },
      },
      description:
        'SaaS de marketing autónomo y gestión de citas para profesionales de servicios locales en España. Posicionamiento en Google, ChatGPT, Gemini, Claude, Perplexity y Grok.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer.replace(/\n\n/g, ' '),
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Hero />
      <Sectors />
      <HowItWorks />
      <AIAgents />
      <BeforeAfter />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
