'use client'

import { useState } from 'react'
import Image from 'next/image'

const li = { fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300, marginBottom: '0.4rem' }
const p = { fontSize: '1rem', color: 'var(--text)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1rem' }
const h2 = { fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--anthrazit)', marginBottom: '2rem' }
const h3 = { fontSize: '1rem', fontWeight: 500, color: 'var(--lila-dark)', marginBottom: '0.75rem', letterSpacing: '0.02em', marginTop: '2rem' }
const a = { color: 'var(--lila-dark)', textDecoration: 'none' }
const divider = { height: 1, background: 'var(--lila-light)' }

export default function Datenschutz() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        html, body { overflow-x: hidden; }
        .nav-logo { transition: transform 0.2s ease; display: block; }
        .nav-logo:hover { transform: scale(1.07); }
        .nav-link { transition: color 0.3s, border-color 0.3s, transform 0.2s ease; display: inline-block; }
        .nav-link:hover { transform: scale(1.08); }
        .ds-nav-links { display: flex; gap: 2rem; list-style: none; }
        .ds-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; z-index: 101; }
        .ds-hamburger span { display: block; width: 24px; height: 2px; background: white; border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
        .ds-mobile-menu { display: none; position: fixed; top: 88px; left: 0; right: 0; background: var(--anthrazit); z-index: 99; padding: 1.5rem 5%; flex-direction: column; gap: 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .ds-mobile-menu.open { display: flex; }
        .ds-mobile-menu a { color: rgba(255,255,255,0.8); text-decoration: none; font-size: 1rem; }
        @media (max-width: 768px) {
          .ds-nav-links { display: none !important; }
          .ds-hamburger { display: flex !important; }
          .ds-hero { padding: 6rem 5% 3rem !important; }
          .ds-main { padding: 3rem 5% 5rem !important; }
          .ds-footer { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1.25rem !important; padding: 2.5rem 6% !important; }
          .ds-footer ul { flex-wrap: wrap !important; justify-content: center !important; gap: 1rem 1.5rem !important; padding: 0 !important; }
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
          <Image src="/images/zr-baufinanzierung-logo.png" alt="ZR Baufinanzierung" width={160} height={80} style={{ height: 64, width: 'auto', display: 'block' }} />
        </a>
        <ul className="ds-nav-links">
          {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="nav-link" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.88rem', letterSpacing: '0.04em', borderBottom: '1px solid transparent', paddingBottom: '2px' }}>{label}</a>
            </li>
          ))}
          <li><a href="/kontakt" style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}>Beratung anfragen</a></li>
        </ul>
        <button className="ds-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </nav>
      <div className={`ds-mobile-menu${menuOpen ? ' open' : ''}`}>
        {[['/#leistungen','Leistungen'],['/#fuer-wen','Für wen?'],['/#stimmen','Kundenstimmen'],['/#rechner','Rechner'],['/selbststaendige','Selbstständige'],['/forderdarlehen-und-zuschusse','Förderung'],['/warum-ich','Warum ich?']].map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="/kontakt" onClick={() => setMenuOpen(false)} style={{ background: 'var(--lila)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: 2, fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', display: 'inline-block', width: 'fit-content' }}>Beratung anfragen</a>
      </div>

      {/* HERO */}
      <section className="ds-hero" style={{ background: 'var(--anthrazit)', padding: '120px 8% 4rem' }}>
        <div style={{ maxWidth: 800, width: '100%' }}>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 600, color: 'white', lineHeight: 1.1 }}>
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* INHALT */}
      <main className="ds-main" style={{ background: 'var(--hell)', padding: '5rem 8% 8rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

          {/* 1 */}
          <section>
            <h2 style={h2}>1. Datenschutz auf einen Blick</h2>

            <h3 style={{ ...h3, marginTop: 0 }}>Allgemeine Hinweise</h3>
            <p style={p}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>

            <h3 style={h3}>Datenerfassung auf dieser Website</h3>
            <p style={p}><strong style={{ fontWeight: 500 }}>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
            <p style={p}><strong style={{ fontWeight: 500 }}>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
            <p style={p}><strong style={{ fontWeight: 500 }}>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.</p>
            <p style={p}><strong style={{ fontWeight: 500 }}>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

            <h3 style={h3}>Analyse-Tools und Tools von Drittanbietern</h3>
            <p style={{ ...p, marginBottom: 0 }}>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
          </section>

          <div style={divider} />

          {/* 2 */}
          <section>
            <h2 style={h2}>2. Hosting</h2>

            <h3 style={{ ...h3, marginTop: 0 }}>Externes Hosting</h3>
            <p style={p}>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
            <p style={p}>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.</p>
            <p style={p}>Wir setzen folgenden Hoster ein:<br />
            Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={a}>vercel.com</a> · <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={a}>Datenschutz Vercel</a></p>

            <h3 style={h3}>Auftragsverarbeitung</h3>
            <p style={{ ...p, marginBottom: 0 }}>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
          </section>

          <div style={divider} />

          {/* 3 */}
          <section>
            <h2 style={h2}>3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 style={{ ...h3, marginTop: 0 }}>Datenschutz</h3>
            <p style={p}>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>

            <h3 style={h3}>Hinweis zur verantwortlichen Stelle</h3>
            <p style={p}>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p style={{ ...p, lineHeight: 2 }}>
              Franziska Ritsche<br />
              Lange Straße 37A<br />
              15370 Fredersdorf-Vogelsdorf<br />
              Telefon: <a href="tel:+4917684405479" style={a}>0176 84 40 54 79</a><br />
              E-Mail: <a href="mailto:kontakt@zr-baufi.de" style={a}>kontakt@zr-baufi.de</a>
            </p>
            <p style={p}>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>

            <h3 style={h3}>Speicherdauer</h3>
            <p style={p}>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>

            <h3 style={h3}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <p style={p}>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.</p>

            <h3 style={h3}>Empfänger von personenbezogenen Daten</h3>
            <p style={p}>Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.</p>

            <h3 style={h3}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p style={p}>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

            <h3 style={h3}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p style={{ ...p, fontWeight: 400, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.01em' }}>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).<br /><br />
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 style={h3}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p style={p}>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>

            <h3 style={h3}>Recht auf Datenübertragbarkeit</h3>
            <p style={p}>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

            <h3 style={h3}>Auskunft, Berichtigung und Löschung</h3>
            <p style={p}>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>

            <h3 style={h3}>Recht auf Einschränkung der Verarbeitung</h3>
            <p style={p}>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li style={li}>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li style={li}>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li style={li}>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li style={li}>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
            </ul>
            <p style={p}>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>

            <h3 style={h3}>SSL- bzw. TLS-Verschlüsselung</h3>
            <p style={p}>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>

            <h3 style={h3}>Widerspruch gegen Werbe-E-Mails</h3>
            <p style={{ ...p, marginBottom: 0 }}>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
          </section>

          <div style={divider} />

          {/* 4 */}
          <section>
            <h2 style={h2}>4. Datenerfassung auf dieser Website</h2>

            <h3 style={{ ...h3, marginTop: 0 }}>Kontaktformular</h3>
            <p style={p}>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            <p style={p}>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
            <p style={{ ...p, marginBottom: 0 }}>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
          </section>

          <div style={divider} />

          {/* 5 */}
          <section>
            <h2 style={h2}>5. Plugins und Tools</h2>

            <h3 style={{ ...h3, marginTop: 0 }}>YouTube mit erweitertem Datenschutz</h3>
            <p style={p}>Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
            <p style={p}>Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.</p>
            <p style={p}>Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage von YouTube nicht zur Personalisierung des Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt werden, sind ebenfalls nicht personalisiert. Im erweiterten Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden jedoch sogenannte Local Storage Elemente im Browser des Users gespeichert, die ähnlich wie Cookies personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt werden können. Details zum erweiterten Datenschutzmodus finden Sie hier:{' '}
              <a href="https://support.google.com/youtube/answer/171780" target="_blank" rel="noopener noreferrer" style={a}>support.google.com/youtube/answer/171780</a></p>
            <p style={p}>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter:{' '}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" style={a}>policies.google.com/privacy</a></p>
            <p style={p}>Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Weitere Informationen erhalten Sie vom Anbieter unter:{' '}
              <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noopener noreferrer" style={a}>dataprivacyframework.gov</a></p>

            <h3 style={h3}>Eingebetteter Finanzierungsrechner (Europace)</h3>
            <p style={p}>Auf dieser Website ist ein Finanzierungsrechner des Dienstleisters Europace AG, Klosterstraße 71, 10179 Berlin, eingebunden. Der Rechner wird als eingebettetes Element (iFrame) auf unserer Website dargestellt.</p>
            <p style={p}>Bei der Nutzung des Rechners können Ihre Eingaben sowie technische Informationen (z. B. IP-Adresse, Browser-Typ, Betriebssystem) an die Server von Europace übertragen werden. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines funktionalen Finanzierungsrechners) sowie auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Sie den Rechner zur Vorbereitung einer Finanzierungsanfrage nutzen.</p>
            <p style={{ ...p, marginBottom: 0 }}>Weitere Informationen zur Datenverarbeitung durch Europace entnehmen Sie der Datenschutzerklärung von Europace AG unter:{' '}
              <a href="https://www.europace.de/datenschutz" target="_blank" rel="noopener noreferrer" style={a}>www.europace.de/datenschutz</a>.
            </p>

            <h3 style={h3}>Verlinkter Kundenbereich (fincrm)</h3>
            <p style={p}>Diese Website enthält einen Link zu einem passwortgeschützten Kundenbereich, der technisch von der fincrm GmbH, Aachener Str. 376, 50933 Köln, bereitgestellt wird. Bei Aufruf oder Nutzung dieser Plattform gelten die Datenschutzbestimmungen von fincrm. Weitere Informationen finden Sie unter:{' '}
              <a href="https://fincrm.de/datenschutz" target="_blank" rel="noopener noreferrer" style={a}>fincrm.de/datenschutz</a>.
            </p>

            <h3 style={h3}>Google Fonts (lokales Hosting)</h3>
            <p style={p}>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
            <p style={{ ...p, marginBottom: 0 }}>Weitere Informationen zu Google Fonts finden Sie unter{' '}
              <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" style={a}>developers.google.com/fonts/faq</a>{' '}
              und in der Datenschutzerklärung von Google:{' '}
              <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" style={a}>policies.google.com/privacy</a>.
              Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" style={a}>e-recht24.de</a>
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
      <footer className="ds-footer" style={{ background: 'var(--anthrazit)', padding: '3rem 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
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
