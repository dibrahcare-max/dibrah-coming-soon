'use client'
import { useState } from 'react'

const PACKAGES = {
  ramadan_2: { type: 'ramadan', name: 'باقة رمضان', hours: 2,  price: 200   },
  daily_4:   { type: 'daily',   name: 'يومي',        hours: 4,  price: 350   },
  daily_8:   { type: 'daily',   name: 'يومي',        hours: 8,  price: 600   },
  weekly_4:  { type: 'weekly',  name: 'أسبوعي',     hours: 4,  price: 2000  },
  weekly_8:  { type: 'weekly',  name: 'أسبوعي',     hours: 8,  price: 2800  },
  monthly_4: { type: 'monthly', name: 'شهري',        hours: 4,  price: 7000  },
  monthly_8: { type: 'monthly', name: 'شهري',        hours: 8,  price: 14000 },
}

type PackageKey = keyof typeof PACKAGES

const TYPE_LABELS: Record<string, string> = {
  ramadan: 'باقة رمضان',
  daily:   'يومي',
  weekly:  'أسبوعي',
  monthly: 'شهري',
}

const HOURS_BY_TYPE: Record<string, PackageKey[]> = {
  ramadan: ['ramadan_2'],
  daily:   ['daily_4', 'daily_8'],
  weekly:  ['weekly_4', 'weekly_8'],
  monthly: ['monthly_4', 'monthly_8'],
}

