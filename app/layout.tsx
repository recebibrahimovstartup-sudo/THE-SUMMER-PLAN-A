import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n/context'
import { CartProvider } from '@/lib/cart'
import { Toaster } from 'sonner'
import './globals.css'

const _inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'ShopAZ - Online Mağaza',
  description: 'Azərbaycanda ən yaxşı onlayn alış-veriş mağazası. Elektronika, moda və ev məhsulları.',
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="az">
      <body className="font-sans antialiased">
        <I18nProvider>
          <CartProvider>
            {children}
            <Toaster position="bottom-right" />
          </CartProvider>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
