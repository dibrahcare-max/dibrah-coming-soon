import { NextRequest, NextResponse } from 'next/server'
import * as crypto from 'crypto'

export const runtime = 'nodejs'

const TRANPORTAL_ID   = process.env.NEOLEAP_ID   || '4q60Klb8PWv8IUr'
const TRANPORTAL_PASS = process.env.NEOLEAP_PASS  || 'f@Leg@56@EQO15s'
const RESOURCE_KEY    = process.env.NEOLEAP_KEY   || '60401891093160401891093160401891'
const CURRENCY        = '682'
const PG_URL          = 'https://digitalpayments.neoleap.com.sa/pg/payment/hosted.htm'

const PACKAGES: Record<string, { name: string; hours: number; price: number }> = {
  ramadan_2: { name: 'باقة رمضان', hours: 2,  price: 200   },
  daily_4:   { name: 'يومي',       hours: 4,  price: 350   },
  daily_8:   { name: 'يومي',       hours: 8,  price: 600   },
  weekly_4:  { name: 'أسبوعي',    hours: 4,  price: 2000  },
  weekly_8:  { name: 'أسبوعي',    hours: 8,  price: 2800  },
  monthly_4: { name: 'شهري',      hours: 4,  price: 7000  },
  monthly_8: { name: 'شهري',      hours: 8,  price: 14000 },
}

function pkcs5Pad(text: string, blocksize = 16) {
  const pad = blocksize - (text.length % blocksize)
  return text + String.fromCharCode(pad).repeat(pad)
}

function encrypt(str: string, key: string): string {
  const padded    = pkcs5Pad(str)
  const iv        = Buffer.from('PGKEYENCDECIVSPC', 'utf8')
  const keyBuf    = Buffer.from(key, 'utf8')
  const cipher    = crypto.createCipheriv('aes-256-cbc', keyBuf, iv)
  cipher.setAutoPadding(false)
  const encrypted = Buffer.concat([cipher.update(Buffer.from(padded, 'utf8')), cipher.final()])
  return encrypted.toString('hex')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { package: pkg, ...fields } = body

    if (!PACKAGES[pkg]) {
      return NextResponse.json({ success: false, message: 'الباقة غير صحيحة' }, { status: 400 })
    }

    const { price } = PACKAGES[pkg]
    const trackId   = 'TRK' + Date.now() + Math.floor(Math.random() * 900 + 100)
    const responseURL = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://pay.dibrahcare.com'}/payment-response`

    const plainData = JSON.stringify([[{
      amt:          String(price),
      action:       '1',
      password:     TRANPORTAL_PASS,
      id:           TRANPORTAL_ID,
      currencyCode: CURRENCY,
      trackId,
      responseURL,
      errorURL:     responseURL,
      langid:       'ar',
    }]])

    const trandata = encrypt(plainData, RESOURCE_KEY)

    const postBody = JSON.stringify([[{
      id:          TRANPORTAL_ID,
      trandata,
      responseURL,
      errorURL:    responseURL,
    }]])

    const resp = await fetch(PG_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: postBody,
    })

    const data = await resp.json()
    const item = data[0]?.[0] ?? data[0] ?? null

    if (item?.status === '1') {
      const match = item.result.match(/(https?:\/\/[^\s"']+)/)
      if (match) {
        const idMatch = item.result.match(/^(\d+):/)
        const url = idMatch ? `${match[1]}?PaymentID=${idMatch[1]}` : match[1]
        return NextResponse.json({ success: true, url })
      }
    }

    return NextResponse.json({ success: false, message: 'فشل الاتصال بالبوابة' }, { status: 500 })
  } catch (e: any) {
    console.error('Payment API Error:', e?.message || e)
    return NextResponse.json({ success: false, message: 'خطأ داخلي: ' + (e?.message || 'unknown') }, { status: 500 })
  }
}
