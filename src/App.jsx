import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BottomNav from './components/BottomNav'
import TopNav from './components/TopNav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

const pages = { home: Home, about: About, services: Services, projects: Projects, contact: Contact }

export default function App() {
  const [page, setPage] = useState('home')
  const PageComponent = pages[page]
  return (
    <div className="app">
      <TopNav activePage={page} onNavigate={setPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 16, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.99 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <PageComponent onNavigate={setPage} />
        </motion.div>
      </AnimatePresence>
      <BottomNav activePage={page} onNavigate={setPage} />
    </div>
  )
}
