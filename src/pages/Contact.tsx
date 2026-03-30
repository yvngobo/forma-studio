import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const pageVariants = {
  initial:{ opacity:0 },
  animate:{ opacity:1, transition:{ duration:0.6, ease:[0.16,1,0.3,1] as any } },
  exit:   { opacity:0, transition:{ duration:0.3 } },
}

const projectTypes = ['New Website','Redesign','E-commerce','Landing Page','Web App / SaaS','Other']

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', type:'', budget:'', message:'' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f=>({...f,[k]:e.target.value}))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name||!form.email||!form.message) return
    setSending(true)
    try {
      await fetch('https://services.leadconnectorhq.com/hooks/tkPFtO46rdKBrpDQL0Jz/webhook-trigger/804d3af8-0372-436a-b23e-7c842c622e04', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          project_type: form.type,
          budget: form.budget,
          message: form.message,
        }),
      })
    } catch (_) {
      // fail silently — still show success to user
    }
    setSending(false)
    setSent(true)
  }

  const selStyle: React.CSSProperties = {
    width:'100%', background:'transparent', border:'none',
    borderBottom:'1px solid var(--c-line2)', color:'var(--c-ink)',
    padding:'1rem 0', fontFamily:'Inter, sans-serif', fontSize:'1rem',
    outline:'none', cursor:'none', transition:'border-color 0.3s',
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'10rem 2rem 8rem', minHeight:'100svh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))', gap:'8rem', alignItems:'start' }}>

          {/* Left */}
          <div>
            <FadeIn>
              <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:500, marginBottom:'1.5rem' }}>Get in Touch</p>
              <h1 className="text-display" style={{ fontSize:'clamp(3rem,5vw,5rem)', color:'var(--c-ink)', lineHeight:0.95, marginBottom:'2.5rem' }}>
                Let's build something great.
              </h1>
              <p style={{ color:'var(--c-ink3)', fontSize:'1rem', lineHeight:1.8, maxWidth:'380px', marginBottom:'3.5rem' }}>
                Tell us about your project. We'll get back to you within 24 hours with thoughts, ideas, and a clear path forward.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.75rem' }}>
                {[
                  { label:'Email',         value:'hello@formadesign.co' },
                  { label:'Response time', value:'Within 24 hours'      },
                  { label:'Based',         value:'Remote · Global'      },
                ].map(item=>(
                  <div key={item.label}>
                    <p style={{ color:'var(--c-ink5)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'0.35rem' }}>{item.label}</p>
                    <p style={{ color:'var(--c-ink3)', fontSize:'0.95rem' }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn delay={0.2}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="thanks"
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.6, ease:[0.16,1,0.3,1] as any }}
                  style={{ padding:'4rem 2rem', textAlign:'center', border:'1px solid var(--c-line)', borderRadius:'16px', background:'var(--c-bg2)' }}>
                  <div style={{ width:'56px', height:'56px', borderRadius:'50%', border:'1px solid var(--c-line)', background:'var(--c-bg)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.75rem', fontSize:'1.25rem', color:'var(--c-ink)' }}>✓</div>
                  <h3 className="text-heading" style={{ fontSize:'1.75rem', color:'var(--c-ink)', marginBottom:'0.875rem' }}>Message sent.</h3>
                  <p style={{ color:'var(--c-ink3)', fontSize:'0.9rem', lineHeight:1.7 }}>
                    Thanks, {form.name.split(' ')[0]}. We'll be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}
                  style={{ display:'flex', flexDirection:'column', gap:'2.25rem' }}>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }}>
                    <div>
                      <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Name *</label>
                      <input className="form-input" value={form.name} onChange={update('name')} placeholder="Your name" required/>
                    </div>
                    <div>
                      <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Email *</label>
                      <input className="form-input" type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" required/>
                    </div>
                  </div>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem' }}>
                    <div>
                      <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Project Type</label>
                      <select value={form.type} onChange={update('type')} style={selStyle}
                        onFocus={e=>(e.target.style.borderBottomColor='var(--c-ink)')}
                        onBlur={e=>(e.target.style.borderBottomColor='var(--c-line2)')}>
                        <option value="" style={{ background:'var(--c-bg)' }}>Select…</option>
                        {projectTypes.map(t=><option key={t} style={{ background:'var(--c-bg)' }}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Budget</label>
                      <select value={form.budget} onChange={update('budget')} style={selStyle}
                        onFocus={e=>(e.target.style.borderBottomColor='var(--c-ink)')}
                        onBlur={e=>(e.target.style.borderBottomColor='var(--c-line2)')}>
                        <option value="" style={{ background:'var(--c-bg)' }}>Select…</option>
                        {['< $2k','$2k – $5k','$5k – $10k','$10k – $25k','$25k+'].map(b=><option key={b} style={{ background:'var(--c-bg)' }}>{b}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ color:'var(--c-ink4)', fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase', display:'block', marginBottom:'0.5rem' }}>Tell us about your project *</label>
                    <textarea className="form-input" value={form.message} onChange={update('message')}
                      placeholder="What do you need, what's the timeline, what are you hoping to achieve…"
                      rows={5} required style={{ resize:'none', paddingTop:'1rem' }}/>
                  </div>
                  <button type="submit" disabled={sending} className="btn btn-primary" style={{ width:'100%', justifyContent:'center', fontSize:'0.9rem', padding:'1rem', opacity: sending ? 0.6 : 1 }}>
                    {sending ? 'Sending…' : 'Send Message →'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
