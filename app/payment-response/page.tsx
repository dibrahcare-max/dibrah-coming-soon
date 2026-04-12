'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ResponseContent() {
  const params = useSearchParams()
  const result  = params.get('result') || ''
  const trackId = params.get('trackId') || params.get('trackid') || ''
  const success = result === 'CAPTURED' || result === 'APPROVED'

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;800&display=swap');
        @font-face { font-family:'AW'; src:url('/fonts/AW.ttf') format('truetype'); font-display:swap; }
        :root { --green:#2d4a1e; --gold:#c9a84c; --sage:#e3eed5; }
        * { box-sizing:border-box; margin:0; padding:0; }
        body { font-family:'Tajawal',sans-serif; background:var(--sage); color:var(--green); direction:rtl; min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:24px; }
        .card { background:white; border-radius:20px; padding:48px 40px; max-width:480px; width:100%; text-align:center; box-shadow:0 4px 24px rgba(45,74,30,.1); }
        .icon { font-size:4rem; margin-bottom:20px; }
        .title { font-family:'AW','Tajawal',sans-serif; font-size:2rem; font-weight:400; margin-bottom:12px; }
        .sub { color:rgba(45,74,30,.65); font-size:.95rem; line-height:1.8; margin-bottom:28px; }
        .track { font-size:.8rem; color:rgba(45,74,30,.4); margin-bottom:28px; }
        .btn { display:inline-block; padding:14px 36px; background:var(--green); color:white; border-radius:10px; text-decoration:none; font-weight:700; font-size:1rem; transition:background .2s; }
        .btn:hover { background:#3d5c2a; }
        .btn.gold { background:var(--gold); color:var(--green); }
      `}</style>
      <div className="card">
        <div className="icon">{success ? '✅' : '❌'}</div>
        <h1 className="title">{success ? 'تمت العملية بنجاح' : 'فشلت العملية'}</h1>
        <p className="sub">
          {success
            ? 'شكراً لك! تم استلام طلبك وسيتواصل معك فريق دِبرة قريباً.'
            : 'لم تتم عملية الدفع. يرجى المحاولة مرة أخرى أو التواصل معنا.'}
        </p>
        {trackId && <p className="track">رقم العملية: {trackId}</p>}
        <a href="/احجز" className={`btn ${success ? '' : 'gold'}`}>
          {success ? 'العودة للرئيسية' : 'حاول مرة أخرى'}
        </a>
      </div>
    </>
  )
}

export default function PaymentResponse() {
  return (
    <Suspense>
      <ResponseContent />
    </Suspense>
  )
}
