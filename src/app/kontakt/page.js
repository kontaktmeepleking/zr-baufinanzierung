'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mvzwdzay', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } finally {
      setSending(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '0.75rem 1rem', fontSize: '0.95rem',
    border: '1px solid var(--lila-light)', borderRadius: 2,
    fontFamily: 'var(--font-dm-sans)', background: 'white',
    color: 'var(--anthrazit)', outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <>
      <head>
        <title>Kontakt & Beratung anfragen | ZR Baufinanzierung – Franziska Ritsche</title>
        <meta name="description" content="Kostenloses Erstgespräch zur Baufinanzierung in Berlin & Brandenburg. Jetzt Termin anfragen – persönlich, unverbindlich, auf Augenhöhe." />
      </head>
      <style>{`
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .kontakt-input:focus { border-color: var(--lila) !important; }
        .kontakt-btn { background: var(--lila); color: white; width: 100%; padding: 0.95rem 2rem; border: none; border-radius: 2px; font-size: 0.95rem; font-weight: 500; cursor: pointer; font-family: var(--font-dm-sans); transition: background 0.2s, transform 0.2s; }
        .kontakt-btn:hover:not(:disabled) { background: var(--lila-dark); transform: translateY(-1px); }
        .kontakt-btn:disabled { opacity: 0.6; cursor: default; }
        .kontakt-card { background: var(--anthrazit); border-radius: 2px; padding: 1.5rem; display: flex; align-items: flex-start; gap: 1rem; border-left: 3px solid var(--lila); }
        html, body { overflow-x: hidden; }
        .nav-hamburger-k { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; z-index: 101; }
        .nav-hamburger-k span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
        .k-mobile-menu { display: none; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); z-index: 99; padding: 1.5rem 5%; flex-direction: column; gap: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .k-mobile-menu.open { display: flex; }
        .k-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; }
        @media (max-width: 768px) {
          .nav-links-kontakt { display: none !important; }
          .nav-hamburger-k { display: flex !important; }
          .kontakt-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .k-main { padding: 3rem 5% 5rem !important; }
          .k-hero { padding: 5rem 5% 3rem !important; }
          .k-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1.25rem !important; padding: 2.5rem 6% !important; }
          .k-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .k-names-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--anthrazit)', padding: '0 5%', height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <a href="/" className="nav-logo">
          <Image src="/images/zr-baufinanzierung-logo.png" alt="ZR Baufinanzierung" width={160} height={80} style={{ height: 64, width: 'auto', display: 'block' }} />
        </a>
        <ul className="nav-links-kontakt" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="nav-link" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em', borderBottom: '1px solid transparent', paddingBottom: '2px' }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="nav-hamburger-k" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>
      <div className={`k-mobile-menu${menuOpen ? ' open' : ''}`}>
        {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="/kontakt" onClick={() => setMenuOpen(false)} style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}>Beratung anfragen</a>
      </div>

      {/* HERO */}
      <section className="k-hero" style={{ background: 'var(--anthrazit)', paddingTop: 88, position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ padding: '3rem 8% 3rem' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
            Kontakt
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'white', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Einfach melden.
          </h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontWeight: 300 }}>
            Das erste Gespräch ist kostenlos und unverbindlich. Ich freue mich auf Sie.
          </p>
        </div>
      </section>

      {/* HAUPTBEREICH */}
      <main className="k-main" style={{ background: 'var(--hell)', padding: '6rem 8% 8rem' }}>
        <div className="kontakt-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* LINKE SPALTE */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '2.5rem', lineHeight: 1.2 }}>
              So erreichen Sie mich
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>

              {/* Telefon */}
              <div className="kontakt-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '0.3rem' }}>Telefon</div>
                  <a href="tel:+4917684405479" style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>0176 84 40 54 79</a>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Mo–Fr, auch abends erreichbar</div>
                </div>
              </div>

              {/* E-Mail */}
              <div className="kontakt-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '0.3rem' }}>E-Mail</div>
                  <a href="mailto:kontakt@zr-baufi.de" style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white', textDecoration: 'none', display: 'block', marginBottom: '0.25rem' }}>kontakt@zr-baufi.de</a>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Antwort innerhalb von 24 Stunden</div>
                </div>
              </div>

              {/* Region */}
              <div className="kontakt-card">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '0.3rem' }}>Region</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 500, color: 'white', marginBottom: '0.25rem' }}>Berlin & Brandenburg</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Vor Ort, per Video oder Telefon</div>
                </div>
              </div>
            </div>

            {/* Zitat */}
            <blockquote style={{ background: 'var(--lila-light)', borderLeft: '3px solid var(--lila)', borderRadius: '0 2px 2px 0', padding: '1.5rem 1.75rem', margin: 0 }}>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--anthrazit)', lineHeight: 1.7, marginBottom: '0.75rem', fontWeight: 400 }}>
                „Ich bin auch abends und am Wochenende erreichbar – weil ich weiß, dass meine Kunden tagsüber oft keine Zeit haben."
              </p>
              <cite style={{ fontSize: '0.82rem', color: 'var(--lila-dark)', fontStyle: 'normal', fontWeight: 500 }}>– Franziska Ritsche</cite>
            </blockquote>
          </div>

          {/* RECHTE SPALTE – Formular */}
          <div style={{ background: 'white', padding: '2.5rem', borderRadius: 2, boxShadow: '0 4px 32px rgba(44,50,60,0.08)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.75rem' }}>Vielen Dank!</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>
                  Ich melde mich schnellstmöglich bei Ihnen.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>Nachricht senden</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '1.75rem', fontWeight: 300 }}>Alle Felder sind Pflichtfelder, außer Telefon.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>Name</label>
                    <input name="name" required className="kontakt-input" style={inputStyle} placeholder="Max Mustermann" />
                  </div>

                  {/* E-Mail */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>E-Mail</label>
                    <input name="email" type="email" required className="kontakt-input" style={inputStyle} placeholder="max@mustermann.de" />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>
                      Telefon <span style={{ color: 'var(--text-light)', fontWeight: 300 }}>optional</span>
                    </label>
                    <input name="telefon" type="tel" className="kontakt-input" style={inputStyle} placeholder="0176 ..." />
                  </div>

                  {/* Thema */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>Worum geht es?</label>
                    <select name="thema" required className="kontakt-input" style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', cursor: 'pointer' }}>
                      <option value="">Bitte wählen …</option>
                      <option value="Erstfinanzierung">Erstfinanzierung</option>
                      <option value="Anschlussfinanzierung">Anschlussfinanzierung</option>
                      <option value="Baufinanzierung als Selbstständige/r">Baufinanzierung als Selbstständige/r</option>
                      <option value="Modernisierung">Modernisierung</option>
                      <option value="Ratenkredit">Ratenkredit</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.4rem' }}>Ihre Nachricht</label>
                    <textarea name="nachricht" required rows={4} className="kontakt-input" style={{ ...inputStyle, resize: 'vertical' }} placeholder="Womit kann ich Ihnen helfen?" />
                  </div>

                  {/* Datenschutz */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <input type="checkbox" name="datenschutz" required id="datenschutz" style={{ marginTop: 3, accentColor: 'var(--lila)', flexShrink: 0, width: 16, height: 16, cursor: 'pointer' }} />
                    <label htmlFor="datenschutz" style={{ fontSize: '0.82rem', color: 'var(--text-light)', lineHeight: 1.6, fontWeight: 300, cursor: 'pointer' }}>
                      Ich habe die <a href="/datenschutz" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                    </label>
                  </div>

                  <button type="submit" disabled={sending} className="kontakt-btn">
                    {sending ? 'Wird gesendet …' : 'Nachricht senden'}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="k-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--lila)', fontSize: '1.4rem', fontWeight: 600 }}>ZR</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Baufinanzierung</span>
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {[['/impressum','Impressum'],['/datenschutz','Datenschutz'],['#','Nutzungsbedingungen'],['https://zr-baufi.fincrm.de/kundenbereich/login','Kundenbereich']].map(([href, label]) => (
            <li key={label}><a href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 ZR Baufinanzierung · Franziska Ritsche</p>
      </footer>
    </>
  )
}
