import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">PP</span>
          <span className="footer-name">Pallagorla Pujitha</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} — Crafted with care
        </p>
        <div className="footer-links">
          <a href="https://github.com/Pujitha626" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pallagorla-pujitha-651871258" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:pallagorlapujitha@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}