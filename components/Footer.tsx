export default function Footer() {
  return (
    <>
      {/* NEWSLETTER */}
      <div style={{ background: 'var(--dark)', padding: '72px 64px', textAlign: 'center' }} className="sec-nl">
        <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--gold)', fontFamily: 'PNU, Tajawal, sans-serif', marginBottom: 8 }}>إشتركي في نشرتنا</h2>
        <p style={{ color: 'rgba(227,238,213,.6)', marginBottom: 28, fontSize: '.95rem' }}>إشتركي لتصلك أحدث الأخبار والعروض الحصرية</p>
        <div style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto' }} className="nl-form">
          <input type="email" placeholder="بريدك الإلكتروني" style={{ flex: 1, background: 'rgba(227,238,213,.1)', border: '1.5px solid rgba(227,238,213,.2)', borderRadius: 8, padding: '12px 16px', fontFamily: 'Tajawal, sans-serif', color: 'var(--bg)', fontSize: '.9rem', outline: 'none' }} />
          <button style={{ background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 8, padding: '12px 24px', fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: '.88rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>إشتراك</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: 'var(--dark)', padding: '56px 64px 28px', borderTop: '1px solid rgba(227,238,213,.1)' }} className="sec-footer">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 40, marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(227,238,213,.08)' }} className="footer-top">
          <div>
            <img src="/images/dibrah-logo.png" alt="دِبرة" style={{ height: 48, width: 'auto', marginBottom: 12, filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
            <p style={{ fontSize: '.95rem', color: 'rgba(227,238,213,.4)', lineHeight: 1.8, marginBottom: 16 }}>الوجه السعودي الأول في مجال الرعاية — بحضور حقيقي والتزام لا يتزعزع.</p>
          </div>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bg)', marginBottom: 16 }}>دِبرة</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {['من نحن','خدماتنا','الباقات','الأسئلة الشائعة','تواصل معنا','سياسة الخصوصية','الشروط والأحكام'].map(l => (
                <li key={l}><a href="#" style={{ fontSize: '.82rem', color: 'rgba(227,238,213,.4)', transition: 'color .2s' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bg)', marginBottom: 16 }}>الخدمات</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
              {['جليسة أطفال','مرافقة مستشفى','رعاية كبار السن','دِبرة في السفر','أعراس ومناسبات'].map(l => (
                <li key={l}><a href="#services" style={{ fontSize: '.82rem', color: 'rgba(227,238,213,.4)', transition: 'color .2s' }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '.72rem', fontWeight: 800, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bg)', marginBottom: 16 }}>تواصل معنا</div>
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><path d="M12 21s-8-6.5-8-12a8 8 0 1 1 16 0c0 5.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/></svg>, val: 'الرياض، المملكة العربية السعودية' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>, val: 'info@dibrahcare.com' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.64 19a19.5 19.5 0 0 1-4.95-4.95A19.79 19.79 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 5 5l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, val: '+966 53 597 7511' },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>, val: 'خدمة متاحة 24/7' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: '.82rem', color: 'rgba(227,238,213,.5)', alignItems: 'center' }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>{c.icon}</span>
                <span>{c.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: '.75rem', color: 'rgba(227,238,213,.2)' }}>© 2026 دِبرة — جميع الحقوق محفوظة</span>
          <img src="/images/saudi-made.svg" alt="Saudi Made" style={{ height: 28, width: 'auto' }} />
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .sec-footer { padding: 40px 24px 24px !important; }
          .sec-nl { padding: 48px 24px !important; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .nl-form { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
