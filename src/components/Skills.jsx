import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'Java','HTML', 'CSS', 'JavaScript']
  },
  {
    category: 'Libraries',
    icon: '⬡',
    skills: ['Pandas', 'NumPy']
  },
  {
    category: 'Databases',
    icon: '⊞',
    skills: ['SQL', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook']
  },
  {
    category: 'Concepts',
    icon: '◎',
    skills: ['OOP','Full Stack Development']
  },
  {
    category: 'Soft Skills',
    icon: '◈',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Collaboration']
  }
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div className="section-label reveal">
          <span className="label-line" />
          <span>03 — Technical Skills</span>
        </div>

        <h2 className="section-title reveal">Tech Arsenal</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-card reveal" key={group.category} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}