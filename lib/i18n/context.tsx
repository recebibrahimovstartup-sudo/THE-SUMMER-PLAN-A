'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Locale, TranslationKey } from './translations'
import { translations } from './translations'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('az')

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
  }, [])

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[locale][key] ?? key
    },
    [locale],
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function useLocaleField() {
  const { locale } = useI18n()
  return useCallback(
    (row: Record<string, unknown>) => {
      const azKey = Object.keys(row).find((k) => k.endsWith('_az'))
      const enKey = Object.keys(row).find((k) => k.endsWith('_en'))
      if (locale === 'az' && azKey) return row[azKey] as string
      if (locale === 'en' && enKey) return row[enKey] as string
      return ''
    },
    [locale],
  )
}
