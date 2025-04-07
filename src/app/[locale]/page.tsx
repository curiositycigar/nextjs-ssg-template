import { Metadata } from 'next';
import IndexPageClient from './page-client';
import { routing } from '@/i18n/routing';

export async function generateMetadata(
  { params }: {
    params: Promise<{ locale: string }>
  },
): Promise<Metadata> {
  // read route params
  const { locale } = await params

  return {
    metadataBase: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL) : null,
    title: 'Z Medical - Leading Healthcare Solutions',
    description: 'Z Medical provides innovative healthcare solutions and medical services. Discover how we can help improve your healthcare experience.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'x-default': `/${routing.defaultLocale}`,
        ...Object.fromEntries(
          routing.locales.map(locale => [locale, `/${locale}`])
        ),
      },
    },
    openGraph: {
      title: 'Z Medical - Leading Healthcare Solutions',
      description: 'Z Medical provides innovative healthcare solutions and medical services.',
      url: '/',
      images: '/images/logo.png',
      type: 'website',
    },
  }
}

export default function IndexPage() {
  return <IndexPageClient />
}
