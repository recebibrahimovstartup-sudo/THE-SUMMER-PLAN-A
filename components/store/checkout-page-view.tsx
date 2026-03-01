'use client'

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/format'
import { createCheckoutSession } from '@/app/actions/stripe'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
)

export function CheckoutPageView() {
  const { locale, t } = useI18n()
  const { items, totalPrice, clearCart } = useCart()
  const router = useRouter()
  const [completed, setCompleted] = useState(false)

  const fetchClientSecret = useCallback(() => {
    const lineItems = items.map((item) => ({
      id: item.id,
      name_az: item.name_az,
      name_en: item.name_en,
      price_in_cents: item.price_in_cents,
      currency: item.currency,
      quantity: item.quantity,
    }))
    return createCheckoutSession(lineItems)
  }, [items])

  const handleComplete = useCallback(() => {
    clearCart()
    setCompleted(true)
  }, [clearCart])

  if (items.length === 0 && !completed) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 lg:px-8">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">{t('cart.empty')}</h1>
        <Link href="/categories" className="mt-6">
          <Button className="gap-2">
            {t('cart.continueShopping')}
          </Button>
        </Link>
      </section>
    )
  }

  if (completed) {
    return (
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 lg:px-8">
        <CheckCircle2 className="h-16 w-16 text-accent" />
        <h1 className="mt-6 text-2xl font-bold text-foreground">{t('checkout.success')}</h1>
        <p className="mt-2 text-muted-foreground">{t('checkout.successDesc')}</p>
        <Link href="/" className="mt-8">
          <Button className="gap-2">
            {t('cart.continueShopping')}
          </Button>
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {t('checkout.title')}
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-border bg-card p-1 overflow-hidden">
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{
                clientSecret: fetchClientSecret,
                onComplete: handleComplete,
              }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-lg font-semibold text-foreground">
              {t('cart.subtotal')}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {items.map((item) => {
                const name = locale === 'az' ? item.name_az : item.name_en
                return (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {name} x{item.quantity}
                    </span>
                    <span className="font-medium text-foreground">
                      {formatPrice(item.price_in_cents * item.quantity, item.currency)}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-base font-medium text-muted-foreground">{t('cart.total')}</span>
              <span className="text-xl font-bold text-foreground">
                {formatPrice(totalPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
