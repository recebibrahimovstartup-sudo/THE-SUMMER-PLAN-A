'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, Minus, Plus, ShoppingCart, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'
import { useCart } from '@/lib/cart'
import { formatPrice } from '@/lib/format'
import { toast } from 'sonner'

interface Product {
  id: string
  slug: string
  name_az: string
  name_en: string
  description_az: string | null
  description_en: string | null
  price_in_cents: number
  currency: string
  image_url: string
  in_stock: boolean
  featured: boolean
  categories: {
    slug: string
    name_az: string
    name_en: string
  } | null
}

export function ProductDetailView({ product }: { product: Product }) {
  const { locale, t } = useI18n()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const name = locale === 'az' ? product.name_az : product.name_en
  const description = locale === 'az' ? product.description_az : product.description_en
  const categoryName = product.categories
    ? locale === 'az'
      ? product.categories.name_az
      : product.categories.name_en
    : null

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        slug: product.slug,
        name_az: product.name_az,
        name_en: product.name_en,
        price_in_cents: product.price_in_cents,
        currency: product.currency,
        image_url: product.image_url,
      },
      quantity,
    )
    toast.success(locale === 'az' ? `${name} səbətə əlavə edildi` : `${name} added to cart`)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">
          {t('nav.home')}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {product.categories && (
          <>
            <Link
              href={`/categories/${product.categories.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-foreground font-medium">{name}</span>
      </nav>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-secondary">
          <Image
            src={product.image_url}
            alt={name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
              {t('product.featured')}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance lg:text-3xl">
              {name}
            </h1>
            <p className="mt-3 text-3xl font-bold text-primary">
              {formatPrice(product.price_in_cents, product.currency)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {product.in_stock ? (
              <>
                <Check className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">{t('product.inStock')}</span>
              </>
            ) : (
              <span className="text-sm font-medium text-destructive">{t('product.outOfStock')}</span>
            )}
          </div>

          {description && (
            <div>
              <h2 className="text-sm font-semibold text-foreground">{t('product.description')}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}

          {product.in_stock && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center rounded-lg border border-border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-foreground">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button size="lg" className="gap-2 flex-1 sm:flex-initial" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
                {t('product.addToCart')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
