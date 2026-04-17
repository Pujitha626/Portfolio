import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner">
        <div className="section-label reveal">
          <span className="label-line" />
          <span>02 — Experience & Education</span>
        </div>

        <h2 className="section-title reveal">Professional <em>Journey</em></h2>

  

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Internship — Artificial Intelligence / Machine Learning</h3>
                  <p className="timeline-company">AI/ML Domain</p>
                </div>
                <span className="timeline-date">May 2022 — July 2023</span>
              </div>
              <ul className="timeline-bullets">
                <li>Completed a hands-on internship focusing on <strong>AI/ML concepts</strong> and real-world data applications.</li>
                <li>Worked with Python, Pandas, NumPy, and Machine Learning algorithms for data analysis and pattern recognition.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Internship — Java Full Stack</h3>
                  <p className="timeline-company">Java Full Stack Domain</p>
                </div>
                <span className="timeline-date">May 2023 — Aug 2024</span>
              </div>
              <ul className="timeline-bullets">
                <li>Completed a full-stack internship building web applications using <strong>Java</strong> and related technologies.</li>
                <li>Gained experience in backend development, databases, and end-to-end application design.</li>
              </ul>
            </div>
          </div>

          <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">CodeTantra</h3>
                  <p className="timeline-company">Technical Trainer</p>
                </div>
                <span className="timeline-date">2025 — Present</span>
              </div>
              <ul className="timeline-bullets">
                <li>Led technical training sessions for 500+ students on programming fundamentals</li>
                <li>Specialized in Java and practical problem solving strategies.</li>
              </ul>
            </div>
          </div>
        </div>


          {/* <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot marker-dot--edu" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">B.Tech — Computer Science and Engineering</h3>
                  <p className="timeline-company">St. Ann's College of Engineering and Technology</p>
                </div>
                <span className="timeline-date">2021 — 2025</span>
              </div>
              <p className="timeline-meta">CGPA: <strong>8.3</strong></p>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot marker-dot--edu" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Intermediate — MPC</h3>
                  <p className="timeline-company">Sri Gowthami Junior College</p>
                </div>
                <span className="timeline-date">2019 — 2021</span>
              </div>
              <p className="timeline-meta">Percentage: <strong>96.3%</strong></p>
            </div>
          </div> */}

          {/* <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot marker-dot--edu" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">SSC</h3>
                  <p className="timeline-company">Teja Brilliant High School</p>
                </div>
                <span className="timeline-date">2019</span>
              </div>
              <p className="timeline-meta">CGPA: <strong>9.7</strong></p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}