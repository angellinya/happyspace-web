import PageHeader from '../components/PageHeader';
import { CalendlyButton } from '../components/Calendly';
import { INSTAGRAM_URL } from '../siteConfig';
import './Club.css';

const PREVIEW = [
  {
    title: 'Düzenli Seanslar',
    text: 'Haftalık mindfulness ve farkındalık seansları ile pratiğini sürekli kılabileceğin bir ritim.',
  },
  {
    title: 'Aylık Workshoplar',
    text: 'Her ay farklı bir temayla derinleşen, uygulamalı gelişim workshopları.',
  },
  {
    title: 'Topluluk Buluşmaları',
    text: 'Aynı yolculukta olan insanlarla bir araya gelebileceğin, paylaşımın değerli olduğu buluşmalar.',
  },
];

export default function Club() {
  return (
    <div className="club-page">
      <PageHeader
        eyebrow="Club"
        title="happyspace Club, hazırlanıyor."
        subtitle="Topluluğumuzun sürekli buluşma, öğrenme ve dönüşüm alanı olacak Club'ı özenle tasarlıyoruz."
      />

      <section className="club-body">
        <div className="container club-body-grid">
          <div className="club-copy">
            <p>
              happyspace Club, düzenli mindfulness seansları, aylık
              workshoplar ve topluluk buluşmalarını bir araya getiren bir
              üyelik alanı olarak yakında sizlerle.
            </p>
            <p>
              Yeni içerikler ve katılım detayları yayınlandığında ilk sen
              haberdar olmak için Instagram'dan bizi takip edebilir ya da
              bir seans için doğrudan randevu alabilirsin.
            </p>
            <div className="club-actions">
              <CalendlyButton className="btn btn-solid">Randevu al</CalendlyButton>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn">
                Instagram'da takip et
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="club-preview">
        <div className="container">
          <span className="eyebrow center">Yakında Club'da</span>
          <div className="club-preview-grid">
            {PREVIEW.map((item) => (
              <div className="club-preview-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
