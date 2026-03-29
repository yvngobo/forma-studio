import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid var(--c-line)', padding: '3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <Link to="/" style={{
          fontFamily: "'Playfair Display', serif", fontWeight: 900,
          fontSize: '1.25rem', color: 'var(--c-ink)',
          textDecoration: 'none', letterSpacing: '-0.02em',
        }}>FORMA</Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[{ href:'/work',label:'Work' },{ href:'/about',label:'About' },{ href:'/contact',label:'Contact' }].map(l => (
            <Link key={l.href} to={l.href} className="link-draw"
              style={{ color: 'var(--c-ink4)', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.25s' }}>
              {l.label}
            </Link>
          ))}
        </div>

        <p style={{ color: 'var(--c-ink5)', fontSize: '0.8rem' }}>
          © {year} FORMA Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
