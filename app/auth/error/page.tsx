'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n/context'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ErrorContent() {
  const { t } = useI18n()
  const searchParams = useSearchParams()
  const errorCode = searchParams.get('error')

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              ShopAZ
            </Link>
          </div>
          <Card>
            <CardHeader className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-destructive" />
              <CardTitle className="text-2xl">{t('auth.error')}</CardTitle>
            </CardHeader>
            <CardContent>
              {errorCode && (
                <p className="text-sm text-muted-foreground text-center">
                  {errorCode}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  )
}
