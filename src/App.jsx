import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { WorkSection } from './components/WorkSection';
import { PersonalSection } from './components/PersonalSection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';

const SECTION_IDS = ['research', 'work', 'personal'];

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('ob-theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  const [activeSection, setActiveSection] = useState('research');
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('ob-theme', theme);
    } catch {
      // Ignore storage failures in private browsing
    }
  }, [theme]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Header
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <ResearchSection onOpenMedia={setLightboxItem} />
        <WorkSection onOpenMedia={setLightboxItem} />
        <PersonalSection onOpenMedia={setLightboxItem} />
      </main>

      <Footer />
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
