import { motion } from 'framer-motion'
import './About.css'

const skills = [
  { name: 'Business Strategy & Development', pct: 92 },
  { name: 'Full-Stack Web Development', pct: 88 },
  { name: 'MIS & Data Analytics', pct: 85 },
  { name: 'Career Mentorship', pct: 90 },
  { name: 'Warehouse Management Systems', pct: 83 },
]

const values = [
  { icon: '◈', title: 'Honest above all', desc: 'I tell you what the business actually needs, not what sounds impressive in a proposal.' },
  { icon: '◇', title: 'Built to outlast me', desc: 'Every system I deliver is documented, maintainable, and designed to grow with you.' },
  { icon: '◆', title: 'Results, not reports', desc: 'I measure success by what changes in your business, not what looks good on a slide.' },
]

export default function About() {
  return (
    <div className="about-page page">
      <div className="section">
        <motion.div className="about-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">The person behind the work</p>
          <h1 className="section-heading">About <span className="gold-text">Me</span></h1>
          <div className="gold-divider" />
        </motion.div>

        <div className="about-grid">
          <motion.div className="profile-card glass" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
            <div className="profile-avatar">
              <div className="avatar-bg">
                <span className="avatar-initials gold-text">KP</span>
              </div>
              <div className="avatar-ring" />
            </div>
            <div className="profile-meta">
              <h3 className="profile-name">K Parthasarathi</h3>
              <p className="profile-role gold-text">Founder &amp; Principal</p>
              <p className="profile-company">PASWIN &amp; DONGLE</p>
            </div>
            <div className="profile-contacts">
              <a href="mailto:19parthasarathi11@gmail.com" className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="15" height="15" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>
                19parthasarathi11@gmail.com
              </a>
              <a href="tel:+919941629968" className="profile-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" width="15" height="15" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.41 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.32 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +91 9941629968
              </a>
            </div>
          </motion.div>

          <motion.div className="about-story" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <p className="story-lead">
              I started my career with one conviction: most businesses fail not because of bad ideas, but because of poor execution and the wrong digital tools.
            </p>
            <p className="story-body">
              That belief shaped everything I have built since. Today, as the founder of PASWIN &amp; DONGLE, I work at the intersection of business strategy and technology. I have helped professionals map out careers that actually fit their strengths, guided entrepreneurs through their first hundred customers, and built web applications that make operations genuinely simpler.
            </p>
            <p className="story-body">
              My work spans warehouse management portals, management information systems, business growth dashboards, and portfolio websites. Every engagement starts with a real conversation about what you actually need — and ends with something that earns its place in your business every day.
            </p>
          </motion.div>
        </div>

        <div className="skills-block">
          <p className="eyebrow">Proficiency</p>
          <h2 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Skills &amp; Expertise</h2>
          <div className="skills-list">
            {skills.map((sk, i) => (
              <motion.div
                key={sk.name}
                className="skill-row"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="skill-meta">
                  <span className="skill-name">{sk.name}</span>
                  <span className="skill-pct gold-text">{sk.pct}%</span>
                </div>
                <div className="skill-track">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sk.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="values-block">
          <p className="eyebrow">Philosophy</p>
          <h2 className="section-heading" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>How I work</h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
              >
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
