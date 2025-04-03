'use client';
import { useTranslations } from 'next-intl'

export default function IndexPageClient() {
  const t = useTranslations('HomePage')

  return (
    <div>
      {t('helloWorld')}
    </div>
  )
}
