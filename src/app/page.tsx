import { redirect } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

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
export default function RootPage() {
  const locale = navigator.language.split('-')[0] as typeof supportedLocales[number];
  const supportedLocales = routing.locales;
  if (supportedLocales.includes(locale)) {
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
