export default function Jobs() {
  return (
    <section id="jobs" style={{ padding: '96px 64px', background: 'white' }} className="sec-jobs">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }} className="rv">
        <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: 12, display: 'block', fontFamily: 'PNU, Tajawal, sans-serif' }}>وظائف</span>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif' }}>انضمي إلى كادر دِبرة</h2>
      </div>
      <div className="rv" style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center', background: 'var(--bg)', borderRadius: 20, padding: 48, border: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif', marginBottom: 12 }}>كوني جزءاً من الفرق</h3>
        <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>هل أنتِ سعودية وتحبين مساعدة الآخرين؟ فرقي في حياة الأسر السعودية وانضمي لفريق دِبرة المتميز.</p>
        <a href="mailto:info@dibrahcare.com" style={{ display: 'inline-block', background: 'var(--dark)', color: 'var(--bg)', fontSize: '.85rem', fontWeight: 700, padding: '12px 28px', borderRadius: 8, transition: 'background .2s' }}>
          قدّمي طلبك الآن
        </a>
      </div>
      <style>{`@media (max-width: 1024px) { .sec-jobs { padding: 64px 24px !important; } }`}</style>
    </section>
  )
}
