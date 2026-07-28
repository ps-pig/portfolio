import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    num: '01',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'Business Development',
    subtitle: 'From zero to traction',
    desc: 'Whether you\'re pre-launch or stuck at a plateau, I work with you to identify what\'s actually blocking growth and build a practical path forward — market positioning, partnership strategy, and revenue modelling without the consultant jargon.',
    items: ['Market entry strategy', 'Revenue stream design', 'Partnership development', 'Business model validation'],
  },
  {
    num: '02',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    title: 'Career Guidance',
    subtitle: 'Clarity over confusion',
    desc: 'Honest, practical direction for professionals figuring out their next move. I dig into where you are, where you want to go, and what is realistically in between — then help you close that gap, whether you are switching fields, targeting a promotion, or building a freelance practice.',
    items: ['Career path mapping', 'Resume & portfolio review', 'Interview preparation', 'Freelance business setup'],
  },
  {
    num: '03',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h4M7 12h6"/></svg>,
    title: 'Warehouse Web Apps',
    subtitle: 'Operations that actually work',
    desc: 'Custom-built warehouse management systems that reduce errors, track inventory in real time, and give floor managers the visibility they have always needed. Built for speed, reliability, and your exact workflow — not a generic off-the-shelf product.',
    items: ['Inventory management systems', 'Real-time tracking dashboards', 'Order & dispatch workflows', 'Staff role management'],
  },
  {
    num: '04',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="3" y1="20" x2="21" y2="20"/></svg>,
    title: 'MIS & Analytics Apps',
    subtitle: 'Data you can actually use',
    desc: 'Management information systems and analytics dashboards that turn raw data into decisions. From KPI tracking to custom reports, I build tools your leadership team will actually open every morning — not dashboards that gather dust.',
    items: ['KPI & performance dashboards', 'Custom reporting tools', 'Data pipeline setup', 'Automated report delivery'],
  },
  {
    num: '05',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Business Growth Apps',
    subtitle: 'Growth that compounds',
    desc: 'CRM tools, sales funnels, customer analytics, and growth tracking — built for businesses that are ready to scale methodically rather than by guesswork. Every system connects to how your team actually works.',
    items: ['CRM & pipeline tools', 'Sales funnel systems', 'Customer analytics', 'Growth metric tracking'],
  },
  {
    num: '06',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'Portfolio & Web Design',
    subtitle: 'First impressions that stick',
    desc: 'Clean, fast, memorable websites and portfolios. I focus on what actually converts visitors into clients — not just what looks good in a screenshot. Mobile-first, SEO-ready, and built for real-world performance.',
    items: ['Portfolio websites', 'Business landing pages', 'SEO-ready builds', 'Mobile-first design'],
  },
]

export default function Services() {
  return (
    <div className="services-page page">
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">What I offer</p>
          <h1 className="section-heading">My <span className="gold-text">Services</span></h1>
          <div className="gold-divider" />
          <p className="section-sub">Six areas. One goal: make your business and career actually move forward.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card glass"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="service-top">
                <div className="service-icon-ring">{s.icon}</div>
                <span className="service-num gold-text">{s.num}</span>
              </div>
              <div className="service-tag-line">{s.subtitle}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.items.map(it => (
                  <li key={it}>
                    <span className="s-dot" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
