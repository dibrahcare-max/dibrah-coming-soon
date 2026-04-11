export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '92vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      borderRadius: 24,
      margin: 12,
    }}>
      {/* BG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="/images/hero-cover.png"
          alt="دِبرة"
          className="hero-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
      </div>

      {/* TEXT */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '120px 64px 80px',
        width: '55%',
        marginLeft: 'auto',
      }} className="hero-text-wrap">
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
          fontWeight: 900,
          color: 'white',
          fontFamily: 'PNU, Tajawal, sans-serif',
          lineHeight: 1.05,
        }} className="anim-2">
          دبرة العائلة
          <em style={{ color: 'var(--gold)', fontStyle: 'normal', display: 'block', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 600, marginBottom: 20 }}>
            معنى جديد للرعاية
          </em>
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.75)', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }} className="anim-3">
          نمنح الأمان، ونصنع الثقة، بأيدي سعودية
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} className="anim-4">
          <a href="#packages" style={{
            background: 'var(--gold)', color: 'var(--dark)',
            fontSize: '.92rem', fontWeight: 800, padding: '14px 36px', borderRadius: 8,
            display: 'inline-block', transition: 'all .2s',
          }}>احجز خدمتك الآن</a>
          <a href="#about" style={{
            background: 'rgba(255,255,255,.12)', color: 'white',
            fontSize: '.92rem', fontWeight: 800, padding: '14px 36px', borderRadius: 8,
            border: '1.5px solid rgba(255,255,255,.35)', display: 'inline-block', transition: 'all .2s',
          }}>تعرف علينا</a>
        </div>

        {/* BADGES */}
        <div style={{ marginTop: 64, display: 'flex', gap: 24, flexWrap: 'wrap' }} className="anim-5">
          {[
            { v: '500+', l: 'عائلة راضية' },
            { v: '100%', l: 'كوادر وطنية' },
            { v: '24/7', l: 'خدمة متواصلة' },
          ].map(b => (
            <div key={b.l} style={{
              background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)',
              borderRadius: 12, padding: '18px 28px', textAlign: 'center', backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white', fontFamily: 'PNU, Tajawal, sans-serif' }}>{b.v}</div>
              <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.6)', marginTop: 4 }}>{b.l}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-text-wrap { width: 100% !important; padding: 100px 24px 48px !important; margin: 0 !important; }
        }
      `}</style>
    </section>
  )
}
