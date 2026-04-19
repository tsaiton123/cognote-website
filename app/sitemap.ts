import type { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'
import { routing } from '@/i18n/routing'
import { BASE_URL, getLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routing.locales.flatMap((locale) => [
    {
      url: getLocalizedUrl(locale),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
      alternates: {
        languages: getLanguageAlternates(),
      },
    },
    {
      url: getLocalizedUrl(locale, '/blog'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: getLanguageAlternates('/blog'),
      },
    },
    {
      url: getLocalizedUrl(locale, '/privacy'),
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: getLanguageAlternates('/privacy'),
      },
    },
  ])

  const blogPosts = routing.locales.flatMap((locale) =>
    posts.map((post) => ({
      url: getLocalizedUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: getLanguageAlternates(`/blog/${post.slug}`),
      },
    }))
  )

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...staticRoutes,
    ...blogPosts,
  ]
}
