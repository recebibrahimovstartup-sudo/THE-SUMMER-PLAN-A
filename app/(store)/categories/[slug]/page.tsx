import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProductsByCategory } from '@/lib/supabase/queries'
import { CategoryDetailPage } from '@/components/store/category-detail-page'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ])

  if (!category) notFound()

  return <CategoryDetailPage category={category} products={products} />
}
