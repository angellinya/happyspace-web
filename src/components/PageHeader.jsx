import './PageHeader.css';

export default function PageHeader({ eyebrow, title, subtitle, image }) {
  return (
    <section className="page-header" style={image ? { backgroundImage: `url(${image})` } : undefined}>
      {image && <div className="page-header-overlay" />}
      <div className="container page-header-content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
