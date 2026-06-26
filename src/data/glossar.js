export const glossarTerms = [
  {
    slug: 'annuitaetendarlehen',
    term: 'Annuitätendarlehen',
    category: 'Darlehensarten',
    shortDef: 'Die häufigste Darlehensform: gleichbleibende monatliche Rate aus Zins und Tilgung.',
    definition: `Das Annuitätendarlehen ist die mit Abstand häufigste Form der Baufinanzierung in Deutschland. Die monatliche Rate – die Annuität – bleibt über die gesamte Zinsbindungsfrist konstant, setzt sich aber intern immer anders zusammen: Mit jeder Zahlung sinkt die Restschuld, weshalb der Zinsanteil abnimmt und der Tilgungsanteil steigt.

Beispiel: Bei einem Darlehen von 300.000 € mit 3,5 % Sollzins und 2 % Tilgung ergibt sich eine monatliche Rate von ca. 1.375 €. Nach 10 Jahren hat sich der Tilgungsanteil innerhalb dieser Rate deutlich erhöht – die Schuld baut sich also mit der Zeit immer schneller ab.

Nach Ablauf der Zinsbindungsfrist verbleibt in der Regel eine Restschuld, für die eine Anschlussfinanzierung benötigt wird. Wie hoch diese Restschuld ausfällt, hängt maßgeblich von der anfänglichen Tilgungsrate ab – je höher, desto besser.`,
    relatedSlugs: ['tilgung', 'zinsbindung', 'restschuld', 'volltilgerdarlehen'],
    relatedPages: [{ href: '/#rechner', label: 'Finanzierung berechnen' }, { href: '/kontakt', label: 'Persönlich beraten lassen' }],
  },
  {
    slug: 'tilgung',
    term: 'Tilgung',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Die schrittweise Rückzahlung des Darlehensbetrags – die wichtigste Stellschraube neben dem Zinssatz.',
    definition: `Als Tilgung bezeichnet man die schrittweise Rückzahlung des Darlehensbetrags. Beim Annuitätendarlehen ist sie Teil der monatlichen Rate – zusammen mit dem Zinsanteil.

Die anfängliche Tilgungsrate ist neben dem Zinssatz die wichtigste Stellschraube bei der Baufinanzierung. Je höher die Tilgung, desto schneller sind Sie schuldenfrei und desto geringer fällt die Restschuld am Ende der Zinsbindung aus. Üblich sind anfängliche Tilgungsraten zwischen 1 und 3 Prozent.

Meine Empfehlung: In Phasen niedriger Zinsen sollte die Tilgung möglichst hoch angesetzt werden. Wer nur mit 1 % tilgt, zahlt bei einem 300.000 €-Darlehen nach 20 Jahren noch mehr als 200.000 € Restschuld. Bei 3 % Tilgung wäre diese auf unter 100.000 € gesunken.

Zusätzlich zur regulären Tilgung können Sondertilgungen vereinbart werden – außerplanmäßige Rückzahlungen, die die Laufzeit weiter verkürzen.`,
    relatedSlugs: ['annuitaetendarlehen', 'sondertilgung', 'restschuld', 'volltilgerdarlehen'],
    relatedPages: [{ href: '/#rechner', label: 'Rate & Tilgung berechnen' }, { href: '/kontakt', label: 'Persönlich beraten lassen' }],
  },
  {
    slug: 'zinsbindung',
    term: 'Zinsbindung',
    category: 'Zinsen & Konditionen',
    shortDef: 'Der Zeitraum, für den der vereinbarte Zinssatz gilt – typisch sind 10, 15 oder 20 Jahre.',
    definition: `Die Zinsbindungsfrist – auch Sollzinsbindung genannt – bezeichnet den Zeitraum, für den der vereinbarte Zinssatz unveränderlich gilt. Egal was am Kapitalmarkt passiert: Ihre monatliche Rate bleibt stabil. Typische Laufzeiten sind 5, 10, 15 oder 20 Jahre.

Nach Ablauf der Zinsbindung muss die Restschuld zu dann aktuellen Marktkonditionen weiterfinanziert werden (Anschlussfinanzierung). Das ist das sogenannte Zinsänderungsrisiko.

Grundregel: Bei niedrigem Zinsniveau lohnt sich eine lange Zinsbindung, um die günstigen Konditionen langfristig zu sichern. Bei hohem Zinsniveau kann eine kürzere Bindung sinnvoll sein – mit der Hoffnung, dass die Zinsen bis zur Anschlussfinanzierung wieder fallen.

Wer das Zinsänderungsrisiko komplett eliminieren möchte, wählt ein Volltilgerdarlehen: Das Darlehen ist am Ende der Zinsbindung vollständig zurückgezahlt.`,
    relatedSlugs: ['anschlussfinanzierung', 'forward-darlehen', 'sollzins', 'volltilgerdarlehen'],
    relatedPages: [{ href: '/kontakt', label: 'Zinsbindung besprechen' }],
  },
  {
    slug: 'beleihungsauslauf',
    term: 'Beleihungsauslauf',
    category: 'Zinsen & Konditionen',
    shortDef: 'Das Verhältnis von Darlehensbetrag zu Immobilienwert – entscheidend für die Zinshöhe.',
    definition: `Der Beleihungsauslauf (englisch: LTV – Loan to Value) gibt an, wie hoch das Darlehen im Verhältnis zum Beleihungswert der Immobilie ist. Er wird in Prozent angegeben.

Beispiel: Beleihungswert 400.000 €, Darlehen 320.000 € → Beleihungsauslauf 80 %.

Dieser Wert ist für Banken eine der wichtigsten Kennzahlen: Je niedriger der Beleihungsauslauf, desto weniger Risiko trägt die Bank – und desto besser die Konditionen für Sie. Banken unterscheiden typischerweise in Stufen: unter 60 %, unter 80 % und über 80 % Beleihungsauslauf. Der Zinsunterschied zwischen 60 % und 90 % Beleihungsauslauf kann 0,3–0,5 Prozentpunkte betragen.

Wer mehr Eigenkapital einbringt, senkt den Beleihungsauslauf – und verbessert damit direkt die angebotenen Zinsen. Das ist einer der stärksten Hebel bei der Finanzierungsoptimierung.`,
    relatedSlugs: ['beleihungswert', 'eigenkapital', 'effektivzins', 'sollzins'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierung optimieren' }],
  },
  {
    slug: 'beleihungswert',
    term: 'Beleihungswert',
    category: 'Zinsen & Konditionen',
    shortDef: 'Der Wert, den eine Bank einer Immobilie als Sicherheit beimisst – in der Regel 10–20 % unter dem Kaufpreis.',
    definition: `Der Beleihungswert ist der Wert, den eine Bank einer Immobilie als Kreditsicherheit beimisst. Er ist nicht identisch mit dem Kaufpreis oder dem Verkehrswert – Banken setzen ihn in der Regel 10 bis 20 % niedriger an.

Warum dieser Abschlag? Banken kalkulieren vorsichtig: Der Beleihungswert soll auch in einem ungünstigen Marktumfeld noch erzielbar sein. Er ist die Basis für die Berechnung des Beleihungsauslaufs und damit für die Konditionen.

Praxisbeispiel: Ein Haus mit Kaufpreis 450.000 € bekommt von der Bank einen Beleihungswert von 380.000 € zugewiesen. Das Darlehen von 360.000 € entspricht damit einem Beleihungsauslauf von 94 % – was höhere Zinsen bedeutet, als wenn der Kaufpreis als Basis genommen würde.

In Hochpreislagen wie Berlin kann die Differenz zwischen Kaufpreis und Beleihungswert erheblich sein.`,
    relatedSlugs: ['beleihungsauslauf', 'verkehrswert', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierung einschätzen lassen' }],
  },
  {
    slug: 'eigenkapital',
    term: 'Eigenkapital',
    category: 'Sicherheiten & Recht',
    shortDef: 'Eigene Mittel, die Sie in die Finanzierung einbringen – Bargeld, Wertpapiere, Bausparverträge.',
    definition: `Eigenkapital bei der Baufinanzierung umfasst alle Mittel, die Sie selbst einbringen – ohne Kreditaufnahme. Dazu zählen: Bargeld und Bankguthaben, Wertpapiere und Fondssparpläne, Bausparverträge (Guthaben), Eigenleistungen beim Bau (sogenannte „Muskelhypothek") und Schenkungen von Angehörigen.

Faustregel: Mindestens 20 % des Kaufpreises plus die Kaufnebenkosten sollten aus Eigenkapital kommen. Die Nebenkosten (Grunderwerbsteuer, Notar, ggf. Makler) betragen in Berlin und Brandenburg zusammen 10–15 % des Kaufpreises.

Mehr Eigenkapital bedeutet einen niedrigeren Beleihungsauslauf – und damit bessere Zinsen. Der Effekt ist erheblich: Wer den Beleihungsauslauf von 90 % auf 70 % senkt, kann den Zinssatz um 0,3–0,5 Prozentpunkte verbessern.

Für Selbstständige mit guter Bonität ist unter bestimmten Voraussetzungen auch eine Finanzierung mit wenig oder ganz ohne Eigenkapital möglich.`,
    relatedSlugs: ['beleihungsauslauf', 'kaufnebenkosten', 'grunderwerbsteuer'],
    relatedPages: [
      { href: '/selbststaendige', label: 'Baufinanzierung für Selbstständige' },
      { href: '/kontakt', label: 'Situation prüfen lassen' },
    ],
  },
  {
    slug: 'grundschuld',
    term: 'Grundschuld',
    category: 'Sicherheiten & Recht',
    shortDef: 'Die Absicherung der Bank im Grundbuch – Voraussetzung für jede Baufinanzierung.',
    definition: `Die Grundschuld ist das wichtigste Sicherungsinstrument bei der Baufinanzierung. Die Bank lässt sie ins Grundbuch eintragen und erhält damit das Recht, die Immobilie zu verwerten (z.B. zu versteigern), falls das Darlehen nicht mehr bedient werden kann.

Die Eintragung erfolgt über den Notar und kostet Gebühren – zusammen mit anderen Grundbuchkosten etwa 0,5–1 % der Darlehenssumme. Diese Kosten trägt der Käufer.

Wichtig: Die Grundschuld ist rechtlich nicht direkt an das Darlehen geknüpft. Sie bleibt im Grundbuch eingetragen, bis sie aktiv gelöscht wird – auch nach vollständiger Rückzahlung. Nach Tilgung des Darlehens kann die Grundschuld gelöscht oder als „Eigentümergrundschuld" im Grundbuch belassen werden (nützlich für spätere Finanzierungen).`,
    relatedSlugs: ['grundbuch', 'notarkosten', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierungsablauf besprechen' }],
  },
  {
    slug: 'grundbuch',
    term: 'Grundbuch',
    category: 'Sicherheiten & Recht',
    shortDef: 'Das amtliche Register für Immobilieneigentum – wer was besitzt und welche Rechte daran bestehen.',
    definition: `Das Grundbuch ist ein amtliches Register, das beim zuständigen Amtsgericht geführt wird. Es dokumentiert lückenlos, wer Eigentümer einer Immobilie ist, welche Belastungen bestehen (z.B. Grundschulden, Wegerechte, Wohnrechte) und alle Beschränkungen.

Das Grundbuch ist in Abteilungen aufgeteilt: Abteilung I zeigt den Eigentümer, Abteilung II listet Lasten und Beschränkungen (außer Grundpfandrechten), Abteilung III enthält Hypotheken und Grundschulden.

Vor dem Kauf einer Immobilie sollte immer ein aktueller Grundbuchauszug eingeholt und geprüft werden. Ihr Notar übernimmt das – er prüft auf Belastungen, die den Kauf beeinflussen könnten.

Die Eintragung des neuen Eigentümers nach dem Kauf dauert meist mehrere Wochen bis Monate. Bis dahin ist der Käufer wirtschaftlicher, aber noch nicht grundbuchrechtlicher Eigentümer.`,
    relatedSlugs: ['grundschuld', 'notarkosten', 'kaufnebenkosten'],
    relatedPages: [{ href: '/kontakt', label: 'Kaufprozess besprechen' }],
  },
  {
    slug: 'grunderwerbsteuer',
    term: 'Grunderwerbsteuer',
    category: 'Kosten',
    shortDef: 'Steuer beim Immobilienkauf: 6 % in Berlin, 6,5 % in Brandenburg – gehört zu den Kaufnebenkosten.',
    definition: `Die Grunderwerbsteuer fällt beim Kauf einer Immobilie an und wird auf den Kaufpreis berechnet. Sie ist je nach Bundesland unterschiedlich hoch und gehört zu den größten Posten bei den Kaufnebenkosten.

Aktuelle Sätze in der Region: Berlin 6 %, Brandenburg 6,5 %.

Bei einem Kaufpreis von 400.000 € fallen also 24.000 € (Berlin) bzw. 26.000 € (Brandenburg) Grunderwerbsteuer an – ein erheblicher Betrag, der idealerweise aus Eigenkapital bezahlt werden sollte, da die meisten Banken ihn nicht mitfinanzieren.

Die Steuer muss in der Regel innerhalb eines Monats nach Beurkundung des Kaufvertrags bezahlt werden. Das Finanzamt stellt dann eine Unbedenklichkeitsbescheinigung aus – ohne diese erfolgt keine Eintragung ins Grundbuch.

Tipp: Grunderwerbsteuer entfällt auf bewegliches Inventar (Einbauküche, Gartenmöbel), das im Kaufvertrag separat ausgewiesen wird.`,
    relatedSlugs: ['kaufnebenkosten', 'notarkosten', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Nebenkosten besprechen' }],
  },
  {
    slug: 'kaufnebenkosten',
    term: 'Kaufnebenkosten',
    category: 'Kosten',
    shortDef: 'Alle Kosten beim Immobilienkauf über den Kaufpreis hinaus – in Berlin und Brandenburg 10–15 %.',
    definition: `Als Kaufnebenkosten bezeichnet man alle Kosten, die beim Immobilienkauf zusätzlich zum Kaufpreis anfallen. Sie sollten aus Eigenkapital bezahlt werden, da Banken in der Regel nur den Kaufpreis finanzieren.

In Berlin und Brandenburg umfassen sie typischerweise:
- Grunderwerbsteuer: 6 % (Berlin) bzw. 6,5 % (Brandenburg)
- Notar und Grundbuch: ca. 1,5–2 % des Kaufpreises
- Maklerprovision: wenn ein Makler beteiligt ist, maximal 7,14 % inkl. MwSt. – seit 2020 wird sie hälftig zwischen Käufer und Verkäufer geteilt

In der Summe kommen bei einem Berliner Kauf ohne Makler ca. 7,5–8 % zusammen, mit Makler bis zu 14 %. Das sind bei 400.000 € Kaufpreis schnell 30.000–56.000 € an Nebenkosten.

Diese Summe sollte bei der Finanzierungsplanung von Anfang an berücksichtigt werden.`,
    relatedSlugs: ['grunderwerbsteuer', 'notarkosten', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Nebenkosten besprechen' }],
  },
  {
    slug: 'notarkosten',
    term: 'Notarkosten',
    category: 'Kosten',
    shortDef: 'Pflichtkosten bei jedem Immobilienkauf: ca. 1,5–2 % des Kaufpreises für Notar und Grundbuch.',
    definition: `In Deutschland muss jeder Grundstückskauf notariell beurkundet werden – ohne Notar kein rechtswirksamer Kauf. Die Notarkosten richten sich nach dem Gerichts- und Notarkostengesetz (GNotKG) und sind bundesweit einheitlich geregelt.

Zusammen mit den Grundbuchgebühren betragen sie in der Regel ca. 1,5–2 % des Kaufpreises. Bei einem Kaufpreis von 350.000 € sind das ca. 5.250–7.000 €.

Was der Notar macht: Er prüft das Grundbuch auf Belastungen, beurkundet den Kaufvertrag, veranlasst die Auflassungsvormerkung (Schutz des Käufers bis zur Eintragung), kümmert sich um die Eigentumsumschreibung und trägt die Grundschuld für die Bank ein.

Der Notar ist neutral – er vertritt keine der Parteien. Die Kosten trägt üblicherweise der Käufer. Notarkosten sind Teil der Kaufnebenkosten und sollten aus Eigenkapital gezahlt werden.`,
    relatedSlugs: ['kaufnebenkosten', 'grunderwerbsteuer', 'grundschuld', 'grundbuch'],
    relatedPages: [{ href: '/kontakt', label: 'Kaufprozess besprechen' }],
  },
  {
    slug: 'anschlussfinanzierung',
    term: 'Anschlussfinanzierung',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Neue Konditionen nach Ende der Zinsbindung – Prolongation, Umschuldung oder Forward-Darlehen.',
    definition: `Nach Ablauf der Zinsbindungsfrist besteht in der Regel noch eine Restschuld. Für diese brauchen Sie eine Anschlussfinanzierung – neue Konditionen für die weitere Rückzahlung.

Sie haben dabei drei Optionen: Prolongation (Verlängerung beim gleichen Anbieter), Umschuldung (Wechsel zu einer anderen Bank) oder Forward-Darlehen (Konditionssicherung bis zu 5 Jahre im Voraus).

Meine Empfehlung: Beginnen Sie spätestens 12 Monate vor dem Ende der Zinsbindung damit, Angebote einzuholen – auch wenn Ihre aktuelle Bank automatisch ein Angebot schickt. Banken nutzen die Bequemlichkeit ihrer Kunden und bieten bei der Prolongation oft schlechtere Konditionen als Neuverträge.

Als unabhängige Vermittlerin vergleiche ich für Sie den Markt – auch wenn Sie die Erstfinanzierung nicht bei mir gemacht haben.`,
    relatedSlugs: ['zinsbindung', 'restschuld', 'prolongation', 'umschuldung', 'forward-darlehen'],
    relatedPages: [{ href: '/kontakt', label: 'Anschlussfinanzierung vergleichen' }],
  },
  {
    slug: 'forward-darlehen',
    term: 'Forward-Darlehen',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Anschlussfinanzierung im Voraus abschließen – Zinssicherung bis zu 5 Jahre vor Zinsbindungsende.',
    definition: `Ein Forward-Darlehen ermöglicht es, die Anschlussfinanzierung bis zu 5 Jahre vor dem Ende der aktuellen Zinsbindung zu einem heute festgelegten Zinssatz abzuschließen. Sie sichern sich damit gegen steigende Zinsen ab.

Der Preis für diese Sicherheit: ein sogenannter Forward-Aufschlag auf den aktuellen Zinssatz. Je länger die Vorlaufzeit, desto höher der Aufschlag – üblich sind ca. 0,01–0,03 Prozentpunkte pro Monat Vorlaufzeit.

Wann sinnvoll? Wenn Sie erwarten, dass die Zinsen bis zum Ende Ihrer Zinsbindung steigen werden. In einem Niedrigzinsumfeld ist das Forward-Darlehen ein bewährtes Instrument zur Plaungssicherheit.

Wichtig: Das Forward-Darlehen ist verbindlich – Sie sind an den vereinbarten Zinssatz gebunden, auch wenn die Zinsen wider Erwarten sinken. Abwägen lohnt sich.`,
    relatedSlugs: ['anschlussfinanzierung', 'zinsbindung', 'prolongation', 'umschuldung'],
    relatedPages: [{ href: '/kontakt', label: 'Forward-Darlehen prüfen lassen' }],
  },
  {
    slug: 'prolongation',
    term: 'Prolongation',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Verlängerung des Baudarlehens beim gleichen Anbieter nach Ende der Zinsbindung.',
    definition: `Als Prolongation bezeichnet man die Verlängerung eines bestehenden Baudarlehens beim gleichen Kreditinstitut nach Ablauf der Zinsbindungsfrist. Die Bank unterbreitet ca. 3 Monate vor Ablauf automatisch ein Angebot.

Der scheinbar bequeme Weg hat einen Haken: Banken wissen, dass Prolongationskunden oft nicht vergleichen – und bieten entsprechend schlechtere Konditionen als für Neuverträge. Studien zeigen regelmäßig Zinsaufschläge von 0,2–0,5 % gegenüber dem Marktbest.

Meine Empfehlung: Nehmen Sie das Prolongationsangebot als Verhandlungsbasis – und holen Sie gleichzeitig Vergleichsangebote ein. Mit einem besseren Angebot in der Hand können Sie entweder zur günstigeren Bank wechseln (Umschuldung) oder Ihre Hausbank zum Nachbessern bewegen.

Ich helfe Ihnen dabei – auch wenn die ursprüngliche Finanzierung nicht über mich lief.`,
    relatedSlugs: ['anschlussfinanzierung', 'umschuldung', 'forward-darlehen', 'zinsbindung'],
    relatedPages: [{ href: '/kontakt', label: 'Angebote vergleichen lassen' }],
  },
  {
    slug: 'sondertilgung',
    term: 'Sondertilgung',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Außerplanmäßige Rückzahlung über die reguläre Rate hinaus – verkürzt Laufzeit und spart Zinsen.',
    definition: `Eine Sondertilgung ist eine außerplanmäßige Rückzahlung eines Teils der Restschuld – zusätzlich zur regulären monatlichen Rate. Viele Darlehensverträge enthalten ein jährliches Sondertilgungsrecht von 5–10 % der ursprünglichen Darlehenssumme, ohne dass dafür eine Vorfälligkeitsentschädigung fällig wird.

Der Effekt ist erheblich: Eine einmalige Sondertilgung von 20.000 € bei einem laufenden Darlehen von 250.000 € verkürzt die Gesamtlaufzeit um mehrere Jahre und spart tausende Euro an Zinsen.

Sondertilgungen bieten sich an bei Jahresbonus, Erbschaft, Schenkungen oder anderen unerwarteten Einnahmen. Bei Selbstständigen mit schwankendem Einkommen ist ein großzügiges Sondertilgungsrecht besonders wertvoll – es gibt Flexibilität, ohne die monatliche Rate zu erhöhen.

Beim Vertragsabschluss sollte auf ein ausreichend hohes Sondertilgungsrecht geachtet werden.`,
    relatedSlugs: ['tilgung', 'restschuld', 'annuitaetendarlehen'],
    relatedPages: [
      { href: '/selbststaendige', label: 'Baufinanzierung für Selbstständige' },
      { href: '/kontakt', label: 'Vertrag optimieren lassen' },
    ],
  },
  {
    slug: 'sollzins',
    term: 'Sollzins',
    category: 'Zinsen & Konditionen',
    shortDef: 'Der reine Zinssatz des Darlehens – ohne weitere Kosten. Nicht zu verwechseln mit dem Effektivzins.',
    definition: `Der Sollzins (früher: Nominalzins) ist der reine Zinssatz, zu dem die Bank das Darlehen gewährt. Er gibt an, welcher Prozentsatz der Restschuld jährlich als Zinsen berechnet wird – ohne Berücksichtigung weiterer Kosten.

Der Sollzins allein ist für den Vergleich von Finanzierungsangeboten wenig aussagekräftig, weil er weitere Kostenpositionen nicht abbildet. Für den echten Vergleich ist immer der Effektivzins heranzuziehen.

In der Werbung wird oft mit dem niedrigeren Sollzins geworben. Das ist zulässig, solange der Effektivzins ebenfalls angegeben wird. Tipp: Schauen Sie beim Vergleich immer zuerst auf den Effektivzins – er ist die ehrlichere Kennzahl.

Der Sollzins wird für die Dauer der Zinsbindung festgelegt. Er kann gebunden (fest) oder variabel vereinbart werden. Bei der Baufinanzierung ist der feste Sollzins die mit Abstand häufigste Form.`,
    relatedSlugs: ['effektivzins', 'zinsbindung', 'beleihungsauslauf'],
    relatedPages: [{ href: '/kontakt', label: 'Zinsen vergleichen lassen' }],
  },
  {
    slug: 'effektivzins',
    term: 'Effektivzins',
    category: 'Zinsen & Konditionen',
    shortDef: 'Die umfassendere Kostenkennzahl – berücksichtigt Sollzins und weitere Kosten. Immer für Vergleiche nutzen.',
    definition: `Der Effektivzins (offiziell: effektiver Jahreszins) ist die gesetzlich vorgeschriebene Gesamtkostenkennzahl für Kredite. Er berücksichtigt neben dem reinen Sollzins auch weitere Faktoren wie Tilgungsverrechnung und Zahlungsrhythmus.

Gesetzliche Grundlage: § 6 der Preisangabenverordnung (PAngV) schreibt vor, dass bei jedem Kreditangebot der Effektivzins angegeben werden muss – damit Verbraucher fair vergleichen können.

Der Effektivzins ist immer höher als der Sollzins. Je größer der Unterschied zwischen beiden, desto mehr Nebenkosten stecken im Angebot.

Für den Vergleich mehrerer Baufinanzierungsangebote gilt: Immer den Effektivzins vergleichen, nicht den Sollzins. Nur so haben Sie eine faire Grundlage.

Einschränkung: Beim Vergleich müssen gleiche Voraussetzungen gelten – gleiche Zinsbindung, gleiche Tilgung, gleiches Eigenkapital. Sonst ist der Vergleich verfälscht.`,
    relatedSlugs: ['sollzins', 'zinsbindung', 'beleihungsauslauf', 'disagio'],
    relatedPages: [{ href: '/kontakt', label: 'Angebote vergleichen lassen' }],
  },
  {
    slug: 'restschuld',
    term: 'Restschuld',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Der noch ausstehende Darlehensbetrag nach einem bestimmten Zeitraum – Ausgangspunkt für die Anschlussfinanzierung.',
    definition: `Die Restschuld ist der Teil des Darlehens, der nach einem bestimmten Zeitraum noch nicht zurückgezahlt wurde. Am Ende der Zinsbindungsfrist ist sie der Ausgangsbetrag für die Anschlussfinanzierung.

Die Höhe der Restschuld hängt entscheidend von der anfänglichen Tilgungsrate ab. Beispiele bei einem Startdarlehen von 300.000 € nach 15 Jahren Zinsbindung:
- 1 % Tilgung: ca. 230.000 € Restschuld
- 2 % Tilgung: ca. 160.000 € Restschuld
- 3 % Tilgung: ca. 95.000 € Restschuld

Je niedriger die Restschuld am Ende der Zinsbindung, desto weniger Zinsänderungsrisiko tragen Sie und desto einfacher wird die Anschlussfinanzierung.

Wer die Restschuld kennen möchte, ohne zu warten: Im Darlehensvertrag ist ein Tilgungsplan enthalten, der die Restschuld zu jedem Zeitpunkt ausweist.`,
    relatedSlugs: ['tilgung', 'anschlussfinanzierung', 'zinsbindung', 'volltilgerdarlehen'],
    relatedPages: [{ href: '/#rechner', label: 'Rate & Tilgung berechnen' }, { href: '/kontakt', label: 'Persönlich beraten lassen' }],
  },
  {
    slug: 'volltilgerdarlehen',
    term: 'Volltilgerdarlehen',
    category: 'Darlehensarten',
    shortDef: 'Das Darlehen wird vollständig innerhalb der Zinsbindung zurückgezahlt – keine Restschuld, keine Anschlussfinanzierung.',
    definition: `Bei einem Volltilgerdarlehen wird die monatliche Rate so berechnet, dass das Darlehen am Ende der Zinsbindungsfrist vollständig zurückgezahlt ist. Es gibt keine Restschuld und keine Anschlussfinanzierung.

Der entscheidende Vorteil: maximale Planungssicherheit. Sie wissen von Anfang an, wann Sie schuldenfrei sind, und tragen kein Zinsänderungsrisiko. Viele Banken gewähren für Volltilgerdarlehen auch leicht bessere Konditionen.

Der Nachteil: Die monatliche Rate liegt deutlich höher als bei einem Standard-Annuitätendarlehen mit niedrigerer Tilgungsrate. Ein 25-jähriges Volltilgerdarlehen über 300.000 € hat eine spürbar höhere Monatsrate als dasselbe Darlehen mit 10 Jahren Zinsbindung und 2 % Tilgung.

Volltilgerdarlehen eignen sich besonders für: Finanzierungen mit überschaubarer Restlaufzeit, ältere Käufer die schuldenfrei in Rente gehen möchten, und Phasen niedriger Zinsen.`,
    relatedSlugs: ['annuitaetendarlehen', 'tilgung', 'restschuld', 'zinsbindung'],
    relatedPages: [{ href: '/#rechner', label: 'Rate & Tilgung berechnen' }, { href: '/kontakt', label: 'Persönlich beraten lassen' }],
  },
  {
    slug: 'kfw-darlehen',
    term: 'KfW-Darlehen',
    category: 'Förderung',
    shortDef: 'Staatliche Förderkredite für Kauf, Neubau und Sanierung – auch für Selbstständige verfügbar.',
    definition: `Die KfW (Kreditanstalt für Wiederaufbau) ist eine staatliche Förderbank, die zinsgünstige Darlehen für Wohneigentum, Neubau und Sanierung vergibt. KfW-Darlehen werden nicht direkt bei der KfW beantragt, sondern über Ihre Hausbank oder Ihren Finanzierungsvermittler.

Die wichtigsten Programme für den Wohnungskauf:
- **KfW 124** (Wohneigentumsprogramm): Bis 100.000 € für Kauf oder Bau von Wohneigentum. Ohne Einkommensgrenze, kombinierbar mit anderen Programmen.
- **KfW 297/298** (Klimafreundlicher Neubau): Bis 150.000 € für Neubauten mit hohem Energiestandard. Je besser der Standard, desto günstiger der Zinssatz.

KfW-Programme stehen auch Selbstständigen offen und können mit der regulären Baufinanzierung kombiniert werden. Wichtig: Der Antrag muss vor Beginn des Vorhabens gestellt werden.`,
    relatedSlugs: ['bafa-foerderung', 'ibb', 'sanierungskredit'],
    relatedPages: [
      { href: '/forderdarlehen-und-zuschusse', label: 'Alle Förderprogramme im Überblick' },
      { href: '/selbststaendige', label: 'KfW für Selbstständige' },
      { href: '/kontakt', label: 'Förderung prüfen lassen' },
    ],
  },
  {
    slug: 'bonitaetspruefung',
    term: 'Bonitätsprüfung',
    category: 'Bonität & Unterlagen',
    shortDef: 'Die Kreditwürdigkeitsprüfung der Bank – Grundlage für Zusage, Absage und Konditionen.',
    definition: `Vor jeder Darlehenszusage prüft die Bank die Kreditwürdigkeit des Antragstellers. Dabei werden ausgewertet: Einkommen (Höhe, Stabilität, Art der Beschäftigung), bestehende Verbindlichkeiten und monatliche Ausgaben, SCHUFA-Einträge und – bei Selbstständigen – Steuerbescheide, BWA und EÜR.

Das Ergebnis entscheidet über Zusage oder Absage und beeinflusst direkt die angebotenen Konditionen: Gute Bonität bedeutet niedrigerer Zinssatz.

Für Selbstständige ist die Bonitätsprüfung herausfordernder als für Angestellte, weil das Einkommen schwankt und steuerliche Optimierungen den ausgewiesenen Gewinn mindern. Ich kenne die Anforderungen der verschiedenen Bankpartner und bereite Ihre Unterlagen so auf, dass Ihre wahre Ertragskraft sichtbar wird.

Tipp: Prüfen Sie Ihren SCHUFA-Score bevor Sie die Finanzierung beantragen – negative Einträge können korrigiert werden.`,
    relatedSlugs: ['schufa', 'bwa', 'euer'],
    relatedPages: [
      { href: '/selbststaendige', label: 'Baufinanzierung für Selbstständige' },
      { href: '/kontakt', label: 'Unterlagen prüfen lassen' },
    ],
  },
  {
    slug: 'schufa',
    term: 'SCHUFA',
    category: 'Bonität & Unterlagen',
    shortDef: 'Deutschlands wichtigste Auskunftei – speichert Daten zur Kreditwürdigkeit und wird von jeder Bank abgefragt.',
    definition: `Die SCHUFA (Schutzgemeinschaft für allgemeine Kreditsicherung) ist Deutschlands bedeutendste Auskunftei für Kreditwürdigkeit. Sie speichert Daten zu Konten, Krediten, Kreditkarten, Mobilfunkverträgen und – besonders wichtig – Zahlungsausfällen oder Mahnbescheiden.

Jede Bank fragt beim Antrag auf Baufinanzierung den SCHUFA-Score und die gespeicherten Einträge ab. Negative Einträge (z.B. nicht bezahlte Rechnungen, titulierte Forderungen) können eine Finanzierung erheblich erschweren oder unmöglich machen.

Wichtige Tipps:
- Fordern Sie einmal jährlich eine kostenlose Datenkopie nach Art. 15 DSGVO an (nicht die kostenpflichtige BonitätsAuskunft)
- Prüfen Sie alle Einträge auf Richtigkeit – fehlerhafte Einträge können widersprochen werden
- Unnötige Kreditanfragen kurz vor einer Baufinanzierung vermeiden – sie können den Score kurzfristig senken

Tipp: Nutzen Sie für Konditionsanfragen immer „Konditionsanfragen" statt „Kreditanfragen" – Konditionsanfragen sind SCHUFA-neutral.`,
    relatedSlugs: ['bonitaetspruefung', 'bwa', 'euer'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierungschancen einschätzen' }],
  },
  {
    slug: 'bereitstellungszinsen',
    term: 'Bereitstellungszinsen',
    category: 'Kosten',
    shortDef: 'Zinsen für noch nicht abgerufene Darlehensteile – relevant bei Neubauten und Stufenfinanzierungen.',
    definition: `Bereitstellungszinsen fallen an, wenn ein vereinbartes Darlehen nicht vollständig auf einmal abgerufen wird. Das ist typischerweise der Fall beim Neubau: Die Bank stellt die gesamte Darlehenssumme bereit, aber Sie rufen das Geld in mehreren Tranchen ab – entsprechend dem Baufortschritt.

Für den noch nicht abgerufenen Betrag berechnet die Bank Bereitstellungszinsen – üblicherweise 0,25 % pro Monat (entspricht 3 % p.a. auf den ausstehenden Betrag).

Nach Vertragsabschluss gilt meist eine bereitstellungszinsfreie Zeit von 3–12 Monaten – in dieser Phase fallen keine Bereitstellungszinsen an. Diese Zeit sollte zum Bauvorhaben passen.

Beim Vertragsabschluss sollte die bereitstellungszinsfreie Zeit explizit vereinbart und auf das Bauvorhaben abgestimmt werden. Ich achte darauf, dass dieser Punkt zu Ihrem Zeitplan passt – ein zu kurzer bereitstellungszinsfreier Zeitraum kann bei Bauverzögerungen teuer werden.`,
    relatedSlugs: ['annuitaetendarlehen', 'kfw-darlehen', 'sanierungskredit'],
    relatedPages: [{ href: '/kontakt', label: 'Neubaufinanzierung besprechen' }],
  },
  {
    slug: 'wohngebaeudeversicherung',
    term: 'Wohngebäudeversicherung',
    category: 'Sicherheiten & Recht',
    shortDef: 'Pflichtversicherung für die finanzierende Bank – schützt das Gebäude gegen Feuer, Wasser, Sturm und Hagel.',
    definition: `Die Wohngebäudeversicherung schützt das Gebäude selbst (nicht den Hausrat) gegen die klassischen Schadensursachen Feuer, Leitungswasser, Sturm und Hagel. Für finanzierende Banken ist der Nachweis einer Wohngebäudeversicherung Pflichtvoraussetzung – ohne Versicherungsnachweis erfolgt in der Regel keine Darlehensauszahlung.

Bei einem Neubau oder Kauf: Versicherungsschutz muss ab dem Übergabetag bestehen. Schließen Sie die Versicherung rechtzeitig vor dem Notartermin ab.

Die Kosten richten sich nach Wohnfläche, Baujahr, Bauart und Region. Für ein Einfamilienhaus in Brandenburg liegen sie typischerweise bei 300–600 € jährlich.

Tipp: Bei älteren Gebäuden lohnt sich ein Vergleich – viele Hausbesitzer zahlen für ihre Gebäudeversicherung deutlich mehr als nötig. Auch Elementarschäden (Überschwemmung, Erdbeben) sind wichtig und oft nicht im Standard-Tarif enthalten.`,
    relatedSlugs: ['grundschuld', 'kaufnebenkosten'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierungsablauf besprechen' }],
  },
  {
    slug: 'umschuldung',
    term: 'Umschuldung',
    category: 'Tilgung & Rückzahlung',
    shortDef: 'Nach Zinsbindungsende zur besseren Bank wechseln – fast immer lohnenswert.',
    definition: `Umschuldung bedeutet: Nach dem Ende der Zinsbindungsfrist wechseln Sie mit Ihrer Restschuld zu einem anderen Kreditinstitut, das bessere Konditionen anbietet.

Die Umschuldung ist die Alternative zur Prolongation (Verlängerung beim gleichen Anbieter). Sie lohnt sich fast immer, wenn ein anderer Anbieter deutlich günstigere Konditionen bietet – was häufig der Fall ist, da Banken Neukunden bessere Zinsen geben als Bestandskunden.

Kosten der Umschuldung: Eine Grundschuldabtretung oder Neueintragung fällt an – ca. 0,2–0,3 % des Darlehensbetrags. Diese Kosten amortisieren sich bei 0,3 % Zinsvorteil in der Regel innerhalb eines Jahres.

Wichtig: Beginnen Sie mit der Suche nach Alternativen spätestens 12 Monate vor Zinsbindungsende. So haben Sie Zeit für einen echten Vergleich und können im Zweifelsfall auch die Hausbank zum Nachbessern bewegen.

Als unabhängige Vermittlerin vergleiche ich für Sie den Markt – ohne Bindung an eine bestimmte Bank.`,
    relatedSlugs: ['anschlussfinanzierung', 'prolongation', 'restschuld', 'zinsbindung'],
    relatedPages: [{ href: '/kontakt', label: 'Anschlussfinanzierung vergleichen' }],
  },
  {
    slug: 'bwa',
    term: 'BWA (Betriebswirtschaftliche Auswertung)',
    category: 'Bonität & Unterlagen',
    shortDef: 'Regelmäßige Einnahmen-Ausgaben-Auswertung für Unternehmen – zentrales Unterlagendokument für selbstständige Kreditnehmer.',
    definition: `Die Betriebswirtschaftliche Auswertung (BWA) ist eine regelmäßige – meist monatliche – Auswertung der Buchhaltung. Sie zeigt Einnahmen, Ausgaben und das betriebliche Ergebnis eines Unternehmens.

Für Selbstständige ist die BWA bei der Baufinanzierung ein zentrales Dokument: Banken verlangen in der Regel die aktuelle BWA inklusive Summen- und Saldenliste (SuSa) aus dem letzten Quartal – zusätzlich zu den Steuerbescheiden der letzten 2–3 Jahre.

Die Herausforderung: Steuerliche Optimierungen (hohe Betriebsausgaben, Abschreibungen) drücken den ausgewiesenen Gewinn – was für das Finanzamt gut ist, kann bei der Baufinanzierung nachteilig sein.

Ich kenne diese Zusammenhänge und weiß, wie Ihre BWA aufzubereiten ist, damit Ihre tatsächliche Ertragskraft für die Bank sichtbar wird. Welche Bankpartner dabei die realistischste Betrachtung zugrunde legen, weiß ich aus Erfahrung.`,
    relatedSlugs: ['euer', 'bonitaetspruefung', 'schufa'],
    relatedPages: [
      { href: '/selbststaendige', label: 'Baufinanzierung für Selbstständige' },
      { href: '/kontakt', label: 'Unterlagen prüfen lassen' },
    ],
  },
  {
    slug: 'euer',
    term: 'EÜR (Einnahmen-Überschuss-Rechnung)',
    category: 'Bonität & Unterlagen',
    shortDef: 'Vereinfachte Gewinnermittlung für Selbstständige und Freiberufler – wichtiges Unterlagendokument bei der Baufinanzierung.',
    definition: `Die Einnahmen-Überschuss-Rechnung (EÜR) ist eine vereinfachte Form der Gewinnermittlung für Selbstständige und Freiberufler, die nicht zur doppelten Buchführung verpflichtet sind. Anders als eine Bilanz zeigt sie schlicht: Einnahmen minus Ausgaben gleich Gewinn.

Banken verwenden die EÜR der letzten 2–3 Jahre, um das Einkommen Selbstständiger zu bewerten. Problem: Was für das Finanzamt gut ist (niedrig versteuerte Gewinne durch legale Ausgaben), kann für die Bank ungünstig wirken – weil der ausgewiesene Gewinn niedrig erscheint.

Ich kenne diese Zusammenhänge und weiß, welche Bankpartner die EÜR realistischer interpretieren und welche ergänzenden Unterlagen (aktuelle BWA, Steuerbescheid, Kontoauszüge) helfen, ein vollständigeres Bild der finanziellen Situation zu zeigen.

Die EÜR wird als Anlage EÜR der jährlichen Steuererklärung beigefügt.`,
    relatedSlugs: ['bwa', 'bonitaetspruefung', 'schufa'],
    relatedPages: [
      { href: '/selbststaendige', label: 'Baufinanzierung für Selbstständige' },
      { href: '/kontakt', label: 'Finanzierungschancen einschätzen' },
    ],
  },
  {
    slug: 'hausgeld',
    term: 'Hausgeld',
    category: 'Kosten',
    shortDef: 'Monatlicher Beitrag in einer Eigentümergemeinschaft – wird von Banken als laufende Ausgabe angerechnet.',
    definition: `Das Hausgeld ist der monatliche Beitrag, den Eigentümer einer Wohnung in einer Wohnungseigentümergemeinschaft (WEG) zahlen müssen. Es deckt die laufenden Kosten des Gemeinschaftseigentums: Hausmeister, Treppenhausreinigung, Versicherungen, Verwaltungskosten und die Instandhaltungsrücklage für künftige Reparaturen.

Das Hausgeld ist bei der Finanzierung einer Eigentumswohnung relevant: Banken berücksichtigen es als monatliche Ausgabe in der Haushaltsrechnung. Ein hohes Hausgeld kann die maximale Darlehenssumme reduzieren.

Typisches Hausgeld: 2–5 € pro Quadratmeter monatlich. Bei einer 80-m²-Wohnung wären das 160–400 € monatlich.

Nicht zu verwechseln: Das Wohngeld ist eine staatliche Wohnkostenunterstützung für einkommensschwache Haushalte – hat nichts mit dem Hausgeld zu tun.

Beim Kauf einer Wohnung: Fragen Sie nach dem aktuellen Hausgeld und der Höhe der Instandhaltungsrücklage – eine niedrige Rücklage kann auf zukünftige Sonderumlagen hindeuten.`,
    relatedSlugs: ['kaufnebenkosten', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierung einer ETW besprechen' }],
  },
  {
    slug: 'verkehrswert',
    term: 'Verkehrswert',
    category: 'Sicherheiten & Recht',
    shortDef: 'Der reale Marktwert einer Immobilie – nicht identisch mit dem Beleihungswert der Bank.',
    definition: `Der Verkehrswert (auch Marktwert) ist der Preis, der für eine Immobilie im gewöhnlichen Geschäftsverkehr zu einem bestimmten Zeitpunkt erzielt werden kann. Er wird von vereidigten Gutachtern anhand von Lage, Größe, Zustand, Ausstattung und vergleichbaren Verkäufen in der Umgebung ermittelt.

Der Verkehrswert ist nicht identisch mit dem Beleihungswert: Banken setzen den Beleihungswert als nachhaltigen Wert der Immobilie an – typischerweise 10–20 % unter dem Verkehrswert – um Risiken abzufedern.

In der Praxis: Der Kaufpreis einer Immobilie kann über oder unter dem Verkehrswert liegen. Zahlen Sie mehr als den Verkehrswert (was in begehrten Berliner Lagen häufig vorkommt), kann das zu einem niedrigeren Beleihungswert führen – was bedeutet, dass die Bank weniger finanziert als der Kaufpreis beträgt. Die Differenz müssen Sie aus Eigenkapital decken.`,
    relatedSlugs: ['beleihungswert', 'beleihungsauslauf', 'eigenkapital'],
    relatedPages: [{ href: '/kontakt', label: 'Finanzierung einschätzen lassen' }],
  },
  {
    slug: 'sanierungskredit',
    term: 'Sanierungskredit',
    category: 'Darlehensarten',
    shortDef: 'Darlehen für Renovierung und energetische Sanierung – oft kombinierbar mit KfW-Programmen und BAFA-Zuschüssen.',
    definition: `Ein Sanierungskredit (auch Modernisierungskredit oder Renovierungskredit) ist ein Darlehen, das gezielt für die Renovierung, Modernisierung oder energetische Sanierung einer Immobilie genutzt wird.

Relevant sind vor allem staatliche Förderprogramme: Die KfW-Bundesförderung für effiziente Gebäude (BEG) bietet zinsgünstige Kredite für energetische Maßnahmen. Der BAFA vergibt Zuschüsse (die nicht zurückgezahlt werden müssen) für Einzelmaßnahmen wie Wärmepumpe, Dämmung oder neue Fenster.

Wer eine Bestandsimmobilie kauft und sanieren möchte, kann Kauffinanzierung und Sanierungskredit kombinieren – mit optimaler Nutzung der Fördertöpfe.

Wichtig: Förderanträge müssen in der Regel vor Beginn der Maßnahmen gestellt werden. Ein nachträglicher Antrag ist nicht möglich.

Ich begleite Sie durch den gesamten Prozess – von der Prüfung welche Programme für Sie passen, bis zum fertigen Antrag.`,
    relatedSlugs: ['kfw-darlehen', 'bafa-foerderung', 'ibb'],
    relatedPages: [
      { href: '/forderdarlehen-und-zuschusse', label: 'Alle Förderprogramme' },
      { href: '/kontakt', label: 'Förderung prüfen lassen' },
    ],
  },
  {
    slug: 'bafa-foerderung',
    term: 'BAFA-Förderung',
    category: 'Förderung',
    shortDef: 'Staatliche Zuschüsse für energetische Sanierungen – müssen vor Maßnahmenbeginn beantragt werden.',
    definition: `Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) vergibt staatliche Zuschüsse für energetische Sanierungsmaßnahmen. Anders als KfW-Programme (Darlehen) sind BAFA-Zuschüsse nicht zurückzuzahlen – sie mindern direkt die Investitionskosten.

Geförderte Maßnahmen umfassen unter anderem: Wärmepumpen, Solarkollektoren und Biomasseanlagen, Gebäudedämmung (Dach, Wände, Kellerdecke) und Fensteraustausch.

Der Fördersatz variiert je nach Maßnahme und Energiestandard – bei manchen Maßnahmen bis zu 20–35 % der förderfähigen Kosten.

Zentrale Regel: Der BAFA-Antrag muss zwingend vor Beginn der Baumaßnahmen gestellt werden. Wer erst nach dem Start des Projekts einen Antrag stellt, geht leer aus.

Die Kombination von BAFA-Zuschüssen und KfW-Darlehen ist in vielen Fällen möglich und sinnvoll. Ich behalte die aktuellen Förderbedingungen im Blick – diese ändern sich regelmäßig.`,
    relatedSlugs: ['kfw-darlehen', 'ibb', 'sanierungskredit'],
    relatedPages: [
      { href: '/forderdarlehen-und-zuschusse', label: 'Alle Förderprogramme' },
      { href: '/kontakt', label: 'Förderung prüfen lassen' },
    ],
  },
  {
    slug: 'ibb',
    term: 'IBB (Investitionsbank Berlin)',
    category: 'Förderung',
    shortDef: 'Berlins Förderbank – zinsgünstige Darlehen für Berliner Wohneigentümer, kombinierbar mit KfW.',
    definition: `Die Investitionsbank Berlin (IBB) ist die Förderbank des Landes Berlin. Sie vergibt zinsgünstige Darlehen und teilweise Zuschüsse speziell für Berliner Wohneigentümer – als Ergänzung zu den bundesweiten KfW-Programmen.

IBB-Darlehen können in Verbindung mit KfW-Mitteln kombiniert werden und erhöhen so die Gesamtfördersumme. Wer in Berlin eine Immobilie kauft, baut oder saniert, sollte immer prüfen, welche IBB-Programme in Frage kommen.

Für Brandenburg gibt es vergleichbare Programme der ILB (Investitionsbank des Landes Brandenburg).

Wichtig: IBB-Anträge laufen ebenfalls über Finanzierungsvermittler oder Hausbanken – nicht direkt über die IBB. Und: Auch hier gilt, dass Förderanträge vor Maßnahmenbeginn gestellt werden müssen.

Ich kenne die aktuellen IBB- und ILB-Programme und prüfe für Sie, welche Kombination aus KfW, IBB und BAFA für Ihr Vorhaben sinnvoll ist.`,
    relatedSlugs: ['kfw-darlehen', 'bafa-foerderung', 'sanierungskredit'],
    relatedPages: [
      { href: '/forderdarlehen-und-zuschusse', label: 'Alle Förderprogramme' },
      { href: '/kontakt', label: 'IBB-Förderung prüfen lassen' },
    ],
  },
  {
    slug: 'disagio',
    term: 'Disagio',
    category: 'Kosten',
    shortDef: 'Abzug vom Darlehensbetrag bei der Auszahlung – reduziert den Sollzins, erhöht die Gesamtkosten.',
    definition: `Das Disagio ist ein prozentualer Abzug vom Darlehensnennbetrag bei der Auszahlung. Wer ein Darlehen von 200.000 € mit einem Disagio von 2 % vereinbart, erhält nur 196.000 € ausgezahlt – muss aber die vollen 200.000 € zurückzahlen.

Im Gegenzug ist der vereinbarte Sollzins bei Disagio-Konstruktionen in der Regel niedriger als ohne Disagio. Das klingt verlockend, verzerrt aber den Vergleich: Der günstig erscheinende Sollzins täuscht über die tatsächlichen Kosten hinweg.

Deshalb gilt: Immer den Effektivzins als Vergleichsgröße nutzen – er macht Disagio-Angebote und Nicht-Disagio-Angebote vergleichbar.

Das Disagio war früher stärker verbreitet, heute ist es bei der Baufinanzierung eher selten. Wenn Sie es in einem Angebot sehen: Lassen Sie den Effektivzins berechnen und vergleichen Sie ihn mit Alternativangeboten ohne Disagio.`,
    relatedSlugs: ['effektivzins', 'sollzins', 'annuitaetendarlehen'],
    relatedPages: [{ href: '/kontakt', label: 'Angebote vergleichen lassen' }],
  },
]

export const glossarCategories = [
  'Darlehensarten',
  'Zinsen & Konditionen',
  'Tilgung & Rückzahlung',
  'Kosten',
  'Sicherheiten & Recht',
  'Bonität & Unterlagen',
  'Förderung',
]
