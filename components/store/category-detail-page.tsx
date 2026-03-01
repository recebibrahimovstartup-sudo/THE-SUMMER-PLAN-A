'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import { ProductCard } from './product-card'

interface Category {
  id: string
  slug: string
  name_az: string
  name_en: string
  description_az: string | null
  description_en: string | null
}

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

export function CategoryDetailPage({
  category,
  products,
}: {
  category: Category
  products: Product[]
}) {
  const { locale, t } = useI18n()
  const name = locale === 'az' ? category.name_az : category.name_en
  const desc = locale === 'az' ? category.description_az : category.description_en

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-foreground transition-colors">
          {t('nav.home')}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/categories" className="hover:text-foreground transition-colors">
          {t('nav.categories')}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{name}</span>
      </nav>

      <div className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{name}</h1>
        {desc && (
          <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
        )}
      </div>

      {products.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          {locale === 'az' ? 'Bu kateqoriyada məhsul tapılmadı.' : 'No products found in this category.'}
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}
