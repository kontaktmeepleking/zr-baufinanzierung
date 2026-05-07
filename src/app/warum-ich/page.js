'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function WarumIch() {
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

  return (
    <>
      <head>
        <title>Warum Franziska Ritsche? | ZR Baufinanzierung Berlin Brandenburg</title>
        <meta name="description" content="Franziska Ritsche – Baufinanzierungsberaterin in Berlin & Brandenburg. IHK-geprüft nach §34i, bankenunabhängig, persönlich. Erfahren Sie, was mich antreibt." />
      </head>
      <style>{`
        html, body { overflow-x: hidden; }
        .fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        .btn-primary { background: var(--lila); color: white; padding: 0.9rem 2rem; border: none; border-radius: 2px; font-size: 0.9rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
        .btn-primary:hover { background: var(--lila-dark); transform: translateY(-2px); box-shadow: 0 10px 32px rgba(187,159,213,0.38); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.8); padding: 0.9rem 2rem; border: 1px solid rgba(255,255,255,0.22); border-radius: 2px; font-size: 0.9rem; cursor: pointer; text-decoration: none; display: inline-block; transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s; }
        .btn-ghost:hover { border-color: var(--lila); color: var(--lila); box-shadow: 0 6px 24px rgba(187,159,213,0.15); transform: translateY(-1px); }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .wi-nav-links { display: flex; gap: 2rem; list-style: none; }
        .wi-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
        .wi-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: all 0.3s; }
        .wi-mobile-menu { display: none; }
        .wi-grid-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .wi-grid-3col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5px; background: rgba(255,255,255,0.08); }
        .wi-hero-img { display: flex; align-items: flex-end; justify-content: center; overflow: hidden; }
        .wi-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        .wi-photo-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 3rem; }
        .wi-photo-strip-item { position: relative; height: 300px; }
        .wi-section-divider { border-top: 1px solid rgba(187,159,213,0.5); padding-top: 5rem; }
        .wi-hausbau-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; margin-bottom: 3rem; }
        @media (max-width: 768px) {
          .wi-hero-section { grid-template-columns: 1fr !important; }
          .wi-nav-links { display: none !important; }
          .wi-hamburger { display: flex !important; }
          .wi-mobile-menu { display: flex; flex-direction: column; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); padding: 1.5rem 5%; gap: 0; z-index: 99; border-top: 1px solid rgba(255,255,255,0.08); }
          .wi-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block; }
          .wi-mobile-menu .mob-cta { background: var(--lila); color: white !important; padding: 0.75rem 1.25rem !important; border-radius: 2px; border-bottom: none !important; margin-top: 1rem; text-align: center; font-weight: 500; }
          .wi-hero-text { grid-column: 1 !important; text-align: center; padding: 2rem 2rem 1rem !important; }
          .wi-hero-text p { justify-content: center !important; }
          .wi-hero-br { display: none !important; }
          .wi-hero-anfuehlt { color: white !important; font-weight: 600 !important; font-style: normal !important; }
          .wi-hero-subtext { display: none !important; }
          .wi-hero-text h1 { margin-bottom: 0.5rem !important; }
          .wi-hero-img { grid-column: 1 !important; min-height: 300px; align-items: flex-end !important; margin-top: -1rem; }
          .wi-hero-img img { height: 460px !important; width: auto !important; max-width: 320px !important; object-position: bottom !important; }
          .wi-hero-img-fade { display: block !important; }
          .wi-hero-subtext-mobile { display: block !important; padding-top: 0 !important; }
          .wi-grid-2col { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .wi-grid-3col { grid-template-columns: 1fr !important; background: none !important; }
          .wi-photo-strip { grid-template-columns: 1fr !important; }
          .wi-photo-strip-item { height: 220px !important; }
          .wi-hausbau-intro { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .wi-section-pad { padding: 4rem 5% !important; text-align: center !important; }
          .wi-fakten { padding: 2.5rem 5% !important; }
          .wi-fakten .fade-in { padding: 1.5rem 1rem !important; }
          .wi-fakten .fade-in > div:first-child { font-size: 2rem !important; margin-bottom: 0.5rem !important; }
          .wi-fakten .fade-in > div:last-child { font-size: 0.8rem !important; }
          .wi-section-pad p { justify-content: center !important; }
          .wi-hausbau-section { padding-top: 0 !important; }
          .wi-schreibtisch-text { order: 1 !important; }
          .wi-schreibtisch-img { order: 2 !important; }
          .wi-schreibtisch-body-mobile { display: block !important; order: 3 !important; }
          .wi-schreibtisch-body-desktop { display: none !important; }
          .wi-section-divider { text-align: center !important; padding-top: 2.5rem !important; }
          .wi-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; padding: 2.5rem 6% !important; }
          .wi-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
          .wi-cta-btns { flex-direction: column !important; align-items: stretch !important; }
          .wi-cta-btns a { width: 100% !important; text-align: center; box-sizing: border-box; }
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
        <ul className="wi-nav-links">
          {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <li key={href}><a href={href} className="nav-link" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em', borderBottom: label === 'Warum ich?' ? '1px solid var(--lila)' : '1px solid transparent', paddingBottom: '2px' }}>{label}</a></li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="wi-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </button>
      </nav>
      {menuOpen && (
        <div className="wi-mobile-menu">
          {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="/kontakt" className="mob-cta" onClick={() => setMenuOpen(false)}>Beratung anfragen</a>
        </div>
      )}

      {/* HERO */}
      <section className="wi-hero-section" style={{
        minHeight: '100vh', background: 'linear-gradient(148deg, #27292e 0%, #2F3338 45%, #2c2538 100%)',
        paddingTop: 88, position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch'
      }}>
        {/* Atmospheric layers */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '65%', background: 'radial-gradient(ellipse 75% 68% at 68% 38%, rgba(187,159,213,0.13) 0%, rgba(187,159,213,0.04) 52%, transparent 74%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'linear-gradient(to top, rgba(25,20,38,0.4) 0%, transparent 100%)', pointerEvents: 'none', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 88, left: '8%', width: 52, height: 1, background: 'var(--lila)', opacity: 0.55, pointerEvents: 'none', zIndex: 3 }} />

        {/* Left: Text + Subtext */}
        <div className="fade-in wi-hero-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '4rem 5% 4rem 8%', position: 'relative', zIndex: 4 }}>
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
            Meine Geschichte
            <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3.2rem, 5.4vw, 6rem)', fontWeight: 600, color: 'white', lineHeight: 1.04, marginBottom: '2rem' }}>
            Ich weiß, wie es sich<br className="wi-hero-br" />{' '}
            <em className="wi-hero-anfuehlt" style={{ fontStyle: 'italic', color: 'var(--lila)' }}>anfühlt.</em>
          </h1>
          <p className="wi-hero-subtext" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: 440, fontWeight: 300 }}>
            Weil ich selbst gebaut habe. Weil ich Menschen liebe. Und weil Zahlen meine Leidenschaft sind.
          </p>
        </div>

        {/* Right: Franziska */}
        <div className="wi-hero-img" style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
          <Image
            src="/images/franziska-ritsche.png"
            alt="Franziska Ritsche – ZR Baufinanzierung"
            width={575} height={1081} priority
            style={{ height: 'calc(100vh - 88px)', width: 'auto', maxWidth: '100%', objectFit: 'contain', objectPosition: 'bottom', transform: 'scaleX(-1)' }}
          />
          <div className="wi-hero-img-fade" style={{ display: 'none', position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to bottom, transparent, var(--anthrazit))', pointerEvents: 'none' }} />
        </div>

        {/* Mobile-only subtext after image */}
        <div className="wi-hero-subtext-mobile" style={{ display: 'none', gridColumn: 1, padding: '1.5rem 5% 2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontWeight: 300 }}>
            Weil ich selbst gebaut habe. Weil ich Menschen liebe. Und weil Zahlen meine Leidenschaft sind.
          </p>
        </div>

      </section>

      {/* SEKTION 2: Meine Wurzeln im Sport */}
      <section className="wi-section-pad" style={{ background: 'white', padding: '5rem 8%' }}>
        <div className="wi-grid-2col" style={{ maxWidth: 1400, margin: '0 auto' }}>
          <div className="fade-in">
            <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
              Meine Wurzeln
              <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2, marginBottom: '1.75rem' }}>
              12 Jahre Fitnessbranche –<br />
              <em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>Menschen begleiten war immer mein Ding.</em>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
              Ich komme aus der Fitnessbranche. Über 12 Jahre habe ich Menschen begleitet – als Trainerin, als Studioleiterin. Immer mit dem Ziel, sie auf ihrem Weg zu unterstützen und ihre Ziele zu erreichen. Diese Haltung hat mich nie verlassen.
            </p>
          </div>
          <div className="fade-in" style={{ position: 'relative', height: 460 }}>
            <Image
              src="/images/franziska-ritsche-fitnesstrainerin-ems-training.jpeg"
              alt="Franziska Ritsche als Fitnesstrainerin beim EMS-Training mit Kundin"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 5%', borderRadius: 2, border: '1px solid var(--lila-light)', boxShadow: '8px 8px 0px var(--lila-light)' }}
            />
          </div>
        </div>
      </section>

      {/* SEKTION 3: Unser Hausbau */}
      <section className="wi-section-pad wi-hausbau-section" style={{ background: 'white', padding: '0 8% 6rem' }}>
        <div className="wi-section-divider">
          <div className="fade-in wi-hausbau-intro">
            <div>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
                Unser Hausbau
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
              </p>
              <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2 }}>
                2019: Ein Grundstück in Fredersdorf –<br />
                <em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>und alles, was danach kam.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300, paddingTop: '2.5rem' }}>
              2019 haben mein Mann und ich ein Grundstück in Fredersdorf gekauft und ein Doppelhaus gebaut – mitten in Brandenburg, direkt vor den Toren Berlins. Ich bin hier zu Hause, ich kenne die Region, ich kenne die Menschen. Ich weiß aus eigener Erfahrung, wie viel man dabei um die Ohren hat – die Planung, die Bank, die Unterlagen, die Baustelle.
            </p>
          </div>

          {/* Foto-Strip */}
          <div className="fade-in wi-photo-strip">
            <div className="wi-photo-strip-item">
              <Image
                src="/images/franziska-ritsche-hausbau-eigenheim-fredersdorf.jpg"
                alt="Franziska Ritsche hilft auf der Baustelle beim Eigenheim in Fredersdorf"
                fill
                style={{ objectFit: 'cover', borderRadius: 2 }}
              />
              <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.4)', padding: '0.2rem 0.6rem', borderRadius: 2 }}>Franzi mit auf der Baustelle</span>
            </div>
            <div className="wi-photo-strip-item">
              <Image
                src="/images/hausbau-fredersdorf-dachstuhl-rohbau.jpg"
                alt="Rohbau Eigenheim Fredersdorf – Dachstuhl und Gerüst stehen"
                fill
                style={{ objectFit: 'cover', borderRadius: 2 }}
              />
              <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.4)', padding: '0.2rem 0.6rem', borderRadius: 2 }}>Die Wände wachsen</span>
            </div>
            <div className="wi-photo-strip-item">
              <Image
                src="/images/hausbau-fredersdorf-rohbau-mauerwerk.jpg"
                alt="Rohbau Eigenheim Fredersdorf – Mauerwerk wächst in die Höhe"
                fill
                style={{ objectFit: 'cover', borderRadius: 2 }}
              />
              <span style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(0,0,0,0.4)', padding: '0.2rem 0.6rem', borderRadius: 2 }}>Der Dachstuhl steht</span>
            </div>
          </div>

          <div className="wi-section-divider">
          <div className="fade-in wi-grid-2col" style={{ gap: '4rem', alignItems: 'center', maxWidth: 1400, margin: '0 auto' }}>
            <div className="wi-schreibtisch-img" style={{ position: 'relative', height: 420 }}>
              <Image
                src="/images/franziska-ritsche-baufinanzierungsberaterin-schreibtisch.jpeg"
                alt="Franziska Ritsche als Baufinanzierungsberaterin am Schreibtisch"
                fill
                style={{ objectFit: 'cover', objectPosition: '65% 35%', borderRadius: 2, border: '1px solid var(--lila-light)', boxShadow: '8px 8px 0px var(--lila-light)' }}
              />
            </div>
            <div className="wi-schreibtisch-text">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
                Seit April 2022
                <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila-dark)' }}></span>
              </p>
              <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 600, color: 'var(--anthrazit)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                Genau das hat mir gezeigt,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--lila-dark)' }}>wie wichtig Begleitung ist.</em>
              </h3>
              <p className="wi-schreibtisch-body-desktop" style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
                Seit April 2022 bin ich bankenunabhängige Immobiliardarlehensvermittlerin – IHK-geprüft nach §34i. Ich arbeite in einem eingespielten Team mit über 30 Jahren gemeinsamer Berufserfahrung. Zusammen bringen wir das Wissen mit, das Ihre Finanzierung braucht.
              </p>
            </div>
            <div className="wi-schreibtisch-body-mobile" style={{ display: 'none' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: 1.8, fontWeight: 300 }}>
                Seit April 2022 bin ich bankenunabhängige Immobiliardarlehensvermittlerin – IHK-geprüft nach §34i. Ich arbeite in einem eingespielten Team mit über 30 Jahren gemeinsamer Berufserfahrung. Zusammen bringen wir das Wissen mit, das Ihre Finanzierung braucht.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* TRENNER: white → anthrazit */}
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* SEKTION 3: Fakten-Karten */}
      <section className="wi-section-pad wi-fakten" style={{ background: 'var(--anthrazit)', padding: '7rem 8%' }}>
        <div className="wi-grid-3col">
          {[
            ['Seit 2022', 'Bankenunabhängige Vermittlerin'],
            ['IHK-geprüft', '§34i Immobiliardarlehensvermittlerin'],
            ['30+ Jahre', 'Berufserfahrung im Team'],
          ].map(([num, label]) => (
            <div key={num} className="fade-in" style={{ background: 'var(--anthrazit)', padding: '3.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '3rem', fontWeight: 600, color: 'var(--lila)', lineHeight: 1, marginBottom: '1rem' }}>{num}</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, letterSpacing: '0.04em' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENNER: anthrazit → white */}
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>

      {/* SEKTION 4: Zitat */}
      <section className="wi-section-pad" style={{ background: 'white', padding: '8rem 8%', textAlign: 'center' }}>
        <div className="fade-in" style={{ maxWidth: 780, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontStyle: 'italic', color: 'var(--lila-dark)', lineHeight: 1.6, marginBottom: '2rem' }}>
            „Ich weiß, wie viel man bei einem Bau um die Ohren hat.<br />
            Genau deshalb bin ich für Sie da."
          </p>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', letterSpacing: '0.1em' }}>– Franziska Ritsche –</p>
        </div>
      </section>

      {/* TRENNER: white → anthrazit */}
      <div style={{ background: 'var(--anthrazit)', height: '3rem' }}></div>
      <div style={{ background: 'rgba(187,159,213,0.25)', height: '1px' }}></div>

      {/* SEKTION 5: CTA */}
      <section className="wi-section-pad" style={{ background: 'var(--anthrazit)', padding: '8rem 8%', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(187,159,213,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="fade-in" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--lila)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
            Jetzt starten
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--lila)' }}></span>
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 600, color: 'white', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Lernen Sie mich kennen.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 2.5rem', fontWeight: 300 }}>
            Das erste Gespräch ist kostenlos und unverbindlich. Ich freue mich auf Sie.
          </p>
          <div className="wi-cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/kontakt" className="btn-primary">Jetzt Termin vereinbaren</a>
            <a href="/" className="btn-ghost">Zurück zur Startseite</a>
          </div>
        </div>
      </section>

      {/* FLOATING CONTACT BUTTON */}
      <a href="/kontakt" className="float-btn" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, background: 'var(--lila)', color: 'white', padding: '0.85rem 1.4rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.25)', display: 'flex', alignItems: 'center', gap: '0.6rem', transition: 'transform 0.25s, box-shadow 0.25s', maxWidth: '280px', lineHeight: 1.3 }}>
        <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span style={{ display: 'flex', flexDirection: 'column' }}><span>Sie haben noch Fragen?</span><span>Kontaktieren Sie mich gerne.</span></span>
      </a>

      {/* FOOTER */}
      <footer className="wi-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
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
