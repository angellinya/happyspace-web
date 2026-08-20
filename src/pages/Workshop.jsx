import PageHeader from '../components/PageHeader';
import { CalendlyButton } from '../components/Calendly';
import { asset } from '../asset';
import './Workshop.css';

const COMPONENTS = [
  'Zihinsel/duygusal yükleri fark etme ve sadeleştirme',
  'Otomatik düşünce örüntülerini tanıma (CBT)',
  'Mindfulness ile bedenle yeniden bağ kurma',
  'Öz-şefkat ile içsel alan açma',
  'Değerlerle uyumlu şekilde yaz için yön ve niyet belirleme',
];

export default function Workshop() {
  return (
    <div className="workshop-page">
      <PageHeader
        eyebrow="Haziran 2026"
        title="Yaz Öncesi Reset: Zihin, Beden, Duygu"
        image={asset('/images/workshop.webp')}
      />

      <section className="workshop-body">
        <div className="container workshop-grid">
          <div className="workshop-copy">
            <p>
              Yaza girerken dinlenmek, tazelenmek ve yeni bir enerji
              yaratmak isteyenler için tasarlanmış, bilimsel ve deneyimsel
              bir workshop. Katılımcılar birikmiş zihinsel ve duygusal
              yükleri fark edecek, bedenleriyle yeniden bağ kuracak ve
              pratik mindfulness araçlarıyla daha hafif ve dengeli
              hissederek ayrılacak.
            </p>

            <h3>Workshop İçeriği</h3>
            <ul className="workshop-list">
              {COMPONENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3>Kimler İçin?</h3>
            <p>
              Yoğun bir dönemin ardından yavaşlamak, kendisiyle yeniden
              temas kurmak, hafiflemek ve yazı dengeli bir yerden
              karşılamak isteyen herkes için.
            </p>

            <p className="workshop-note">
              Tarih, format (online/yüz yüze) ve diğer detaylar yakında
              paylaşılacak. Kontenjan sınırlıdır.
            </p>

            <CalendlyButton className="btn btn-solid">Yerini ayırt</CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
