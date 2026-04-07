import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { posts, getPost } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Cognote`,
    description: post.excerpt,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-24">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-16 transition-colors"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All articles
        </Link>

        <time
          className="text-xs font-mono uppercase tracking-widest"
          style={{ color: 'rgba(212,96,26,0.8)' }}
        >
          {formatDate(post.date)}
        </time>
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
