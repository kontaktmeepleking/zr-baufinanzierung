'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import GoogleRatingBadge from '../components/GoogleRatingBadge'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Gibt es einen unabhängigen Baufinanzierungsberater in Strausberg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Ich bin Franziska Ritsche, IHK-geprüfte Baufinanzierungsberaterin mit persönlichem Bezug zu Strausberg – ich habe selbst zehn Jahre hier gelebt. Ich vergleiche für Sie über 500 Banken, kostenlos und unabhängig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeiten Sie auch mit der Sparkasse Märkisch-Oderland zusammen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, ich binde regionale Partner wie die Sparkasse Märkisch-Oderland ebenso in den Vergleich ein wie über 500 überregionale Banken – damit Sie die für Ihre Situation passenden Konditionen bekommen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Finanzieren Sie auch Baugrundstücke in Strausberg-Nord oder Bestandshäuser in der Vorstadt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Ob Baugrundstück in Strausberg-Nord, Bestandshaus in der Vorstadt oder Eigentumswohnung im Stadtzentrum – ich kenne die Lagen vor Ort genau und strukturiere die passende Finanzierung für Ihr Vorhaben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Baufinanzierungsberatung in Strausberg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Sie als Kunde ist die Beratung komplett kostenlos. Ich werde von der Bank vergütet, sobald eine Finanzierung zustande kommt – das ist gesetzlich geregelt und transparent.',
      },
    },
  ],
}

