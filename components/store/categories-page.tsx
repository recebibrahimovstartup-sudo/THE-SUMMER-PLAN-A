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

export function CategoriesPage({ categories }: { categories: Category[] }) {
  const { locale, t } = useI18n()

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t('nav.categories')}
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const name = locale === 'az' ? cat.name_az : cat.name_en
          const desc = locale === 'az' ? cat.description_az : cat.description_en
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                {cat.image_url ? (
                  <Image
                    src={cat.image_url}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="h-full w-full bg-secondary" />
                )}
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold text-foreground">{name}</h2>
                {desc && (
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
