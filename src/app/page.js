'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')
  const [sliderIndex, setSliderIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['leistungen', 'ueber-mich', 'fuer-wen', 'stimmen', 'rechner', 'kontakt']
    const sectionMap = { 'ueber-mich': 'leistungen' }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const navId = Object.prototype.hasOwnProperty.call(sectionMap, e.target.id) ? sectionMap[e.target.id] : e.target.id
            setActiveSection(navId)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setSliderIndex(i => (i + 1) % 3), 7000)
    return () => clearInterval(timer)
  }, [])

  const sliderTestimonials = [
    ['Familie D., NRW', 'Kauf Einfamilienhaus · Volksbank + NRW-Bank · Juni 2024', '„Von der Eigenbedarfskündigung zum Eigenheim in kürzester Zeit. Wir sind so dankbar für den immer freundlichen Umgang, stets transparent und kundenorientiert."', null],
    ['Familie W. & K., Berlin', 'Ratenkredit · DKB · Juli 2024', '„Der gesamte Prozess war äußerst angenehm und effizient. Franziska war stets höflich, immer auf uns abgestimmt und auf Augenhöhe. Der Vorgang war transparent und professionell."', '/images/Familie-Windisch.jpg'],
    ['Familie Z., Altlandsberg', 'Anschlussfinanzierung · Commerzbank · Mai 2022', '„Franziska hat uns einen sensationellen Vertrag mit sehr guten Konditionen rausgeholt. Zum ersten Mal wurde für uns ein Vertrag gefunden, bei dem alle Parteien etwas davon hatten."', null],
  ]

  return (
    <>
      <style>{`
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .btn-primary { background: var(--lila); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
        .btn-primary:hover { background: var(--lila-dark); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(187,159,213,0.38); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); padding: 0.9rem 2rem; border: 1px solid rgba(255,255,255,0.22); border-radius: 2px; font-size: 0.9rem; cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-ghost:hover { border-color: var(--lila); color: var(--lila); box-shadow: 0 6px 24px rgba(187,159,213,0.15); transform: translateY(-1px); }
        .btn-dark { background: var(--anthrazit); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-dark:hover { background: #1a2428; box-shadow: 0 8px 24px rgba(0,0,0,0.3); transform: translateY(-1px); }
        .leistung-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .leistung-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.28); }
        .nav-logo { transition: transform 0.2s ease; display: block; text-decoration: none; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        @keyframes fadeInSlide { from { opacity: 0; } to { opacity: 1; } }
        .slider-slide { animation: fadeInSlide 0.55s ease; }
        html, body { overflow-x: hidden; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .nav-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .nav-mobile-menu { display: none; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .nav-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .nav-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-top    { order: 1; grid-column: 1 !important; grid-row: auto !important; text-align: center; padding: 2rem 2rem 1rem !important; }
          .hero-top .hero-label { justify-content: center !important; }
          .hero-top h1 { text-align: center; }
          .hero-img-wrap { order: 2; grid-column: 1 !important; grid-row: auto !important; max-height: 320px; overflow: hidden; display: flex !important; justify-content: center; align-self: auto !important; position: relative !important; }
          .hero-img-fade { display: block !important; }
          .hero-img-wrap img { height: 320px !important; width: auto !important; max-width: 280px !important; object-position: top !important; }
          .hero-bottom { order: 3; grid-column: 1 !important; grid-row: auto !important; text-align: center; padding: 1.5rem 2rem 1rem !important; }
          .hero-bottom p { max-width: 100% !important; margin-top: 0 !important; text-align: center; }
          .hero-buttons { flex-direction: column !important; align-items: center; }
          .hero-buttons a { width: 100% !important; text-align: center; box-sizing: border-box; }
          .hero-stats { order: 4; grid-column: 1 !important; grid-row: auto !important; padding: 1rem 2rem 3rem !important; justify-content: center !important; text-align: center; }
          .grid-2col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .unterschied-text  { order: 1; grid-column: auto !important; grid-row: auto !important; }
          .unterschied-img   { order: 2; grid-column: auto !important; grid-row: auto !important; height: 280px !important; }
          .unterschied-quote { order: 3; grid-column: auto !important; grid-row: auto !important; }
          .grid-3col { grid-template-columns: 1fr !important; }
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .testimonial-featured { grid-column: 1 !important; flex-direction: column !important; }
          .testimonial-featured-img { display: none !important; }
          .testimonial-slider { grid-column: span 1 !important; padding: 2rem 1.5rem !important; }
          .slider-arrows { display: none !important; }
          .section-pad { padding: 4rem 5% !important; }
          #rechner { padding: 4rem 5% !important; }
          #rechner .rechner-hint a.btn-primary { display: block; width: 100%; box-sizing: border-box; }

          .trust-bar { grid-template-columns: repeat(2, 1fr) !important; padding: 0 !important; gap: 1.5px !important; background: var(--lila-light) !important; border-top: 1px solid var(--lila-light); border-bottom: 1px solid var(--lila-light); }
          .trust-bar > div { border-right: none !important; background: var(--hell); padding: 1.5rem 1rem !important; }
          .trust-divider { display: none !important; }
          .footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .footer-inner ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .stimmen-wrapper { display: flex; flex-direction: column; }
          .projekt-section { order: 1; }
          .stimmen-section { order: 2; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--anthrazit)', padding: '0 5%', height: 88,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: 'none'
      }}>
        <a href="/" className="nav-logo"><Image
          src="/images/zr-baufinanzierung-logo.png"
          alt="ZR Baufinanzierung"
          width={160}
          height={80}
          style={{ height: 64, width: 'auto', display: 'block' }}
        /></a>
        <ul className="nav-links">
          {[['#leistungen','Leistungen','leistungen'],['#fuer-wen','Für wen?','fuer-wen'],['#stimmen','Kundenstimmen','stimmen'],['#rechner','Rechner','rechner'],['/selbststaendige','Selbstständige','selbststaendige'],['/warum-ich','Warum ich?','warum-ich']].map(([href, label, id]) => (
            <li key={href}><a href={href} className="nav-link" style={{ color: activeSection === id ? 'white' : 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em', borderBottom: id && activeSection === id ? '1px solid var(--lila)' : '1px solid transparent', paddingBottom: '2px' }}>{label}</a></li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="nav-mobile-menu">
          {[['#leistungen','Leistungen'],['#fuer-wen','Für wen?'],['#stimmen','Kundenstimmen'],['#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="/kontakt" className="mob-cta" onClick={() => setMenuOpen(false)}>Beratung anfragen</a>
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="hero-grid" style={{
        minHeight: '100vh', background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'center', paddingTop: 88, position: 'relative', overflow: 'hidden'
      }}>
        {/* Atmospheric layers */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '65%', background: 'radial-gradient(ellipse 75% 68% at 68% 38%, rgba(187,159,213,0.13) 0%, rgba(187,159,213,0.04) 52%, transparent 74%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'linear-gradient(to top, rgba(25,20,38,0.4) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />

        {/* Hero Top: Label + H1 */}
        <div className="hero-top" style={{ padding: '0 5% 0 8%', position: 'relative', zIndex: 4, gridColumn: 1, gridRow: 1 }}>
          <p className="fade-in fade-in-d1 hero-label" style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1.25rem', marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 36, height: 1, background: 'var(--lila)' }}></span>
            Franziska Ritsche
            <span style={{ display: 'inline-block', width: 36, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 className="fade-in fade-in-d2" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, lineHeight: 1.05, marginBottom: 0 }}>
            <span style={{ color: 'white', fontStyle: 'normal', display: 'block', fontSize: 'clamp(2rem, 3.6vw, 4rem)' }}>Ihre Expertin für Baufinanzierung&nbsp;–</span>
            <em style={{ color: 'var(--lila)', fontStyle: 'italic', display: 'block', fontSize: 'clamp(2.8rem, 5.5vw, 5.8rem)' }}>Eine Sorge weniger.</em>
          </h1>
        </div>

        {/* Hero Bild */}
        <div className="hero-img-wrap fade-in fade-in-d2" style={{ position: 'relative', zIndex: 4, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', alignSelf: 'stretch', gridColumn: 2, gridRow: '1 / 4' }}>
          <Image
            src="/images/franziska-ritsche.png"
            alt="Franziska Ritsche – Baufinanzierungsberaterin Berlin Brandenburg"
            width={575}
            height={1081}
            priority
            style={{ height: 'calc((100vh - 88px) * 0.95)', width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
          />
          <div className="hero-img-fade" style={{ display: 'none', position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, #2F3338)', pointerEvents: 'none' }} />
        </div>

        {/* Hero Bottom: Subtext + Buttons */}
        <div className="hero-bottom fade-in fade-in-d3" style={{ padding: '3rem 5% 0 8%', position: 'relative', zIndex: 4, gridColumn: 1, gridRow: 2 }}>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 440, marginBottom: '1.1rem', fontWeight: 300 }}>
            Ich begleite Sie von der ersten Idee bis zur letzten Rate –
            mit Durchblick, Klartext und echter Begeisterung für Ihre Situation.
            Mit Schwerpunkt Berlin & Brandenburg.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/kontakt" className="btn-primary">Kostenloses Erstgespräch</a>
            <a href="#rechner" className="btn-ghost">Finanzierung berechnen</a>
          </div>
          <a href="tel:+4917684405479" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--lila)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.31a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18z"/>
            </svg>
            <span style={{ fontWeight: 500 }}>0176 84 40 54 79</span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>· Auch abends & am Wochenende erreichbar</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats fade-in fade-in-d4" style={{ display: 'flex', gap: '2.5rem', padding: '3rem 5% 5rem 8%', position: 'relative', zIndex: 4, gridColumn: 1, gridRow: 3 }}>
          {[['500+','Bankpartner'],['100%','Kostenlos für Sie'],['5★','Google Bewertung']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.2rem', fontWeight: 600, color: 'white', lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" style={{ background: 'var(--hell)', padding: '3.5rem 8% 3.5rem', position: 'relative', overflow: 'hidden', scrollMarginTop: '88px' }}>
        <div style={{ position: 'absolute', top: -60, right: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,159,213,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="fade-in" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Das Versprechen
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Mein Anspruch = <em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>Ihr Vorteil.</em>
          </h2>
        </div>
        <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'rgba(255,255,255,0.08)' }}>
          {[
            ['01', 'Persönliche Beratung', 'Kein Callcenter, keine Warteschleifen. Sie haben eine direkte Ansprechpartnerin – von Anfang bis Ende.'],
            ['02', 'Beste Konditionen', 'Durch den Vergleich von über 500 Bankpartnern finde ich die Finanzierung, die wirklich zu Ihrer Situation passt.'],
            ['03', 'Vollständige Begleitung', 'Von der Strategie über die Auszahlung bis zur letzten Rate. Ich bin dabei – auch auf der Baustelle.'],
            ['04', 'Zahlen die überzeugen', 'Besonders für Selbstständige: Ich bereite Ihre Unterlagen so auf, dass Banken Ihre Stärken sofort erkennen.'],
            ['05', 'Schnell & Digital', 'Beratung per Video, Telefon oder vor Ort – flexibel nach Ihrem Zeitplan. Digitale Prozesse, persönlicher Service.'],
            ['06', '100% kostenlos für Sie', 'Als unabhängige Vermittlerin werde ich von der Bank vergütet – für Sie entstehen keine Mehrkosten.'],
          ].map(([num, title, text]) => (
            <div key={num} className="fade-in leistung-card" style={{ background: 'var(--anthrazit)', padding: '2.5rem' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3.5rem', fontWeight: 400, color: 'rgba(187,159,213,0.5)', lineHeight: 1, marginBottom: '1rem' }}>{num}</div>
              <div style={{ fontSize: '1rem', fontWeight: 500, color: 'white', marginBottom: '0.75rem' }}>{title}</div>
              <div style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontWeight: 300 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trenner: weißer Balken */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      {/* DER UNTERSCHIED */}
      <section id="ueber-mich" style={{ background: 'var(--hell)', padding: '3.5rem 8% 3.5rem', scrollMarginTop: '88px' }}>
        {/* Kopf: zentriert */}
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 4rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Der Unterschied
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ich begleite Sie – bis zur letzten Rate.
          </h2>
          <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--lila-dark)', fontWeight: 400 }}>
            Nicht nur beim Abschluss. Sondern den ganzen Weg.
          </p>
        </div>

        {/* 2 Spalten: Text links, Bild rechts */}
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div className="fade-in unterschied-text" style={{ gridColumn: 1, gridRow: 1 }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.25rem' }}>
              Viele Finanzierer sind bis zum Vertragsabschluss zur Stelle – und danach nicht mehr zu erreichen. Bei mir ist das anders.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.25rem' }}>
              Ich begleite meine Kunden von der ersten Idee bis zur letzten Rate. Das bedeutet: Ich bin auch dann da, wenn die Bank für die nächste Auszahlung Fotos vom Baufortschritt braucht. Ich fahre auf die Baustelle, mache die Fotos und kümmere mich um die Auszahlung – damit Sie sich um Ihr Haus kümmern können.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>
              Bilanzen, BWAs, Bankgespräche – das ist mein Job. Ich hinterfrage und bereite alles so auf, dass die Bank einen guten Eindruck bekommt. Sie müssen sich da nicht alleine durchkämpfen.
            </p>
            <a href="/warum-ich" style={{ fontSize: '0.9rem', color: 'var(--lila-dark)', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--lila-dark)', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--lila)'; e.currentTarget.style.borderColor = 'var(--lila)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--lila-dark)'; e.currentTarget.style.borderColor = 'var(--lila-dark)' }}
            >
              Mehr über mich erfahren →
            </a>
          </div>
          <div className="fade-in unterschied-img" style={{ position: 'relative', height: 500, gridColumn: 2, gridRow: '1 / 3' }}>
            <Image
              src="/images/franziska-ritsche-baustelle-brandenburg.jpg"
              alt="Franziska Ritsche – Baufinanzierungsberaterin auf einer Baustelle in Brandenburg"
              fill
              style={{ objectFit: 'cover', borderRadius: 2, filter: 'grayscale(15%)', border: '1px solid var(--lila-light)', boxShadow: '8px 8px 0px var(--lila-light)' }}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <div className="fade-in unterschied-quote" style={{ gridColumn: 1, gridRow: 2, padding: '1.25rem 1.5rem', background: 'var(--lila-light)', borderLeft: '3px solid var(--lila)' }}>
            <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--anthrazit)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              „Eine Sorge weniger – das ist nicht nur mein Versprechen. Es ist mein Anspruch an mich selbst."
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--lila-dark)', letterSpacing: '0.06em' }}>– Franziska Ritsche</span>
          </div>
        </div>
      </section>

      {/* TRENNLINIE: hell → hell (dezente Linie statt Welle, gleiche Farbe) */}
      <div style={{ height: 1, background: 'var(--lila-light)' }}></div>

      {/* ZIELGRUPPEN */}
      <section id="fuer-wen" style={{ background: 'var(--hell)', padding: '3.5rem 8% 2.5rem', scrollMarginTop: '88px' }}>
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 3.5rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Für wen bin ich da
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Maßgeschneidert.<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>Für Ihre Situation.</em>
          </h2>
        </div>
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--lila-light)' }}>
          {/* Selbstständige */}
          <div className="fade-in" style={{ background: 'var(--anthrazit)', padding: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: 'var(--lila)', color: 'white', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', marginBottom: '1.5rem' }}>Fokus</span>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 600, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>Selbstständige & Unternehmer</h3>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
              Schwankendes Einkommen, Bilanzen, steuerliche Optimierungen –
              Die Anforderungen der Banken sind andere – ich weiß was wichtig ist.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Mindestens 3 Jahre selbstständig? Kein Problem.', 'Ich übersetze Ihre Bilanz in Banksprache', 'Zahlen aufbereiten, die die Bank überzeugen', 'Zugang zu Banken, die Selbstständige verstehen'].map(item => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--lila)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* Angestellte */}
          <div className="fade-in" style={{ background: 'white', padding: '3.5rem' }}>
            <span style={{ display: 'inline-block', background: 'var(--anthrazit)', color: 'var(--lila)', fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', marginBottom: '1.5rem' }}>Fundament</span>
            <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '1rem', lineHeight: 1.2 }}>Angestellte & Familien</h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
              Sie haben ein sicheres Einkommen und möchten den Weg ins Eigenheim
              so entspannt wie möglich gestalten.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Erstfinanzierung & Anschlussfinanzierung', 'Umschuldung & Forward Darlehen', 'KfW-Förderungen & Zuschüsse optimal nutzen', 'Vergleich von über 500 Bankpartnern'].map(item => (
                <li key={item} style={{ fontSize: '0.88rem', color: 'var(--text)', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--lila-dark)', flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fade-in" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Persönlich vor Ort</p>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1 }}>Berlin & Brandenburg</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar" style={{ background: 'var(--hell)', padding: '2rem 8%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--lila-light)', borderBottom: '1px solid var(--lila-light)' }}>
        {[['500+','Bankpartner im Vergleich'],['100%','Kostenlos & unverbindlich'],['5★','Google Bewertungen'],['∞','Erreichbarkeit für Sie']].map(([num, label], i) => (
          <div key={label} className="fade-in" style={{ textAlign: 'center', borderRight: i < 3 ? '1px solid var(--lila-light)' : 'none', padding: '0.5rem 1rem', minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '2.8rem', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--hell)', height: '3.5rem' }}></div>
      {/* Trenner: weißer Balken */}
      <div style={{ background: 'white', height: '6rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/images/zr-baufinanzierung-logo.png" alt="" width={160} height={80} style={{ height: '5rem', width: 'auto', opacity: 0.07, filter: 'invert(1) grayscale(100%)', pointerEvents: 'none', userSelect: 'none' }} />
      </div>

      <div className="stimmen-wrapper">
      {/* KUNDENSTIMMEN */}
      <section id="stimmen" className="stimmen-section" style={{ background: 'var(--hell)', padding: '3rem 8% 3.5rem', scrollMarginTop: '88px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Kundenstimmen
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15 }}>
            Was Kunden<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>sagen.</em>
          </h2>
        </div>
        <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'var(--lila-light)' }}>
          {/* Featured: Text links, Bild rechts */}
          <div className="fade-in testimonial-featured" style={{ gridColumn: 'span 2', background: 'var(--anthrazit)', padding: '2.75rem', display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ flex: '1 1 65%' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => <div key={i} style={{ width: 12, height: 12, background: 'var(--lila)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>)}
              </div>
              <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                „Wir haben über Franziska die Finanzierung für die Sanierung unserer Immobilie umgesetzt – und hätten uns niemand Besseren wünschen können. Sie war immer für uns erreichbar – auch abends oder am Wochenende. Dank ihr haben wir nicht nur die passende Finanzierung gefunden, sondern uns auch die ganze Zeit über sicher und gut begleitet gefühlt."
              </p>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'white' }}>Familie Arnold-Kern, Trebus</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--lila)' }}>Modernisierung Zweifamilienhaus · ING · August 2025</div>
            </div>
            <div className="testimonial-featured-img" style={{ flex: '0 0 35%', maxWidth: 280, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '2rem' }}>
              <Image
                src="/images/franziska-ritsche-kundendankeschoen-baufinanzierung.jpg"
                alt="Dankeskorb von Familie Arnold-Kern"
                width={280}
                height={280}
                style={{ width: 280, height: 280, objectFit: 'cover', objectPosition: 'top', borderRadius: 4 }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          </div>
          {/* Slider */}
          <div className="testimonial-slider" style={{ gridColumn: 'span 2', background: 'white', padding: '3rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: 760, position: 'relative' }}>
              {/* Pfeil links */}
              <button
                onClick={() => setSliderIndex(i => (i + 2) % 3)}
                className="slider-arrows"
                style={{ position: 'absolute', left: -52, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--lila)', fontSize: '2rem', cursor: 'pointer', lineHeight: 1, padding: '0.25rem 0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--lila)'}
              >‹</button>
              {/* Slide */}
              <div key={sliderIndex} className="slider-slide" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: '1.5rem', justifyContent: 'center' }}>
                  {[...Array(5)].map((_, i) => <div key={i} style={{ width: 12, height: 12, background: 'var(--lila)', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>)}
                </div>
                <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--anthrazit)', lineHeight: 1.75, marginBottom: '2rem', minHeight: 100 }}>
                  {sliderTestimonials[sliderIndex][2]}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  {sliderTestimonials[sliderIndex][3] && (
                    <Image
                      src={sliderTestimonials[sliderIndex][3]}
                      alt={sliderTestimonials[sliderIndex][0]}
                      width={60} height={60}
                      style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                      onError={(e) => { e.target.style.display = 'none' }}
                    />
                  )}
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--anthrazit)' }}>{sliderTestimonials[sliderIndex][0]}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--lila-dark)' }}>{sliderTestimonials[sliderIndex][1]}</div>
                  </div>
                </div>
              </div>
              {/* Pfeil rechts */}
              <button
                onClick={() => setSliderIndex(i => (i + 1) % 3)}
                className="slider-arrows"
                style={{ position: 'absolute', right: -52, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--lila)', fontSize: '2rem', cursor: 'pointer', lineHeight: 1, padding: '0.25rem 0.5rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--lila)'}
              >›</button>
            </div>
            {/* Punkte */}
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '2.25rem' }}>
              {[0, 1, 2].map(i => (
                <button
                  key={i}
                  onClick={() => setSliderIndex(i)}
                  style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0, background: sliderIndex === i ? 'var(--lila)' : 'rgba(187,159,213,0.3)', transition: 'background 0.3s' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EIN ECHTES PROJEKT */}
      <section className="section-pad projekt-section" style={{ background: 'var(--hell)', padding: '3.5rem 8% 7rem' }}>
        <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div className="fade-in" style={{ position: 'relative', height: 440, overflow: 'hidden', borderRadius: 2 }}>
          <Image
            src="/images/baufinanzierung-baustelle-fertiges-zimmer-vorher-nachher.jpeg"
            alt="Vorher-Nachher Projekt Familie Arnold-Kern"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
        <div className="fade-in">
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Ein echtes Projekt
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Aus diesem Chaos wurde ein Zuhause.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
            Familie Arnold-Kern hat mir dieses Bild geschickt – als kleines Dankeschön nach der Modernisierung ihres Zweifamilienhauses. Ich war vom ersten Gespräch bis zur letzten Rate dabei. Genau dafür mache ich das.
          </p>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--lila-dark)' }}>
            – Franziska Ritsche
          </p>
        </div>
        </div>
      </section>
      </div>{/* end stimmen-wrapper */}

      {/* TRENNER: hell → anthrazit */}
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* RECHNER */}
      <section id="rechner" style={{ background: 'var(--anthrazit)', padding: '3rem 8% 4rem', scrollMarginTop: '88px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Finanzierungsrechner
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Wie viel Eigenheim ist möglich?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, fontWeight: 300, maxWidth: 640, margin: '0 auto' }}>
            Berechnen Sie jetzt Ihre individuelle Finanzierung – mit echten aktuellen Konditionen von Europace, Deutschlands größter Baufinanzierungsplattform.
          </p>
        </div>
        <div style={{ maxWidth: 900, margin: '0 auto 2.5rem' }}>
          <Script
            src="https://baufi-passt.passt.aws.europace.de/baufi-passt-flex/baufi-passt-flex.js"
            strategy="afterInteractive"
          />
          {/* eslint-disable-next-line */}
          <baufi-passt-flex
            frontend-key-id="e87b7df2e4337d3e6929ef649e8dc5312e512e17e438fb7f765225374cb4ff45"
            datenkontext="ECHT_GESCHAEFT"
          ></baufi-passt-flex>
        </div>
        <div style={{ maxWidth: 560, margin: '1.75rem auto 0', borderTop: '1px solid rgba(187,159,213,0.35)', borderBottom: '1px solid rgba(187,159,213,0.35)', padding: '1.25rem 0', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.7 }}>
            Der Rechner gibt Ihnen eine erste Orientierung. Für Ihre individuelle Finanzierungslösung – besonders als Selbstständige/r – sprechen wir gerne persönlich.
          </p>
        </div>
      </section>


      {/* KONTAKT */}
      <section id="kontakt" style={{ background: 'white', padding: '4rem 8%', textAlign: 'center', scrollMarginTop: '88px' }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            Jetzt starten
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
          </p>
        <h2 className="fade-in" style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.15, maxWidth: 640, margin: '0 auto 1.5rem' }}>
          Bereit für<br /><em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>eine Sorge weniger?</em>
        </h2>
        <p className="fade-in" style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem', fontWeight: 300 }}>
          Das erste Gespräch ist kostenlos, unverbindlich und dauert etwa 30 Minuten.
          Danach wissen Sie, wo Sie stehen.
        </p>
        <div className="fade-in" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/kontakt" className="btn-primary">Termin anfragen</a>
          <a href="tel:+4917684405479" className="btn-dark">Direkt anrufen</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-inner" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--lila)', fontSize: '1.4rem', fontWeight: 600 }}>ZR</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Baufinanzierung</span>
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
