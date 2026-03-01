import { getCategories } from '@/lib/supabase/queries'
import { CategoriesPage } from '@/components/store/categories-page'

export default async function CategoriesRoute() {
  const categories = await getCategories()
  return <CategoriesPage categories={categories} />
}
