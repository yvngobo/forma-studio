import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { sites } from '../data/sites'

const marqueeItems = [
  'Web Design','·','Brand Identity','·','Motion Design','·',
  'Development','·','Digital Strategy','·','UI / UX','·',
  'Web Design','·','Brand Identity','·','Motion Design','·',
  'Development','·','Digital Strategy','·','UI / UX','·',
]

const services = [
  { num:'01', title:'Web Design',    desc:'Pixel-perfect interfaces built with intention. Every scroll, hover, and transition crafted to keep visitors engaged and converting.' },
  { num:'02', title:'Development',   desc:'Clean, performant code. React, Next.js, or custom — we build fast, accessible websites that score 100 on Lighthouse.' },
  { num:'03', title:'Strategy',      desc:"We don't just make things beautiful. We make them convert. UX research, information architecture, and CRO baked in." },
]

const stats = [
  { value:'120+', label:'Projects Delivered' },
  { value:'98%',  label:'Client Retention'   },
  { value:'5★',   label:'Average Rating'     },
  { value:'48h',  label:'First Concepts'     },
]

const process = [
  { step:'01', title:'Discover', desc:'We learn your brand, goals, and audience through a focused kickoff session.' },
  { step:'02', title:'Design',   desc:'Hi-fidelity mockups with your feedback loop at every stage.' },
  { step:'03', title:'Build',    desc:'Pixel-perfect development, fully responsive and performance-tuned.' },
  { step:'04', title:'Launch',   desc:'We deploy, test on every device, and stay with you post-launch.' },
]

const featuredProjects = [
  { id:1, title:'Aura Collective', category:'Web Design · Branding',    year:'2025', cardVar:'--c-card-a', accentL:'#3a3530', accentD:'#c5bfb9', tag:'Featured',   siteKey:'aura'     },
  { id:2, title:'Solace Studio',   category:'Web Design · Development', year:'2025', cardVar:'--c-card-b', accentL:'#2a3a2a', accentD:'#b9c5b9', tag:'E-commerce', siteKey:'solace'   },
  { id:3, title:'Meridian Labs',   category:'UI/UX · Motion',           year:'2024', cardVar:'--c-card-c', accentL:'#2a2a3a', accentD:'#b9b9c5', tag:'SaaS',       siteKey:'meridian' },
]

const pageVariants = {
  initial:{ opacity:0 },
  animate:{ opacity:1, transition:{ duration:0.6, ease:[0.16,1,0.3,1] } },
  exit:   { opacity:0, transition:{ duration:0.3 } },
}

