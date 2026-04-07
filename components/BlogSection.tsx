import Link from 'next/link'
import { getLatestPosts } from '@/lib/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogSection() {
  const posts = getLatestPosts(3)

  return (
    <section
      className="max-w-6xl mx-auto px-6 md:px-0 py-24"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p
            className="text-sm font-mono uppercase tracking-widest mb-3"
            style={{ color: 'rgba(212,96,26,0.8)' }}
          >
            Blog
          </p>
          <h2 className="text-4xl font-bold text-white">Latest articles</h2>
        </div>
        <Link
          href="/blog"
          className="text-sm font-medium transition-colors"
          style={{ color: 'rgba(212,96,26,0.8)' }}
        >
          View all →
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl p-6 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <time
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {formatDate(post.date)}
            </time>
            <h3
              className="text-lg font-semibold text-white leading-snug mb-3 group-hover:text-orange-400 transition-colors"
            >
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">
              {post.excerpt}
            </p>
            <span
              className="mt-5 text-sm font-medium transition-colors"
              style={{ color: 'rgba(212,96,26,0.7)' }}
            >
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