export default function BaufinanzierungStrausberg() {
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
      'Gibt es einen unabhängigen Baufinanzierungsberater in Strausberg?',
      'Ja. Ich bin Franziska Ritsche, IHK-geprüfte Baufinanzierungsberaterin mit persönlichem Bezug zu Strausberg – ich habe selbst zehn Jahre hier gelebt. Ich vergleiche für Sie über 500 Banken, kostenlos und unabhängig.',
    ],
    [
      'Arbeiten Sie auch mit der Sparkasse Märkisch-Oderland zusammen?',
      'Ja, ich binde regionale Partner wie die Sparkasse Märkisch-Oderland ebenso in den Vergleich ein wie über 500 überregionale Banken – damit Sie die für Ihre Situation passenden Konditionen bekommen.',
    ],
    [
      'Finanzieren Sie auch Baugrundstücke in Strausberg-Nord oder Bestandshäuser in der Vorstadt?',
      'Ja. Ob Baugrundstück in Strausberg-Nord, Bestandshaus in der Vorstadt oder Eigentumswohnung im Stadtzentrum – ich kenne die Lagen vor Ort genau und strukturiere die passende Finanzierung für Ihr Vorhaben.',
    ],
    [
      'Was kostet Ihre Beratung?',
      'Für Sie als Kunde ist die Beratung komplett kostenlos. Ich werde von der Bank vergütet, sobald eine Finanzierung zustande kommt – das ist gesetzlich geregelt und transparent.',
    ],
  ]

  const googleBewertungen = [
    ['Eckert T.', 'Ratenkredite & Bausparvertrag', 'Super Empfehlung. Ich arbeite mittlerweile seit 3 Jahren mit Frau Ritsche und habe 3 Finanzierungen zusammen abgeschlossen. Sie kennt immer die passende Lösung.'],
    ['Daniel L.', 'Finanzierung Erbauseinandersetzung', 'Ich kann Franziska Ritsche uneingeschränkt weiterempfehlen. Besonders beeindruckt hat mich ihre einfühlsame Art – sie war jederzeit für mich erreichbar, auch bei kurzfristigen Fragen.'],
    ['Familie Z.', 'Anschlussfinanzierung · Altlandsberg', 'Franziska hat uns einen sensationellen Vertrag mit sehr guten Konditionen rausgeholt. Zum ersten Mal wurde ein Vertrag gefunden, bei dem alle Parteien etwas davon hatten.'],
  ]

  const praxisbeispiele = [
    ['Strausberg Stadt', 'Haus im Familienbesitz gehalten', 'Erfolgreiche Finanzierung einer komplexen Erbauseinandersetzung, sodass die Immobilie in der Familie bleiben konnte.', 'Erbauseinandersetzung erfolgreich finanziert.'],
    ['Strausberg Vorstadt', 'Traum vom Eigenheim erfüllt', 'Punktgenaue Strukturierung der Finanzierung für den Kauf eines Einfamilienhauses.', 'Finanzierung für den Hauskauf strukturiert.'],
    ['Strausberg Stadt', 'Kauf von Eigentumswohnungen', 'Maßgeschneiderte Konzepte für Eigennutzer und Kapitalanleger beim Erwerb von Wohnungseigentum.', 'Konzepte für Eigennutzer & Anleger.'],
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
        .st-nav-links { display: flex; gap: 2rem; list-style: none; }
        .st-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .st-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .st-mobile-menu { display: none; }
        .st-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        .st-hero-grid { display: grid; grid-template-columns: 1.05fr 1fr; align-items: center; gap: 2rem; min-height: calc(100vh - 88px); }
        .st-hero-img-frame { width: 100%; max-width: 620px; height: 460px; position: relative; overflow: hidden; border: 1px solid rgba(187,159,213,0.35); box-shadow: 10px 10px 0px rgba(187,159,213,0.25); }
        .st-hero-mobile-img { display: none; }
        .st-badge-mobile { display: none !important; }
        .st-heim-grid { display: grid; grid-template-columns: 1fr 0.85fr; align-items: center; gap: 3rem; }
        .st-heim-img-frame { width: 100%; height: 420px; position: relative; overflow: hidden; border: 1px solid rgba(187,159,213,0.3); box-shadow: 10px 10px 0px var(--lila-light); }
        .st-pers-grid { display: grid; grid-template-columns: 1fr 0.8fr; align-items: center; gap: 2.5rem; text-align: left; }
        .st-pers-img-wrap { position: relative; height: clamp(260px, 32vw, 380px); }
        .st-praxis-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .st-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .st-spez-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .st-text-mobile { display: none; }
        .st-lagen-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(255,255,255,0.08); }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .faq-btn { width: 100%; background: none; border: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 0; text-align: left; gap: 1rem; }
        .faq-icon { flex-shrink: 0; width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid var(--lila); display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .faq-body { overflow: hidden; transition: max-height 0.35s ease, padding 0.35s ease; }
        .st-section-pad { padding: 5rem 8%; }
        @media (max-width: 768px) {
          .float-btn { width: 52px !important; height: 52px !important; padding: 0 !important; border-radius: 50% !important; justify-content: center !important; bottom: 1.25rem !important; right: 1.25rem !important; }
          .float-btn span { display: none !important; }
          .st-nav-links { display: none !important; }
          .st-hamburger { display: flex !important; }
          .st-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .st-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .st-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .st-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .st-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .st-hero { padding-top: 6rem !important; padding-bottom: 3rem !important; }
          .st-hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; gap: 2.5rem !important; }
          .st-hero-content { display: flex !important; flex-direction: column !important; gap: 1.5rem !important; padding: 1.25rem 6% 3rem !important; }
          .st-hero-content > * { margin-top: 0 !important; margin-bottom: 0 !important; }
          .st-hero-img-wrap { display: none !important; }
          .st-hero-mobile-img { display: flex; justify-content: center; margin-bottom: 1.5rem; }
          .st-hero-img-frame { height: 240px !important; max-width: 100% !important; }
          .st-badge-mobile { display: flex !important; justify-content: center; }
          .st-badge-desktop { display: none !important; }
          .st-hero-phone { flex-wrap: wrap !important; gap: 0.3rem 0.5rem !important; }
          .st-heim-grid { grid-template-columns: 1fr !important; gap: 2rem !important; text-align: center !important; }
          .st-heim-img-wrap { order: -1; }
          .st-heim-img-frame { height: 260px !important; }
          .st-pers-grid { grid-template-columns: 1fr !important; text-align: center !important; gap: 1.5rem !important; }
          .st-pers-img-wrap { height: 300px !important; margin-top: 1rem; }
          .st-praxis-grid { grid-template-columns: repeat(2, 1fr) !important; text-align: center !important; }
          .st-praxis-grid > div { padding: 1.5rem 1.25rem !important; min-width: 0; overflow-wrap: break-word; }
          .st-praxis-grid > div:last-child:nth-child(odd) { grid-column: 1 / -1; }
          .st-reviews-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .st-text-desktop { display: none !important; }
          .st-text-mobile { display: block !important; }
          .st-spez-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .st-lagen-grid { grid-template-columns: 1fr !important; background: none !important; }
          .st-hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .st-hero-btns a { text-align: center; box-sizing: border-box; }
          .st-section-pad { padding: 4rem 5% !important; }
          .st-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .st-cta-btns a { text-align: center; box-sizing: border-box; }
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
          <Image src="/images/zr-baufinanzierung-logo.png" alt="ZR Baufinanzierung" width={160} height={80} priority style={{ height: 64, width: 'auto', display: 'block' }} />
        </a>
        <ul className="st-nav-links">
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
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em',
                borderBottom: '1px solid transparent',
                paddingBottom: '2px'
              }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="st-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="st-mobile-menu">
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

      <main>
      {/* ── HERO ── */}
      <section className="st-hero st-hero-grid" style={{
        background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        paddingTop: 88, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 75% 68% at 32% 42%, rgba(187,159,213,0.12) 0%, rgba(187,159,213,0.04) 52%, transparent 74%)', pointerEvents: 'none', zIndex: 1 }} />

        <div className="fade-in st-hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 3, padding: '4rem 4% 4rem 8%' }}>
          <p style={{ order: 1, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }}></span>
            Baufinanzierung in Strausberg
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }}></span>
          </p>
          <h1 style={{ order: 2, fontFamily: 'var(--font-cormorant)', fontWeight: 600, color: 'white', lineHeight: 1.05, marginBottom: '1rem', textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 'clamp(2rem, 3.8vw, 4rem)', fontStyle: 'normal' }}>Unabhängige Baufinanzierung</span>
            <em style={{ display: 'block', fontSize: 'clamp(1.4rem, 2.8vw, 2.9rem)', color: 'var(--lila)' }}>in Strausberg &amp; Märkisch-Oderland</em>
          </h1>
          <p style={{ order: 3, fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.3rem, 2.3vw, 1.8rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Aus der Region, für die Region – und für Sie: Eine Sorge weniger.
          </p>

          <div className="st-hero-mobile-img" style={{ order: 4 }}>
            <div className="st-hero-img-frame">
              <Image
                src="/images/strausberg-faehre-straussee.jpg"
                alt="Strausberger Fähre am Straussee in Strausberg – einer der bekanntesten Orte der Stadt"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <p style={{ order: 5, fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300, maxWidth: 540, margin: '0 auto 2.5rem' }}>
            Ich bin Franziska Ritsche, unabhängige Baufinanzierungsberaterin mit persönlichem Bezug zu Strausberg – ich habe selbst zehn Jahre hier gelebt. Bei Ihrer Baufinanzierung in Strausberg vergleiche ich für Sie über 500 Banken: persönlich aus der Nachbarschaft, ohne Callcenter.
          </p>

          <div className="st-hero-btns" style={{ order: 6, display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/kontakt" className="btn-primary">Jetzt Erstgespräch für Strausberg vereinbaren</a>
            <a href="#spezialisierung" className="btn-ghost">Meine Spezialisierung</a>
          </div>
          <div className="st-badge-mobile" style={{ order: 7 }}>
            <GoogleRatingBadge reviewCount={10} />
          </div>
          <div style={{ order: 8, display: 'flex', gap: '2.5rem', marginTop: '2.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: 600, color: 'white', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Bankpartner</div>
            </div>
            <div className="st-badge-desktop">
              <GoogleRatingBadge reviewCount={10} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: 600, color: 'white', lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>Kostenlos für Sie</div>
            </div>
          </div>
          <a href="tel:+4917684405479" className="st-hero-phone" style={{ order: 9, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', justifyContent: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.31a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18z"/>
            </svg>
            <span style={{ fontWeight: 500 }}>0176 84 40 54 79</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>· Auch abends &amp; am Wochenende erreichbar</span>
          </a>
        </div>

        <div className="fade-in st-hero-img-wrap" style={{ position: 'relative', zIndex: 3, padding: '2rem 8% 2rem 2rem', display: 'flex', justifyContent: 'center' }}>
          <div className="st-hero-img-frame">
            <Image
              src="/images/strausberg-faehre-straussee.jpg"
              alt="Strausberger Fähre am Straussee in Strausberg – einer der bekanntesten Orte der Stadt"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── HEIMVORTEIL STRAUSBERG ── */}
      <section className="st-section-pad" style={{ background: 'var(--hell)' }}>
        <div className="fade-in st-heim-grid" style={{ marginBottom: '3.5rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
              Heimvorteil Strausberg
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, marginBottom: '1.5rem', textAlign: 'center' }}>
              Aus der Region <em style={{ color: 'var(--lila-dark)', fontStyle: 'italic' }}>für die Region.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.25rem' }}>
              Strausberg ist für mich kein anonymer Ort auf der Landkarte. Ich habe selbst zehn Jahre in Strausberg gelebt, bin hier auf das Theodor-Fontane-Gymnasium gegangen und war jahrelang Mitglied im KSC Strausberg e.V. Da ich schon immer in der Region zu Hause bin, kenne ich das Leben hier und die Entwicklung des lokalen Immobilienmarktes aus eigener Erfahrung. Mehr über meinen Weg erfahren Sie auf{' '}
              <a href="/warum-ich" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)', paddingBottom: '1px' }}>Warum ich?</a>.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
              Neben den Angeboten regionaler Partner wie der Sparkasse Märkisch-Oderland binde ich über 500 überregionale Banken in den Vergleich ein – damit Sie genau die Konditionen bekommen, die zu Ihren Plänen passen.
            </p>
          </div>
          <div className="st-heim-img-wrap">
            <div className="st-heim-img-frame">
              <Image
                src="/images/franziska-ritsche-baustelle-brandenburg.jpg"
                alt="Franziska Ritsche vor Ort auf einer Baustelle in Brandenburg"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <div className="fade-in st-lagen-grid">
          {[
            ['Bestandshaus', 'Strausberg-Vorstadt'],
            ['Eigentumswohnung', 'Stadtzentrum'],
            ['Baugrundstück', 'Strausberg-Nord'],
          ].map(([typ, lage]) => (
            <div key={lage} style={{ background: 'var(--anthrazit)', padding: '2rem 2.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>{typ}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--lila)', lineHeight: 1.7, fontWeight: 300 }}>{lage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── PRAXISBEISPIELE ── */}
      <section className="st-section-pad" style={{ background: 'var(--anthrazit)' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Aus meiner Beratung
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'white', lineHeight: 1.15 }}>
            Praxisbeispiele <em style={{ color: 'var(--lila)', fontStyle: 'italic' }}>aus Strausberg.</em>
          </h2>
        </div>

        <div className="fade-in st-praxis-grid">
          {praxisbeispiele.map(([lage, titel, text, textMobile]) => (
            <div key={titel} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '0.75rem' }}>{lage}</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 600, color: 'white', marginBottom: '0.75rem', lineHeight: 1.25 }}>{titel}</h3>
              <p className="st-text-desktop" style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontWeight: 300 }}>{text}</p>
              <p className="st-text-mobile" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, fontWeight: 300 }}>{textMobile}</p>
            </div>
          ))}
        </div>

        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', margin: '3.5rem 0 2rem' }}>
          <GoogleRatingBadge reviewCount={10} />
        </div>

        <div className="fade-in st-reviews-grid">
          {googleBewertungen.map(([name, kontext, text]) => (
            <div key={name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
              <div style={{ color: 'var(--lila)', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>★★★★★</div>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>„{text}"</p>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'white' }}>{name}</div>
              <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)' }}>{kontext}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── SPEZIALISIERUNG ── */}
      <section id="spezialisierung" className="st-section-pad" style={{ background: 'var(--hell)' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Meine Spezialisierung
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Für Ihr Vorhaben <em style={{ color: 'var(--lila-dark)', fontStyle: 'italic' }}>in Strausberg.</em>
          </h2>
        </div>

        <div className="fade-in st-spez-grid">
          <div style={{ background: 'white', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.75rem' }}>Bestandsobjekte &amp; Sanierung</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>
              Ich sichere Ihnen maßgeschneiderte Zinskonditionen und binde zinsgünstige{' '}
              <a href="/forderdarlehen-und-zuschusse" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)' }}>ILB-Förderkredite</a> des Landes Brandenburg direkt ein.
            </p>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.75rem' }}>Neubau &amp; Baugrundstücke</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300 }}>
              Ich strukturiere Ihre Finanzierung passgenau mit{' '}
              <a href="/forderdarlehen-und-zuschusse" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)' }}>KfW-Förderungen</a> und flexiblen{' '}
              <a href="/glossar/tilgung" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)' }}>Tilgungsoptionen</a>.
            </p>
          </div>
          <div style={{ background: 'white', border: '1px solid rgba(187,159,213,0.2)', padding: '2rem', borderRadius: 2 }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '0.75rem' }}>Selbstständige &amp; Freiberufler</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1rem' }}>
              Als Spezialistin bereite ich Ihre Unterlagen ({' '}
              <a href="/glossar/bwa" style={{ color: 'var(--lila-dark)', textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)' }}>BWA</a>, Steuerbescheide) bankgerecht auf, sodass auch schwankende Einnahmen nicht zur Absage führen.
            </p>
            <a href="/selbststaendige" style={{ fontSize: '0.85rem', color: 'var(--lila-dark)', fontWeight: 500, textDecoration: 'none' }}>Mehr erfahren →</a>
          </div>
        </div>
      </section>

      {/* Trenner: weißer Balken mit Logo */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* ── UNABHÄNGIG & PERSÖNLICH ── */}
      <section className="st-section-pad" style={{ background: 'var(--anthrazit)', overflow: 'hidden', position: 'relative' }}>
        <div className="fade-in st-pers-grid">
          <div>
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
              Unabhängig &amp; persönlich
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, color: 'white', lineHeight: 1.2, marginBottom: '1.25rem', textAlign: 'center' }}>
              Kein Standard-Angebot <em style={{ color: 'var(--lila)', fontStyle: 'italic' }}>aus dem Callcenter.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300 }}>
              Als freie Beraterin vergleiche ich für Sie die Angebote von über 500 Banken – vollkommen kostenlos und transparent. Sie bekommen kein Standard-Angebot aus einem Callcenter, sondern eine Lösung, die exakt zu Ihrem Leben passt.
            </p>
          </div>
          <div className="st-pers-img-wrap">
            <Image
              src="/images/franziska-ritsche-portraet.png"
              alt="Franziska Ritsche – Baufinanzierungsberaterin"
              width={420} height={500}
              style={{ position: 'absolute', bottom: '-5rem', left: '50%', transform: 'translateX(-50%)', height: 'calc(clamp(260px, 32vw, 380px) + 5rem)', width: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="st-section-pad" style={{ background: 'var(--hell)' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Häufige Fragen
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Fragen zur Baufinanzierung in Strausberg.
          </h2>
        </div>

        <div className="fade-in" style={{ maxWidth: 760, margin: '0 auto' }}>
          {faqs.map(([frage, antwort], i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--anthrazit)' }}>{frage}</span>
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
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>{antwort}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="st-section-pad" style={{ background: 'white', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          Jetzt starten
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
        </p>
        <h2 className="fade-in" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto 1.5rem' }}>
          Ihr Immobilienprojekt<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>in Strausberg besprechen.</em>
        </h2>
        <p className="fade-in" style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem', fontWeight: 300 }}>
          Lassen Sie uns Ihre Möglichkeiten unverbindlich durchrechnen – persönlich vor Ort oder flexibel digital.
        </p>
        <div className="fade-in st-cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/kontakt" className="btn-primary">Unverbindliches Erstgespräch buchen</a>
          <a href="tel:+4917684405479" className="btn-dark">Direkt anrufen</a>
        </div>
      </section>
      </main>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="float-btn" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, background: 'var(--lila)', color: 'white', padding: '0.85rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.25s, box-shadow 0.25s', maxWidth: '280px', lineHeight: 1.3 }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="st-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
