import { routing } from '@/i18n/routing'

export const BASE_URL = 'https://cognote-ai.com'

export function getLocalizedUrl(locale: string, path = ''): string {
  const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : ''
  return `${BASE_URL}/${locale}${normalizedPath}`
}

export function getLanguageAlternates(path = ''): Record<string, string> {
  return {
    'x-default': BASE_URL,
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, getLocalizedUrl(locale, path)])
    ),
  }
}
