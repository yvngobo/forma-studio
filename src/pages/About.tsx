import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const values = [
  { title:'Clarity',    desc:'We strip away the noise. Every element on every page has a reason to be there.' },
  { title:'Craft',      desc:"Pixel-precision isn't optional for us. We obsess over details most clients never notice — and that's the point." },
  { title:'Conversion', desc:"Beautiful means nothing if it doesn't work. Every design decision is tied to a measurable goal." },
  { title:'Speed',      desc:'We move fast without cutting corners. First concepts in 48 hours, live sites in weeks.' },
]

const pageVariants = {
  initial:{ opacity:0 },
  animate:{ opacity:1, transition:{ duration:0.6, ease:[0.16,1,0.3,1] } },
  exit:   { opacity:0, transition:{ duration:0.3 } },
}

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'12rem 2rem 8rem', borderBottom:'1px solid var(--c-line)' }}>
        <FadeIn>
          <p style={{ color:'var(--c-ink4)', fontSize:'0.8rem', letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:500, marginBottom:'2rem' }}>About FORMA</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-display" style={{ fontSize:'clamp(3rem,7vw,7.5rem)', color:'var(--c-ink)', maxWidth:'1000px', lineHeight:0.95, marginBottom:'4rem' }}>
            We build the internet's most considered websites.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'3rem', maxWidth:'760px' }}>
            <p style={{ color:'var(--c-ink2)', fontSize:'1.05rem', lineHeight:1.8 }}>
              FORMA is a boutique web design studio. We partner with founders, agencies, and growth-stage brands who understand that their website is their most important sales asset.
            </p>
            <p style={{ color:'var(--c-ink3)', fontSize:'0.95rem', lineHeight:1.8 }}>
              We don't do templates. We don't do generic. Every project starts from a blank canvas and a conversation about what you actually need to achieve.
            </p>
          </div>
        </FadeIn>
      </section>

      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'8rem 2rem', borderBottom:'1px solid var(--c-line)' }}>
        <FadeIn>
          <h2 className="text-heading" style={{ fontSize:'clamp(1.8rem,3vw,2.75rem)', color:'var(--c-ink)', marginBottom:'5rem' }}>What we stand for.</h2>
        </FadeIn>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'3rem' }}>
          {values.map((v,i) => (
            <FadeIn key={v.title} delay={i*0.1}>
              <div>
                <div style={{ width:'40px', height:'1px', background:'var(--c-line)', marginBottom:'1.75rem' }}/>
                <h3 className="text-heading" style={{ fontSize:'1.5rem', color:'var(--c-ink)', marginBottom:'0.875rem' }}>{v.title}</h3>
                <p style={{ color:'var(--c-ink3)', fontSize:'0.9rem', lineHeight:1.75 }}>{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'8rem 2rem', borderBottom:'1px solid var(--c-line)' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))', gap:'6rem', alignItems:'center' }}>
          <FadeIn direction="left">
            <h2 className="text-heading" style={{ fontSize:'clamp(2rem,3.5vw,3rem)', color:'var(--c-ink)', marginBottom:'2rem' }}>
              Built from the belief that the web deserves better design.
            </h2>
            <p style={{ color:'var(--c-ink2)', fontSize:'0.95rem', lineHeight:1.8, marginBottom:'1.5rem' }}>
              Too many websites are built fast, built cheap, and built to look like everything else. We started FORMA because we were tired of watching great brands get mediocre sites.
            </p>
            <p style={{ color:'var(--c-ink3)', fontSize:'0.9rem', lineHeight:1.8 }}>
              Today we work with clients across the globe — from solo founders to scaling companies — all united by one thing: the ambition to be the best-looking brand in their space.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div style={{ background:'var(--c-bg2)', border:'1px solid var(--c-line)', borderRadius:'16px', padding:'3rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>
              {[
                { initials:'AO', role:'Founder & Design Lead' },
                { initials:'MD', role:'Lead Developer'        },
                { initials:'SR', role:'Brand Strategist'      },
                { initials:'JK', role:'Motion Designer'       },
              ].map((m,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.875rem' }}>
                  <div style={{ width:'42px', height:'42px', borderRadius:'50%', background:'var(--c-bg3)', border:'1px solid var(--c-line)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--c-ink4)', fontSize:'0.75rem', fontWeight:600, letterSpacing:'0.05em', flexShrink:0 }}>{m.initials}</div>
                  <p style={{ color:'var(--c-ink4)', fontSize:'0.78rem', lineHeight:1.4 }}>{m.role}</p>
                </div>
              ))}
              <div style={{ gridColumn:'1/-1', borderTop:'1px solid var(--c-line)', paddingTop:'1.5rem', marginTop:'0.5rem' }}>
                <p style={{ color:'var(--c-ink5)', fontSize:'0.8rem', letterSpacing:'0.04em' }}>Remote-first · Global clients · Since 2020</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ maxWidth:'1400px', margin:'0 auto', padding:'10rem 2rem', textAlign:'center' }}>
        <FadeIn>
          <h2 className="text-display" style={{ fontSize:'clamp(2.5rem,6vw,6rem)', color:'var(--c-ink)', marginBottom:'2.5rem', lineHeight:0.95 }}>
            Like what<br/>
            <em style={{ WebkitTextStroke:'1.5px var(--c-ink)', color:'transparent' }}>you see?</em>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize:'1rem', padding:'1rem 2.5rem' }}>Start a Conversation</Link>
        </FadeIn>
      </section>

    </motion.div>
  )
}
