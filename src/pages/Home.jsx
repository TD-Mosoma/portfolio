import { useState } from 'react'
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/profile-2.jpeg'

const highlights = [
  {
    icon: '💼',
    title: 'Business Information Systems',
    text: 'Final-year BBIS student at STADIO, bridging business needs and technical solutions through systems analysis and design.',
  },
  {
    icon: '🤖',
    title: 'Data & AI',
    text: 'Machine Learning intern at FlyRank AI, building and validating models with scikit-learn on real anonymised data.',
  },
  {
    icon: '💻',
    title: 'Software Development',
    text: 'Frontend and full-stack work with React, JavaScript, Node.js, Flask and REST APIs, from idea to live deployment.',
  },
  {
    icon: '🏆',
    title: 'Hackathon Achievements',
    text: '3rd place at AfriHack \u201926, Momentum AI Hackathon finalist, and Top 10 finalist at the Learniverse hackathon.',
  },
  {
    icon: '🏅',
    title: 'Student-Athlete',
    text: 'Middle-distance track and field athlete who has competed provincially and nationally, and won a provincial bronze medal in 2025.',
  },
  {
    icon: '🎓',
    title: 'Academic Achievement',
    text: 'Maintaining an 82% average while mentoring first and second year students as an Academic Mentor.',
  },
]

const featuredSkills = [
  'React',
  'JavaScript',
  'Business Analysis',
  'AI/ML',
  'Python',
  'Leadership',
  'Software Development',
  'Data analytics',
]

function Home() {
  const [skillsOpen, setSkillsOpen] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">Final-year BBIS Student · STADIO</span>
          <h1 className="hero__title">
            Hi, I&apos;m <span className="gradient-text">Tebogo Mosoma</span>
          </h1>
          <h2 className="hero__headline">
            Business technology student building smart, useful software.
          </h2>
          <p className="hero__intro">
            I combine business analysis, machine learning and frontend development to turn
            real-world problems into working solutions. From leading a 3rd-place hackathon
            team to training ML models at FlyRank AI, I love building technology that
            makes a difference.
          </p>

          <div className="hero__cta">
            <Link to="/projects" className="btn btn--primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn--outline">
              Contact Me
            </Link>
            <a href="/Tebogo_Mosoma_CV_Updated.pdf" download className="btn btn--ghost">
              ⬇ Download CV
            </a>
          </div>
        </div>

        <div className="hero__image-wrap">
          <button
            type="button"
            className={`hero__photo-btn${skillsOpen ? ' hero__photo-btn--open' : ''}`}
            onClick={() => setSkillsOpen((open) => !open)}
            aria-expanded={skillsOpen}
            aria-label={skillsOpen ? 'Hide skills' : 'Show skills around profile photo'}
          >
            <div className="hero__image-ring">
              <img src={profilePhoto} alt="Tebogo Mosoma" className="hero__image" />
            </div>

            <ul className={`hero__skills-orbit${skillsOpen ? ' hero__skills-orbit--visible' : ''}`} aria-hidden={!skillsOpen}>
              {featuredSkills.map((skill, index) => (
                <li
                  key={skill}
                  className="hero__skill"
                  style={{ '--i': index, '--total': featuredSkills.length }}
                >
                  <span className="hero__skill-label">{skill}</span>
                </li>
              ))}
            </ul>
          </button>
          <p className="hero__photo-hint">
            {skillsOpen ? 'Click photo to hide skills' : 'Click photo to view skills'}
          </p>
        </div>
      </section>

      {/* Quick highlights */}
      <section className="highlights">
        <h2 className="section-title">Quick Highlights</h2>
        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <div className="card__icon">{item.icon}</div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
