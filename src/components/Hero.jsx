import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { profile } from '../data/content';
import { RichText } from './RichText';

function GithubGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function renderLinkIcon(id) {
  switch (id) {
    case 'email':
      return <Mail size={15} strokeWidth={1.8} aria-hidden="true" />;
    case 'github':
      return <GithubGlyph />;
    case 'linkedin':
      return <LinkedinGlyph />;
    case 'cv':
      return <FileText size={15} strokeWidth={1.8} aria-hidden="true" />;
    default:
      return null;
  }
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-portrait-wrap">
            <img
              className="hero-portrait"
              src={profile.headshot}
              alt={profile.fullName}
            />
          </div>

          <div>
            <h1 className="hero-title">{profile.name}</h1>
            <div className="hero-subtitle-row">
              <span>{profile.subtitle}</span>
              <span className="hero-dot" aria-hidden="true">·</span>
              <span className="hero-location">{profile.location}</span>
            </div>

            <div className="hero-bio">
              {profile.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  <RichText segments={paragraph} />
                </p>
              ))}
            </div>

            <div className="hero-links">
              {profile.links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="hero-link"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  download={link.download || undefined}
                >
                  {renderLinkIcon(link.id)}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
