'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useI18n } from '@/lib/i18n/context'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            {t('home.hero.title')}
          </h1>
          <p className="mt-4 max-w-lg text-base text-muted-foreground leading-relaxed lg:text-lg">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/categories" className="mt-8">
            <Button size="lg" className="gap-2">
              {t('home.hero.cta')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-md flex-1 overflow-hidden rounded-xl lg:max-w-lg">
          <Image
            src="/images/hero.jpg"
            alt="ShopAZ"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
