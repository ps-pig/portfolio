import { motion } from 'framer-motion'
import './BottomNav.css'

const navItems = [
  {
    id: 'home', label: 'Home',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
  },
  {
    id: 'about', label: 'About',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><circle cx="12" cy="7" r="4"/><path d="M5.5 20a7 7 0 0113 0"/></svg>
  },
  {
    id: 'services', label: 'Services',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
  },
  {
    id: 'projects', label: 'Work',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
  },
  {
    id: 'contact', label: 'Contact',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  },
]

export default function BottomNav({ activePage, onNavigate }) {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-track">
        {navItems.map((item) => {
          const isActive = activePage === item.id
          const isCenter = item.id === 'services'
          return (
            <button
              key={item.id}
              className={`bnav-btn${isActive ? ' active' : ''}${isCenter ? ' center' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
            >
              {isCenter ? (
                <div className="center-orb">
                  <div className="center-orb-inner">{item.icon}</div>
                </div>
              ) : (
                <>
                  {isActive && (
                    <motion.div
                      className="bnav-bg"
                      layoutId="bnav-highlight"
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className="bnav-icon">{item.icon}</span>
                  <span className="bnav-label">{item.label}</span>
                </>
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
