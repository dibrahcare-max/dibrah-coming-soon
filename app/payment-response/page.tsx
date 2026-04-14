'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

function ResponseContent() {
  const params   = useSearchParams()
  const result   = params.get('result') || ''
  const trackId  = params.get('trackId') || params.get('trackid') || ''
  const success  = result === 'CAPTURED' || result === 'APPROVED'
  const notified = useRef(false)

  useEffect(() => {
    if (!success || notified.current) return
    notified.current = true

    const raw = sessionStorage.getItem('dibrah_booking')
    if (!raw) return
    const booking = JSON.parse(raw)
    sessionStorage.removeItem('dibrah_booking')

    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...booking, trackId }),
    }).catch(console.error)
  }, [success, trackId])

  return (
    <div style={{ background:'var(--bg)', minHeight:'60vh', display:'flex', alignItems:'center', justifyContent:'center', padding:40 }}>
      <div style={{
        background:'white', borderRadius:24, padding:'56px 48px',
        maxWidth:480, width:'100%', textAlign:'center',
        border:'1px solid rgba(95,97,87,.15)',
        boxShadow:'0 4px 24px rgba(95,97,87,.08)',
      }}>
        <div style={{ fontSize:'4rem', marginBottom:20 }}>{success ? '✅' : '❌'}</div>
        <span style={{ fontSize:'2.5rem', fontWeight:900, color:'#777C6D', display:'block', marginBottom:8 }}>دِبرة</span>
        <h1 style={{ fontSize:'clamp(1.5rem,3vw,2rem)', fontWeight:900, color:'var(--dark)', marginBottom:12 }}>
          {success ? 'تمت العملية بنجاح' : 'فشلت العملية'}
        </h1>
        <p style={{ color:'var(--muted)', fontSize:'.95rem', lineHeight:1.8, marginBottom:28 }}>
          {success
            ? 'شكراً لك! تم استلام طلبك وسيتواصل معك فريق دِبرة قريباً.'
            : 'لم تتم عملية الدفع. يرجى المحاولة مرة أخرى أو التواصل معنا.'}
        </p>
        {trackId && (
          <p style={{ fontSize:'.8rem', color:'rgba(95,97,87,.4)', marginBottom:28 }}>رقم العملية: {trackId}</p>
        )}
        <a href={success ? '/' : '/book'} style={{
          display:'inline-block', padding:'14px 36px',
          background:'var(--dark)', color:'#F6F0D7',
          borderRadius:10, textDecoration:'none', fontWeight:700, fontSize:'1rem',
        }}>
          {success ? 'العودة للرئيسية' : 'حاول مرة أخرى'}
        </a>
      </div>
    </div>
  )
}

export default function PaymentResponse() {
  return (
    <>
      <Nav />
      <Suspense><ResponseContent /></Suspense>
      <Footer />
      <WhatsApp />
      <style jsx global>{`:root { --muted: #8a8e80; }`}</style>
    </>
  )
}
