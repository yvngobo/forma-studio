import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import { sites } from '../data/sites'

interface Project {
  id: number; title: string; category: string; year: string;
  tag: string; imageUrl?: string; cardVar: string; accent: string;
  siteKey?: string; description: string;
}

/* ── Scaled thumbnail preview (cards) ─────────────────────────── */
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

/* ── Full-screen project viewer modal ─────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // inject override so body scrolls freely inside modal
  const rawHtml = project.siteKey ? (sites[project.siteKey] ?? '') : ''
  const html = rawHtml.replace(
    '</head>',
    '<style>html,body{height:auto!important;min-height:100%!important;overflow:auto!important;overflow-x:hidden!important}</style></head>'
  )

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // lock body scroll while modal is open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{ position:'fixed', inset:0, zIndex:3000, background:'rgba(0,0,0,0.9)', backdropFilter:'blur(16px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1.5rem' }}>

      <motion.div
        initial={{ opacity:0, y:32, scale:0.97 }}
        animate={{ opacity:1, y:0, scale:1 }}
        exit={{ opacity:0, y:16, scale:0.98 }}
        transition={{ duration:0.45, ease:[0.16,1,0.3,1] as any }}
        onClick={e => e.stopPropagation()}
        style={{ width:'100%', maxWidth:'1300px', height:'92vh', display:'flex', flexDirection:'column', borderRadius:'14px', overflow:'hidden', boxShadow:'0 40px 120px rgba(0,0,0,0.8)', border:'1px solid rgba(255,255,255,0.08)' }}>

        {/* ── Browser chrome ── */}
        <div style={{ background:'#1c1c1e', padding:'0 1.25rem', height:'44px', display:'flex', alignItems:'center', gap:'1rem', borderBottom:'1px solid rgba(255,255,255,0.07)', flexShrink:0 }}>
          {/* Traffic lights */}
          <div style={{ display:'flex', gap:'7px', flexShrink:0 }}>
            <button onClick={onClose} title="Close"
              style={{ width:13, height:13, borderRadius:'50%', background:'#ff5f57', border:'none', cursor:'none', padding:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'8px', color:'rgba(0,0,0,0)', transition:'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0)')}>
              ✕
            </button>
            <div style={{ width:13, height:13, borderRadius:'50%', background:'#febc2e' }}/>
            <div style={{ width:13, height:13, borderRadius:'50%', background:'#28c840' }}/>
          </div>
          {/* URL bar */}
          <a href={`/${project.siteKey}.html`} target="_blank" rel="noopener noreferrer"
            style={{ flex:1, background:'rgba(255,255,255,0.07)', borderRadius:'7px', height:'26px', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', textDecoration:'none', cursor:'pointer' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.74rem', fontFamily:'Inter, -apple-system, sans-serif', letterSpacing:'0.01em' }}>
              {window.location.host}/{project.siteKey}.html
            </span>
          </a>
          {/* Close button */}
          <button onClick={onClose}
            style={{ background:'none', border:'none', color:'rgba(255,255,255,0.35)', cursor:'none', fontSize:'1.1rem', lineHeight:1, padding:'0.25rem 0.4rem', borderRadius:'4px', transition:'color 0.2s, background 0.2s', flexShrink:0 }}
            onMouseEnter={e => { e.currentTarget.style.color='rgba(255,255,255,0.8)'; e.currentTarget.style.background='rgba(255,255,255,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.35)'; e.currentTarget.style.background='transparent' }}>
            ✕
          </button>
        </div>

        {/* ── Scrollable site ── */}
        <div style={{ flex:1, overflow:'hidden', position:'relative', background:'#fff' }}>
          {project.imageUrl
            ? <img src={project.imageUrl} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            : html
              ? <iframe
                  srcDoc={html}
                  title={project.title}
                  style={{ width:'100%', height:'100%', border:'none', display:'block' }}
                  sandbox="allow-same-origin allow-scripts"
                />
              : <div style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--c-bg2)', color:'var(--c-ink5)', fontFamily:'Inter, sans-serif', fontSize:'0.9rem' }}>
                  No preview available
                </div>
          }
        </div>

        {/* ── Info bar ── */}
        <div style={{ background:'#141414', borderTop:'1px solid rgba(255,255,255,0.07)', padding:'0.875rem 1.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0, gap:'1rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1.25rem', minWidth:0 }}>
            <h3 style={{ color:'#fff', fontSize:'0.95rem', fontWeight:500, fontFamily:'Inter, sans-serif', whiteSpace:'nowrap' }}>{project.title}</h3>
            <span style={{ color:'rgba(255,255,255,0.35)', fontSize:'0.1rem' }}>|</span>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.8rem', fontFamily:'Inter, sans-serif', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{project.description}</p>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', flexShrink:0 }}>
            <span style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.72rem', fontFamily:'Inter, sans-serif', border:'1px solid rgba(255,255,255,0.15)', padding:'0.2rem 0.65rem', borderRadius:'9999px', whiteSpace:'nowrap' }}>{project.category}</span>
            <span style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.72rem', fontFamily:'Inter, sans-serif', border:'1px solid rgba(255,255,255,0.15)', padding:'0.2rem 0.65rem', borderRadius:'9999px', whiteSpace:'nowrap' }}>{project.tag}</span>
            <span style={{ color:'rgba(255,255,255,0.25)', fontSize:'0.78rem', fontFamily:'Inter, sans-serif' }}>{project.year}</span>
            <a href={`/${project.siteKey}.html`} target="_blank" rel="noopener noreferrer"
              style={{ color:'#fff', fontSize:'0.78rem', fontFamily:'Inter, sans-serif', fontWeight:500, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)', padding:'0.25rem 0.85rem', borderRadius:'9999px', textDecoration:'none', whiteSpace:'nowrap', transition:'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}>
              Visit Site →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Seed projects ─────────────────────────────────────────────── */
