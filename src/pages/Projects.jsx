import teamPhoto from '../assets/profile-3.jpg'

const projects = [
  {
    id: 'ubuntulink',
    number: '01',
    title: 'UbuntuLink',
    subtitle: 'AI-powered informal service marketplace',
    badge: 'Geekulcha Hackathon',
    what: 'A local services marketplace for South Africa. A customer describes a problem in plain language (for example, "my kitchen sink is leaking"), an AI layer classifies the job and suggests a fair price range, and the platform matches them with rated local providers such as plumbers, electricians and cleaners. Providers send quotes, and accepting one creates a booking that ends in a payment and a review. I built the React frontend, including text-to-speech, speech-to-text and translation for Setswana, Zulu and Afrikaans.',
    problem: 'Finding a trustworthy local tradesperson is hard, and customers rarely know what a fair price looks like. At the same time, skilled informal service providers have little digital visibility. UbuntuLink connects the two sides with AI-assisted pricing, transparent quotes and reviews, and is built to be accessible in local languages.',
    stack: [
      { label: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'React Router'] },
      { label: 'Backend', items: ['Java', 'Spring Boot', 'REST API', 'JWT Auth'] },
      { label: 'AI / ML', items: ['Python', 'FastAPI', 'LLM (OpenRouter)'] },
      { label: 'Data & Hosting', items: ['PostgreSQL', 'Supabase', 'Vercel', 'Render', 'GitHub Actions'] },
    ],
    repo: 'https://github.com/UbuntuLink/Geekulcha_Hackathon26',
    live: 'https://ubuntulink.vercel.app/',
  },
  {
    id: 'momentum',
    number: '02',
    title: 'Momentum AI Companion',
    subtitle: 'AI-powered insurance assistant',
    badge: 'Momentum × Monkey & River · Finalist',
    what: 'A secure conversational AI assistant for insurance that adapts to six different user personas using role-based access control (RBAC). Built by team ByteBinders, I developed the responsive React interfaces and integrated them with the backend services, working in an agile setup against strict hackathon deadlines.',
    problem: 'Insurance customers and staff need very different information and actions, and a single generic chatbot cannot serve them all safely. The Companion gives each persona a tailored experience while making sure people only see and do what their role allows.',
    stack: [
      { label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
      { label: 'Integration', items: ['REST APIs', 'AI Integration', 'RBAC'] },
      { label: 'Workflow', items: ['Git', 'GitHub', 'Agile'] },
    ],
    repo: 'https://github.com/MnR-Hackathon-Group-A/bytebinders',
  },
  {
    id: 'royal-hub',
    number: '03',
    title: 'Royal Square Financial Digital Management Platform',
    subtitle: 'Royal Hub',
    badge: 'AfriHack \u201926 · 3rd Place',
    image: teamPhoto,
    imageAlt: 'Team Git Happens with medals at AfriHack 2026',
    imageCaption: 'Team Git Happens · AfriHack \u201926 · 3rd place',
    what: 'A client and admin platform for Royal Square Financial, an insurance and investment brokerage. Clients can log claims, track their status, upload documents and update their profile. Admins can register and approve clients, manage their information and keep track of requests. I led the team as Team Lead, Presentation Lead and Business Analyst, and contributed to requirements analysis, solution design, frontend development and API integration.',
    problem: 'The brokerage was struggling with compliance administration: client information, claims and documents were slow to collect and hard to keep track of. Royal Hub gives clients and admins one place to handle that work, with verification, dashboards and reminders.',
    stack: [
      { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
      { label: 'Backend', items: ['Python', 'REST APIs'] },
      { label: 'Hosting', items: ['Netlify', 'Git', 'GitHub'] },
    ],
    repo: 'https://github.com/TD-Mosoma/RoyalHub-updated',
    live: 'https://royal-square-financial-hub.netlify.app',
  },
  {
    id: 'bltf',
    number: '04',
    title: 'Big Little Things Foundation System',
    subtitle: 'NPO management system',
    badge: 'Ongoing · Volunteer project',
    what: 'An integrated web platform for The Big Little Things Foundation, where I also volunteer. It combines a public-facing portal for volunteers, donors and community engagement with an administrative system for managing volunteer coordination, donations, reporting and day-to-day operations across multiple locations.',
    problem: 'A non-profit running programmes in several locations has to coordinate volunteers, track donations and report on its impact, and doing that by hand takes time away from the community work. This system centralises those processes so the foundation can spend more of its energy where it matters.',
    stack: [
      // TODO: add the stack you're using, e.g.
      // { label: 'Frontend', items: ['React'] },
      // { label: 'Backend', items: ['...'] },
    ],
    repo: 'https://github.com/Lerato-Letsoalo/Big-Little-Things-Foundation-System',
  },
]

function Projects() {
  return (
    <div className="projects">
      <header className="projects__header">
        <span className="hero__badge">Projects</span>
        <h1 className="about__title">
          Selected <span className="gradient-text">work</span>
        </h1>
        <p className="projects__lead">
          A few of the projects I&apos;m proudest of: what each one is, the problem it
          solves, and what it&apos;s built with.
        </p>
      </header>

      {projects.map((project) => (
        <section key={project.id} id={project.id} className="pj">
          <div className="pj__head">
            <span className="pj__number gradient-text">{project.number}</span>
            <div>
              <h2 className="pj__title">{project.title}</h2>
              <p className="pj__subtitle">{project.subtitle}</p>
            </div>
            <span className="pj__badge">{project.badge}</span>
          </div>

          {project.image && (
            <figure className="pj__figure">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="pj__figure-img"
              />
              <figcaption>{project.imageCaption}</figcaption>
            </figure>
          )}

          <div className="pj__body">
            <div className="pj__block">
              <h3>What it is</h3>
              <p>{project.what}</p>
            </div>
            <div className="pj__block">
              <h3>The problem it solves</h3>
              <p>{project.problem}</p>
            </div>
          </div>

          {project.stack.length > 0 && (
            <div className="pj__stack">
              <h3>Tech stack</h3>
              <div className="pj__stack-groups">
                {project.stack.map((group) => (
                  <div key={group.label} className="pj__stack-group">
                    <span className="pj__stack-label">{group.label}</span>
                    <div className="chips">
                      {group.items.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pj__links">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                Live Demo ↗
              </a>
            )}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--sm"
            >
              GitHub Repo ↗
            </a>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Projects