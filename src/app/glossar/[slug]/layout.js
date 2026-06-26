import { glossarTerms } from '../../../data/glossar'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const term = glossarTerms.find(t => t.slug === slug)
  if (!term) return { title: 'Begriff nicht gefunden | ZR Baufinanzierung' }
  return {
    title: `${term.term} – einfach erklärt | ZR Baufinanzierung`,
    description: term.shortDef,
    alternates: {
      canonical: `https://www.zr-baufi.de/glossar/${term.slug}`,
    },
  }
}

export default function GlossarTermLayout({ children }) {
  return children
}
