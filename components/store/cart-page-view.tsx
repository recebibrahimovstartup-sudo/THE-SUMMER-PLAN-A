'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/format'

export function CartPageView() {
  const { locale, t } = useI18n()
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 lg:px-8">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">{t('cart.empty')}</h1>
        <Link href="/categories" className="mt-6">
          <Button className="gap-2">
            {t('cart.continueShopping')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{t('cart.title')}</h1>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-4">
            {items.map((item) => {
              const name = locale === 'az' ? item.name_az : item.name_en
              return (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-border bg-card p-4"
                >
                  <Link
                    href={`/products/${item.slug}`}
                    className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-secondary"
                  >
                    <Image
                      src={item.image_url}
                      alt={name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <Link
                        href={`/products/${item.slug}`}
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        {name}
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                        aria-label={t('cart.remove')}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center rounded-md border border-border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </Button>
                        <span className="flex h-8 w-10 items-center justify-center text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                      <p className="text-sm font-bold text-primary">
                        {formatPrice(item.price_in_cents * item.quantity, item.currency)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">{t('cart.subtotal')}</h2>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-base font-medium text-muted-foreground">{t('cart.total')}</span>
              <span className="text-xl font-bold text-foreground">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <Link href="/checkout" className="mt-6 block">
              <Button className="w-full gap-2" size="lg">
                {t('cart.checkout')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/categories" className="mt-3 block">
              <Button variant="outline" className="w-full" size="sm">
                {t('cart.continueShopping')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
