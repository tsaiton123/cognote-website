import { getTranslations } from 'next-intl/server'
import AppStoreButton from '@/components/AppStoreButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default async function ReferralLandingPage({
  params,
}: {
  params: Promise<{ locale: string; code: string }>
}) {
  const { code } = await params
  const t = await getTranslations('referral')
  const safeCode = code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 32)

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-white">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          {t('eyebrow')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-6 leading-tight">
          {t('headline')}
        </h1>
        <p className="text-lg text-neutral-600 mb-10">{t('subheadline')}</p>

        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 mb-10">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
            {t('codeLabel')}
          </p>
          <p className="text-2xl font-mono font-semibold text-neutral-900 tracking-wider">
            {safeCode}
          </p>
        </div>

        <AppStoreButton
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full font-medium transition"
        />

        <p className="text-sm text-neutral-500 mt-8">{t('howItWorks')}</p>
      </div>
    </main>
  )
}
