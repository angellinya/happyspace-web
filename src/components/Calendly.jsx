import { useEffect } from 'react';
import { CALENDLY_URL } from '../siteConfig';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

function useCalendlyScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);
}

export function CalendlyButton({ className = 'btn btn-solid', children = 'Randevu al' }) {
  useCalendlyScript();

  const openPopup = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener');
    }
  };

  return (
    <a href={CALENDLY_URL} className={className} onClick={openPopup}>
      {children}
    </a>
  );
}

export function CalendlyInline({ height = 700 }) {
  useCalendlyScript();

  return (
    <div
      className="calendly-inline-widget"
      data-url={CALENDLY_URL}
      style={{ minWidth: '280px', height: `${height}px` }}
    />
  );
}
