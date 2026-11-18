import { useState } from 'react'
import profilePhoto from '../assets/profile-4.jpeg'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tebogodanny19@gmail.com'

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'tebogodanny19@gmail.com',
    href: 'mailto:tebogodanny19@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tebogo-mosoma',
    href: 'https://www.linkedin.com/in/tebogo-mosoma-bb9b02351',
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/TD-Mosoma',
    href: 'https://github.com/TD-Mosoma',
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New portfolio contact message from ${formData.name}`,
          _template: 'table',
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="ct">
      <header className="ct__header">
        <span className="hero__badge">Contact</span>
        <h1 className="about__title">
          Let&apos;s <span className="gradient-text">connect</span>
        </h1>
        <p className="ct__lead">
          I&apos;m open to graduate programmes, internships and entry-level roles, and
          always happy to talk about tech, hackathons or collaborations. Send me a
          message and I&apos;ll get back to you.
        </p>
      </header>

      <div className="ct__layout">
        {/* Left: photo + links */}
        <aside className="ct__side">
          <div className="ct__photo-wrap">
            <img src={profilePhoto} alt="Tebogo Mosoma" className="ct__photo" />
          </div>

          <div className="ct__links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="ct__link"
              >
                <span className="ct__link-icon">{link.icon}</span>
                <span className="ct__link-text">
                  <span className="ct__link-label">{link.label}</span>
                  <span className="ct__link-value">{link.value}</span>
                </span>
                <span className="ct__link-arrow">↗</span>
              </a>
            ))}
          </div>

          <a href="/Tebogo_Mosoma_CV_Updated.pdf" download className="btn btn--ghost btn--sm">
            ⬇ Download CV
          </a>
        </aside>

        {/* Right: form */}
        <section className="ct__form-card">
          <h2 className="ct__form-title">Send me a message</h2>

          <form onSubmit={handleSubmit} className="ct__form">
            <label className="ct__field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="ct__field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="ct__field">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help?"
                required
              />
            </label>

            {/* Honeypot field to catch spam bots (leave hidden) */}
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              className="ct__honeypot"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="btn btn--primary ct__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="ct__status ct__status--success">
                ✓ Thanks! Your message has been sent and I&apos;ll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="ct__status ct__status--error">
                Something went wrong. Please try again, or email me directly at
                tebogodanny19@gmail.com.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  )
}

export default Contact