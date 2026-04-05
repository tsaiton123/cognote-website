const BASE_URL = 'https://cognote-website.vercel.app'
const APP_STORE_URL = 'https://apps.apple.com/us/app/cognote-ai/id6757509618'

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Cognote',
  operatingSystem: 'iOS',
  applicationCategory: 'EducationApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  url: APP_STORE_URL,
  description:
    'AI-powered note-taking app for students. Search handwritten notes instantly, convert whiteboards to structured notes, and ask AI about your content.',
  author: {
    '@type': 'Organization',
    name: 'Cognote',
    url: BASE_URL,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does Cognote handwriting search work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cognote uses on-device OCR to index everything you write. Just type a keyword and it instantly finds matching handwritten notes — no scanning or manual tagging needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Cognote convert whiteboard photos into notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Board to Note feature lets you photograph any whiteboard or chalkboard and converts it into a clean, searchable digital note.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI features does Cognote have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cognote uses Google Gemini AI to let you ask questions about your notes, get explanations, solve problems, and more — all in context with what you wrote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Cognote free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cognote has a free tier that lets you create up to 3 notes. Paid plans (Basic and Pro) unlock unlimited notes, AI features, and cloud sync.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Cognote work offline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Notes and handwriting search work fully offline. AI features require an internet connection.',
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <>
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
