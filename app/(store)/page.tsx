import { getFeaturedProducts, getCategories } from '@/lib/supabase/queries'
import { HeroSection } from '@/components/store/hero-section'
import { FeaturedProducts } from '@/components/store/featured-products'
import { CategoryGrid } from '@/components/store/category-grid'

export default async function HomePage() {
  const [featuredProducts, categories] = await Promise.all([
    getFeaturedProducts(),
    getCategories(),
  ])

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={featuredProducts} />
      <CategoryGrid categories={categories} />
    </>
  )
}
