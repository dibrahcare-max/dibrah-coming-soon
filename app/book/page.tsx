'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'

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
const TYPE_LABELS: Record<string,string> = { ramadan:'باقة رمضان', daily:'يومي', weekly:'أسبوعي', monthly:'شهري' }
const HOURS_BY_TYPE: Record<string,PackageKey[]> = {
  ramadan:['ramadan_2'], daily:['daily_4','daily_8'], weekly:['weekly_4','weekly_8'], monthly:['monthly_4','monthly_8']
}

const inp: React.CSSProperties = {
  width:'100%', padding:'11px 14px', border:'1.5px solid rgba(95,97,87,.2)',
  borderRadius:10, fontFamily:'inherit', fontSize:'.95rem', color:'var(--dark)',
  background:'var(--bg)', outline:'none', direction:'rtl', color:'var(--dark)',
}
const row: React.CSSProperties = { display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:4 }
const card: React.CSSProperties = {
  background:'white', borderRadius:20, padding:'28px 32px',
  border:'1px solid rgba(95,97,87,.15)', marginBottom:20,
}
const cardTitle: React.CSSProperties = {
  fontSize:'1rem', fontWeight:800, color:'var(--dark)',
  borderBottom:'2px solid var(--dark)', paddingBottom:12, marginBottom:24,
}

function Field({ label, children }:{ label:string, children:React.ReactNode }) {
  return (
    <div style={{ marginBottom:16 }}>
      <label style={{ display:'block', fontSize:'.85rem', fontWeight:700, color:'var(--dark)', marginBottom:6 }}>
        {label} <span style={{ color:'#e53935' }}>*</span>
      </label>
      {children}
    </div>
  )
}

