'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'

export function StoreFooter() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-primary">
              ShopAZ
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('nav.categories')}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/categories/electronics"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Elektronika
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/fashion"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Moda
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {'Ev & Bağ'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('nav.account')}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <Link
                  href="/auth/login"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.login')}
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/sign-up"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.signup')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.cart')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">{t('footer.about')}</h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <span className="text-sm text-muted-foreground">{t('footer.contact')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('footer.privacy')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('footer.terms')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ShopAZ. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}
