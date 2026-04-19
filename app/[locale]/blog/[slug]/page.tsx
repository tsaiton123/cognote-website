import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { useFormatter } from 'next-intl'
import { posts, getPost, type Locale, type Post } from '@/lib/posts'
import { routing } from '@/i18n/routing'
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd'
import { getLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    posts.map((p) => ({ locale, slug: p.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getPost(locale as Locale, slug)
  if (!post) return {}

  const url = getLocalizedUrl(locale, `/blog/${slug}`)

  return {
    title: `${post.title} | Cognote`,
    description: post.excerpt,
    alternates: {
      canonical: url,
      languages: getLanguageAlternates(`/blog/${slug}`),
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      siteName: 'Cognote',
      publishedTime: post.date,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/og-image.png'],
    },
  }
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let key = 0

  for (const line of lines) {
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-10 mb-4">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={key++} className="text-gray-400 leading-relaxed ml-4 list-disc">
          <span dangerouslySetInnerHTML={{ __html: renderInline(line.slice(2)) }} />
        </li>
      )
    } else if (line.match(/^\d+\. /)) {
      const text = line.replace(/^\d+\. /, '')
      elements.push(
        <li key={key++} className="text-gray-400 leading-relaxed ml-4 list-decimal">
          <span dangerouslySetInnerHTML={{ __html: renderInline(text) }} />
        </li>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={key++} className="h-2" />)
    } else {
      elements.push(
        <p key={key++} className="text-gray-400 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: renderInline(line) }} />
        </p>
      )
    }
  }

  return elements
}

function renderInline(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
}

function PostContent({ post }: { post: Post }) {
  const format = useFormatter()

  return (
    <time
      className="text-xs font-mono uppercase tracking-widest"
      style={{ color: 'rgba(212,96,26,0.8)' }}
    >
      {format.dateTime(new Date(post.date), { month: 'long', day: 'numeric', year: 'numeric' })}
    </time>
  )
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getPost(locale as Locale, slug)
  if (!post) notFound()

  const tNav = await getTranslations({ locale, namespace: 'nav' })

  return (
    <main className="bg-black text-white min-h-screen">
      <BlogPostingJsonLd locale={locale as Locale} post={post} />
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-16 transition-colors"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {tNav('allArticles')}
        </Link>

        <PostContent post={post} />
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight mb-10">
          {post.title}
        </h1>

        <div
          className="prose-custom space-y-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}
        >
          {renderContent(post.content)}
        </div>
      </div>
    </main>
  )
}
