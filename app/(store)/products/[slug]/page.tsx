import { notFound } from 'next/navigation'
import { getProductBySlug } from '@/lib/supabase/queries'
import { ProductDetailView } from '@/components/store/product-detail-view'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  return <ProductDetailView product={product} />
}
