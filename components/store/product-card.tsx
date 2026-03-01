'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
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
}

export function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useI18n()
  const { addItem } = useCart()

  const name = locale === 'az' ? product.name_az : product.name_en

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      slug: product.slug,
      name_az: product.name_az,
      name_en: product.name_en,
      price_in_cents: product.price_in_cents,
      currency: product.currency,
      image_url: product.image_url,
    })
    toast.success(locale === 'az' ? `${name} səbətə əlavə edildi` : `${name} added to cart`)
  }

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <Image
            src={product.image_url}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 rounded-md bg-accent px-2 py-0.5 text-xs font-semibold text-accent-foreground">
              {t('product.featured')}
            </span>
          )}
          {!product.in_stock && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/60">
              <span className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                {t('product.outOfStock')}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="text-sm font-medium text-foreground line-clamp-1 text-balance">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-primary">
              {formatPrice(product.price_in_cents, product.currency)}
            </p>
            {product.in_stock && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0"
                onClick={handleAddToCart}
                aria-label={t('product.addToCart')}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
