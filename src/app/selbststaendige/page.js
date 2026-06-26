'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange muss ich selbstständig sein, um eine Baufinanzierung zu bekommen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die meisten Banken erwarten mindestens 3 Jahre nachgewiesene Selbstständigkeit. In bestimmten Berufsgruppen wie Heilberufen oder juristischen Berufen sind es manchmal 2 Jahre. Ich kenne die Anforderungen der verschiedenen Bankpartner und finde die passende Institution für Ihre Situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Unterlagen brauche ich als Selbstständiger für die Baufinanzierung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aktuellsten Einkommensteuerbescheid & -erklärung, BWA mit SuSa aus dem letzten Quartal, Einnahmen-Überschuss-Rechnung oder Bilanz, Personalausweis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bekomme ich als Selbstständiger schlechtere Konditionen als Angestellte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nicht zwangsläufig. Trotz schwankendem Einkommen erzielen viele meiner selbstständigen Kunden sehr gute Konditionen – mit der richtigen Vorbereitung und dem richtigen Bankpartner. Der Schlüssel liegt in der professionellen Aufbereitung der Unterlagen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Baufinanzierungsberatung für Selbstständige?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Sie als Kunde ist die Beratung komplett kostenlos. Ich werde von der Bank vergütet, sobald eine Finanzierung zustande kommt – das ist gesetzlich geregelt und transparent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert der gesamte Prozess der Baufinanzierung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei vollständigen Unterlagen reiche ich Ihren Antrag innerhalb einer Woche ein. Die Bankentscheidung dauert dann meist länger – 4 bis 5 Wochen sind hier nicht selten. Aber auch wenn es mal schnell gehen muss, habe ich die richtigen Ansprechpartner.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viel Eigenkapital brauche ich als Selbstständiger für eine Baufinanzierung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die meisten Banken wünschen sich 20–30 % Eigenkapital. Bei sehr guter Bonität und starken Einkommensnachweisen ist aber auch eine 100 %-Finanzierung möglich – also ohne Eigenkapital. Das hängt stark von Ihrer individuellen Situation ab. Ich prüfe das kostenlos für Sie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Können Selbstständige KfW-Förderung oder IBB-Darlehen nutzen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. KfW-Programme wie das Wohneigentumsprogramm (124) oder der Klimafreundliche Neubau (297/298) stehen auch Selbstständigen offen. In Berlin kommt die IBB (Investitionsbank Berlin) mit günstigen Rahmenbedingungen hinzu. Ich kombiniere diese Programme für Sie so, dass Sie maximal profitieren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es Unterschiede je nach Rechtsform – GmbH-Geschäftsführer vs. Freiberufler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, die Banken bewerten Einkommen unterschiedlich je nach Rechtsform. Ein GmbH-GF wird oft anders bewertet als ein Freiberufler mit EÜR. Ich kenne diese Unterschiede und bringe Sie zur Bank, die Ihre Struktur versteht und fair bewertet.',
      },
    },
  ],
}

