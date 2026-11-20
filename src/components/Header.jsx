import React from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'research', label: 'Research', href: '#research' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'personal', label: 'Personal', href: '#personal' },
];

export function Header({ activeSection, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#top" className="brand-link">
          Ollie Boyne
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link${activeSection === item.id ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/assets/cv/cv_24.pdf"
            download="OBoyne_CV.pdf"
            className="nav-link nav-cv"
          >
            <span>CV</span>
            <ArrowUpRight size={12} strokeWidth={1.8} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={15} strokeWidth={1.8} /> : <Moon size={15} strokeWidth={1.8} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
