const services = [
  { num: '01', cat: 'أطفال', title: 'حضانة الأطفال داخل المنزل', desc: 'تقديم رعاية متكاملة للأطفال داخل المنزل أو خارجه، مع الالتزام الكامل بمعايير السلامة والاهتمام بصحة الطفل.' },
  { num: '02', cat: 'مستشفى', title: 'رعاية المرضى', desc: 'مرافقة المريض للتنقل بين الأقسام ومتابعة مواعيد الفحوصات والعلاج والعناية المستمرة.' },
  { num: '03', cat: 'رعاية', title: 'رعاية كبار السن', desc: 'مرافقة يومية دافئة ومساعدة شخصية تهتم بتنظيم الأدوية والمواعيد وتضمن التقدير والاحترام لكبير السن.' },
  { num: '04', cat: 'أطفال', title: 'خدمة المرافقة الآمنة', desc: 'ندرك رغبة ابنتكِ المراهقة في استكشاف استقلاليتها. لذلك وفرنا خدمة المرافقة الآمنة.' },
  { num: '05', cat: 'سفر', title: 'خدماتنا بالسفر', desc: 'مرافقة للأطفال أثناء الرحلات والسفر، سواء داخل المملكة أو خارجها.' },
  { num: '06', cat: 'مناسبات', title: 'خدماتنا المميزة للعروس', desc: 'وصيفة العروس تهتم بأدق التفاصيل، وتمنح العروس راحة وطمأنينة في أهم لحظات حياتها.' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '96px 64px', background: 'white' }} className="sec-services">
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }} className="rv">
        <span style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--gold)', marginBottom: 12, display: 'block', fontFamily: 'PNU, Tajawal, sans-serif' }}>خدماتنا</span>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif' }}>راحة بالك تبدأ من هنا</h2>
        <p style={{ fontSize: '.95rem', color: 'var(--muted)', lineHeight: 1.8, marginTop: 10 }}>نوفر لك حاضنات ومرافقات مؤهلات بعناية، وخدمات مرنة تناسب احتياجك اليومي.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="svc-grid">
        {services.map(s => (
          <div key={s.num} className="rv svc-card" style={{
            borderRadius: 20, padding: '36px 28px', background: 'var(--bg)',
            border: '1.5px solid var(--border)', cursor: 'pointer', transition: 'all .3s',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '.72rem', color: 'rgba(45,58,30,.25)', letterSpacing: '.08em', fontWeight: 700 }}>{s.num}</div>
              <div style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{s.cat}</div>
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif', lineHeight: 1.3 }}>{s.title}</div>
            <div style={{ fontSize: '.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4,
              fontSize: '.78rem', fontWeight: 700, color: 'var(--dark)',
              background: 'white', padding: '8px 16px', borderRadius: 6,
              transition: 'all .3s', width: 'fit-content',
              boxShadow: '0 1px 4px rgba(45,58,30,.08)',
            }}>احجز الآن ←</div>
          </div>
        ))}
      </div>

      <style>{`
        .svc-card:hover { background: var(--bg2) !important; transform: translateY(-4px); box-shadow: 0 16px 48px rgba(45,58,30,.1); }
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: 1fr 1fr !important; } .sec-services { padding: 64px 24px !important; } }
        @media (max-width: 600px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
