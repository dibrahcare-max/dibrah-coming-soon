export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 64px', background: 'var(--bg)' }} className="sec-contact">
      <div className="rv">
        <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold)', marginBottom: 12, display: 'block', fontFamily: 'PNU, Tajawal, sans-serif' }}>تواصل معنا</span>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif' }}>نحن هنا لمساعدتك</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, marginTop: 56 }} className="rv contact-grid">
        {/* معلومات */}
        <div>
          {[
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>, label: 'الموقع', val: 'الرياض، المملكة العربية السعودية' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'البريد', val: 'info@dibrahcare.com' },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.99 11.7 19.79 19.79 0 011.93 3.1 2 2 0 013.92 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>, label: 'الهاتف', val: '+966 53 597 7511', ltr: true },
            { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: 'الخدمة', val: 'متاحة 24/7' },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--dark)' }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--dark)', direction: c.ltr ? 'ltr' : 'rtl' }}>{c.val}</div>
              </div>
            </div>
          ))}
          {/* Social */}
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            {[
              { href: 'https://www.instagram.com/dibrahcare', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
              { href: 'https://x.com/dibrahcare', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { href: 'https://www.tiktok.com/@dibrahcare', path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z' },
              { href: 'https://wa.me/966535977511', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform .2s, opacity .2s' }}>
                <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, fill: 'var(--bg)' }}><path d={s.path}/></svg>
              </a>
            ))}
          </div>
        </div>

        {/* فورم */}
        <div style={{ background: 'white', borderRadius: 16, padding: 32, border: '1px solid var(--border)' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 24, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif' }}>أرسلي رسالة</h3>
          {[
            { label: 'الاسم', type: 'text', placeholder: 'اسمك' },
            { label: 'البريد الإلكتروني', type: 'email', placeholder: 'example@email.com' },
            { label: 'رقم الجوال', type: 'tel', placeholder: '05xxxxxxxx' },
          ].map(f => (
            <div key={f.label} style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{ width: '100%', border: '1.5px solid var(--border)', background: 'var(--bg)', borderRadius: 8, padding: '10px 13px', fontFamily: 'Tajawal, sans-serif', fontSize: '.9rem', color: 'var(--dark)', outline: 'none' }} />
            </div>
          ))}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>الرسالة</label>
            <textarea placeholder="كيف يمكننا مساعدتك؟" style={{ width: '100%', border: '1.5px solid var(--border)', background: 'var(--bg)', borderRadius: 8, padding: '10px 13px', fontFamily: 'Tajawal, sans-serif', fontSize: '.9rem', color: 'var(--dark)', outline: 'none', resize: 'vertical', minHeight: 88 }} />
          </div>
          <button style={{ width: '100%', background: 'var(--dark)', color: 'var(--bg)', border: 'none', padding: 13, borderRadius: 8, fontFamily: 'Tajawal, sans-serif', fontWeight: 800, fontSize: '.88rem', cursor: 'pointer' }}>
            إرسال الرسالة
          </button>
        </div>
      </div>

      <style>{`@media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } .sec-contact { padding: 64px 24px !important; } }`}</style>
    </section>
  )
}
