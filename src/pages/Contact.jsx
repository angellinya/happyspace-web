import PageHeader from '../components/PageHeader';
import { CalendlyInline } from '../components/Calendly';
import { CONTACT_EMAIL, HOURS, INSTAGRAM_URL } from '../siteConfig';
import { asset } from '../asset';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="İletişim"
        title="Daha fazla bilgi almak için bize ulaşabilirsin!"
        image={asset('/images/contact.webp')}
      />

      <section className="contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>İletişim Bilgileri</h2>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">
              {CONTACT_EMAIL}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="contact-instagram">
              @happyspacewellbeing
            </a>

            <h3>Saatler</h3>
            <ul className="contact-hours">
              {HOURS.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-booking">
            <h2>Randevu Al</h2>
            <p>Aşağıdaki takvimden sana uygun bir zaman seçebilirsin.</p>
            <CalendlyInline height={650} />
          </div>
        </div>
      </section>
    </div>
  );
}
