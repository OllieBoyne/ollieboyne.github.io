import React, { useState, useEffect, useRef } from 'react';
import { modalities, publications, datasetsAndThesis } from '../data/content';
import { MediaFrame } from './MediaFrame';
import { ActionLinks } from './ActionLinks';

function AuthorList({ authors, venue }) {
  return (
    <p className="pub-authors">
      {authors.map((author, idx) => {
        const isSelf = author === 'Oliver Boyne' || author === 'O. Boyne';
        return (
          <React.Fragment key={`${author}-${idx}`}>
            {idx > 0 && ', '}
            {isSelf ? <strong>{author}</strong> : author}
          </React.Fragment>
        );
      })}
      {venue && <span className="venue-tag">{venue}</span>}
    </p>
  );
}

export function ResearchSection({ onOpenMedia }) {
  const [hoveredModality, setHoveredModality] = useState(null);
  const [focusedId, setFocusedId] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleModalitySelect = (mod) => {
    setFocusedId(mod.targetId);
    const el = document.getElementById(`research-${mod.targetId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFocusedId(null);
    }, 1800);
  };

  return (
    <section id="research" className="page-section section-research">
      <div className="container">
        <div className="section-header">
          <div className="section-heading-group">
            <span className="section-accent" aria-hidden="true" />
            <h2 className="section-title">Research</h2>
          </div>

          <div
            className="modality-strip"
            aria-label="Jump to 3D representation projects"
            onMouseLeave={() => setHoveredModality(null)}
          >
            {hoveredModality && (
              <span className="modality-active-label" aria-live="polite">
                {hoveredModality.label}
              </span>
            )}
            {modalities.map((mod) => (
              <button
                key={mod.id}
                type="button"
                className={`modality-btn${focusedId === mod.targetId ? ' is-highlighted' : ''}`}
                onMouseEnter={() => setHoveredModality(mod)}
                onFocus={() => setHoveredModality(mod)}
                onClick={() => handleModalitySelect(mod)}
                title={`Jump to ${mod.id.toUpperCase()} (${mod.label})`}
                aria-label={`Jump to ${mod.id.toUpperCase()} — ${mod.label}`}
              >
                <img src={mod.img} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pub-list">
          {publications.map((pub) => (
            <article
              key={pub.id}
              id={`research-${pub.id}`}
              className={`pub-row${focusedId === pub.id ? ' is-focused' : ''}`}
            >
              <MediaFrame media={pub.media} onOpen={onOpenMedia} />

              <div>
                <h3 className="pub-title">{pub.title}</h3>
                <AuthorList authors={pub.authors} venue={pub.venue} />
                <p className="pub-description">{pub.description}</p>
                <ActionLinks
                  links={pub.links}
                  videoModal={pub.videoModal}
                  onOpenVideo={onOpenMedia}
                />
              </div>
            </article>
          ))}
        </div>

        <h3 className="subsection-heading">Datasets &amp; Thesis</h3>
        <div className="compact-grid-3">
          {datasetsAndThesis.map((item) => (
            <article
              key={item.id}
              id={`research-${item.id}`}
              className={`compact-card${focusedId === item.id ? ' is-focused' : ''}`}
            >
              <MediaFrame media={item.media} onOpen={onOpenMedia} />
              <div className="compact-card-body">
                <span className="mono-tag">{item.tag}</span>
                <h4 className="compact-card-title">{item.title}</h4>
                <p className="compact-card-desc">{item.description}</p>
                <ActionLinks links={item.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