export default function Home() {
  const [heroReady, setHeroReady] = useState(false)
  useEffect(() => { const t = setTimeout(()=>setHeroReady(true),80); return ()=>clearTimeout(t) },[])

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* Hero */}
      <section style={{
        minHeight:'100svh', display:'flex', flexDirection:'column',
        justifyContent:'flex-end', padding:'0 2rem 5rem',
        maxWidth:'1400px', margin:'0 auto', position:'relative',
      }}>
        <motion.div
          initial={{ opacity:0, y:12 }} animate={heroReady?{opacity:1,y:0}:{}}
          transition={{ duration:0.6, delay:0.2, ease:[0.16,1,0.3,1] }}
          style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', marginBottom:'3rem',
            color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', fontWeight:500 }}>
          <span style={{ display:'inline-block', width:6, height:6, borderRadius:'50%', background:'var(--c-ink)' }} />
          Web Design Studio — Est. 2025
        </motion.div>

        {['We build','websites that','mean something.'].map((line,i) => (
          <div key={i} style={{ overflow:'hidden' }}>
            <motion.h1 className="text-display"
              initial={{ y:'110%', opacity:0 }} animate={heroReady?{y:'0%',opacity:1}:{}}
              transition={{ duration:0.9, delay:0.3+i*0.1, ease:[0.16,1,0.3,1] }}
              style={{
                fontSize:'clamp(3.5rem,9vw,9.5rem)', display:'block', marginBottom:'0.08em',
                color: i===2 ? 'transparent' : 'var(--c-ink)',
                WebkitTextStroke: i===2 ? '1.5px var(--c-ink)' : undefined,
              }}>
              {line}
            </motion.h1>
          </div>
        ))}

        <motion.div
          initial={{ opacity:0, y:20 }} animate={heroReady?{opacity:1,y:0}:{}}
          transition={{ duration:0.8, delay:0.75, ease:[0.16,1,0.3,1] }}
          style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'2rem', marginTop:'3.5rem' }}>
          <p style={{ color:'var(--c-ink3)', fontSize:'clamp(0.9rem,1.5vw,1.1rem)', maxWidth:'380px', lineHeight:1.6 }}>
            Premium web design for ambitious brands.<br/>Clean. Fast. Conversion-focused.
          </p>
          <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
            <Link to="/work"    className="btn btn-primary">See Our Work</Link>
            <Link to="/contact" className="btn btn-ghost">Start a Project</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity:0 }} animate={heroReady?{opacity:1}:{}}
          transition={{ delay:1.4, duration:0.8 }}
          style={{ position:'absolute', bottom:'2rem', right:'2rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem', color:'var(--c-ink5)', fontSize:'0.7rem', letterSpacing:'0.12em', textTransform:'uppercase' }}>
          <motion.div animate={{ y:[0,8,0] }} transition={{ repeat:Infinity, duration:1.8, ease:'easeInOut' }}
            style={{ width:'1px', height:'48px', background:'linear-gradient(to bottom, transparent, var(--c-ink5))' }} />
          Scroll
        </motion.div>
      </section>

      {/* Marquee */}
      <div style={{ borderTop:'1px solid var(--c-line)', borderBottom:'1px solid var(--c-line)', padding:'1.25rem 0', overflow:'hidden' }}>
        <div className="marquee-track" style={{ display:'flex', gap:'2.5rem', color:'var(--c-ink5)', fontSize:'0.85rem', letterSpacing:'0.08em', textTransform:'uppercase', fontWeight:500 }}>
          {[...marqueeItems,...marqueeItems].map((item,i) => (
            <span key={i} style={{ flexShrink:0 }}>{item}</span>
          ))}
        </div>
      </div>

      {/* Featured Work */}
      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'8rem 2rem 6rem' }}>
        <FadeIn>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:'4rem', flexWrap:'wrap', gap:'1rem' }}>
            <h2 className="text-heading" style={{ fontSize:'clamp(2.2rem,4vw,3.5rem)', color:'var(--c-ink)' }}>Selected Work</h2>
            <Link to="/work" className="link-draw"
              style={{ color:'var(--c-ink4)', textDecoration:'none', fontSize:'0.875rem', transition:'color 0.25s' }}>
              View all work →
            </Link>
          </div>
        </FadeIn>
        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          {featuredProjects.map((p,i) => (
            <FadeIn key={p.id} delay={i*0.1}>
              <Link to="/work" style={{ textDecoration:'none', display:'block' }}>
                <ProjectCard project={p} />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ borderTop:'1px solid var(--c-line)', maxWidth:'1400px', margin:'0 auto', padding:'8rem 2rem' }}>
        <FadeIn>
          <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'1.25rem', fontWeight:500 }}>What We Do</p>
          <h2 className="text-heading" style={{ fontSize:'clamp(2rem,3.5vw,3rem)', color:'var(--c-ink)', maxWidth:'600px', marginBottom:'5rem' }}>
            Every service, optimised for results.
          </h2>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', borderTop:'1px solid var(--c-line)' }}>
          {services.map((s,i) => <FadeIn key={s.num} delay={i*0.12}><ServiceCard service={s}/></FadeIn>)}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:'var(--c-flip-bg)', padding:'6rem 2rem', transition:'background 0.4s' }}>
        <div style={{ maxWidth:'1400px', margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'3rem 2rem' }}>
          {stats.map((s,i) => (
            <FadeIn key={s.label} delay={i*0.1}>
              <div>
                <div className="text-display" style={{ fontSize:'clamp(3rem,6vw,5.5rem)', color:'var(--c-flip-text)', marginBottom:'0.5rem' }}>
                  {s.value}
                </div>
                <p style={{ color:'var(--c-flip-sub)', fontSize:'0.875rem', letterSpacing:'0.04em', textTransform:'uppercase', fontWeight:500 }}>
                  {s.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'8rem 2rem', borderBottom:'1px solid var(--c-line)' }}>
        <FadeIn>
          <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'1.25rem', fontWeight:500 }}>How We Work</p>
          <h2 className="text-heading" style={{ fontSize:'clamp(2rem,3.5vw,3rem)', color:'var(--c-ink)', marginBottom:'5rem' }}>
            A process built for clarity.
          </h2>
        </FadeIn>
        <div style={{ display:'flex', flexDirection:'column' }}>
          {process.map((p,i) => (
            <FadeIn key={p.step} delay={i*0.1}>
              <div style={{ display:'grid', gridTemplateColumns:'80px 1fr 1fr', gap:'2rem', padding:'2.5rem 0', borderBottom: i<process.length-1 ? '1px solid var(--c-line)' : 'none', alignItems:'start' }}>
                <span style={{ color:'var(--c-ink5)', fontSize:'0.8rem', letterSpacing:'0.05em', paddingTop:'3px' }}>{p.step}</span>
                <span className="text-heading" style={{ fontSize:'clamp(1.5rem,2.5vw,2.25rem)', color:'var(--c-ink)' }}>{p.title}</span>
                <p style={{ color:'var(--c-ink3)', fontSize:'0.95rem', lineHeight:1.7, maxWidth:'420px' }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'10rem 2rem', textAlign:'center' }}>
        <FadeIn>
          <p style={{ color:'var(--c-ink5)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:'2rem', fontWeight:500 }}>Ready to Start?</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-display" style={{ fontSize:'clamp(3rem,8vw,8rem)', color:'var(--c-ink)', marginBottom:'3rem', lineHeight:0.95 }}>
            Let's build<br/>
            <em style={{ WebkitTextStroke:'1.5px var(--c-ink)', color:'transparent' }}>something great.</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize:'1rem', padding:'1rem 2.5rem' }}>Start a Project</Link>
        </FadeIn>
      </section>

    </motion.div>
  )
}

