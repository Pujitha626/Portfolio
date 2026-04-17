import './Projects.css'

const projects = [
  {
    year: '2025',
    number: '01',
    title: 'Unemployment Analysis Using Python',
    subtitle: 'AI/ML — Data Analysis & Prediction',
    stack: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib'],
    live: null,
    highlights: [
      'Analyzed socio-economic unemployment data using Python and ML',
      'Applied Machine Learning algorithms to uncover patterns and trends',
      'Identified key factors influencing unemployment rates',
      'Visualized insights through data plots and statistical summaries',
      'Modern approach replacing traditional data analysis methods'
    ],
    tag: 'AI / ML'
  },
  {
    year: '2024',
    number: '02',
    title: 'Carbon Footprint Tracker',
    subtitle: 'Java Full Stack — Sustainability App',
    stack: ['Java', 'Full Stack', 'SQL', 'REST APIs'],
    live: null,
    highlights: [
      'Empowers individuals, businesses & organizations to measure carbon footprint',
      'Built with Java Full Stack for robust and scalable performance',
      'Tracks and analyzes carbon emissions over time',
      'Adaptable system for current and future sustainability needs',
      'Contributes to global challenge of reducing carbon emissions'
    ],
    tag: 'Java'
  },
  {
    year: '2024',
    number: '03',
    title: 'Educational Edubot for Programming Courses',
    subtitle: 'ML-Powered Chatbot — EdTech',
    stack: ['Python', 'Machine Learning', 'NLP', 'Chatbot'],
    live: null,
    highlights: [
      'AI-powered educational chatbot for programming course learners',
      'Provides personalized support and instant feedback to students',
      'Interactive learning experiences through intelligent conversation',
      'Enhances learning outcomes in programming education',
      'Acts as a virtual assistant for student queries'
    ],
    tag: 'AI / ML'
  }
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div className="section-label reveal">
          <span className="label-line" />
          <span>04 — Projects</span>
        </div>

        <h2 className="section-title reveal">Featured <em>Work</em></h2>

        <div className="projects-list">
          {projects.map((proj, i) => (
            <div className="project-item reveal" key={proj.number} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-meta">
                <span className="project-number">{proj.number}</span>
                <span className="project-year">{proj.year}</span>
                <span className="project-tag">{proj.tag}</span>
              </div>

              <div className="project-body">
                <div className="project-top">
                  <div>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-subtitle">{proj.subtitle}</p>
                  </div>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="project-live">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>

                <ul className="project-highlights">
                  {proj.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  {proj.stack.map(s => (
                    <span key={s} className="stack-badge">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}