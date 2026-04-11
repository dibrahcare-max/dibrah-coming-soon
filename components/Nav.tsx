'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [mobOpen, setMobOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  const links = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#packages', label: 'الباقات' },
    { href: '#', label: 'سياسة الخصوصية' },
    { href: '#', label: 'الشروط والأحكام' },
    { href: '#faq', label: 'الأسئلة الشائعة' },
    { href: '#contact', label: 'تواصل معنا' },
  ]

  return (
    <>
      {/* NAV */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 500,
          background: '#E9eedd',
          borderBottom: '1px solid rgba(95,97,87,.15)',
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 64px',
          transition: 'box-shadow 0.3s, transform 0.35s',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          boxShadow: scrolled ? '0 2px 16px rgba(45,58,30,.1)' : 'none',
          direction: 'rtl',
        }}
      >
        <a href="#home">
          <Image src="/images/dibrah-logo.png" alt="دِبرة" width={120} height={48} style={{ height: 48, width: 'auto' }} priority />
        </a>

        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--muted)', padding: '7px 13px', borderRadius: 6, transition: 'all .2s', display: 'block' }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = 'var(--dark)'; (e.target as HTMLElement).style.background = 'rgba(45,58,30,.07)' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = 'var(--muted)'; (e.target as HTMLElement).style.background = 'transparent' }}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#"
            style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--dark)', border: '1.5px solid var(--dark)', padding: '8px 20px', borderRadius: 6, transition: 'all .2s' }}
            className="btn-outline-nav"
          >اهديها</a>
          <a href="#"
            style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--bg)', background: 'var(--dark)', padding: '8px 20px', borderRadius: 6, transition: 'all .2s' }}
          >احجز الآن</a>
          <button
            onClick={() => setMobOpen(true)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
            className="ham-btn"
            aria-label="القائمة"
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--dark)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--dark)', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--dark)', borderRadius: 2 }} />
          </button>
        </div>
      </nav>

      {/* MOB MENU */}
      {mobOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 600,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20,
          direction: 'rtl',
        }}>
          <button onClick={() => setMobOpen(false)} style={{
            position: 'absolute', top: 24, right: 24, background: 'none', border: 'none',
            fontSize: '1.4rem', cursor: 'pointer', color: 'var(--dark)',
          }}>✕</button>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobOpen(false)}
              style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--dark)', fontFamily: 'PNU, Tajawal, sans-serif' }}
            >{l.label}</a>
          ))}
          <a href="https://app.dibrah.net/card-checkout?booking_for_type=self" target="_blank"
            onClick={() => setMobOpen(false)}
            style={{ background: 'var(--gold)', color: 'white', padding: '10px 28px', borderRadius: 8, marginTop: 8, fontWeight: 700 }}
          >اهديها</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-links-desktop { display: none !important; }
          .btn-outline-nav { display: none !important; }
          .ham-btn { display: flex !important; }
          nav { padding: 0 16px !important; }
        }
      `}</style>
    </>
  )
}