export default function BookingPage() {
  const [form, setForm] = useState({
    subscriber_name:'', subscriber_id:'', subscriber_nationality:'',
    subscriber_phone:'', subscriber_email:'', subscriber_address:'',
    beneficiary_name:'', beneficiary_age:'', beneficiary_relation:'',
    emergency_phone:'', start_date:'', start_time:'',
  })
  const [packageType, setPackageType] = useState('')
  const [selectedPkg, setSelectedPkg] = useState<PackageKey|''>('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const set = (k:string,v:string) => setForm(f=>({...f,[k]:v}))
  const availableHours = packageType ? HOURS_BY_TYPE[packageType]||[] : []
  const selectedPrice  = selectedPkg ? PACKAGES[selectedPkg].price : 0

  const validate = () => {
    const required:[string,string][] = [
      ['subscriber_name','اسم المشترك'],['subscriber_id','رقم الهوية'],
      ['subscriber_nationality','الجنسية'],['subscriber_phone','رقم الجوال'],
      ['subscriber_email','البريد الإلكتروني'],['subscriber_address','العنوان'],
      ['beneficiary_name','اسم المستفيد'],['beneficiary_age','عمر المستفيد'],
      ['beneficiary_relation','صلة القرابة'],['emergency_phone','رقم الطوارئ'],
      ['start_date','تاريخ بدء الاشتراك'],['start_time','ساعة البدء'],
    ]
    for (const [k,label] of required)
      if (!form[k as keyof typeof form].trim()) return `الرجاء تعبئة حقل: ${label}`
    if (!selectedPkg) return 'الرجاء اختيار نوع الاشتراك وعدد الساعات'
    return ''
  }

  const submit = async () => {
    setError('')
    const err = validate()
    if (err) { setError(err); return }
    setLoading(true)
    try {
      const res = await fetch('/api/payment',{
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({ package:selectedPkg, ...form }),
      })
      const data = await res.json()
      if (data.success if (data.success && data.url) window.location.href = data.urlif (data.success && data.url) window.location.href = data.url data.url) {
        sessionStorage.setItem('dibrah_booking', JSON.stringify({ package: selectedPkg, ...form }))
        window.location.href = data.url
      }
      else setError(data.message||'حدث خطأ، حاول مرة أخرى')
    } catch { setError('حدث خطأ في الاتصال') }
    finally { setLoading(false) }
  }

  return (
    <>
      <Nav />
      <div style={{ background:'var(--bg)', minHeight:'100vh' }}>
        <div style={{ maxWidth:720, margin:'0 auto', padding:'48px 24px 80px' }}>

          <div style={{ textAlign:'center', marginBottom:40 }}>
            <span style={{ fontSize:'3rem', fontWeight:900, color:'#777C6D', display:'block', marginBottom:8 }}>دِبرة تدبرك</span>
            <h1 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'var(--dark)' }}>احجز الآن</h1>
          </div>

          {/* المشترك */}
          <div style={card}>
            <h2 style={cardTitle}>معلومات المشترك</h2>
            <div style={row}>
              <Field label="الاسم الرباعي"><input style={inp} type="text" placeholder="أدخل الاسم الرباعي" value={form.subscriber_name} onChange={e=>set('subscriber_name',e.target.value)}/></Field>
              <Field label="رقم الهوية الوطنية"><input style={inp} type="text" placeholder="رقم الهوية" value={form.subscriber_id} onChange={e=>set('subscriber_id',e.target.value)}/></Field>
            </div>
            <div style={row}>
              <Field label="الجنسية"><input style={inp} type="text" placeholder="الجنسية" value={form.subscriber_nationality} onChange={e=>set('subscriber_nationality',e.target.value)}/></Field>
              <Field label="رقم الجوال"><input style={inp} type="tel" placeholder="05XXXXXXXX" value={form.subscriber_phone} onChange={e=>set('subscriber_phone',e.target.value)}/></Field>
            </div>
            <div style={row}>
              <Field label="البريد الإلكتروني"><input style={inp} type="email" placeholder="example@email.com" value={form.subscriber_email} onChange={e=>set('subscriber_email',e.target.value)}/></Field>
              <Field label="العنوان"><input style={inp} type="text" placeholder="الحي، الشارع، المدينة" value={form.subscriber_address} onChange={e=>set('subscriber_address',e.target.value)}/></Field>
            </div>
          </div>

          {/* المستفيد */}
          <div style={card}>
            <h2 style={cardTitle}>معلومات المستفيد</h2>
            <div style={row}>
              <Field label="الاسم"><input style={inp} type="text" placeholder="اسم المستفيد" value={form.beneficiary_name} onChange={e=>set('beneficiary_name',e.target.value)}/></Field>
              <Field label="العمر"><input style={inp} type="text" placeholder="العمر" value={form.beneficiary_age} onChange={e=>set('beneficiary_age',e.target.value)}/></Field>
            </div>
            <div style={row}>
              <Field label="صلة القرابة"><input style={inp} type="text" placeholder="مثال: ابن، ابنة، والدة..." value={form.beneficiary_relation} onChange={e=>set('beneficiary_relation',e.target.value)}/></Field>
              <Field label="رقم الطوارئ"><input style={inp} type="tel" placeholder="رقم الطوارئ" value={form.emergency_phone} onChange={e=>set('emergency_phone',e.target.value)}/></Field>
            </div>
          </div>

          {/* الباقة */}
          <div style={card}>
            <h2 style={cardTitle}>اختر الباقة</h2>
            <div style={row}>
              <Field label="نوع الاشتراك">
                <select style={inp} value={packageType} onChange={e=>{ setPackageType(e.target.value); setSelectedPkg('') }}>
                  <option value="">-- اختر نوع الاشتراك --</option>
                  {Object.entries(TYPE_LABELS).map(([k,v])=><option key={k} value={k}>{v}</option>)}
                </select>
              </Field>
              <Field label="عدد الساعات">
                <select style={{...inp, opacity:!packageType?.5:1}} value={selectedPkg} onChange={e=>setSelectedPkg(e.target.value as PackageKey)} disabled={!packageType}>
                  <option value="">-- اختر عدد الساعات --</option>
                  {availableHours.map(key=>(
                    <option key={key} value={key}>{PACKAGES[key].hours} ساعات — {PACKAGES[key].price.toLocaleString('ar-SA')} ر.س</option>
                  ))}
                </select>
              </Field>
            </div>
            <div style={row}>
              <Field label="تاريخ بدء الاشتراك"><input style={inp} type="date" value={form.start_date} onChange={e=>set('start_date',e.target.value)}/></Field>
              <Field label="ساعة البدء"><input style={inp} type="time" value={form.start_time} onChange={e=>set('start_time',e.target.value)}/></Field>
            </div>

            {selectedPkg && (
              <div style={{ background:'var(--dark)', color:'white', borderRadius:12, padding:'18px 24px', textAlign:'center', margin:'20px 0 4px' }}>
                <div style={{ fontSize:'.85rem', opacity:.7, marginBottom:4 }}>المبلغ الإجمالي</div>
                <div style={{ fontSize:'2rem', fontWeight:800, color:'#F6F0D7' }}>{selectedPrice.toLocaleString('ar-SA')}</div>
                <div style={{ fontSize:'.9rem', opacity:.7 }}>ريال سعودي</div>
              </div>
            )}

            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'.88rem', marginTop:20 }}>
              <thead>
                <tr style={{ background:'var(--dark)', color:'white' }}>
                  <th style={{ padding:'10px 14px', textAlign:'right' }}>نوع الاشتراك</th>
                  <th style={{ padding:'10px 14px', textAlign:'center' }}>الساعات</th>
                  <th style={{ padding:'10px 14px', textAlign:'center' }}>المبلغ</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(PACKAGES).map(([key,p],i)=>(
                  <tr key={key} style={{ background: i%2===0 ? 'white' : 'var(--bg)' }}>
                    <td style={{ padding:'10px 14px' }}>{p.name}</td>
                    <td style={{ padding:'10px 14px', textAlign:'center' }}>{p.hours}</td>
                    <td style={{ padding:'10px 14px', textAlign:'center' }}>{p.price.toLocaleString('ar-SA')} ر.س</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {error && (
            <div style={{ background:'#fff5f5', border:'1.5px solid #fca5a5', borderRadius:10, padding:'14px 18px', color:'#b91c1c', fontSize:'.9rem', marginBottom:16 }}>
              {error}
            </div>
          )}

          <button onClick={submit} disabled={loading} style={{
            width:'100%', padding:18, background: loading ? '#9ca3af' : 'var(--dark)',
            color:'white', border:'none', borderRadius:12, fontFamily:'inherit',
            fontSize:'1.1rem', fontWeight:800, cursor: loading ? 'not-allowed' : 'pointer',
          }}>
            {loading ? 'جاري المعالجة...' : 'المتابعة للدفع'}
          </button>
        </div>
      </div>
      <Footer />
      <WhatsApp />
      <style>{' input::placeholder, select::placeholder { color: var(--dark) !important; opacity: 0.6; } '}</style>
    </>
  )
}
