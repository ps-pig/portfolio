import { motion } from 'framer-motion'
import './TopNav.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function TopNav({ activePage, onNavigate }) {
  return (
    <nav className="top-nav">
      <div className="top-nav-inner">
        <button className="logo-btn" onClick={() => onNavigate('home')}>
          <div className="logo-mark">
            <span className="logo-k">K</span>
          </div>
          <div className="logo-text-wrap">
            <span className="logo-name">K Parthasarathi</span>
            <span className="logo-company">PASWIN &amp; DONGLE</span>
          </div>
        </button>

        <div className="nav-pill">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item${activePage === item.id ? ' active' : ''}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
              {activePage === item.id && (
                <motion.div className="nav-active-bg" layoutId="nav-pill" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
            </button>
          ))}
        </div>

        <button className="top-cta" onClick={() => onNavigate('contact')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  )
}