export default function Selbststaendige() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const faqs = [
    [
      'Wie lange muss ich selbstständig sein?',
      'Die meisten Banken erwarten mindestens 3 Jahre nachgewiesene Selbstständigkeit. In bestimmten Berufsgruppen wie Heilberufen oder juristischen Berufen sind es manchmal 2 Jahre. Ich kenne die Anforderungen der verschiedenen Bankpartner und finde die passende Institution für Ihre Situation.',
    ],
    [
      'Welche Unterlagen brauche ich?',
      'Aktuellsten Einkommensteuerbescheid & -erklärung, BWA mit SuSa aus dem letzten Quartal, Einnahmen-Überschuss-Rechnung oder Bilanz, Personalausweis.',
    ],
    [
      'Bekomme ich schlechtere Konditionen als Angestellte?',
      'Nicht zwangsläufig. Trotz schwankendem Einkommen erzielen viele meiner selbstständigen Kunden sehr gute Konditionen – mit der richtigen Vorbereitung und dem richtigen Bankpartner. Der Schlüssel liegt in der professionellen Aufbereitung der Unterlagen.',
    ],
    [
      'Was kostet Ihre Beratung?',
      'Für Sie als Kunde ist die Beratung komplett kostenlos. Ich werde von der Bank vergütet, sobald eine Finanzierung zustande kommt – das ist gesetzlich geregelt und transparent.',
    ],
    [
      'Wie lange dauert der gesamte Prozess?',
      'Bei vollständigen Unterlagen reiche ich Ihren Antrag innerhalb einer Woche ein. Die Bankentscheidung dauert dann meist länger – 4 bis 5 Wochen sind hier nicht selten. Aber auch wenn es mal schnell gehen muss, habe ich die richtigen Ansprechpartner.',
    ],
    [
      'Wie viel Eigenkapital brauche ich?',
      'Die meisten Banken wünschen sich 20–30 % Eigenkapital. Bei sehr guter Bonität und starken Einkommensnachweisen ist aber auch eine 100 %-Finanzierung möglich – also ohne Eigenkapital. Das hängt stark von Ihrer individuellen Situation ab. Ich prüfe das kostenlos für Sie.',
    ],
    [
      'Können Selbstständige KfW-Förderung nutzen?',
      'Ja. KfW-Programme wie das Wohneigentumsprogramm (124) oder der Klimafreundliche Neubau (297/298) stehen auch Selbstständigen offen. In Berlin kommt die IBB (Investitionsbank Berlin) mit günstigen Rahmenbedingungen hinzu. Ich kombiniere diese Programme für Sie so, dass Sie maximal profitieren.',
    ],
    [
      'Gibt es Unterschiede je nach Rechtsform – GmbH vs. Freiberufler?',
      'Ja, die Banken bewerten Einkommen unterschiedlich je nach Rechtsform. Ein GmbH-GF wird oft anders bewertet als ein Freiberufler mit EÜR. Ich kenne diese Unterschiede und bringe Sie zur Bank, die Ihre Struktur versteht und fair bewertet.',
    ],
  ]

  const berufsgruppen = [
    'Geschäftsführende Gesellschafter', 'Handwerker', 'Freiberufler', 'Fuhrunternehmer',
    'Makler', 'Bauunternehmer', 'Ärzte & Heilberufe', 'Physiotherapeuten',
    'Architekten', 'Rechtsanwälte', 'Fotografen & Kreative', 'GmbHs',
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style>{`
        html, body { overflow-x: hidden; }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .btn-primary { background: var(--lila); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
        .btn-primary:hover { background: var(--lila-dark); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(187,159,213,0.38); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); padding: 0.9rem 2rem; border: 1px solid rgba(255,255,255,0.22); border-radius: 2px; font-size: 0.9rem; cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-ghost:hover { border-color: var(--lila); color: var(--lila); box-shadow: 0 6px 24px rgba(187,159,213,0.15); transform: translateY(-1px); }
        .btn-dark { background: var(--anthrazit); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-dark:hover { background: #1a2428; box-shadow: 0 8px 24px rgba(0,0,0,0.3); transform: translateY(-1px); }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .ss-nav-links { display: flex; gap: 2rem; list-style: none; }
        .ss-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .ss-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .ss-mobile-menu { display: none; }
        .ss-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        .ss-problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .ss-loesung-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: rgba(255,255,255,0.08); }
        .ss-ablauf { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
        .ss-ablauf::before { content: ''; position: absolute; top: 2rem; left: calc(12.5% + 1rem); right: calc(12.5% + 1rem); height: 2px; background: var(--lila); opacity: 0.35; z-index: 0; }
        .ss-berufe-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(187,159,213,0.15); }
        .ss-eigenkapital-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5px; background: rgba(255,255,255,0.08); }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .faq-btn { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 0; text-align: left; gap: 1rem; }
        .faq-icon { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid var(--lila); display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .faq-body { overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; }
        .ss-hero-mobile-img { display: none; }
        .ss-infobox { background: rgba(187,159,213,0.1); border: 1px solid rgba(187,159,213,0.3); border-radius: 2px; padding: 1.25rem 1.5rem; }
        @media (max-width: 768px) {
          .ss-nav-links { display: none !important; }
          .ss-hamburger { display: flex !important; }
          .ss-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .ss-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .ss-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .ss-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .ss-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .ss-problem-grid { grid-template-columns: 1fr !important; }
          .ss-loesung-grid { grid-template-columns: 1fr !important; background: none !important; }
          .ss-ablauf { grid-template-columns: 1fr !important; }
          .ss-ablauf::before { display: none; }
          .ss-berufe-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .ss-eigenkapital-grid { grid-template-columns: 1fr !important; background: none !important; }
          .ss-hero-section { grid-template-columns: 1fr !important; }
          .ss-hero { padding-top: 7rem !important; padding-bottom: 3rem !important; }
          .ss-hero-franzi { display: none !important; }
          .ss-hero-mobile-img { display: flex; justify-content: center; margin-bottom: 1.5rem; }
          .ss-hero-text { padding: 2rem 2rem 1rem !important; text-align: center; }
          .ss-hero-text p { justify-content: center !important; }
          .ss-hero-img { max-height: 300px; }
          .ss-hero-img img { height: 300px !important; width: auto !important; }
          .ss-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .ss-hero-btns a { text-align: center; box-sizing: border-box; }
          .ss-section-pad { padding: 4rem 5% !important; }
          .ss-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .ss-cta-btns a { text-align: center; box-sizing: border-box; }
        }
        @keyframes float-pulse { 0% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } 40% { box-shadow: 0 2px 8px rgba(0,0,0,0.25), 0 0 18px 4px rgba(187,159,213,0.5); } 100% { box-shadow: 0 2px 8px rgba(0,0,0,0.25); } }
        .float-btn { animation: float-pulse 1.2s ease-in-out 5s 1; }
        .float-btn:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(187,159,213,0.5); }
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
        <ul className="ss-nav-links">
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
                color: label === 'Selbstständige' ? 'white' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em',
                borderBottom: label === 'Selbstständige' ? '1px solid var(--lila)' : '1px solid transparent',
                paddingBottom: '2px'
              }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="ss-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="ss-mobile-menu">
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

      {/* ── HERO ── */}
      <section className="ss-hero" style={{
        minHeight: '100vh', background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        paddingTop: 88, position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(187,159,213,0.1) 0%, rgba(187,159,213,0.03) 55%, transparent 75%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'linear-gradient(to top, rgba(25,20,38,0.4) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 1 }} />
        <div className="ss-hero-franzi" style={{ position: 'absolute', bottom: 0, left: '7%', zIndex: 2, pointerEvents: 'none' }}>
          <Image
            src="/images/franziska-ritsche-baufinanzierungsberaterin-berlin.png"
            alt="Franziska Ritsche – Baufinanzierungsberaterin für Selbstständige in Berlin Brandenburg"
            width={400} height={480} priority
            style={{ height: '58vh', width: 'auto', display: 'block' }}
          />
        </div>

        <div className="fade-in" style={{ textAlign: 'center', position: 'relative', zIndex: 3, maxWidth: 820, padding: '0 8%' }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
            Für Selbstständige &amp; Unternehmer
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, color: 'white', lineHeight: 1.05, marginBottom: '1rem', textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 3.5vw, 3.8rem)', fontStyle: 'normal' }}>Baufinanzierung für Selbstständige</span>
            <em style={{ display: 'block', fontSize: 'clamp(1.5rem, 2.6vw, 2.8rem)', color: 'var(--lila)' }}>in Berlin und Brandenburg</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontWeight: 500 }}>
            Selbstständig. Erfolgreich. Trotzdem kein Kredit? Das ändere ich.
          </p>
          <div className="ss-hero-mobile-img" style={{ position: 'relative' }}>
            <Image
              src="/images/franziska-ritsche-baufinanzierungsberaterin-berlin.png"
              alt="Franziska Ritsche – Baufinanzierungsberaterin für Selbstständige"
              width={400} height={480}
              style={{ height: '45vh', width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, var(--anthrazit))', pointerEvents: 'none' }} />
          </div>
          <div className="ss-hero-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4rem' }}>
            <a href="/kontakt" className="btn-primary">Kostenloses Erstgespräch</a>
            <a href="#loesung" className="btn-ghost">Wie ich helfen kann</a>
          </div>
          <a href="tel:+4917684405479" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.31a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18z"/>
            </svg>
            <span style={{ fontWeight: 500 }}>0176 84 40 54 79</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>· Auch abends &amp; am Wochenende erreichbar</span>
          </a>
        </div>
      </section>


      {/* ── WARUM ES SCHWIERIGER IST ── */}
      <section id="loesung" className="ss-section-pad" style={{ background: 'var(--hell)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Die Herausforderung
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Warum Banken Selbstständigen<br /><em style={{ color: 'var(--lila-dark)', fontStyle: 'italic' }}>das Leben schwer machen.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
            Banken lieben Vorhersehbarkeit. Schwankendes Einkommen, Bilanzen mit steuerlichen Optimierungen und fehlende Gehaltszettel machen ihr System nervös. Dabei sagt ein Steuerbescheid wenig darüber aus, ob jemand verlässlich eine Rate zahlen kann – ich weiß das. Und ich weiß, wie ich Ihre Zahlen so aufbereite, dass die Bank sie so versteht wie wir.
          </p>
        </div>

        <div className="fade-in ss-loesung-grid">
          {[
            ['Unterlagen-Check', 'Ich prüfe was fehlt und optimiere es für die Weiterverarbeitung der Bank. Das spart wertvolle Zeit für Sie.'],
            ['Zahlen die überzeugen', 'Ich verstehe Bilanzen und BWAs und finde die passenden Argumente für die Bank.'],
            ['Banken-Matching', 'Ich kenne die Banken, die Selbstständige verstehen – und bringe Sie gezielt dorthin.'],
            ['Schnelle Abwicklung', 'Bei vollständigen Unterlagen reiche ich Ihren Antrag innerhalb einer Woche ein.'],
          ].map(([titel, text], i) => (
            <div key={i} style={{ background: 'var(--anthrazit)', padding: '2rem 2.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '4.5rem', fontWeight: 600, color: 'rgba(187,159,213,0.5)', lineHeight: 1, marginBottom: '1rem' }}>0{i + 1}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem', letterSpacing: '0.02em' }}>{titel}</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── EIGENKAPITAL & 100%-FINANZIERUNG ── */}
      <section className="ss-section-pad" style={{ background: 'var(--anthrazit)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Eigenkapital
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
            Kein Eigenkapital?<br /><em style={{ color: 'var(--lila)', fontStyle: 'italic' }}>Kein Ausschlusskriterium.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
            Viele Selbstständige glauben, ohne 20–30 % Eigenkapital kommt keine Finanzierung zustande. Das stimmt nicht automatisch. Wenn die Rahmenbedingungen passen ist auch eine Finanzierung ganz ohne Eigenkapital möglich.
          </p>
        </div>

        <div className="fade-in ss-eigenkapital-grid">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(187,159,213,0.2)', padding: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem' }}>Standard-Weg</div>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Mit Eigenkapital</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Banken bevorzugen 20–30 % Eigenkapital',
                'Niedrigerer Beleihungswert → bessere Zinsen',
                'Nebenkosten (Notar, Grunderwerbsteuer, Makler) sollten aus Eigenkapital bezahlt werden',
                'Klassischer und weit verbreiteter Weg',
              ].map(item => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--lila)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'rgba(187,159,213,0.08)', border: '1px solid rgba(187,159,213,0.35)', padding: '2.5rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem' }}>Möglich bei guter Bonität</div>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.6rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>Ohne Eigenkapital</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Vollfinanzierung inkl. Nebenkosten',
                'Voraussetzung: u.a. stabile, sehr gute Einkommenssituation',
                'Bestimmte Bankpartner in meinem Netzwerk bieten das an',
                'Besonders interessant für Selbstständige mit guter Auftragslage',
              ].map(item => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--lila)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1.5rem' }}>
            Ich prüfe kostenlos, welcher Weg für Ihre Situation der richtige ist.
          </p>
          <a href="/kontakt" className="btn-primary">Jetzt kostenlos prüfen lassen</a>
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── KFW & IBB FÖRDERUNG FÜR SELBSTSTÄNDIGE ── */}
      <section className="ss-section-pad" style={{ background: 'var(--hell)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Staatliche Förderung
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, marginBottom: '1rem' }}>
            KfW &amp; IBB – auch für<br /><em style={{ color: 'var(--lila-dark)', fontStyle: 'italic' }}>Selbstständige nutzbar.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
            Staatliche Förderprogramme stehen nicht nur Angestellten offen. Als Selbstständige/r in Berlin &amp; Brandenburg können Sie von günstigen KfW-Darlehen und – in Berlin – zusätzlich von IBB-Programmen profitieren. Ich kombiniere diese Töpfe für Sie so, dass Sie maximal davon profitieren.
          </p>
        </div>

        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            ['KfW 124', 'Wohneigentumsprogramm', 'Bis 100.000 € ohne Einkommensgrenze. Für jeden der baut oder kauft – auch kombinierbar mit anderen Programmen. Klassiker für Selbstständige.'],
            ['KfW 297/298', 'Klimafreundlicher Neubau', 'Bis 150.000 € für energieeffiziente Neubauten. Je besser der Energiestandard, desto besser der Zinssatz.'],
            ['IBB Berlin', 'Landesförderung Berlin', 'Die Investitionsbank Berlin bietet in Verbindung mit den KfW Darlehen zusätzliche Programme für Berliner Wohneigentümer.'],
          ].map(([nr, titel, text]) => (
            <div key={nr} style={{ background: 'white', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--lila-dark)', marginBottom: '0.4rem', letterSpacing: '0.06em' }}>{nr}</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.75rem', lineHeight: 1.2 }}>{titel}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ background: 'var(--lila-light)', borderLeft: '3px solid var(--lila)', padding: '1.25rem 1.5rem', maxWidth: 760, margin: '0 auto 2rem' }}>
          <p style={{ fontSize: '0.95rem', color: 'var(--anthrazit)', lineHeight: 1.7, margin: 0 }}>
            <strong>Wichtig:</strong> Förderanträge müssen in der Regel <em>vor</em> Beginn des Vorhabens gestellt werden. Ich begleite Sie durch den gesamten Prozess – von der Prüfung bis zum Antrag.
          </p>
        </div>

        <div className="fade-in" style={{ textAlign: 'center' }}>
          <a href="/forderdarlehen-und-zuschusse" style={{ fontSize: '0.9rem', color: 'var(--lila-dark)', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)', paddingBottom: '2px' }}>
            Alle Förderprogramme im Überblick →
          </a>
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── BERUFSGRUPPEN ── */}
      <section className="ss-section-pad" style={{ background: 'var(--hell)', padding: '5rem 8% 5rem' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 3rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Für wen ich arbeite
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2 }}>
            Jede Berufsgruppe hat<br /><em style={{ color: 'var(--lila-dark)', fontStyle: 'italic' }}>ihre eigene Logik.</em>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginTop: '1rem' }}>
            Ich kenne die Unterschiede: Ein GmbH-Geschäftsführer wird anders bewertet als ein Freiberufler mit EÜR. Ein Handwerker anders als ein Arzt. Ich bringe Sie zur Bank, die Ihre Struktur versteht.
          </p>
        </div>

        <div className="fade-in ss-berufe-grid">
          {berufsgruppen.map(beruf => (
            <div key={beruf} style={{ background: 'white', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: 'var(--lila)', fontSize: '1.2rem', flexShrink: 0 }}>—</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--anthrazit)', fontWeight: 500 }}>{beruf}</span>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '1.25rem' }}>
            Sie sind nicht dabei? Fragen Sie trotzdem – ich habe in fast allen Branchen schon Lösungen gefunden.
          </p>
          <a href="/kontakt" className="btn-primary">Kostenlos anfragen</a>
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── ABLAUF ── */}
      <section className="ss-section-pad" style={{ background: 'var(--hell)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 5rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            So läuft es ab
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Von der ersten Anfrage bis zur Zusage.
          </h2>
        </div>

        <div className="fade-in" style={{ position: 'relative', width: '520px', maxWidth: '100%', height: '340px', margin: '0 auto 4rem', overflow: 'hidden', border: '1px solid var(--lila-light)', boxShadow: '8px 8px 0px var(--lila-light)' }}>
          <Image
            src="/images/franziska-ritsche-baufinanzierungsberaterin-schreibtisch.jpeg"
            alt="Franziska Ritsche – Baufinanzierungsberaterin am Schreibtisch"
            fill
            style={{ objectFit: 'cover', objectPosition: '50% 20%' }}
          />
        </div>

        <div className="ss-ablauf fade-in">
          {[
            ['01', 'Erstgespräch', 'Wir besprechen Ihre Situation, Wünsche und Möglichkeiten – kostenlos und unverbindlich.'],
            ['02', 'Unterlagen-Analyse', 'Ich prüfe Ihre Unterlagen und bereite alles bankfertig auf – damit Ihre Zahlen die Bank überzeugen.'],
            ['03', 'Antrag einreichen', 'Bei vollständigen Unterlagen reiche ich Ihren Antrag innerhalb einer Woche ein.'],
            ['04', 'Bankentscheidung & Abschluss', 'Die Bank prüft – kann bis zu 4–5 Wochen dauern. Ich begleite Sie durch den gesamten Prozess.'],
          ].map(([num, titel, text], i) => (
            <div key={i} style={{ padding: '0 2rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--anthrazit)', border: '2px solid var(--lila)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--lila)'
              }}>{num}</div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.6rem' }}>{titel}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1.25rem' }}>
            Möchten Sie direkt loslegen?{' '}
            <a href="/#rechner" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)', paddingBottom: '1px' }}>
              Berechnen Sie Ihre Finanzierung →
            </a>
          </p>
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── FAQ ── */}
      <section className="ss-section-pad" style={{ background: 'var(--anthrazit)', padding: '5rem 8%' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Häufige Fragen
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'white', lineHeight: 1.15 }}>
            Was Selbstständige mich am häufigsten fragen.
          </h2>
        </div>

        <div className="fade-in" style={{ maxWidth: 760, margin: '0 auto' }}>
          {faqs.map(([frage, antwort], i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'white' }}>{frage}</span>
                <div className="faq-icon" style={{ background: openFaq === i ? 'var(--lila)' : 'transparent' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <line x1="6" y1="2" x2="6" y2="10" stroke={openFaq === i ? 'white' : 'var(--lila)'} strokeWidth="1.5" strokeLinecap="round"
                      style={{ transform: openFaq === i ? 'scaleY(0)' : 'scaleY(1)', transformOrigin: 'center', transition: 'transform 0.25s' }}
                    />
                    <line x1="2" y1="6" x2="10" y2="6" stroke={openFaq === i ? 'white' : 'var(--lila)'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
              <div className="faq-body" style={{ maxHeight: openFaq === i ? '300px' : '0px', paddingBottom: openFaq === i ? '1.25rem' : '0' }}>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 300 }}>{antwort}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ss-section-pad" style={{ background: 'white', padding: '5rem 8%', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          Jetzt starten
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
        </p>
        <h2 className="fade-in" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto 1.5rem' }}>
          Bereit für<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>eine Sorge weniger?</em>
        </h2>
        <p className="fade-in" style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem', fontWeight: 300 }}>
          Das erste Gespräch ist kostenlos, unverbindlich und dauert etwa 60 Minuten.
          Danach wissen Sie, wo Sie stehen.
        </p>
        <div className="fade-in ss-cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/kontakt" className="btn-primary">Termin anfragen</a>
          <a href="tel:+4917684405479" className="btn-dark">Direkt anrufen</a>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="float-btn" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, background: 'var(--lila)', color: 'white', padding: '0.85rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.25s, box-shadow 0.25s', maxWidth: '280px', lineHeight: 1.3 }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="ss-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
