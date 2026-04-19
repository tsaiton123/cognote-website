import { BASE_URL, getLocalizedUrl } from '@/lib/seo'
import type { Locale, Post } from '@/lib/posts'

export default function BlogPostingJsonLd({
  locale,
  post,
}: {
  locale: Locale
  post: Post
}) {
  const postUrl = getLocalizedUrl(locale, `/blog/${post.slug}`)
  const blogUrl = getLocalizedUrl(locale, '/blog')
  const homeUrl = getLocalizedUrl(locale)

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    mainEntityOfPage: postUrl,
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
    isPartOf: {
      '@type': 'Blog',
      name: 'Cognote Blog',
      url: blogUrl,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Cognote',
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'zh-TW' ? '部落格' : 'Blog',
        item: blogUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
