import Link from 'next/link'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'

const FEATURES = [
  {
    title: 'Find any word\nyou ever wrote.',
    subtitle: 'Handwriting Search',
    description:
      'Type a keyword and Cognote instantly searches through all your handwritten notes — no scanning, no manual tagging. It just works.',
    videoSrc: '/videos/handwriting-search.mp4',
    align: 'left' as const,
  },
  {
    title: 'Turn your board\ninto clean notes.',
    subtitle: 'Board to Note',
    description:
      'Photograph a whiteboard or chalkboard and Cognote converts it into a structured, searchable note. Never lose a lecture again.',
    videoSrc: '/videos/board-to-note.mp4',
    align: 'right' as const,
  },
  {
    title: 'Ask anything\nabout your notes.',
    subtitle: 'Ask AI',
    description:
      "Stuck on a concept? Ask AI to explain, solve, or expand on what you've written. It reads your notes and answers in context.",
    videoSrc: '/videos/ask-ai.mp4',
    align: 'left' as const,
  },
]

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />

      {/* Feature anchor */}
      <div id="features" />

      {FEATURES.map((feature, i) => (
        <FeatureSection
          key={i}
          index={i}
          title={feature.title}
          subtitle={feature.subtitle}
          description={feature.description}
          videoSrc={feature.videoSrc}
          align={feature.align}
        />
      ))}

      {/* CTA */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,96,26,0.08) 0%, transparent 70%)',
          }}
        />
        <p className="text-sm font-mono uppercase tracking-widest" style={{ color: 'rgba(212,96,26,0.8)' }}>
          Get started
        </p>
        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white max-w-xl leading-tight">
          Ready for your edge?
        </h2>
        <p className="mt-5 text-lg text-gray-400 max-w-md">
          Join thousands of students who study smarter with Cognote.
        </p>
        <a
          href="https://apps.apple.com/us/app/cognote-ai/id6757509618"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #D4601A, #B04A10)',
            boxShadow: '0 0 40px rgba(212,96,26,0.3)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on the App Store
        </a>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 text-sm"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}
      >
        <span>© {new Date().getFullYear()} Cognote. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="mailto:support@cognote.app" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </main>
  )
}
