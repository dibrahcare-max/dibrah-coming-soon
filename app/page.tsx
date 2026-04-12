'use client'
import { useState } from 'react'

export default function Home() {
  const [btnText, setBtnText] = useState('أشعرني')
  const [btnStyle, setBtnStyle] = useState({})

  const handleNotify = () => {
    setBtnText('✓')
    setBtnStyle({ background: '#3d5c2a', color: '#f5f0e8' })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;700&display=swap');

        @font-face {
          font-family: 'AW';
          src: url('/fonts/AW.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
        }

        :root {
          --green: #2d4a1e;
          --gold: #c9a84c;
          --cream: #f5f0e8;
          --sage: #e3eed5;
          --muted: rgba(21,46,8,.8);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Tajawal', sans-serif;
          background: #e3eed5;
          color: #152e08;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          direction: rtl;
        }

        .bg {
          position: fixed;
          inset: 0;
          z-index: 0;
        }
        .bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: .25;
          animation: kb 20s ease-in-out infinite alternate;
        }
        @keyframes kb {
          0%   { transform: scale(1.08) translate(0,0); }
          50%  { transform: scale(1.12) translate(-15px,-10px); }
          100% { transform: scale(1.06) translate(10px,8px); }
        }

        .bg-tint {
          position: fixed;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(ellipse at 30% 50%, rgba(227,238,213,.6) 0%, transparent 70%),
            radial-gradient(ellipse at 70% 80%, rgba(201,168,76,.06) 0%, transparent 60%);
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 24px 24px 32px;
          max-width: 640px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .logo-wrap {
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeUp .9s .2s forwards;
        }
        .logo-wrap img {
          height: 100px;
          width: auto;
          filter: brightness(0);
        }

        .title {
          font-family: 'AW', 'Tajawal', sans-serif;
          font-size: clamp(3.5rem,10vw,8rem);
          line-height: 1;
          color: #152e08;
          margin-bottom: 8px;
          opacity: 0;
          animation: fadeUp .9s .4s forwards;
        }

        .soon {
          font-family: 'AW', 'Tajawal', sans-serif;
          font-size: clamp(1.8rem,5vw,3.5rem);
          color: var(--gold);
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUp .9s .6s forwards;
          letter-spacing: .02em;
        }

        .divider {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeIn .8s .8s forwards;
        }

        .desc {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.9;
          max-width: 440px;
          margin-bottom: 40px;
          opacity: 0;
          animation: fadeUp .9s .9s forwards;
        }

        .notify-form {
          display: flex;
          gap: 0;
          width: 100%;
          max-width: 400px;
          opacity: 0;
          animation: fadeUp .9s 1.1s forwards;
          border: 1px solid rgba(45,74,30,.2);
          border-radius: 3px;
          overflow: hidden;
        }
        .notify-input {
          flex: 1;
          background: rgba(45,74,30,.05);
          border: none;
          padding: 14px 20px;
          font-family: 'Tajawal', sans-serif;
          font-size: .88rem;
          color: #152e08;
          outline: none;
          direction: rtl;
        }
        .notify-input::placeholder { color: rgba(45,74,30,.8); }
        .notify-btn {
          background: var(--gold);
          color: #152e08;
          border: none;
          padding: 14px 24px;
          font-family: 'Tajawal', sans-serif;
          font-weight: 800;
          font-size: .78rem;
          letter-spacing: .1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background .25s;
          white-space: nowrap;
        }
        .notify-btn:hover { background: var(--cream); }

        .time-dots {
          display: flex;
          gap: 6px;
          margin-top: 32px;
          opacity: 0;
          animation: fadeIn .8s 1.2s forwards;
        }
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(45,74,30,.15);
        }
        .dot.active {
          background: var(--gold);
          animation: pulse 2s ease infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(.8); }
        }

        .socials {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          align-items: center;
          opacity: 0;
          animation: fadeIn .8s 1.3s forwards;
        }
        .soc-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #152e08;
          text-decoration: none;
          transition: transform .25s;
        }
        .soc-link:hover { transform: scale(1.1); }
        .soc-link svg { fill: white; }

        .contact-info {
          margin-top: 24px;
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
          opacity: 0;
          animation: fadeIn .8s 1.4s forwards;
        }
        .ci {
          font-size: .78rem;
          color: rgba(45,74,30,.9);
          letter-spacing: .05em;
        }
        .ci a { color: inherit; text-decoration: none; }
        .ci a:hover { color: var(--gold); }

        .footer-line {
          margin-top: 24px;
          opacity: 0;
          animation: fadeIn .8s 1.6s forwards;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:none; }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }

        @media (max-width: 480px) {
          .notify-form { flex-direction: column; border: none; gap: 8px; }
          .notify-input { border: 1px solid rgba(45,74,30,.2); border-radius: 2px; }
          .notify-btn { border-radius: 2px; }
          .contact-info { flex-direction: column; gap: 12px; align-items: center; }
        }
      `}</style>

      {/* خلفية */}
      <div className="bg">
        <img
          src="https://www.dibrah.net/wp-content/uploads/2025/11/IMG_1133-1-1024x683.jpg"
          alt=""
          loading="eager"
        />
      </div>
      <div className="bg-tint"></div>

      {/* المحتوى */}
      <div className="content">

        {/* لوقو */}
        <div className="logo-wrap">
          <img src="/images/dibrah-logo.png" alt="دِبرة" />
        </div>

        {/* عنوان */}
        <h1 className="title">دِبرة</h1>
        <p className="soon">قريباً</p>

        <div className="divider"></div>

        {/* وصف */}
        <p className="desc">
          رعاية سعودية أصيلة لأطفالك وكبار السن<br />
          نعمل لنكون خياركم الأول، وسنعود قريباً.
        </p>

        {/* فورم */}
        <div className="notify-form">
          <input
            className="notify-input"
            type="email"
            placeholder="بريدك الإلكتروني — أشعرني عند الإطلاق"
          />
          <button
            className="notify-btn"
            onClick={handleNotify}
            style={btnStyle}
          >
            {btnText}
          </button>
        </div>

        {/* نقاط */}
        <div className="time-dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>

        {/* سوشيال */}
        <div className="socials">
          <a href="https://www.instagram.com/dibrahcare" target="_blank" className="soc-link" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@dibrahcare" target="_blank" className="soc-link" title="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/></svg>
          </a>
          <a href="https://x.com/dibrahcare" target="_blank" className="soc-link" title="X">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://wa.me/966535977511" target="_blank" className="soc-link" title="واتساب">
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>

        {/* معلومات */}
        <div className="contact-info">
          <span className="ci"><a href="mailto:info@dibrahcare.com">info@dibrahcare.com</a></span>
          <span className="ci">·</span>
          <span className="ci"><a href="tel:+966535977511" dir="ltr">+966 53 597 7511</a></span>
          <span className="ci">·</span>
          <span className="ci">الرياض، السعودية</span>
        </div>

        {/* Saudi Made */}
        <div className="footer-line">
          <img src="/images/saudi-made.svg" alt="Saudi Made" style={{ height: '28px', width: 'auto' }} />
        </div>

      </div>
    </>
  )
}
