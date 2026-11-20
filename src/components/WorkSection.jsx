import React from 'react';
import { experience, workHighlights } from '../data/content';
import { MediaFrame } from './MediaFrame';
import { ActionLinks } from './ActionLinks';
import { RichText } from './RichText';

export function WorkSection({ onOpenMedia }) {
  return (
    <section id="work" className="page-section section-work">
      <div className="container">
        <div className="section-header">
          <div className="section-heading-group">
            <span className="section-accent" aria-hidden="true" />
            <h2 className="section-title">Work</h2>
          </div>
        </div>

        <div className="exp-list">
          {experience.map((job) => (
            <article key={job.id} className="exp-row">
              <div className="exp-logo-box">
                <img src={job.logo} alt={`${job.org} logo`} loading="lazy" />
              </div>

              <div className="exp-roles-stack">
                {job.roles.map((role) => (
                  <div key={`${job.id}-${role.title}`} className="exp-role-item">
                    <div className="exp-header">
                      <div className="exp-title-line">
                        <span className="exp-org">{job.org}</span>
                        <span aria-hidden="true"> — </span>
                        <span className="exp-role">{role.title}</span>
                      </div>
                      <span className="exp-period">{role.period}</span>
                    </div>
                    <div className="exp-tech">{role.tech}</div>
                    <p className="exp-summary">
                      {Array.isArray(role.summary) ? <RichText segments={role.summary} /> : role.summary}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 className="subsection-heading">Projects</h3>
        <div className="showcase-grid-2">
          {workHighlights.map((item) => (
            <article key={item.id} className="showcase-card">
              <MediaFrame media={item.media} onOpen={onOpenMedia} />
              <div className="showcase-body">
                <span className="mono-tag">{item.tag}</span>
                <h4 className="showcase-title">{item.title}</h4>
                <p className="showcase-desc">{item.description}</p>
                <ActionLinks links={item.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
