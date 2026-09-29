import profilePhoto from '../assets/profile-1.jpeg'

const technicalSkills = [
  'Python',
  'Java',
  'JavaScript',
  'HTML/CSS',
  'React',
  'MySQL',
  'REST APIs',
  'Git/GitHub',
  'AI/ML',
  'Data Analytics',
]

const businessSkills = [
  'Business Analysis',
  'Requirements Analysis',
  'Project Management',
  'Problem Solving',
  'Presentation',
  'Agile/Scrum',
]

const stats = [
  { value: '82%', label: 'Academic average' },
  { value: '3rd', label: 'AfriHack \u201926' },
  { value: '3×', label: 'Hackathon finalist' },
  { value: '10', label: 'Anthropic AI certificates' },
]

const experience = [
  {
    role: 'Machine Learning Intern',
    place: 'FlyRank AI',
    date: 'June 2026 – Present',
    text: 'Working through an applied ML curriculum on search ranking and content discoverability, building and validating models that lifted prioritisation precision roughly 3x over a baseline rule.',
  },
  {
    role: 'Academic Mentor',
    place: 'STADIO Higher Education',
    date: '2026 – Present',
    text: 'Mentoring first and second year students through one-on-one and group sessions, helping them build study strategies and problem-solving skills.',
  },
  {
    role: 'Technical Business Support Bootcamp',
    place: 'Umuzi XPL Accelerator',
    date: 'Completed',
    text: 'Intensive accelerator simulating technical business support, covering troubleshooting, customer support and incident management under pressure.',
  },
  {
    role: 'Hackathons',
    place: 'Multiple competitions',
    date: '2025 – 2026',
    text: 'Led and contributed to cross-functional teams as Team Lead, Business Analyst and frontend developer, delivering working solutions under tight deadlines.',
  },
]

const achievements = [
  '3× Hackathon Finalist',
  'AfriHack \u201926: 3rd place',
  'Scrum Fundamentals Certified',
  '10 Anthropic AI certificates',
]

function About() {
  return (
    <div className="about">
      {/* Intro */}
      <section className="about__intro">
        <div className="about__photo-wrap">
          <img src={profilePhoto} alt="Tebogo Mosoma" className="about__photo" />
        </div>

        <div className="about__intro-text">
          <span className="hero__badge">About Me</span>
          <h1 className="about__title">
            Final-year <span className="gradient-text">BBIS student</span> at STADIO
          </h1>
          <p>
            I&apos;m Tebogo, a Bachelor of Business Information Systems student who
            enjoys working where business and technology meet. I&apos;m currently
            maintaining an 82% academic average while completing a Machine Learning
            internship, mentoring other students, and competing in hackathons.
          </p>
          <p>
            I&apos;m drawn to problems where understanding people and processes is just
            as important as writing the code. That&apos;s why I like to work across
            business analysis, frontend development and AI/ML, so I can take an idea
            from a business need all the way to a working solution.
          </p>
          <p>
            <strong>Career direction:</strong> I&apos;m looking for graduate programmes,
            internships and entry-level roles in business technology, software
            engineering, or AI/ML, where I can keep building useful products and
            growing as a technologist.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about__stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat__value gradient-text">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="about__section">
        <h2 className="section-title">Skills</h2>
        <div className="skills">
          <div className="skills__group">
            <h3>Technical</h3>
            <div className="chips">
              {technicalSkills.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills__group">
            <h3>Business</h3>
            <div className="chips">
              {businessSkills.map((skill) => (
                <span key={skill} className="chip chip--alt">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="about__section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.role} className="timeline__item">
              <span className="timeline__date">{item.date}</span>
              <h3 className="timeline__role">{item.role}</h3>
              <p className="timeline__place">{item.place}</p>
              <p className="timeline__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="about__section">
        <h2 className="section-title">Achievements</h2>
        <ul className="achievements">
          {achievements.map((a) => (
            <li key={a} className="achievements__item">
              <span className="achievements__icon">🏆</span>
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* Volunteering */}
      <section className="about__section">
        <h2 className="section-title">Giving Back</h2>
        <div className="card card--wide">
          <div className="card__icon">🤝</div>
          <h3 className="card__title">The Big Little Things Foundation</h3>
          <p className="card__text">
            I volunteer at The Big Little Things Foundation, and I&apos;m also building
            an administrative system for the foundation, using my technical skills to
            help streamline how the organisation runs so more of its energy can go
            into the community it serves.
          </p>
        </div>
      </section>

      {/* Fun fact */}
      <section className="about__section">
        <div className="funfact">
          <span className="funfact__icon">🏃</span>
          <div>
            <h3 className="funfact__title">Fun fact</h3>
            <p>
              I&apos;m also a student-athlete! I&apos;m a middle-distance track and field
              athlete who has competed provincially and nationally, and I won a
              provincial bronze medal in 2025. Racing taught me discipline, pacing and
              how to keep going when it gets tough, which carries over into how I
              approach my studies and my work.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About