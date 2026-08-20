import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CalendlyButton } from './Calendly';
import { NAV_LINKS } from '../siteConfig';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          happyspace
        </NavLink>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <CalendlyButton className="btn btn-solid nav-cta">Randevu al</CalendlyButton>
        </nav>
      </div>
    </header>
  );
}
