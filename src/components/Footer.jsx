import React, { useState } from 'react';
import { modalities, profile } from '../data/content';

export function Footer() {
  const [modIndex, setModIndex] = useState(0);
  const current = modalities[modIndex];

  const cycleModality = () => {
    setModIndex((prev) => (prev + 1) % modalities.length);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <button
            type="button"
            className="footer-cycler"
            onClick={cycleModality}
            title="Click to cycle 3D foot modality"
            aria-label={`Cycle 3D foot modality, currently ${current.label}`}
          >
            <img className="footer-cycler-thumb" src={current.img} alt="" />
            <span>{current.label}</span>
          </button>
          <span>© {profile.fullName} · {profile.location}</span>
        </div>

        <div className="footer-links">
          {profile.links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              download={link.download || undefined}
            >
              {link.shortLabel}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
