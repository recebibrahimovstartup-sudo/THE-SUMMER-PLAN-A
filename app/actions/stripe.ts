'use server'

import { stripe } from '@/lib/stripe'

interface CartLineItem {
  id: string
  name_az: string
  name_en: string
  price_in_cents: number
  currency: string
  quantity: number
}

export async function createCheckoutSession(items: CartLineItem[]) {
  if (!items || items.length === 0) {
    throw new Error('No items provided for checkout')
  }

  const line_items = items.map((item) => ({
    price_data: {
      currency: item.currency.toLowerCase(),
      product_data: {
        name: item.name_en,
        description: item.name_az,
      },
      unit_amount: item.price_in_cents,
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items,
    mode: 'payment',
  })

  return session.client_secret
}