export default function BookingPage() {
  const [form, setForm] = useState({
    subscriber_name: '',
    subscriber_id: '',
    subscriber_nationality: '',
    subscriber_phone: '',
    subscriber_email: '',
    subscriber_address: '',
    beneficiary_name: '',
    beneficiary_age: '',
    beneficiary_relation: '',
    emergency_phone: '',
    start_date: '',
    start_time: '',
  })
  const [packageType, setPackageType] = useState('')
  const [selectedPkg, setSelectedPkg] = useState<PackageKey | ''>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const availableHours = packageType ? HOURS_BY_TYPE[packageType] || [] : []
  const selectedPrice  = selectedPkg ? PACKAGES[selectedPkg].price : 0

  const validate = () => {
    const required: [string, string][] = [
      ['subscriber_name',        'اسم المشترك'],
      ['subscriber_id',          'رقم الهوية'],
      ['subscriber_nationality', 'الجنسية'],
      ['subscriber_phone',       'رقم الجوال'],
      ['subscriber_email',       'البريد الإلكتروني'],
      ['subscriber_address',     'العنوان'],
      ['beneficiary_name',       'اسم المستفيد'],
      ['beneficiary_age',        'عمر المستفيد'],
      ['beneficiary_relation',   'صلة القرابة'],
      ['emergency_phone',        'رقم الطوارئ'],
      ['start_date',             'تاريخ بدء الاشتراك'],
      ['start_time',             'ساعة البدء'],
    ]
    for (const [k, label] of required) {
      if (!form[k as keyof typeof form].trim()) return `الرجاء تعبئة حقل: ${label}`
    }
    if (!selectedPkg) return 'الرجاء اختيار نوع الاشتراك وعدد الساعات'
    return ''
  }

  const submit = async () => {
    setError('')
    const err = validate()
    if (err) { setError(err); return }
    setLoading(true)
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ package: selectedPkg, ...form }),
      })
      const data = await res.json()
      if (data.success && data.url) {
        window.location.href = data.url
      } else {
        setError(data.message || 'حدث خطأ، حاول مرة أخرى')
      }
    } catch {
      setError('حدث خطأ في الاتصال')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');

        @font-face {
          font-family: 'AW';
          src: url('/fonts/AW.ttf') format('truetype');
          font-display: swap;
        }

        :root {
          --green:  #2d4a1e;
          --green2: #3d5c2a;
          --gold:   #c9a84c;
          --sage:   #e3eed5;
          --cream:  #f5f0e8;
          --muted:  rgba(45,74,30,.6);
          --border: rgba(45,74,30,.15);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Tajawal', sans-serif;
          background: var(--sage);
          color: var(--green);
          direction: rtl;
          min-height: 100vh;
        }

        /* ===== HEADER ===== */
        .page-header {
          background: var(--green);
          padding: 24px;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .page-header img { height: 52px; filter: brightness(0) invert(1); }
        .page-header h1 {
          font-family: 'AW', 'Tajawal', sans-serif;
          color: var(--gold);
          font-size: clamp(1.4rem, 4vw, 2rem);
          margin-top: 8px;
          font-weight: 400;
        }

        /* ===== LAYOUT ===== */
        .booking-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 32px 20px 64px;
        }

        /* ===== SECTION ===== */
        .section {
          background: white;
          border-radius: 16px;
          padding: 28px;
          margin-bottom: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 2px 12px rgba(45,74,30,.06);
          animation: fadeUp .5s both;
        }
        .section:nth-child(2) { animation-delay: .05s; }
        .section:nth-child(3) { animation-delay: .1s; }
        .section:nth-child(4) { animation-delay: .15s; }

        .section-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--green);
          border-bottom: 2px solid var(--gold);
          padding-bottom: 12px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ===== FIELDS ===== */
        .field { margin-bottom: 16px; }
        .field label {
          display: block;
          font-size: .85rem;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 6px;
        }
        .field label span { color: #e53935; }
        .field input,
        .field select {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: 'Tajawal', sans-serif;
          font-size: .95rem;
          color: var(--green);
          background: var(--sage);
          transition: border-color .2s, background .2s;
          outline: none;
          direction: rtl;
        }
        .field input:focus,
        .field select:focus {
          border-color: var(--green);
          background: white;
        }
        .field input::placeholder { color: var(--muted); }

        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 540px) { .field-row { grid-template-columns: 1fr; } }

        /* ===== PACKAGE TABLE ===== */
        .pkg-table {
          width: 100%;
          border-collapse: collapse;
          font-size: .88rem;
          margin-top: 20px;
          border-radius: 10px;
          overflow: hidden;
        }
        .pkg-table thead tr {
          background: var(--green);
          color: white;
        }
        .pkg-table th, .pkg-table td {
          padding: 10px 14px;
          text-align: right;
        }
        .pkg-table tbody tr:nth-child(even) { background: var(--sage); }
        .pkg-table tbody tr:nth-child(odd)  { background: white; }

        /* ===== TOTAL ===== */
        .total-box {
          background: linear-gradient(135deg, var(--green), var(--green2));
          color: white;
          border-radius: 12px;
          padding: 18px 24px;
          text-align: center;
          margin: 20px 0 4px;
          display: none;
        }
        .total-box.show { display: block; }
        .total-box .label { font-size: .85rem; opacity: .8; margin-bottom: 4px; }
        .total-box .amount {
          font-size: 2rem;
          font-weight: 800;
          color: var(--gold);
        }
        .total-box .currency { font-size: .9rem; opacity: .8; }

        /* ===== ERROR ===== */
        .error-box {
          background: #fff5f5;
          border: 1.5px solid #fca5a5;
          border-radius: 10px;
          padding: 14px 18px;
          color: #b91c1c;
          font-size: .9rem;
          margin-bottom: 16px;
          display: none;
        }
        .error-box.show { display: block; }

        /* ===== BUTTON ===== */
        .pay-btn {
          width: 100%;
          padding: 18px;
          background: var(--green);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Tajawal', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: background .2s, transform .15s;
          letter-spacing: .02em;
        }
        .pay-btn:hover:not(:disabled) { background: var(--green2); transform: translateY(-1px); }
        .pay-btn:disabled { background: #9ca3af; cursor: not-allowed; }
        .pay-btn .gold { color: var(--gold); }

        /* ===== FOOTER ===== */
        .page-footer {
          text-align: center;
          padding: 24px;
          font-size: .75rem;
          color: var(--muted);
          border-top: 1px solid var(--border);
          margin-top: 8px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>

      {/* Header */}
      <header className="page-header">
        <img src="/images/dibrah-logo.png" alt="دِبرة" />
        <h1>احجز الآن</h1>
      </header>

      <div className="booking-wrap">

        {/* ١. المشترك */}
        <div className="section">
          <h2 className="section-title">👤 معلومات المشترك</h2>
          <div className="field-row">
            <div className="field">
              <label>الاسم الرباعي <span>*</span></label>
              <input type="text" placeholder="أدخل الاسم الرباعي" value={form.subscriber_name} onChange={e => set('subscriber_name', e.target.value)} />
            </div>
            <div className="field">
              <label>رقم الهوية الوطنية <span>*</span></label>
              <input type="text" placeholder="رقم الهوية" value={form.subscriber_id} onChange={e => set('subscriber_id', e.target.value)} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>الجنسية <span>*</span></label>
              <input type="text" placeholder="الجنسية" value={form.subscriber_nationality} onChange={e => set('subscriber_nationality', e.target.value)} />
            </div>
            <div className="field">
              <label>رقم الجوال <span>*</span></label>
              <input type="tel" placeholder="05XXXXXXXX" value={form.subscriber_phone} onChange={e => set('subscriber_phone', e.target.value)} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>البريد الإلكتروني <span>*</span></label>
              <input type="email" placeholder="example@email.com" value={form.subscriber_email} onChange={e => set('subscriber_email', e.target.value)} />
            </div>
            <div className="field">
              <label>العنوان <span>*</span></label>
              <input type="text" placeholder="الحي، الشارع، المدينة" value={form.subscriber_address} onChange={e => set('subscriber_address', e.target.value)} />
            </div>
          </div>
        </div>

        {/* ٢. المستفيد */}
        <div className="section">
          <h2 className="section-title">🧒 معلومات المستفيد</h2>
          <div className="field-row">
            <div className="field">
              <label>الاسم <span>*</span></label>
              <input type="text" placeholder="اسم المستفيد" value={form.beneficiary_name} onChange={e => set('beneficiary_name', e.target.value)} />
            </div>
            <div className="field">
              <label>العمر <span>*</span></label>
              <input type="text" placeholder="العمر" value={form.beneficiary_age} onChange={e => set('beneficiary_age', e.target.value)} />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>صلة القرابة <span>*</span></label>
              <input type="text" placeholder="مثال: ابن، ابنة، والدة..." value={form.beneficiary_relation} onChange={e => set('beneficiary_relation', e.target.value)} />
            </div>
            <div className="field">
              <label>رقم الطوارئ <span>*</span></label>
              <input type="tel" placeholder="رقم الطوارئ" value={form.emergency_phone} onChange={e => set('emergency_phone', e.target.value)} />
            </div>
          </div>
        </div>

        {/* ٣. الباقة */}
        <div className="section">
          <h2 className="section-title">📦 اختر الباقة</h2>

          <div className="field-row">
            <div className="field">
              <label>نوع الاشتراك <span>*</span></label>
              <select value={packageType} onChange={e => { setPackageType(e.target.value); setSelectedPkg('') }}>
                <option value="">-- اختر نوع الاشتراك --</option>
                {Object.entries(TYPE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label>عدد الساعات <span>*</span></label>
              <select value={selectedPkg} onChange={e => setSelectedPkg(e.target.value as PackageKey)} disabled={!packageType}>
                <option value="">-- اختر عدد الساعات --</option>
                {availableHours.map(key => (
                  <option key={key} value={key}>
                    {PACKAGES[key].hours} ساعات — {PACKAGES[key].price.toLocaleString('ar-SA')} ر.س
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label>تاريخ بدء الاشتراك <span>*</span></label>
              <input type="date" value={form.start_date} onChange={e => set('start_date', e.target.value)} />
            </div>
            <div className="field">
              <label>ساعة البدء <span>*</span></label>
              <input type="time" value={form.start_time} onChange={e => set('start_time', e.target.value)} />
            </div>
          </div>

          {/* المبلغ */}
          <div className={`total-box ${selectedPkg ? 'show' : ''}`}>
            <div className="label">المبلغ الإجمالي</div>
            <div className="amount">{selectedPrice.toLocaleString('ar-SA')}</div>
            <div className="currency">ريال سعودي</div>
          </div>

          {/* جدول الأسعار */}
          <table className="pkg-table">
            <thead>
              <tr>
                <th>نوع الاشتراك</th>
                <th style={{ textAlign: 'center' }}>الساعات</th>
                <th style={{ textAlign: 'center' }}>المبلغ</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(PACKAGES).map(([key, p]) => (
                <tr key={key}>
                  <td>{p.name}</td>
                  <td style={{ textAlign: 'center' }}>{p.hours}</td>
                  <td style={{ textAlign: 'center' }}>{p.price.toLocaleString('ar-SA')} ر.س</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* خطأ */}
        <div className={`error-box ${error ? 'show' : ''}`}>{error}</div>

        {/* زر الدفع */}
        <button className="pay-btn" onClick={submit} disabled={loading}>
          {loading ? 'جاري المعالجة...' : <><span className="gold">💳</span> المتابعة للدفع</>}
        </button>

      </div>

      <footer className="page-footer">
        © {new Date().getFullYear()} دِبرة للرعاية — جميع الحقوق محفوظة
      </footer>
    </>
  )
}
