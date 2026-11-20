import React from 'react';
import { personal } from '../data/content';
import { MediaFrame } from './MediaFrame';
import { ActionLinks } from './ActionLinks';
import { RichText } from './RichText';

export function PersonalSection({ onOpenMedia }) {
  const { rowing, dodo } = personal;

  return (
    <section id="personal" className="page-section section-personal">
      <div className="container">
        <div className="section-header">
          <div className="section-heading-group">
            <span className="section-accent" aria-hidden="true" />
            <h2 className="section-title">Personal</h2>
          </div>
        </div>

        <div className="personal-stack">
          <div id="rowing" className="rowing-block">
            <div className="rowing-header">
              <h3 className="personal-subtitle">{rowing.title}</h3>
              <span className="mono-tag">{rowing.tag}</span>
            </div>

            <p className="rowing-intro">
              <RichText segments={rowing.intro} />
            </p>

            <div className="milestone-list">
              {rowing.milestones.map((m) => (
                <div key={m.year} className="milestone-item">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-detail">{m.detail}</span>
                </div>
              ))}
            </div>

            <div className="photo-grid-2">
              {rowing.photos.map((photo) => (
                <figure key={photo.src} className="photo-card">
                  <MediaFrame
                    media={{
                      type: 'image',
                      src: photo.src,
                      alt: photo.alt,
                      caption: photo.caption,
                      fit: 'cover',
                    }}
                    onOpen={onOpenMedia}
                  />
                  <figcaption className="photo-caption">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>

          <article className="dodo-card">
            <img className="dodo-icon" src={dodo.icon} alt="Dodo puzzle game icon" loading="lazy" />
            <div className="dodo-content">
              <div className="dodo-header">
                <h3 className="personal-subtitle">{dodo.title}</h3>
                <span className="mono-tag">{dodo.tag}</span>
              </div>
              <p className="dodo-desc">{dodo.description}</p>
              <ActionLinks links={dodo.links} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
