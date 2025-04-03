import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://acme.com';
const SUPPORTED_LOCALES = routing.locales;

function getAllRoutes(dir: string = 'src/app'): string[] {
  const routes: string[] = [];
  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip special Next.js directories and API routes
      if (!item.startsWith('api') && !item.startsWith('.') && !item.startsWith('_') && !item.startsWith('@')) {
        // Check if directory contains page.tsx
        if (existsSync(join(fullPath, 'page.tsx'))) {
          // Remove src/app prefix, [locale], and handle nested routes
          const route = fullPath
            .replace('src/app', '')
            .replace(/\/\[locale\]/g, '')
            .replace(/\/page$/i, '') || '/';
          routes.push(route);
        }
        // Recursively check subdirectories
        routes.push(...getAllRoutes(fullPath));
      }
    }
  }

  return routes;
}

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllRoutes();
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each route and locale combination
  for (const route of routes) {
    for (const locale of SUPPORTED_LOCALES) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            // SUPPORTED_LOCALES.filter(l => l !== locale).map(altLocale => [
            //   altLocale,
            //   `${BASE_URL}/${altLocale}${route}`
            // ])
            SUPPORTED_LOCALES.map(altLocale => [
              altLocale,
              `${BASE_URL}/${altLocale}${route}`
            ])
          )
        }
      });
    }
  }

  return sitemapEntries;
}
