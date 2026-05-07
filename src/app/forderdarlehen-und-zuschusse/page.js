'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Foerderdarlehen() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const kfwHaupt = [
    {
      nr: '297 / 298',
      titel: 'Klimafreundlicher Neubau',
      fuer: 'Für Bauherren & Käufer von Neubauten',
      text: 'Wer neu baut oder einen frisch gebauten Effizienzhaus-Standard erwirbt, kann hier bis zu 150.000 € als zinsgünstigen Kredit bekommen – abhängig vom Energiestandard. Je besser das Haus, desto besser der Zinssatz.',
      max: 'bis 150.000 €',
      hinweis: '⚠️ Die Förderung für Effizienzhaus 55 ist befristet – bitte frühzeitig beantragen.',
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/F%C3%B6rderprodukte/Klimafreundlicher-Neubau-Wohngeb%C3%A4ude-(297-298)/',
    },
    {
      nr: '300',
      titel: 'Wohneigentum für Familien',
      fuer: 'Für Familien mit Kindern & Einkommensgrenze',
      text: 'Das Familienprogramm der KfW bietet besonders günstige Zinsen für Familien mit Kindern. Der Kreditbetrag richtet sich nach Kinderzahl und Zertifizierung des Gebäudes – mit QNG-Zertifikat sind bis zu 270.000 € möglich.',
      max: 'bis 270.000 €',
      hinweis: null,
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/F%C3%B6rderprodukte/Wohneigentum-f%C3%BCr-Familien-(300)/',
    },
    {
      nr: '296',
      titel: 'Klimafreundlicher Neubau – Niedrigpreissegment',
      fuer: 'Für Neubauten im günstigeren Preissegment',
      text: 'Dieses Programm richtet sich an Bauherren, die einen Neubau im Niedrigpreissegment planen oder erwerben. Ein guter Einstieg in die KfW-Förderung ohne zu hohe Voraussetzungen.',
      max: 'bis 100.000 €',
      hinweis: null,
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/',
    },
    {
      nr: '124',
      titel: 'KfW Wohneigentumsprogramm',
      fuer: 'Für alle Käufer & Bauherren – ohne Einkommensgrenze',
      text: 'Das Klassiker-Programm der KfW: Ohne Einkommensgrenze, ohne energetische Anforderungen. Für jeden der baut oder kauft. Gut kombinierbar mit anderen Förderungen.',
      max: 'bis 100.000 €',
      hinweis: null,
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/F%C3%B6rderprodukte/Wohneigentumsprogramm-(124)/',
    },
    {
      nr: '261',
      titel: 'Wohngebäude-Kredit – Energieeffizient sanieren',
      fuer: 'Für Sanierungen & energetische Modernisierungen',
      text: 'Wer sein Haus saniert und dabei den Energiestandard verbessert, kann hier bis zu 150.000 € Kredit bekommen – und zusätzlich einen Tilgungszuschuss von bis zu 45 %. Das bedeutet: ein Teil des Kredits wird einfach erlassen.',
      max: 'bis 150.000 € + bis 45 % Tilgungszuschuss',
      hinweis: null,
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Bundesf%C3%B6rderung-f%C3%BCr-effiziente-Geb%C3%A4ude-Wohngeb%C3%A4ude-Kredit-(261-262)/',
    },
    {
      nr: '458 / 459',
      titel: 'Heizungsförderung',
      fuer: 'Für Private & Vermieter bei Heizungstausch',
      text: 'Der Austausch einer alten Heizung gegen ein erneuerbares System wird stark gefördert – mit bis zu 70 % Zuschuss für Privatpersonen. Das läuft über die BAFA, wird aber oft als "KfW-Heizungsförderung" bezeichnet.',
      max: 'bis 70 % Zuschuss',
      hinweis: null,
      kfw: 'https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestehende-Immobilie/F%C3%B6rderprodukte/Heizungsf%C3%B6rderung-f%C3%BCr-Privatpersonen-Wohngeb%C3%A4ude-(458)/',
    },
  ]

  const kfwWeitere = [
    ['308', 'Wohneigentum für Familien – Bestandserwerb', 'Kauf von Bestandsimmobilien für Familien (früher „Jung kauft Alt")'],
    ['358 / 359', 'Einzelmaßnahmen Ergänzungskredit', 'Ergänzung zur Bundesförderung für Einzelmaßnahmen (BEG EM)'],
    ['270', 'Erneuerbare Energien', 'Für Photovoltaik, Windkraft & Co. – auch für Eigenheimbesitzer'],
    ['159', 'Altersgerecht Umbauen', 'Barrierefreiheit & Einbruchschutz im Bestand'],
  ]

  const bafaMassnahmen = [
    ['Gebäudehülle', 'Dämmung von Dach, Fassade und Kellerdecke – je effizienter, desto höher die Förderung.'],
    ['Anlagentechnik', 'Moderne Lüftungsanlagen, effiziente Heizungsregler, smarte Gebäudesteuerung.'],
    ['Heizungsoptimierung', 'Hydraulischer Abgleich und Optimierung bestehender Heizanlagen.'],
    ['Fachplanung & Baubegleitung', 'Kosten für Energieberater werden teilweise mitgefördert.'],
    ['Energieberatung', 'Unabhängige Energieberatung für Wohngebäude (BEG) – zuschussfähig über BAFA.'],
  ]

  return (
    <>
      <head>
        <title>KfW-Förderung & BAFA-Zuschuss 2025 | Förderdarlehen prüfen – ZR Baufinanzierung</title>
        <meta name="description" content="Welche KfW-Förderung steht Ihnen zu? Ich prüfe kostenlos alle Programme: KfW-Kredit bis 270.000 €, BAFA-Zuschuss, Heizungsförderung. Jetzt beraten lassen – Berlin & Brandenburg." />
      </head>

      <style>{`
        html, body { overflow-x: hidden; }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .btn-primary { background: var(--lila); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
        .btn-primary:hover { background: var(--lila-dark); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(187,159,213,0.38); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); padding: 0.9rem 2rem; border: 1px solid rgba(255,255,255,0.22); border-radius: 2px; font-size: 0.9rem; cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-ghost:hover { border-color: var(--lila); color: var(--lila); box-shadow: 0 6px 24px rgba(187,159,213,0.15); transform: translateY(-1px); }
        .btn-dark { background: var(--anthrazit); color: white; padding: 0.9rem 2rem; border: 1px solid rgba(187,159,213,0.3); border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-dark:hover { background: #1a2428; box-shadow: 0 8px 24px rgba(0,0,0,0.3); transform: translateY(-1px); }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .fd-nav-links { display: flex; gap: 2rem; list-style: none; }
        .fd-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .fd-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .fd-mobile-menu { display: none; }
        .fd-kfw-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .fd-kfw-card { background: white; border: 1px solid rgba(187,159,213,0.2); border-radius: 2px; padding: 2rem 2.25rem; transition: box-shadow 0.25s, transform 0.2s; }
        .fd-kfw-card:hover { box-shadow: 8px 8px 0px rgba(187,159,213,0.25); transform: translateY(-2px); }
        .fd-weitere-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: rgba(187,159,213,0.15); }
        .fd-bafa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .fd-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(255,255,255,0.08); margin-top: 4rem; max-width: 900px; margin: 4rem auto 0; }
        .fd-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        @media (max-width: 768px) {
          .fd-nav-links { display: none !important; }
          .fd-hamburger { display: flex !important; }
          .fd-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .fd-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .fd-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .fd-kfw-grid { grid-template-columns: 1fr !important; }
          .fd-weitere-grid { grid-template-columns: 1fr !important; }
          .fd-bafa-grid { grid-template-columns: 1fr !important; }
          .fd-stats-grid { grid-template-columns: 1fr !important; }
          .fd-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .fd-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .fd-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .fd-testimonial-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .fd-testimonial-grid > div:last-child { text-align: center; }
          .fd-testimonial-grid > div:last-child p[style] { display: block !important; justify-content: center; }
          .fd-cta-btns a { text-align: center; box-sizing: border-box; }
          .fd-hero-section { padding: 6rem 5% 4rem !important; }
          .fd-section { padding: 4rem 5% !important; }
        }
        @keyframes fd-pulse { 0% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } 40% { box-shadow: 0 2px 8px rgba(0,0,0,0.25), 0 0 18px 4px rgba(187,159,213,0.5); } 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } }
        .fd-float-btn { animation: fd-pulse 1.2s ease-in-out 5s 1; }
        .fd-float-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(187,159,213,0.5); }
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
        <ul className="fd-nav-links">
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
                color: label === 'Förderung' ? 'white' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em',
                borderBottom: label === 'Förderung' ? '1px solid var(--lila)' : '1px solid transparent',
                paddingBottom: '2px'
              }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="fd-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="fd-mobile-menu">
          {[
            ['/#leistungen', 'Leistungen'],
            ['/#fuer-wen', 'Für wen?'],
            ['/#stimmen', 'Kundenstimmen'],
            ['/#rechner', 'Rechner'],
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
      <section className="fd-hero-section" style={{
        minHeight: '70vh',
        background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        paddingTop: 88, paddingBottom: '5rem', paddingLeft: '8%', paddingRight: '8%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(187,159,213,0.12) 0%, rgba(187,159,213,0.03) 55%, transparent 75%)', pointerEvents: 'none' }} />

        <div className="fade-in" style={{ maxWidth: 1000, width: '100%', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
            Staatliche Förderung
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 4.5vw, 4.5rem)', fontWeight: 600, color: 'white', lineHeight: 1.1, marginBottom: '1.75rem' }}>
            Förderdarlehen &amp; Zuschüsse –<br />
            <em style={{ fontStyle: 'italic', color: 'var(--lila)' }}>ich hole das Beste für Sie raus.</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 580, fontWeight: 300, marginBottom: '2.5rem', margin: '0 auto 2.5rem' }}>
            Förderung ist oft bares Geld – und wird viel zu selten ausgeschöpft. Als Ihre Beraterin prüfe ich, welche Programme zu Ihrer Situation passen, und helfe Ihnen beim Beantragen. Damit Sie keinen Euro verschenken.
          </p>
          <div className="fd-cta-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/kontakt" className="btn-primary">Jetzt Beratung anfragen</a>
            <a href="#kfw-programme" className="btn-ghost">Programme entdecken</a>
          </div>
        </div>
      </section>

      {/* TRENNER */}
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* EINLEITUNG */}
      <section className="fd-section" style={{ background: 'var(--hell)', padding: '5rem 8%', textAlign: 'center' }}>
        <div className="fade-in" style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Warum Förderung so wichtig ist
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3.2vw, 3rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Wer baut oder kauft, lässt oft Tausende Euro liegen.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
            KfW, BAFA und Landesförderungen bieten gemeinsam Milliarden an Fördermitteln – doch viele davon werden nicht abgerufen, weil der Überblick fehlt. Ich kenne die Programme, ihre Voraussetzungen und ihre Kombinationsmöglichkeiten. Das ist mein Job – und für Sie eine Sorge weniger.
          </p>
        </div>

        {/* Zahlen */}
        <div className="fade-in fd-stats-grid" style={{ background: 'rgba(187,159,213,0.2)' }}>
          {[
            ['500+', 'Bankpartner im Vergleich'],
            ['kostenlos', 'Beratung für Sie als Kunden'],
            ['Berlin & Brandenburg', 'Mein Revier'],
          ].map(([zahl, label]) => (
            <div key={zahl} style={{ background: 'white', padding: '2.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: 600, color: 'var(--lila-dark)', lineHeight: 1, marginBottom: '0.6rem' }}>{zahl}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENNER: Logo-Balken */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* KFW HAUPTPROGRAMME */}
      <section id="kfw-programme" className="fd-section" style={{ background: 'var(--hell)', padding: '6rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            KfW-Programme
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Die wichtigsten Programme – einfach erklärt.
          </h2>
        </div>

        <div className="fd-kfw-grid fade-in">
          {kfwHaupt.map((p) => (
            <div key={p.nr} className="fd-kfw-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1rem', fontWeight: 600, color: 'var(--lila-dark)', letterSpacing: '0.06em' }}>
                  KfW {p.nr}
                </span>
                <span style={{ background: 'var(--hell)', color: 'var(--anthrazit)', fontSize: '0.75rem', padding: '0.2rem 0.65rem', borderRadius: 2, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {p.max}
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2, marginBottom: '0.4rem' }}>
                {p.titel}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--lila-dark)', fontWeight: 500, marginBottom: '0.9rem', letterSpacing: '0.03em' }}>
                {p.fuer}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.75, fontWeight: 300, marginBottom: p.hinweis ? '1rem' : '1.25rem' }}>
                {p.text}
              </p>
              {p.hinweis && (
                <div style={{ background: 'rgba(187,159,213,0.12)', border: '1px solid rgba(187,159,213,0.35)', borderRadius: 2, padding: '0.65rem 0.9rem', marginBottom: '1.25rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--lila-dark)', fontWeight: 500, margin: 0 }}>{p.hinweis}</p>
                </div>
              )}
              <a href={p.kfw} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--lila-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', borderBottom: '1px solid rgba(187,159,213,0.4)', paddingBottom: '1px', transition: 'color 0.2s' }}>
                Offizielle KfW-Seite
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Zinssatz-Hinweis */}
        <div className="fade-in" style={{ background: 'var(--anthrazit)', borderRadius: 2, padding: '1.75rem 2.25rem', marginTop: '2.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: 'rgba(187,159,213,0.15)', border: '1px solid var(--lila)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0.1rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <div>
            <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'white', marginBottom: '0.35rem' }}>Hinweis zu Zinssätzen</p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
              Die Konditionen der KfW-Programme ändern sich laufend. Ich halte Sie auf dem aktuellen Stand und prüfe für Sie, welche Zinsen und Förderbeträge zum Zeitpunkt Ihres Antrags gelten. Aktuellen Konditionen finden Sie immer direkt auf{' '}
              <a href="https://www.kfw.de" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lila)', textDecoration: 'none' }}>kfw.de</a>.
            </p>
          </div>
        </div>
      </section>

      {/* TRENNER: Logo-Balken */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* TESTIMONIAL */}
      <section className="fd-section" style={{ background: 'var(--hell)', padding: '6rem 8%' }}>
        <div className="fade-in fd-testimonial-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center', maxWidth: 960, margin: '0 auto' }}>
          {/* Bild */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image
                src="/images/familie-dreyer-einfamilienhaus-foerderdarlehen-nrw.jpg"
                alt="Eigenheim Familie Dreyer – Baufinanzierung mit Förderdarlehen NRW-Bank"
                width={480}
                height={640}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }}
              />
            </div>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--lila)', color: 'white', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.7rem', borderRadius: '2px' }}>
              Kundenstimme
            </div>
          </div>
          {/* Zitat */}
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--lila-dark)' }}></span>
              Erfahrungsbericht
              <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--lila-dark)' }}></span>
            </p>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', fontStyle: 'italic', color: 'var(--anthrazit)', lineHeight: 1.65, marginBottom: '2rem' }}>
              „Von der Eigenbedarfskündigung zum Eigenheim in kürzester Zeit. Wir sind so dankbar für den immer freundlichen Umgang, stets transparent und kundenorientiert. Wir hätten keinen besseren Partner in dieser emotionalen und aufregenden Zeit finden können. Danke für alles."
            </p>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--anthrazit)', marginBottom: '0.2rem' }}>Familie Dreyer, NRW</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '0.15rem' }}>Kauf Einfamilienhaus · Juni 2024</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--lila-dark)', fontStyle: 'italic' }}>Annuitätendarlehen Volksbank Südmünsterland-Mitte + Förderdarlehen NRW-Bank</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRENNER: Logo-Balken */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* KFW WEITERE PROGRAMME */}
      <section className="fd-section" style={{ background: 'var(--hell)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Weitere KfW-Programme
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2 }}>
            Auch diese Programme können für Sie relevant sein.
          </h2>
        </div>

        <div className="fd-weitere-grid fade-in" style={{ maxWidth: 960, margin: '0 auto' }}>
          {kfwWeitere.map(([nr, titel, text]) => (
            <div key={nr} style={{ background: 'white', padding: '1.75rem 2rem' }}>
              <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--lila-dark)', display: 'block', marginBottom: '0.4rem' }}>KfW {nr}</span>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.5rem' }}>{titel}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.65, fontWeight: 300, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENNER */}
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* BAFA */}
      <section className="fd-section" style={{ background: 'var(--anthrazit)', padding: '6rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            BAFA-Förderung
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
            Zuschüsse vom Bundesamt –<br />
            <em style={{ fontStyle: 'italic', color: 'var(--lila)' }}>kein Kredit, echtes Geld.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 300 }}>
            Das BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle) fördert energetische Einzelmaßnahmen mit direkten Zuschüssen – kein Darlehen, das zurückgezahlt werden muss. Besonders interessant bei Sanierungen.
          </p>
        </div>

        <div className="fd-bafa-grid fade-in">
          {bafaMassnahmen.map(([titel, text]) => (
            <div key={titel} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(187,159,213,0.15)', borderRadius: 2, padding: '1.75rem 1.75rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--lila)', flexShrink: 0 }}></span>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white', margin: 0, letterSpacing: '0.04em' }}>{titel}</h3>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--lila)', flexShrink: 0 }}></span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="https://www.bafa.de" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--lila)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid rgba(187,159,213,0.4)', paddingBottom: '2px' }}>
            Alle Informationen auf bafa.de
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>
      </section>

      {/* TRENNER */}
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>

      {/* ZITAT */}
      <section style={{ background: 'white', padding: '7rem 8%', textAlign: 'center' }}>
        <div className="fade-in" style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', fontStyle: 'italic', color: 'var(--lila-dark)', lineHeight: 1.65, marginBottom: '2rem' }}>
            „Ich sage Ihnen, was Sie bekommen können – und ich helfe Ihnen beim Beantragen.<br />
            Kein Papierstapel, keine Banksprache, keine bösen Überraschungen."
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', letterSpacing: '0.1em' }}>– Franziska Ritsche –</p>
        </div>
      </section>

      {/* TRENNER */}
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* CTA */}
      <section className="fd-section" style={{ background: 'var(--anthrazit)', padding: '8rem 8%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,159,213,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Jetzt starten
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Welche Förderung steht Ihnen zu?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 500, margin: '0 auto 2.5rem', fontWeight: 300 }}>
            Ich prüfe das für Sie – im Rahmen eines kostenlosen &amp; unverbindlichen Beratungsgesprächs.
          </p>
          <div className="fd-cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/kontakt" className="btn-primary">Jetzt Termin vereinbaren</a>
            <a href="tel:+4917684405479" className="btn-ghost">Direkt anrufen</a>
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="fd-float-btn" style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
        background: 'var(--lila)', color: 'white',
        padding: '0.85rem 1.4rem',
        borderRadius: '50px',
        fontSize: '0.85rem', fontWeight: 500,
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        transition: 'transform 0.25s, box-shadow 0.25s',
        maxWidth: '280px',
        lineHeight: 1.3,
      }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="fd-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--lila)', fontSize: '1.4rem', fontWeight: 600 }}>ZR</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Baufinanzierung</span>
        </div>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
          {[['/impressum', 'Impressum'], ['/datenschutz', 'Datenschutz'], ['#', 'Nutzungsbedingungen'], ['https://zr-baufi.fincrm.de/kundenbereich/login', 'Kundenbereich']].map(([href, label]) => (
            <li key={label}><a href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.8rem' }}>{label}</a></li>
          ))}
        </ul>
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 ZR Baufinanzierung · Franziska Ritsche</p>
      </footer>
    </>
  )
}
