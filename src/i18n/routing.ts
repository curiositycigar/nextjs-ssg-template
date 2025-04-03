import {defineRouting} from 'next-intl/routing';

export const LANGUAGE_NAMES = {
  en: "English",
  fr: "Français",
  zh: "中文"
} as const;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(LANGUAGE_NAMES) as (keyof typeof LANGUAGE_NAMES)[],

  // Used when no locale matches
  defaultLocale: 'en'
});
