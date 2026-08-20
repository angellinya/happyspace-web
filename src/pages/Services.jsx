import PageHeader from '../components/PageHeader';
import { CalendlyButton } from '../components/Calendly';
import { asset } from '../asset';
import './Services.css';

const CATEGORIES = [
  {
    title: 'Bireysel Yolculuklar',
    image: asset('/images/service-1.webp'),
    items: [
      {
        name: '1:1 Danışmanlık',
        text: 'Duygusal ve psikolojik zorluklarla başa çıkmayı sağlayan bir süreçtir. ACT, CBT ve Varoluşçu yaklaşımları birleştirerek bireysel ihtiyaçlara uygun destek sunuyoruz.',
      },
      {
        name: 'Mindfulness Seansları',
        text: 'Anda kalmayı ve farkındalığı derinleştirerek zihinsel ve duygusal dengeyi destekler. Bu seanslar, günlük yaşamda daha farkındalıklı seçimler yapmanıza ve anın tadını çıkarmanıza yardımcı olur.',
      },
    ],
  },
  {
    title: 'Grup Deneyimleri',
    image: asset('/images/service-3.webp'),
    items: [
      {
        name: 'Workshoplar',
        text: 'Kişisel gelişiminizi desteklemek ve farkındalığınızı artırmak için özenle tasarlandı. Derinlemesine bilgi edinirken, pratik uygulamalarla bu bilgileri günlük yaşamınıza entegre edebileceğiniz değerli araçlar sunuyoruz.',
      },
    ],
  },
  {
    title: 'İnziva ve Retreatler',
    image: asset('/images/service-4.webp'),
    items: [
      {
        name: 'İnzivalar',
        text: 'Yoğun yaşam temposundan uzaklaşıp içsel huzur ve yenilenme fırsatı sunar. Sessizlik, meditasyon ve farkındalık pratikleriyle dolu bu deneyimler, derin bir rahatlama ve kendinizi yeniden keşfetme imkanı sağlar.',
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <PageHeader
        eyebrow="Hizmetler"
        title="Happy Space'e hoşgeldin."
        subtitle="Happy Space psikolojik sağlık ve iyi oluşun buluştuğu bir wellbeing merkezidir. Modern psikoloji, mindfulness ve yaşam pratiğini birleştirerek size özel bir yolculuk sunuyoruz."
      />

      {CATEGORIES.map((cat, i) => (
        <section className={`service-category ${i % 2 === 1 ? 'service-category-reverse' : ''}`} key={cat.title}>
          <div className="container service-category-grid">
            <div className="service-category-image">
              <img src={cat.image} alt={cat.title} loading="lazy" />
            </div>
            <div className="service-category-copy">
              <h2>{cat.title}</h2>
              {cat.items.map((item) => (
                <div className="service-item" key={item.name}>
                  <h3>{item.name}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
              <CalendlyButton className="btn btn-accent">Detaylar &amp; Randevu</CalendlyButton>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
