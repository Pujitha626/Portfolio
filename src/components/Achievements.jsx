import './Achievements.css'

const stats = [
  { num: '100+', label: 'LeetCode Problems Solved' },
  { num: '79', label: 'Active Coding Days'},
  { num: '183', label: 'CodeChef Problems Solved'},
  { num: '5+', label: 'Certifications', sub: 'NPTEL, Internships & Workshops' }
]

const certs = [
  { title: 'Internship — Artificial Intelligence / Machine Learning', issuer: 'AI/ML Domain' },
  { title: 'Internship — Java Full Stack', issuer: 'Java Full Stack Domain' },
  { title: 'Programming in Java', issuer: 'NPTEL Online Certification' },
  { title: 'Problem Solving Through Programming in C', issuer: 'NPTEL Online Certification' },
  { title: 'Career Development Workshop', issuer: 'Certified Participant' }
]

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="ach-inner">
        <div className="section-label reveal" style={{ color: 'var(--gold)' }}>
          <span className="label-line" style={{ background: 'var(--gold)' }} />
          <span>05 — Achievements & Certifications</span>
        </div>

        <h2 className="section-title reveal" style={{ color: 'var(--cream)' }}>
          Milestones & Recognition
        </h2>

        <div className="ach-stats reveal">
          {stats.map(s => (
            <div className="ach-stat" key={s.label}>
              <span className="ach-num">{s.num}</span>
              <span className="ach-label">{s.label}</span>
              <span className="ach-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="ach-badges reveal">
          <div className="badge-item">
            <span className="badge-icon">🏆</span>
            <span>NPTEL Certified — Programming in Java</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🏆</span>
            <span>NPTEL Certified — Problem Solving Through Programming in C</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🤖</span>
            <span>AI/ML Internship — Hands-on Machine Learning</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">☕</span>
            <span>Java Full Stack Internship — End-to-End Development</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🌐</span>
            <span>Strong Academic Record Across All Levels of Education</span>
          </div>
        </div>

        <div className="certs-grid reveal">
          <h3 className="certs-heading">Certifications</h3>
          <div className="certs-list">
            {certs.map(c => (
              <div className="cert-item" key={c.title}>
                <div className="cert-dot" />
                <div>
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}