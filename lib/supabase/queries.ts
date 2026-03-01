import { createClient } from './server'

export async function getCategories() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name_en')
  if (error) throw error
  return data
}

export async function getCategoryBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}

export async function getFeaturedProducts() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(slug, name_az, name_en)')
    .eq('featured', true)
    .eq('in_stock', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getProductsByCategory(categorySlug: string) {
  const supabase = await createClient()
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single()
  if (!category) return []

  const { data, error } = await supabase
    .from('products')
    .select('*, categories(slug, name_az, name_en)')
    .eq('category_id', category.id)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getProductBySlug(slug: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(slug, name_az, name_en)')
    .eq('slug', slug)
    .single()
  if (error) return null
  return data
}

export async function getAllProducts() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(slug, name_az, name_en)')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}
