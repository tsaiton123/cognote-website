import { BASE_URL } from '@/lib/seo'

interface FaqItem {
  q: string
  a: string
}

const APP_STORE_URL = 'https://apps.apple.com/us/app/cognote-ai/id6757509618'

export default function JsonLd({
  locale,
  description,
  faqs,
}: {
  locale: string
  description: string
  faqs: FaqItem[]
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cognote',
    url: BASE_URL,
    email: 'support@cognote.app',
    sameAs: [APP_STORE_URL],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cognote',
    url: BASE_URL,
    inLanguage: locale,
    description,
    publisher: {
      '@type': 'Organization',
      name: 'Cognote',
      url: BASE_URL,
    },
  }

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Cognote',
    operatingSystem: 'iOS',
    applicationCategory: 'EducationApplication',
    url: APP_STORE_URL,
    inLanguage: locale,
    description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Cognote',
      url: BASE_URL,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
