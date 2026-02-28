export function formatPrice(cents: number, currency = 'AZN'): string {
  const amount = (cents / 100).toFixed(2)
  return `${amount} ${currency}`
}
