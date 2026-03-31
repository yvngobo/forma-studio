import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../ThemeContext'

const links = [
  { href: '/work',    label: 'Work'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'var(--c-nav-blur)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid var(--c-nav-border)' : '1px solid transparent',
      }}>
        <nav style={{
          maxWidth: '1400px', margin: '0 auto', padding: '0 2rem',
          height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 1.375rem)', color: 'var(--c-ink)',
            textDecoration: 'none', letterSpacing: '-0.02em',
            transition: 'color 0.4s', flexShrink: 0,
          }}>
            FORMA
          </Link>

          {/* Desktop */}
          <div style={{ alignItems: 'center', gap: '2rem' }}
               className="hidden md:flex">
            {links.map(l => (
              <Link key={l.href} to={l.href} className="link-draw" style={{
                color: pathname === l.href ? 'var(--c-ink)' : 'var(--c-ink4)',
                textDecoration: 'none', fontSize: '0.9rem',
                fontWeight: 400, letterSpacing: '0.01em', transition: 'color 0.25s',
              }}>
                {l.label}
              </Link>
            ))}

            {/* Theme toggle */}
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
                  style={{ display: 'flex', alignItems: 'center' }}>
                  {isDark
                    ? <Sun  size={16} strokeWidth={1.5} />
                    : <Moon size={16} strokeWidth={1.5} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.825rem' }}>
              Let's Talk
            </Link>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div style={{ alignItems: 'center', gap: '1rem' }}
               className="flex md:hidden">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme"
              style={{ width: '34px', height: '34px' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center' }}>
                  {isDark ? <Sun size={15} strokeWidth={1.5}/> : <Moon size={15} strokeWidth={1.5}/>}
                </motion.span>
              </AnimatePresence>
            </button>

            <button onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '1px',
                  background: 'var(--c-ink)',
                  transition: 'transform 0.3s, opacity 0.2s',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(6px) rotate(45deg)'
                    : i === 2 ? 'translateY(-6px) rotate(-45deg)' : 'none'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 900,
              background: isDark ? 'rgba(12,10,7,0.45)' : 'rgba(252,250,247,0.45)',
              backdropFilter: 'blur(12px) saturate(150%)',
              WebkitBackdropFilter: 'blur(12px) saturate(150%)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-end', justifyContent: 'flex-start',
              padding: '88px 2rem 0',
              gap: '1.5rem',
            }}>
            {links.map((l, i) => (
              <motion.div key={l.href}
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i*0.05+0.05, duration: 0.3, ease: [0.16,1,0.3,1] }}>
                <Link to={l.href} style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
                  fontSize: '0.75rem', fontWeight: 500,
                  color: 'var(--c-ink)', textDecoration: 'none',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  opacity: 0.5,
                }}>{l.label}</Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }}>
              <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
