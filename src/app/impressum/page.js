'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Impressum() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        html, body { overflow-x: hidden; }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .imp-nav-links { display: flex; gap: 2rem; list-style: none; }
        .imp-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; z-index: 101; }
        .imp-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
        .imp-mobile-menu { display: none; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); z-index: 99; padding: 1.5rem 5%; flex-direction: column; gap: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .imp-mobile-menu.open { display: flex; }
        .imp-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; }
        @media (max-width: 768px) {
          .imp-nav-links { display: none !important; }
          .imp-hamburger { display: flex !important; }
          .imp-hero { padding: 6rem 5% 3rem !important; }
          .imp-main { padding: 3rem 5% 5rem !important; }
          .imp-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1.25rem !important; padding: 2.5rem 6% !important; }
          .imp-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
        }
        @keyframes float-pulse { 0% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } 40% { box-shadow: 0 2px 8px rgba(0,0,0,0.25), 0 0 18px 4px rgba(187,159,213,0.5); } 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } }
        .float-btn { animation: float-pulse 1.2s ease-in-out 5s 1; }
        .float-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(187,159,213,0.5); }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--anthrazit)', padding: '0 5%', height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <a href="/" className="nav-logo">
          <Image
            src="/images/zr-baufinanzierung-logo.png"
            alt="ZR Baufinanzierung"
            width={160}
            height={80}
            style={{ height: 64, width: 'auto', display: 'block' }}
          />
        </a>
        <ul className="imp-nav-links">
          {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="nav-link" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em', borderBottom: '1px solid transparent', paddingBottom: '2px' }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="imp-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>
      <div className={`imp-mobile-menu${menuOpen ? ' open' : ''}`}>
        {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="/kontakt" onClick={() => setMenuOpen(false)} style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}>Beratung anfragen</a>
      </div>

      {/* HERO */}
      <section className="imp-hero" style={{
        background: 'var(--anthrazit)', paddingTop: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 8% 4rem',
      }}>
        <div style={{ maxWidth: 800, width: '100%' }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 600, color: 'white', lineHeight: 1.1,
          }}>Impressum</h1>
        </div>
      </section>

      {/* INHALT */}
      <main className="imp-main" style={{ background: 'var(--hell)', padding: '5rem 8% 8rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {/* Abschnitt 1 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300 }}>
              ZR Baufinanzierung<br />
              Franziska Ritsche<br />
              Lange Straße 37A<br />
              15370 Fredersdorf-Vogelsdorf
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300, marginTop: '1rem' }}>
              Tel: <a href="tel:+4917684405479" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>0176 84 40 54 79</a><br />
              E-Mail: <a href="mailto:kontakt@zr-baufi.de" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>kontakt@zr-baufi.de</a><br />
              Web: <a href="https://www.zr-baufi.de" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>www.zr-baufi.de</a>
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 2 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Erlaubnis
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300 }}>
              Für die Tätigkeit innerhalb Deutschlands als Immobiliardarlehensvermittlerin gemäß §34i Abs. 1 GewO sowie die Tätigkeit als Vermittlerin von Darlehen gemäß §34c Abs. 1 Nr. 2 ist die Gewerbeerlaubnis vorhanden.
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 3 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Immobiliardarlehensvermittlerregister
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300 }}>
              Registrierungsnummer: D-W-148-11KQ-12<br />
              Register: <a href="https://www.vermittlerregister.info/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>www.vermittlerregister.info</a>
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 4 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Aufsichtsbehörde
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300 }}>
              Gemeinde Fredersdorf-Vogelsdorf<br />
              Lindenallee 3<br />
              15370 Fredersdorf-Vogelsdorf<br />
              <a href="https://www.fredersdorf-vogelsdorf.de/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>www.fredersdorf-vogelsdorf.de</a>
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300, marginTop: '1rem' }}>
              Mitglied der Industrie- und Handelskammer Ostbrandenburg<br />
              <a href="https://www.ihk.de/ostbrandenburg/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>www.ihk.de/ostbrandenburg</a>
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 5 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300 }}>
              Debeka Allgemeine Versicherung AG<br />
              Debeka-Platz 1<br />
              56073 Koblenz<br />
              Geltungsraum: Deutschland
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 6 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Redaktionell verantwortlich
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 2, fontWeight: 300 }}>
              Franziska Ritsche<br />
              Lange Str. 37a<br />
              15370 Fredersdorf-Vogelsdorf
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 7 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              EU-Streitschlichtung
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300 }}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lila-dark)', textDecoration: 'none' }}>ec.europa.eu/consumers/odr</a>
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300, marginTop: '0.75rem' }}>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 8 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1.5rem' }}>
              Verbraucherstreitbeilegung
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300 }}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <div style={{ height: 1, background: 'var(--lila-light)' }} />

          {/* Abschnitt 9 */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '2rem' }}>
              Haftungsausschluss
            </h2>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
              Haftung für Inhalte
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
              Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--anthrazit)', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>
              Haftung für externe Links
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300 }}>
              Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Für die Inhalte der externen Links sind die jeweiligen Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

        </div>
      </main>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="float-btn" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, background: 'var(--lila)', color: 'white', padding: '0.85rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.25s, box-shadow 0.25s', maxWidth: '280px', lineHeight: 1.3 }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="imp-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--lila)', fontSize: '1.4rem', fontWeight: 600 }}>ZR</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Baufinanzierung</span>
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {[['/glossar','Glossar'],['/impressum','Impressum'],['/datenschutz','Datenschutz'],['https://zr-baufi.fincrm.de/kundenbereich/login','Kundenbereich']].map(([href, label]) => (
            <li key={label}><a href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 ZR Baufinanzierung · Franziska Ritsche</p>
      </footer>
    </>
  )
}
