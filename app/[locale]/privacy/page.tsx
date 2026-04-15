import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  return {
    title: t('headline'),
    alternates: { canonical: `https://cognote-ai.com/${locale}/privacy` },
  }
}

export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  const tFooter = await getTranslations({ locale, namespace: 'footer' })

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
          {tNav('back')}
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 md:px-0 py-20">
        <p className="text-sm font-mono uppercase tracking-widest mb-4" style={{ color: 'rgba(46,111,212,0.8)' }}>
          {t('eyebrow')}
        </p>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">{t('headline')}</h1>
        <p className="text-sm mb-16" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {t('lastUpdated')}
        </p>

        <div className="prose-content space-y-8 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s1Title')}</h2>
            <p>{t('s1')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s2Title')}</h2>
            <p>{t('s2')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s3Title')}</h2>
            <p>{t('s3')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s4Title')}</h2>
            <p>{t('s4')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s5Title')}</h2>
            <p>{t('s5')}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">{t('s6Title')}</h2>
            <p>{t('s6')}</p>
          </section>

          <div
            className="mt-16 pt-8 text-base"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)' }}
          >
            {t('agreement')}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 text-sm mt-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}
      >
        <span>{tFooter('copyright', { year: new Date().getFullYear() })}</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">{tFooter('privacy')}</Link>
          <a href="mailto:support@cognote.app" className="hover:text-white transition-colors">{tFooter('support')}</a>
        </div>
      </footer>
    </main>
  )
}
