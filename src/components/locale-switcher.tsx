'use client'
import { usePathname, useRouter } from '@/i18n/navigation';
import { LANGUAGE_NAMES, routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value as typeof routing.locales[number];
        router.replace(pathname, {
            locale: newLocale,
        });
    }

    return (
        <select
            defaultValue={locale}
            onChange={onLocaleChange}
        >
            {routing.locales.map((lang) => (
                <option key={lang} value={lang}>
                    {LANGUAGE_NAMES[lang as keyof typeof LANGUAGE_NAMES]}
                </option>
            ))}
        </select>
    )
}
