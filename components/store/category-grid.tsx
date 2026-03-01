'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'

interface Category {
  id: string
  slug: string
  name_az: string
  name_en: string
  description_az: string | null
  description_en: string | null
  image_url: string | null
}

export function CategoryGrid({ categories }: { categories: Category[] }) {
  const { locale, t } = useI18n()

  if (categories.length === 0) return null

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {t('home.categories')}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const name = locale === 'az' ? category.name_az : category.name_en
          const description = locale === 'az' ? category.description_az : category.description_en
          return (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                {category.image_url ? (
                  <Image
                    src={category.image_url}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="h-full w-full bg-secondary" />
                )}
                <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-lg font-bold text-card">{name}</h3>
                  {description && (
                    <p className="mt-1 text-sm text-card/80 line-clamp-2">{description}</p>
                  )}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
