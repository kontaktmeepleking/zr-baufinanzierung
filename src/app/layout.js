import localFont from 'next/font/local'
import './globals.css'

const dmSans = localFont({
  src: [
    { path: '../../public/fonts/dm-sans-300.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/dm-sans-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/dm-sans-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = localFont({
  src: [
    { path: '../../public/fonts/cormorant-garamond-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/cormorant-garamond-400-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/cormorant-garamond-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata = {
  title: 'ZR Baufinanzierung – Eine Sorge weniger | Franziska Ritsche',
  description: 'Baufinanzierung mit Durchblick. Spezialisiert auf Berlin & Brandenburg. Franziska Ritsche begleitet Sie von der Strategie bis zur letzten Rate – persönlich, ehrlich, auf Augenhöhe. Kostenlos & unverbindlich.',
  keywords: 'Baufinanzierung Berlin, Baufinanzierung Brandenburg, Immobilienfinanzierung Berlin, Baufinanzierung Selbstständige, Baufinanzierung für Selbstständige Berlin, Immobilienkredit Selbstständige, Baukredit Unternehmer Berlin, Anschlussfinanzierung Berlin, Umschuldung Hauskredit Berlin, Forward Darlehen Berlin, Baufinanzierung trotz Selbstständigkeit, Finanzierung Freiberufler, Baufinanzierungsberater Berlin, Franziska Ritsche, ZR Baufinanzierung, Baufinanzierung Fredersdorf, Baufinanzierungsberatung Berlin Brandenburg',
  openGraph: {
    title: 'ZR Baufinanzierung – Eine Sorge weniger | Berlin & Brandenburg',
    description: 'Persönliche Baufinanzierungsberatung mit Schwerpunkt Berlin & Brandenburg. Franziska Ritsche – kostenlos & unverbindlich.',
    url: 'https://www.zr-baufi.de',
    siteName: 'ZR Baufinanzierung',
    locale: 'de_DE',
    type: 'website',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'ZR Baufinanzierung – Franziska Ritsche',
  telephone: '+4917684405479',
  areaServed: ['Berlin', 'Brandenburg'],
  url: 'https://www.zr-baufi.de',
  description: 'Persönliche Baufinanzierungsberatung mit Schwerpunkt Berlin & Brandenburg.',
  priceRange: 'Kostenlos & unverbindlich',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
        {children}
      </body>
    </html>
  )
}
