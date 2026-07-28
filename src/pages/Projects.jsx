import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const filters = ['All', 'Web Apps', 'Portfolio', 'Analytics', 'MIS']

const projects = [
  { title: 'WarehouseFlow Pro', tag: 'Web Apps', year: '2024', desc: 'Full-stack warehouse management system for a mid-size logistics firm. Real-time inventory tracking, automated dispatch alerts, and a mobile-friendly floor interface.', tech: ['React', 'Node.js', 'PostgreSQL'] },
  { title: 'GrowthPulse Dashboard', tag: 'Analytics', year: '2024', desc: 'Business growth analytics platform consolidating sales, marketing, and operations data into one live dashboard — built for weekly leadership reviews.', tech: ['React', 'Chart.js', 'REST API'] },
  { title: 'Executive MIS Portal', tag: 'MIS', year: '2023', desc: 'Custom management information system for a manufacturing company. Automated daily reports, KPI scorecards, and drill-down analytics for department heads.', tech: ['React', 'Express', 'MySQL'] },
  { title: 'Creative Director Portfolio', tag: 'Portfolio', year: '2024', desc: 'Motion-forward portfolio website for a senior creative director. Interactive showcases, password-protected case studies, and a bespoke contact flow.', tech: ['Next.js', 'Framer Motion', 'Vercel'] },
  { title: 'Retail Ops Tracker', tag: 'Web Apps', year: '2023', desc: 'Multi-branch retail operations tool tracking stock levels, daily sales targets, and staff performance across 8 locations from a single interface.', tech: ['Vue.js', 'Firebase', 'PWA'] },
  { title: 'Freelancer Suite', tag: 'Portfolio', year: '2023', desc: 'Portfolio template system built for early-career freelancers — clean, fast, and optimised for search. Over 12 individuals use it today.', tech: ['HTML', 'CSS', 'JavaScript'] },
  { title: 'SalesMap Analytics', tag: 'Analytics', year: '2024', desc: 'Geographic sales analytics tool for a B2B SaaS company. Visualises deal pipelines by region, flags underperforming territories, and forecasts quarterly close rates.', tech: ['React', 'D3.js', 'Node.js'] },
  { title: 'HR MIS System', tag: 'MIS', year: '2023', desc: 'HR management information system covering attendance, leave tracking, payroll summaries, and compliance reporting for a 200-person organisation.', tech: ['React', 'Django', 'PostgreSQL'] },
  { title: 'Architect Studio Portfolio', tag: 'Portfolio', year: '2024', desc: 'Sophisticated portfolio for an architectural firm. High-resolution project galleries, client testimonial sections, and an integrated project inquiry form.', tech: ['Next.js', 'Sanity CMS', 'Tailwind'] },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.tag === active)

  return (
    <div className="projects-page page">
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">Selected work</p>
          <h1 className="section-heading">My <span className="gold-text">Projects</span></h1>
          <div className="gold-divider" />
          <p className="section-sub">20+ websites · 15+ portfolios · 7+ analytical applications</p>
        </motion.div>

        {/* Filters */}
        <div className="filter-row">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-chip${active === f ? ' on' : ''}`}
              onClick={() => setActive(f)}
            >
              {active === f && (
                <motion.div className="filter-bg" layoutId="fchip" transition={{ type: 'spring', stiffness: 400, damping: 28 }} />
              )}
              <span className="filter-label">{f}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="projects-grid">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                className="proj-card glass"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, delay: i * 0.04 }}
                layout
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
              >
                <div className="proj-top">
                  <span className="proj-tag">{p.tag}</span>
                  <span className="proj-year">{p.year}</span>
                </div>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-chips">
                  {p.tech.map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  )
}
