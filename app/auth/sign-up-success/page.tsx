'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useI18n } from '@/lib/i18n/context'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  const { t } = useI18n()

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
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
              <CardTitle className="text-2xl">{t('auth.signupSuccess')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                {t('auth.checkEmail')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
