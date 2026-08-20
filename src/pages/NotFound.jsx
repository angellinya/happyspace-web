import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '8rem 1rem' }}>
      <h1>Sayfa bulunamadı</h1>
      <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem' }}>
        Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
      </p>
      <Link to="/" className="btn btn-solid">Ana sayfaya dön</Link>
    </section>
  );
}