const seedProjects: Project[] = [
  { id:1, title:'Aura Collective',  category:'Web Design',  year:'2025', tag:'Branding',   cardVar:'--c-card-a', accent:'#6b5c4e', siteKey:'aura',     description:'Luxury fashion brand identity and editorial website' },
  { id:2, title:'Solace Studio',    category:'Development', year:'2025', tag:'E-commerce', cardVar:'--c-card-b', accent:'#3a5a3a', siteKey:'solace',   description:'Minimal DTC e-commerce platform for skincare brand' },
  { id:3, title:'Meridian Labs',    category:'UI / UX',     year:'2024', tag:'SaaS',       cardVar:'--c-card-c', accent:'#3a3a6b', siteKey:'meridian', description:'Analytics dashboard for B2B SaaS company' },
  { id:4, title:'Vela Finance',     category:'Web Design',  year:'2024', tag:'Fintech',    cardVar:'--c-card-d', accent:'#1a4060', siteKey:'vela',     description:'Personal finance app landing and onboarding flow' },
  { id:5, title:'Cedar & Co.',      category:'Branding',    year:'2024', tag:'Lifestyle',  cardVar:'--c-card-e', accent:'#5a4820', siteKey:'cedar',    description:'Editorial lifestyle magazine with custom CMS' },
  { id:6, title:'Orbit Platform',   category:'Development', year:'2023', tag:'SaaS',       cardVar:'--c-card-f', accent:'#1a4535', siteKey:'orbit',    description:'Developer tools platform and documentation site' },
  { id:7, title:'Nova Creative',    category:'Web Design',  year:'2024', tag:'Branding',   cardVar:'--c-card-a', accent:'#5a3060', siteKey:'nova',     description:'Award-winning creative agency portfolio' },
  { id:8, title:'Bloom Health',     category:'UI / UX',     year:'2023', tag:'Lifestyle',  cardVar:'--c-card-b', accent:'#2a5a3a', siteKey:'bloom',    description:'Holistic health tracking app and marketing site' },
  { id:9, title:'Atlas Ventures',   category:'Web Design',  year:'2023', tag:'Fintech',    cardVar:'--c-card-c', accent:'#2a3a5a', siteKey:'atlas',    description:'VC firm landing page with portfolio showcase' },
]

const allTags  = ['All','Branding','E-commerce','SaaS','Fintech','Lifestyle']
const cardVars = ['--c-card-a','--c-card-b','--c-card-c','--c-card-d','--c-card-e','--c-card-f']
const accents  = ['#6b5c4e','#3a5a3a','#3a3a6b','#1a4060','#5a4820','#1a4535']

const pageVariants = {
  initial:{ opacity:0 },
  animate:{ opacity:1, transition:{ duration:0.6, ease:[0.16,1,0.3,1] as any } },
  exit:   { opacity:0, transition:{ duration:0.3 } },
}

