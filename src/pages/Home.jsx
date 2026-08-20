import { Link } from 'react-router-dom';
import { CalendlyButton } from '../components/Calendly';
import { asset } from '../asset';
import './Home.css';

const SERVICES = [
  {
    title: '1:1 Danışmanlık',
    text: 'Duygusal ve psikolojik zorluklarla başa çıkmayı sağlayan bir süreçtir. ACT, CBT ve Varoluşçu yaklaşımları birleştirerek bireysel ihtiyaçlara uygun destek sunuyoruz.',
    image: asset('/images/service-1.webp'),
  },
  {
    title: 'Mindfulness Seansları',
    text: 'Anda kalmayı ve farkındalığı derinleştirerek zihinsel ve duygusal dengeyi destekler. Bu seanslar, günlük yaşamda daha farkındalıklı seçimler yapmanıza ve anın tadını çıkarmanıza yardımcı olur.',
    image: asset('/images/service-2.webp'),
  },
  {
    title: 'Workshoplar',
    text: 'Kişisel gelişiminizi desteklemek ve farkındalığınızı artırmak için özenle tasarlandı. Derinlemesine bilgi edinirken, pratik uygulamalarla bu bilgileri günlük yaşamınıza entegre edebileceğiniz değerli araçlar sunuyoruz.',
    image: asset('/images/service-3.webp'),
  },
  {
    title: 'İnzivalar',
    text: 'Yoğun yaşam temposundan uzaklaşıp içsel huzur ve yenilenme fırsatı sunar. Sessizlik, meditasyon ve farkındalık pratikleriyle dolu bu deneyimler, derin bir rahatlama ve kendinizi yeniden keşfetme imkanı sağlar.',
    image: asset('/images/service-4.webp'),
  },
];

const QUOTES = [
  { text: 'Geçmişi değiştiremezsiniz ama şu anı nasıl yaşayacağınızı seçebilirsiniz.', author: 'Roy T. Bennett' },
  { text: 'Mutluluk, her anı tam bir farkındalıkla yaşamaktır.', author: 'Jon Kabat-Zinn' },
  { text: 'Kendini tanımak, insanın yaptığı en büyük yolculuktur.', author: 'Carl Jung' },
  { text: 'İnsanlar, sadece var olmakla değil, kendilerini gerçekleştirdiklerinde anlam bulurlar.', author: 'Abraham Maslow' },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${asset('/images/hero.webp')})` }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow">Danışmanlık · Mindfulness · Meditasyon</span>
          <h1>Kendini özgürleştirecek bir yolculuğa hazır mısın?</h1>
          <div className="hero-actions">
            <CalendlyButton className="btn btn-solid">Randevu al</CalendlyButton>
            <Link to="/hakkimizda" className="btn">Bizi tanı</Link>
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container about-teaser-grid">
          <div className="about-teaser-image">
            <img src={asset('/images/about.webp')} alt="happyspace" loading="lazy" />
          </div>
          <div className="about-teaser-copy">
            <span className="eyebrow">Biz kimiz?</span>
            <p>
              HappySpace, psikoloji, nörobilim ve farkındalık temelli
              yaklaşımları bir araya getiren; danışmanlık, eğitim ve inziva
              alanlarında çalışan bir iyilik hâli alanıdır.
            </p>
            <p>
              Bilimsel derinliği şefkatli bir alanla buluşturur; bireylerin
              yalnızca semptomlarla değil, yaşamlarıyla daha bilinçli ve
              anlamlı bir ilişki kurmalarına eşlik eder.
            </p>
            <p>
              HappySpace, iki kız kardeş psikolog tarafından, ortak bir
              vizyon ve uzun soluklu bir yolculuk niyetiyle kurulmuştur.
            </p>
            <Link to="/hakkimizda" className="btn">Hakkımızda</Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <span className="eyebrow center">Hizmetlerimiz</span>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-card-image">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/hizmetler" className="btn btn-accent">Tüm hizmetleri gör</Link>
          </div>
        </div>
      </section>

      <section className="quotes" style={{ backgroundImage: `url(${asset('/images/quote-1.webp')})` }}>
        <div className="quotes-overlay" />
        <div className="container quotes-grid">
          {QUOTES.map((q) => (
            <figure className="quote-card" key={q.author}>
              <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
              <figcaption>— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="upcoming">
        <div className="container upcoming-grid">
          <div className="upcoming-image">
            <img src={asset('/images/upcoming.webp')} alt="Yaz Öncesi Reset" loading="lazy" />
          </div>
          <div className="upcoming-copy">
            <span className="eyebrow">Yaklaşan Çalışmalar</span>
            <span className="upcoming-date">Haziran 2026</span>
            <h2>Yaz Öncesi Reset: Zihin, Beden, Duygu</h2>
            <p>
              Yaza daha hafif, daha net ve daha kendinde girmek için
              bilimsel temelli bir içsel denge workshopu.
            </p>
            <Link to="/workshop" className="btn btn-solid">Detayları gör</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