function SitePreview({ siteKey }: { siteKey: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.25)
  const W = 1440
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = (w: number) => setScale(w / W)
    measure(el.offsetWidth)
    const obs = new ResizeObserver(entries => measure(entries[0].contentRect.width))
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={containerRef} style={{ width:'100%', height:'100%', overflow:'hidden', position:'relative' }}>
      <iframe
        srcDoc={sites[siteKey] ?? ''}
        title={siteKey}
        style={{ width:`${W}px`, height:'900px', border:'none', transform:`scale(${scale})`, transformOrigin:'top left', pointerEvents:'none', display:'block' }}
        sandbox="allow-same-origin"
        scrolling="no"
      />
    </div>
  )
}

function ProjectCard({ project }: { project: typeof featuredProjects[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="img-zoom"
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{
        position:'relative', borderRadius:'12px', overflow:'hidden',
        background:`var(${project.cardVar})`,
        border:'1px solid var(--c-card-border)',
        cursor:'none',
        transition:'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px var(--c-card-shadow-h)' : '0 0 0 var(--c-card-shadow)',
      }}>
      <div style={{ height:'clamp(220px,32vw,400px)', position:'relative', overflow:'hidden' }}>
        <div style={{ width:'100%', height:'100%', transition:'transform 0.7s cubic-bezier(0.16,1,0.3,1)', transform:hovered?'scale(1.03)':'scale(1)' }}>
          <SitePreview siteKey={project.siteKey}/>
        </div>
        <div style={{ position:'absolute', inset:0, background:'rgba(10,10,10,0.5)', opacity:hovered?1:0, transition:'opacity 0.4s', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ color:'#fff', fontSize:'0.85rem', letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(255,255,255,0.4)', padding:'0.6rem 1.4rem', borderRadius:'9999px', transform:hovered?'scale(1)':'scale(0.9)', transition:'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
            View Project
          </span>
        </div>
      </div>
      <div style={{ padding:'1.5rem 2rem', display:'flex', alignItems:'center', justifyContent:'space-between', borderTop:'1px solid var(--c-card-border)' }}>
        <div>
          <h3 style={{ color:'var(--c-ink)', fontSize:'1.1rem', fontWeight:500, marginBottom:'0.25rem' }}>{project.title}</h3>
          <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.04em' }}>{project.category}</p>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
          <span style={{ background:'rgba(128,128,128,0.08)', color:'var(--c-ink4)', fontSize:'0.75rem', padding:'0.3rem 0.75rem', borderRadius:'9999px', border:'1px solid var(--c-line)', letterSpacing:'0.04em' }}>{project.tag}</span>
          <span style={{ color:'var(--c-ink5)', fontSize:'0.8rem' }}>{project.year}</span>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ padding:'3rem 2.5rem 3rem 0', borderRight:'1px solid var(--c-line)' }}>
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'2rem' }}>
        <span style={{ color:'var(--c-ink5)', fontSize:'0.75rem', letterSpacing:'0.08em', fontWeight:500 }}>{service.num}</span>
        <span style={{ width:'28px', height:'28px', borderRadius:'50%', border:'1px solid', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)', transform:hovered?'rotate(45deg)':'rotate(0deg)', borderColor:hovered?'var(--c-ink)':'var(--c-line)', fontSize:'0.85rem', color:hovered?'var(--c-ink)':'var(--c-ink5)' }}>↗</span>
      </div>
      <h3 className="text-heading" style={{ fontSize:'clamp(1.5rem,2vw,2rem)', color:'var(--c-ink)', marginBottom:'1rem' }}>{service.title}</h3>
      <p style={{ color:'var(--c-ink3)', fontSize:'0.9rem', lineHeight:1.75, maxWidth:'320px' }}>{service.desc}</p>
    </div>
  )
}
