import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { asset } from '../asset';
import './About.css';

const FOUNDERS = [
  {
    name: 'Ayşıl',
    title: 'Psikolog | Mindfulness uzmanı',
    image: asset('/images/bio-aysil.webp'),
    paragraphs: [
      'İnsan zihnine, farkındalığa ve içsel dönüşüme olan ilgim, psikoloji ve mindfulness temelli bir çalışma alanı oluşturmama rehberlik etti. Bu yolculuk, bireylerin kendileriyle daha şefkatli, daha dürüst ve daha anlamlı bir ilişki kurmalarına eşlik etme isteğimle şekillendi.',
      'Çalışmalarımda mindfulness, Kabul ve Adanmışlık Terapisi (ACT), Bilişsel Davranışçı Terapi (CBT) ve varoluşsal yaklaşımları bütüncül bir çerçevede bir araya getiriyorum. Amacım, zorlayıcı duygu ve deneyimlerle mücadele etmekten çok; onlarla daha esnek, farkındalıklı ve dönüştürücü bir ilişki kurmayı desteklemek.',
      'Aldığım uluslararası eğitimler, bilimselliği şefkatli bir rehberlikle buluşturan bir yaklaşım geliştirmemi sağladı. Danışmanlık sürecini; yargısızlık, güven ve içsel kaynakları güçlendirme ilkeleri üzerine kuruyorum.',
      "HappySpace'te sunduğum alan, durmaya, hissetmeye ve derinleşmeye niyet edenler için. Bu alan, içsel huzuru beslemek ve yaşamla daha bilinçli bir temas kurmak isteyenlere aittir.",
    ],
    education: [
      'Psikoloji Yüksek Lisansı – Ulster University (Onur Derecesi)',
      'Mindfulness Temelli Stres Azaltma (MBSR) & Mindfulness Temelli Şefkat (MBCL)',
      'Kabul ve Adanmışlık Terapisi (ACT) – ACT Türkiye - temel, orta, ileri seviye, süpervizyon, SOT',
      'Travma ve Heart of ACT – Dr. Robyn Walser',
      'Bilişsel Davranışçı Terapi (CBT) – EABCT & KDTD',
      'Varoluşsal Terapi – Oxford University',
      'Neuropsychoanalysis – Oxford University',
      'British Psychological Society (BPS) üyeliği',
      'Trusthuman Academy Wellbeing Mentorship Programı',
    ],
  },
  {
    name: 'Aynil',
    title: 'Psikolog | Nörobilim uzmanı',
    image: asset('/images/bio-aynil.webp'),
    paragraphs: [
      'Psikoloji yolculuğum, insan zihnini yalnızca anlamaya değil; onunla daha işlevsel ve şefkatli bir ilişki kurmaya dair derin bir merakla başladı. Akademik ve klinik çalışmalarımda, psikoloji ile nörobilimi bir araya getiren bir perspektif benimsiyorum.',
      'Danışmanlık sürecinde Kabul ve Adanmışlık Terapisi (ACT) ve Bilişsel Davranışçı Terapi (CBT) yaklaşımlarını, süreç odaklı ve kişiye özgü bir çerçevede kullanıyorum. Benim için terapi; hızlı çözümler sunulan bir alan değil, bireyin kendi içsel pusulasını yeniden keşfedebileceği bir duraktır.',
      'Çalışmalarımda tanıların ötesine bakmayı, bireyin yaşamla kurduğu ilişkiyi merkeze almayı önemsiyorum. Düşünmeye alan açan, netlik kazandıran ve içsel gücü görünür kılan bir eşlik sunmayı amaçlıyorum.',
      "HappySpace'te yürüttüğüm çalışmalar, içsel dönüşümünü ciddiye alan ve bu yolculuğa bilinçle adım atmak isteyen bireyler içindir.",
    ],
    education: [
      'Psikoloji Lisansı – University of Surrey (Onur Derecesi)',
      "Uygulamalı Nörobilim – King's College London (Yüksek Lisans)",
      'Kabul ve Adanmışlık Terapisi (ACT) – ACT Türkiye - temel, orta, ileri seviye, süpervizyon, SOT',
      'Bilişsel Davranışçı Terapi (CBT) – EABCT / KDTD',
      'Çocuk & Ergenlerde CBT – KDTD',
      'Travmada süreç odaklı ACT – Dr. Robyn Walser',
      'British Psychological Society (BPS) üyeliği',
      'Association of Applied Neuroscience (ANA) üyeliği',
      'Trusthuman Academy Wellbeing Mentorship Programı',
    ],
  },
];

export default function About() {
  return (
    <div className="about">
      <PageHeader
        eyebrow="Hakkımızda"
        title="İki kız kardeş, tek bir vizyon."
        subtitle="HappySpace, ortak bir vizyon ve uzun soluklu bir yolculuk niyetiyle kurulmuş bir iyilik hâli alanıdır."
      />

      {FOUNDERS.map((f, i) => (
        <section className={`founder ${i % 2 === 1 ? 'founder-reverse' : ''}`} key={f.name}>
          <div className="container founder-grid">
            <div className="founder-image">
              <img src={f.image} alt={f.name} loading="lazy" />
            </div>
            <div className="founder-copy">
              <span className="eyebrow">Merhaba ben {f.name}</span>
              <h2>{f.title}</h2>
              {f.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              <h3 className="edu-heading">Seçili Eğitimler &amp; Akademik Altyapı</h3>
              <ul className="edu-list">
                {f.education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="about-cta" style={{ backgroundImage: `url(${asset('/images/cta-banner.webp')})` }}>
        <div className="about-cta-overlay" />
        <div className="container about-cta-content">
          <h2>Şimdi dönüşüme başla.</h2>
          <Link to="/iletisim" className="btn btn-solid">Bize Ulaş</Link>
        </div>
      </section>
    </div>
  );
}
