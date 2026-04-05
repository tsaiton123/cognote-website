import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const BASE_URL = 'https://cognote-ai.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Cognote — AI Note-Taking App for Students',
    template: '%s | Cognote',
  },
  description:
    'Cognote is the AI-powered note-taking app that lets you search your handwriting, convert whiteboards into notes, and ask AI about anything you wrote. Your secret edge over your classmates.',
  keywords: [
    'AI note taking app',
    'handwriting search',
    'student note app',
    'whiteboard to notes',
    'AI study tool',
    'note taking for students',
    'searchable handwritten notes',
  ],
  authors: [{ name: 'Cognote' }],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Cognote',
    title: 'Cognote — AI Note-Taking App for Students',
    description:
      'Search your handwriting, convert whiteboards, and ask AI about your notes. The smarter way to study.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cognote — AI Note-Taking App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognote — AI Note-Taking App for Students',
    description:
      'Search your handwriting, convert whiteboards, and ask AI about your notes.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
        <Analytics />
        {/* Google Ads tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18002445445"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18002445445');
          `}
        </Script>
      </body>
    </html>
  )
}
