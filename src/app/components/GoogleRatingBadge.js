// Offizielles vierfarbiges Google "G" + Sterne-Badge für echte Google-Bewertungen.
// Hinweis Markenrichtlinien: Logo nicht einfärben/verzerren, nur auf weißem/schwarzem
// Grund einsetzen, Sternfarbe bleibt Google-Gelb. Siehe about.google/brand-resource-center.

function GoogleLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

function Star({ size = 11 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
      <path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 21 12 17.3 5.8 21l1.7-6.9L2 9.3l7.1-.4L12 2z" />
    </svg>
  )
}

// variant "dark": für die dunklen Hero-Flächen (übernimmt die transparente
// Karten-Optik, die auf der Seite sonst für Cards/Testimonials verwendet wird).
// variant "light": für helle Flächen (z. B. Trust-Bar auf --hell).
export default function GoogleRatingBadge({ reviewCount = 10, rating = '5,0', variant = 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
      background: isDark ? 'rgba(255,255,255,0.05)' : 'white',
      border: isDark ? '1px solid rgba(187,159,213,0.25)' : '1px solid var(--lila-light)',
      borderRadius: 2, padding: '0.5rem 0.85rem'
    }}>
      <GoogleLogo />
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontWeight: 600, color: isDark ? 'white' : 'var(--anthrazit)', fontSize: '0.9rem', lineHeight: 1, fontFamily: 'var(--font-cormorant)' }}>{rating}</span>
          <span style={{ display: 'flex', gap: '1px' }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
          </span>
        </div>
        <div style={{ fontSize: '0.6rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'var(--text-light)', letterSpacing: '0.04em', textTransform: 'uppercase', marginTop: '2px', whiteSpace: 'nowrap' }}>
          {reviewCount} Google-Bewertungen
        </div>
      </div>
    </div>
  )
}
