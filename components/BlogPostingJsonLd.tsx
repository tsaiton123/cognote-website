import { BASE_URL } from '@/lib/seo'
import type { Post } from '@/lib/posts'

export default function BlogPostingJsonLd({ post }: { post: Post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Cognote',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cognote',
      url: BASE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
