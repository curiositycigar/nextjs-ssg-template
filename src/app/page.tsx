import { redirect } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';

/**
 * Entry point for the app.
 * This page is used to redirect the user to the correct locale.
 * Note:
 * In production environment, this should be handled by nginx configuration
 * for better performance and SEO.
 *
 * Nginx configuration example:
 * location = / {
 *   return 301 /en;
 * }
 */
export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL) : null,
  title: 'Z Medical - Leading Healthcare Solutions',
  description: 'Z Medical provides innovative healthcare solutions and medical services. Discover how we can help improve your healthcare experience.',
  alternates: {
    canonical: '/',
    languages: Object.fromEntries(
      routing.locales.map(locale => [locale, `/${locale}`])
    ),
  },
  openGraph: {
    title: 'Z Medical - Leading Healthcare Solutions',
    description: 'Z Medical provides innovative healthcare solutions and medical services.',
    url: '/',
    images: '/images/logo.png',
    type: 'website',
  },
};

export default function RootPage() {
  const locale = navigator.language.split('-')[0];
  const supportedLocales = routing.locales;
  if (supportedLocales.includes(locale as typeof supportedLocales[number])) {
    redirect({
      href: '/',
      locale,
    });
  } else {
    redirect({
      href: '/',
      locale: routing.defaultLocale,
    });
  }
}
