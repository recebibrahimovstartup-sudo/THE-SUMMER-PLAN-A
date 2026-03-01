'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { ProductCard } from './product-card'

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

export function FeaturedProducts({ products }: { products: Product[] }) {
  const { t } = useI18n()

  if (products.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {t('home.featured')}
        </h2>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {t('home.viewAll')}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
