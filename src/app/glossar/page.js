'use client'

import { useState } from 'react'
import Image from 'next/image'
import { glossarTerms, glossarCategories } from '../../data/glossar'

export default function GlossarIndex() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        html, body { overflow-x: hidden; }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .gl-nav-links { display: flex; gap: 2rem; list-style: none; }
        .gl-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .gl-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .gl-mobile-menu { display: none; }
        .gl-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        .gl-term-card { background: white; border: 1px solid var(--lila-light); padding: 1.25rem 1.5rem; text-decoration: none; display: block; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .gl-term-card:hover { border-color: var(--lila); box-shadow: 0 4px 16px rgba(187,159,213,0.2); transform: translateY(-2px); }
        .gl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        @keyframes float-pulse { 0% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } 40% { box-shadow: 0 2px 8px rgba(0,0,0,0.25), 0 0 18px 4px rgba(187,159,213,0.5); } 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } }
        .float-btn { animation: float-pulse 1.2s ease-in-out 5s 1; }
        .float-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(187,159,213,0.5); }
        @media (max-width: 768px) {
          .gl-nav-links { display: none !important; }
          .gl-hamburger { display: flex !important; }
          .gl-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .gl-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .gl-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .gl-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .gl-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .gl-grid { grid-template-columns: 1fr !important; }
          .section-pad { padding: 4rem 5% !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--anthrazit)', padding: '0 5%', height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(187,159,213,0.13)'
      }}>
        <a href="/" className="nav-logo">
          <Image src="/images/zr-baufinanzierung-logo.png" alt="ZR Baufinanzierung" width={160} height={80} style={{ height: 64, width: 'auto', display: 'block' }} />
        </a>
        <ul className="gl-nav-links">
          {[
            ['/#leistungen', 'Leistungen'],
            ['/#fuer-wen', 'Für wen?'],
            ['/#stimmen', 'Kundenstimmen'],
            ['/#rechner', 'Rechner'],
            ['/selbststaendige', 'Selbstständige'],
            ['/forderdarlehen-und-zuschusse', 'Förderung'],
            ['/warum-ich', 'Warum ich?'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="nav-link" style={{
                color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                fontSize: '0.88rem', letterSpacing: '0.04em',
                borderBottom: '1px solid transparent', paddingBottom: '2px'
              }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="gl-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="gl-mobile-menu">
          {[
            ['/#leistungen', 'Leistungen'], ['/#fuer-wen', 'Für wen?'],
            ['/#stimmen', 'Kundenstimmen'], ['/#rechner', 'Rechner'],
            ['/selbststaendige', 'Selbstständige'],
            ['/forderdarlehen-und-zuschusse', 'Förderung'],
            ['/warum-ich', 'Warum ich?'],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="/kontakt" className="mob-cta" onClick={() => setMenuOpen(false)}>Beratung anfragen</a>
        </div>
      )}

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        paddingTop: 88, paddingBottom: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(187,159,213,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '4rem 8% 2rem' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
            Baufinanzierung verstehen
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, color: 'white', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 3.5vw, 3.8rem)' }}>Glossar Baufinanzierung</span>
            <em style={{ display: 'block', fontSize: 'clamp(1.4rem, 2.5vw, 2.4rem)', color: 'var(--lila)', fontStyle: 'italic' }}>Fachbegriffe einfach erklärt.</em>
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto', fontWeight: 300 }}>
            Von Annuitätendarlehen bis Zinsbindung – alle wichtigen Begriffe rund um Ihre Baufinanzierung, verständlich erklärt.
          </p>
        </div>
      </section>

      {/* TERM LIST BY CATEGORY */}
      <section style={{ background: 'var(--hell)', padding: '5rem 8%' }}>
        {glossarCategories.map(category => {
          const terms = glossarTerms.filter(t => t.category === category)
          return (
            <div key={category} style={{ marginBottom: '4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
                <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 600, color: 'var(--anthrazit)', margin: 0 }}>{category}</h2>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
              </div>
              <div className="gl-grid">
                {terms.map(term => (
                  <a key={term.slug} href={`/glossar/${term.slug}`} className="gl-term-card">
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.4rem', fontFamily: 'var(--font-cormorant)' }}>{term.term}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.6, fontWeight: 300 }}>{term.shortDef}</div>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--anthrazit)', padding: '5rem 8%', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          Persönliche Beratung
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
        </p>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, maxWidth: 560, margin: '0 auto 1.25rem' }}>
          Noch Fragen offen?<br /><em style={{ color: 'var(--lila)', fontStyle: 'italic' }}>Kein Problem – ich helfe gerne.</em>
        </h2>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 440, margin: '0 auto 2.5rem', fontWeight: 300 }}>
          Ob einzelne Begriffe unklar sind oder Sie wissen möchten, was das für Ihre Situation bedeutet – sprechen Sie mich einfach an.
        </p>
        <a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.9rem 2rem', borderRadius: 2, fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'inline-block', transition: 'background 0.25s, transform 0.25s' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--lila-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--lila)'; e.currentTarget.style.transform = 'translateY(0)' }}
        >Kostenloses Erstgespräch</a>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="float-btn" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, background: 'var(--lila)', color: 'white', padding: '0.85rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.25s, box-shadow 0.25s', maxWidth: '280px', lineHeight: 1.3 }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="gl-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--lila)', fontSize: '1.4rem', fontWeight: 600 }}>ZR</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Baufinanzierung</span>
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {[['/glossar', 'Glossar'], ['/impressum', 'Impressum'], ['/datenschutz', 'Datenschutz'], ['https://zr-baufi.fincrm.de/kundenbereich/login', 'Kundenbereich']].map(([href, label]) => (
            <li key={label}><a href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 ZR Baufinanzierung · Franziska Ritsche</p>
      </footer>
    </>
  )
}