/* ── Upload Modal ──────────────────────────────────────────────── */
function UploadModal({ onClose, onAdd }: { onClose:()=>void; onAdd:(p:Omit<Project,'id'>)=>void }) {
  const [title,    setTitle]    = useState('')
  const [category, setCategory] = useState('Web Design')
  const [tag,      setTag]      = useState('Branding')
  const [year,     setYear]     = useState(String(new Date().getFullYear()))
  const [desc,     setDesc]     = useState('')
  const [preview,  setPreview]  = useState<string|null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) setPreview(URL.createObjectURL(f))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    const i = Math.floor(Math.random()*cardVars.length)
    onAdd({ title:title.trim(), category, tag, year, description:desc, imageUrl:preview??undefined, cardVar:cardVars[i], accent:accents[i] })
    onClose()
  }

  const selStyle: React.CSSProperties = {
    width:'100%', background:'transparent', border:'none',
    borderBottom:'1px solid var(--c-line2)', color:'var(--c-ink)',
    padding:'0.75rem 0', fontFamily:'Inter, sans-serif',
    fontSize:'0.9rem', outline:'none', cursor:'none',
  }

  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
      transition={{ duration:0.25 }} onClick={onClose}
      style={{ position:'fixed', inset:0, zIndex:2000, background:'rgba(128,128,128,0.12)', backdropFilter:'blur(20px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'1.5rem' }}>
      <motion.div initial={{ opacity:0, scale:0.96, y:20 }} animate={{ opacity:1, scale:1, y:0 }}
        exit={{ opacity:0, scale:0.96 }} transition={{ duration:0.4, ease:[0.16,1,0.3,1] as any }}
        onClick={e=>e.stopPropagation()}
        style={{ background:'var(--c-bg)', border:'1px solid var(--c-line)', borderRadius:'16px', padding:'2.5rem', width:'100%', maxWidth:'520px', boxShadow:'0 24px 80px var(--c-card-shadow)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'2rem' }}>
          <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:'1.5rem', fontWeight:700, color:'var(--c-ink)' }}>Add Project</h3>
          <button onClick={onClose} style={{ background:'none', border:'none', color:'var(--c-ink4)', cursor:'none', fontSize:'1.25rem', lineHeight:1 }}>✕</button>
        </div>
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          <div onClick={()=>fileRef.current?.click()} data-hover
            style={{ height:'150px', border:'1.5px dashed var(--c-line2)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'none', overflow:'hidden', transition:'border-color 0.3s' }}
            onMouseEnter={e=>(e.currentTarget.style.borderColor='var(--c-ink3)')}
            onMouseLeave={e=>(e.currentTarget.style.borderColor='var(--c-line2)')}>
            {preview
              ? <img src={preview} alt="preview" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              : <div style={{ textAlign:'center' }}>
                  <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem', color:'var(--c-ink5)' }}>↑</div>
                  <p style={{ fontSize:'0.85rem', color:'var(--c-ink4)' }}>Upload screenshot or image</p>
                  <p style={{ fontSize:'0.75rem', marginTop:'0.25rem', color:'var(--c-ink5)' }}>PNG · JPG · WebP</p>
                </div>
            }
            <input ref={fileRef} type="file" accept="image/*" onChange={onFile} style={{ display:'none' }}/>
          </div>
          <div>
            <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Project Title *</label>
            <input className="form-input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Aura Collective" required/>
          </div>
          <div>
            <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Short Description</label>
            <input className="form-input" value={desc} onChange={e=>setDesc(e.target.value)} placeholder="e.g. Brand identity and e-commerce site"/>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1rem' }}>
            {[
              { label:'Category', val:category, set:setCategory, opts:['Web Design','Development','UI / UX','Branding'] },
              { label:'Tag',      val:tag,      set:setTag,      opts:['Branding','E-commerce','SaaS','Fintech','Lifestyle','Other'] },
            ].map(f=>(
              <div key={f.label}>
                <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>{f.label}</label>
                <select value={f.val} onChange={e=>f.set(e.target.value)} style={selStyle}>
                  {f.opts.map(o=><option key={o} style={{ background:'var(--c-bg)' }}>{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Year</label>
              <input className="form-input" value={year} onChange={e=>setYear(e.target.value)} placeholder="2025" maxLength={4}/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width:'100%', justifyContent:'center', marginTop:'0.5rem' }}>
            Add to Portfolio
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Page ─────────────────────────────────────────────────── */
export default function Work() {
  const [projects,         setProjects]         = useState<Project[]>(seedProjects)
  const [filter,           setFilter]           = useState('All')
  const [modal,            setModal]            = useState(false)
  const [selectedProject,  setSelectedProject]  = useState<Project | null>(null)

  const visible    = filter==='All' ? projects : projects.filter(p=>p.tag===filter)
  const addProject = (data:Omit<Project,'id'>) => { setProjects(prev=>[{...data,id:Date.now()},...prev]); setFilter('All') }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <AnimatePresence>{modal && <UploadModal onClose={()=>setModal(false)} onAdd={addProject}/>}</AnimatePresence>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={()=>setSelectedProject(null)}/>
        )}
      </AnimatePresence>

      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'10rem 2rem 6rem' }}>
        <FadeIn>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:'2rem', marginBottom:'4rem' }}>
            <div>
              <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:500, marginBottom:'1rem' }}>Portfolio</p>
              <h1 className="text-heading" style={{ fontSize:'clamp(2.5rem,5vw,5rem)', color:'var(--c-ink)' }}>Selected Work</h1>
            </div>
            <button className="btn btn-primary" onClick={()=>setModal(true)} style={{ flexShrink:0 }}>+ Add Project</button>
          </div>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.1}>
          <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'4rem', borderBottom:'1px solid var(--c-line)', paddingBottom:'1.5rem' }}>
            {allTags.map(t=>(
              <button key={t} onClick={()=>setFilter(t)}
                style={{ padding:'0.4rem 1rem', borderRadius:'9999px', fontSize:'0.8rem', fontWeight:500, cursor:'none', transition:'all 0.25s',
                  border: filter===t?'1px solid var(--c-ink)':'1px solid var(--c-line)',
                  background: filter===t?'var(--c-ink)':'transparent',
                  color:      filter===t?'var(--c-bg)':'var(--c-ink4)',
                }}>
                {t}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))', gap:'1.5rem' }}>
          <AnimatePresence mode="popLayout">
            {visible.map((p,i)=>(
              <motion.div key={p.id} layout
                initial={{ opacity:0, scale:0.96, y:20 }} animate={{ opacity:1, scale:1, y:0 }}
                exit={{ opacity:0, scale:0.94 }}
                transition={{ duration:0.5, delay:i*0.05, ease:[0.16,1,0.3,1] as any }}>
                <WorkCard project={p} onSelect={() => setSelectedProject(p)}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length===0 && (
          <div style={{ textAlign:'center', padding:'6rem 0', color:'var(--c-ink5)' }}>
            <p style={{ fontSize:'3rem', marginBottom:'1rem' }}>◻</p>
            <p style={{ fontSize:'0.9rem' }}>No projects in this category yet.</p>
          </div>
        )}
      </section>
    </motion.div>
  )
}

function WorkCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onClick={onSelect}
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      style={{ borderRadius:'12px', overflow:'hidden', background:`var(${project.cardVar})`, border:'1px solid var(--c-card-border)', cursor:'none', transition:'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s', transform:hovered?'translateY(-4px)':'translateY(0)', boxShadow:hovered?'0 20px 56px var(--c-card-shadow-h)':'0 0 0 transparent' }}>
      {/* Site preview thumbnail */}
      <div style={{ height:'260px', position:'relative', overflow:'hidden', borderBottom:'1px solid var(--c-card-border)' }}>
        <div style={{ width:'100%', height:'100%', transition:'transform 0.7s cubic-bezier(0.16,1,0.3,1)', transform:hovered?'scale(1.03)':'scale(1)' }}>
          {project.imageUrl
            ? <img src={project.imageUrl} alt={project.title} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            : project.siteKey
              ? <SitePreview siteKey={project.siteKey}/>
              : <div style={{ width:'100%', height:'100%', background:`var(${project.cardVar})`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color:'var(--c-ink5)', fontSize:'0.8rem' }}>{project.title}</span>
                </div>
          }
        </div>
        {/* Hover overlay */}
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.5)', opacity:hovered?1:0, transition:'opacity 0.3s', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem' }}>
          <span style={{ color:'#fff', fontSize:'0.8rem', letterSpacing:'0.1em', textTransform:'uppercase', border:'1px solid rgba(255,255,255,0.45)', padding:'0.6rem 1.4rem', borderRadius:'9999px', transform:hovered?'translateY(0)':'translateY(6px)', transition:'transform 0.4s cubic-bezier(0.16,1,0.3,1)', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            View Site
          </span>
        </div>
      </div>
      {/* Meta */}
      <div style={{ padding:'1.25rem 1.5rem' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.5rem' }}>
          <h3 style={{ color:'var(--c-ink)', fontSize:'1rem', fontWeight:500 }}>{project.title}</h3>
          <div style={{ display:'flex', alignItems:'center', gap:'0.5rem', flexShrink:0, marginLeft:'1rem' }}>
            <span style={{ background:'rgba(128,128,128,0.08)', color:'var(--c-ink4)', fontSize:'0.7rem', padding:'0.2rem 0.6rem', borderRadius:'9999px', border:'1px solid var(--c-line)', whiteSpace:'nowrap' }}>{project.tag}</span>
            <span style={{ color:'var(--c-ink5)', fontSize:'0.75rem' }}>{project.year}</span>
          </div>
        </div>
        <p style={{ color:'var(--c-ink4)', fontSize:'0.78rem', letterSpacing:'0.02em', lineHeight:1.5 }}>{project.description || project.category}</p>
      </div>
    </div>
  )
}
