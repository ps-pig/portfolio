import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const PHONE = '9941629968'
const EMAIL = '19parthasarathi11@gmail.com'
const WA_MSG = 'Hi%20Parthasarathi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.'

const methods = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/></svg>,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: 'gold',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.41 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.32 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    label: 'Phone',
    value: '+91 ' + PHONE,
    href: `tel:+91${PHONE}`,
    color: 'gold',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
    label: 'WhatsApp',
    value: 'Message directly',
    href: `https://wa.me/91${PHONE}?text=${WA_MSG}`,
    color: 'green',
    external: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const upd = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const b = `Name: ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0A%0A${form.message}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject || 'Enquiry')}&body=${b}`
    setSent(true)
  }

  return (
    <div className="contact-page page">
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow">Start a conversation</p>
          <h1 className="section-heading">Get in <span className="gold-text">Touch</span></h1>
          <div className="gold-divider" />
          <p className="section-sub">Whether you have a project in mind, need guidance, or just want to explore — reach out. Every message is read personally.</p>
        </motion.div>

        <div className="contact-layout">
          {/* Left panel */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="contact-methods glass">
              <h3 className="methods-title">Reach me directly</h3>
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className={`method-row ${m.color}`}
                  target={m.external ? '_blank' : undefined}
                  rel={m.external ? 'noopener noreferrer' : undefined}
                >
                  <div className={`method-icon-wrap ${m.color}`}>{m.icon}</div>
                  <div className="method-info">
                    <span className="method-label">{m.label}</span>
                    <span className="method-value">{m.value}</span>
                  </div>
                  <svg className="method-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>

            <div className="quick-dial-row">
              <a href={`tel:+91${PHONE}`} className="btn-primary dial-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.41 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.32 1.2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/91${PHONE}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            className="contact-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {sent ? (
              <div className="success-panel glass-strong">
                <div className="success-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3>Email client opened!</h3>
                <p>Thank you for reaching out. I reply within 24 hours. For a faster response, message me on WhatsApp.</p>
              </div>
            ) : (
              <form className="contact-form glass" onSubmit={submit}>
                <h3 className="form-heading">Send a message</h3>
                <div className="form-row-2">
                  <div className="fgroup">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={upd} placeholder="Your full name" required />
                  </div>
                  <div className="fgroup">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={upd} placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="fgroup">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={upd} placeholder="Project / Career guidance / General enquiry" required />
                </div>
                <div className="fgroup">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={upd} rows={5} placeholder="Tell me what you are working on or what help you need..." required />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
