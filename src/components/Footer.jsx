import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, HOURS, INSTAGRAM_URL, NAV_LINKS } from '../siteConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">happyspace</div>
          <p>
            Psikoloji, nörobilim ve farkındalık temelli danışmanlık,
            mindfulness ve inziva alanı.
          </p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="footer-col">
          <h4>Sayfalar</h4>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            {NAV_LINKS.map((link) => (
              <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Saatler</h4>
          <ul className="hours-list">
            {HOURS.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Takip et</h4>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-instagram">
            @happyspacewellbeing
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} happyspace</span>
      </div>
    </footer>
  );
}
