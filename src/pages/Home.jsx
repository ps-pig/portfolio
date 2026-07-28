import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import './Home.css'

const HeroScene = lazy(() => import('../components/HeroScene'))

const stats = [
  { value: '20+', label: 'Websites Built' },
  { value: '15+', label: 'Portfolios' },
  { value: '7+', label: 'Analytics Apps' },
  { value: '5+', label: 'Years Active' },
]

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Business Development',
    desc: 'From idea to traction — strategy, positioning, and partnerships that actually move the needle.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Career Guidance',
    desc: 'Clarity over confusion. Practical direction for professionals ready to make their next move count.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h10M7 12h6"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'Warehouse systems, MIS dashboards, growth analytics — the full stack, built to last and scale.',
  },
]

export default function Home({ onNavigate }) {
  return (
    <div className="home-page page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-canvas-wrap">
          <Suspense fallback={<div className="hero-canvas-fallback" />}>
            <HeroScene />
          </Suspense>
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-eyebrow">Founder · PASWIN &amp; DONGLE</p>
            <h1><span className="hero-name">K Parthasarathi</span></h1>
            <p className="hero-sub">
              Business development, career guidance, and enterprise web applications — all under one roof.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => onNavigate('projects')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                View My Work
              </button>
              <button className="btn-ghost" onClick={() => onNavigate('contact')}>
                Get in Touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
          >
            <span className="stat-val gold-text">{s.value}</span>
            <span className="stat-lbl">{s.label}</span>
          </motion.div>
        ))}
      </section>

      {/* PILLARS */}
      <section className="pillars-section section">
        <div className="section-label">
          <p className="eyebrow">Expertise</p>
          <h2 className="section-heading">Three areas.<br />One partner.</h2>
          <div className="gold-divider" />
        </div>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="pillar-card glass"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="pillar-icon-wrap">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
              <button className="pillar-link" onClick={() => onNavigate('services')}>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band section">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Ready to start?</p>
          <h2 className="cta-heading">Let&apos;s build something remarkable together.</h2>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => onNavigate('contact')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              Start a Conversation
            </button>
            <button className="btn-ghost" onClick={() => onNavigate('about')}>About Me</button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
