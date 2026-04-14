import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

const PHP_URL = 'https://www.dibrah.net/payment.php'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // PHP يتوقع POST عادي مع action=pay
    const formData = new URLSearchParams()
    formData.append('action', 'pay')
    for (const [key, value] of Object.entries(body)) {
      formData.append(key, String(value))
    }

    console.log('Forwarding to PHP:', formData.toString())

    const resp = await fetch(PHP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    const raw = await resp.text()
    console.log('PHP response:', raw)

    let data: any
    try { data = JSON.parse(raw) } catch {
      return NextResponse.json({ success: false, message: 'رد غير متوقع: ' + raw.slice(0, 200) }, { status: 500 })
    }

    return NextResponse.json(data)

  } catch (e: any) {
    console.error('Payment API Error:', e?.message || e)
    return NextResponse.json({ success: false, message: 'خطأ في الاتصال: ' + (e?.message || 'unknown') }, { status: 500 })
  }
}
