import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useFormatter } from 'next-intl'
import { posts } from '@/lib/posts'
import { getLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogPage' })
  return {
    title: `${t('headline')} — Cognote`,
    description: 'Study tips, feature guides, and updates from the Cognote team.',
    alternates: {
      canonical: getLocalizedUrl(locale, '/blog'),
      languages: getLanguageAlternates('/blog'),
    },
    openGraph: {
      type: 'website',
      url: getLocalizedUrl(locale, '/blog'),
      title: `${t('headline')} — Cognote`,
      description: 'Study tips, feature guides, and updates from the Cognote team.',
      siteName: 'Cognote',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Cognote blog',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('headline')} — Cognote`,
      description: 'Study tips, feature guides, and updates from the Cognote team.',
      images: ['/og-image.png'],
    },
  }
}

const sorted = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

function BlogList({ t }: { t: Awaited<ReturnType<typeof getTranslations>> }) {
  const format = useFormatter()

  return (
    <div className="space-y-0">
      {sorted.map((post, i) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex flex-col py-8 transition-colors"
          style={{
            borderTop: i === 0 ? '1px solid rgba(255,255,255,0.08)' : undefined,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <time
            className="text-xs font-mono uppercase tracking-widest mb-3"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            {format.dateTime(new Date(post.date), { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
          <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">{post.excerpt}</p>
          <span
            className="mt-4 text-sm font-medium"
            style={{ color: 'rgba(212,96,26,0.7)' }}
          >
            {t('readMore')}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blogPage' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-16 transition-colors"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {tNav('backToCognote')}
        </Link>

        <p
          className="text-sm font-mono uppercase tracking-widest mb-3"
          style={{ color: 'rgba(212,96,26,0.8)' }}
        >
          {t('eyebrow')}
        </p>
        <h1 className="text-5xl font-bold text-white mb-16">{t('headline')}</h1>

        <BlogList t={t} />
      </div>
    </main>
  )
}
