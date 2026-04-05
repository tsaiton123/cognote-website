import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: 'https://cognote-ai.com/privacy' },
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
          Cognote
        </Link>
        <Link
          href="/"
          className="text-sm flex items-center gap-2 transition-colors"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M2 7L6 3M2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 md:px-0 py-20">
        <p className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(46,111,212,0.8)' }}>
          Legal
        </p>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">Privacy Policy</h1>
        <p className="text-sm mb-16" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Last updated: April 2025
        </p>

        <div className="prose-content space-y-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Data Stays on Your Device</h2>
            <p>
              Your notes and drawings are stored locally on your device and are never uploaded to our servers without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">AI Features</h2>
            <p>
              When you use AI features, selected content is securely transmitted to Google's Gemini API for processing and is not retained after the response is generated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">We Don't Sell Your Data</h2>
            <p>
              We do not sell, share, or monetize your personal data or note content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Payments</h2>
            <p>
              Subscription and payment information is handled securely through Apple's App Store and is never accessed or stored by Cognote directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Analytics</h2>
            <p>
              We collect minimal anonymous analytics solely to improve app performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
            <p>
              For users under 13, parental consent is required as per COPPA regulations.
            </p>
          </section>

          <div
            className="mt-16 pt-8 text-base"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
          >
            By using Cognote, you agree to these terms.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 text-sm mt-16"
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
