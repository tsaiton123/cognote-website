import Link from 'next/link'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Hero from '@/components/Hero'
import FeatureSection from '@/components/FeatureSection'
import JsonLd from '@/components/JsonLd'
import AppStoreButton from '@/components/AppStoreButton'
import BlogSection from '@/components/BlogSection'
import { getLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: t('title'),
    alternates: {
      canonical: getLocalizedUrl(locale),
      languages: getLanguageAlternates(),
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  const FEATURES = [0, 1, 2].map((i) => ({
    title: t(`features.${i}.title`),
    subtitle: t(`features.${i}.subtitle`),
    description: t(`features.${i}.description`),
    videoSrc: ['/videos/handwriting-search.mp4', '/videos/board-to-note.mp4', '/videos/ask-ai.mp4'][i],
    align: ['left', 'right', 'left'][i] as 'left' | 'right',
  }))

  const FAQS: { q: string; a: string }[] = t.raw('faq.items')

  return (
    <main className="bg-black text-white">
      <JsonLd
        locale={locale}
        description={t('metadata.description')}
        faqs={FAQS}
      />
      <Hero />

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
          {t('cta.eyebrow')}
        </p>
        <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white max-w-xl leading-tight">
          {t('cta.headline')}
        </h2>
        <p className="mt-5 text-lg text-gray-400 max-w-md">
          {t('cta.subheadline')}
        </p>
        <AppStoreButton
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #D4601A, #B04A10)',
            boxShadow: '0 0 40px rgba(212,96,26,0.3)',
          }}
        />
      </section>

      {/* Blog */}
      <BlogSection />

      {/* FAQ */}
      <section
        className="max-w-3xl mx-auto px-6 md:px-0 py-24"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <p className="text-sm font-mono uppercase tracking-widest mb-4 text-center" style={{ color: 'rgba(46,111,212,0.8)' }}>
          {t('faq.eyebrow')}
        </p>
        <h2 className="text-4xl font-bold text-white text-center mb-14">{t('faq.headline')}</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '1.5rem' }}>
              <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-8 text-sm"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}
      >
        <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          <a href="mailto:support@cognote.app" className="hover:text-white transition-colors">{t('footer.support')}</a>
        </div>
      </footer>
    </main>
  )
}
