'use client'

import Link from 'next/link'
import { ShoppingCart, User, Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useI18n } from '@/lib/i18n/context'
import { useCart } from '@/lib/cart'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User as SupabaseUser } from '@supabase/supabase-js'

export function StoreHeader() {
  const { t, locale, setLocale } = useI18n()
  const { totalItems } = useCart()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            ShopAZ
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {t('nav.categories')}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocale(locale === 'az' ? 'en' : 'az')}
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium"
          >
            <Globe className="h-4 w-4" />
            {locale === 'az' ? 'EN' : 'AZ'}
          </Button>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">{t('nav.cart')}</span>
            </Button>
          </Link>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t('nav.account')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/account">{t('nav.account')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account#orders">{t('nav.orders')}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>{t('nav.logout')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/auth/login">
              <Button variant="default" size="sm" className="hidden sm:inline-flex">
                {t('nav.login')}
              </Button>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <User className="h-5 w-5" />
                <span className="sr-only">{t('nav.login')}</span>
              </Button>
            </Link>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <Link
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/categories"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.categories')}
            </Link>
            <button
              className="rounded-md px-3 py-2 text-left text-sm font-medium text-foreground/80 hover:bg-secondary"
              onClick={() => {
                setLocale(locale === 'az' ? 'en' : 'az')
                setMobileMenuOpen(false)
              }}
            >
              <Globe className="mr-2 inline h-4 w-4" />
              {locale === 'az' ? 'English' : 'Azərbaycan'}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
