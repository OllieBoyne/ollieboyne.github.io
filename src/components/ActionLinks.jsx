import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

/**
 * Renders a pipe-separated row of resource links and optional video lightbox trigger.
 */
export function ActionLinks({ links = [], videoModal, onOpenVideo }) {
  const hasLinks = links.length > 0;

  return (
    <div className="inline-actions">
      {links.map((link, idx) => (
        <React.Fragment key={link.label}>
          {idx > 0 && <span className="action-sep" aria-hidden="true">·</span>}
          <a
            className="inline-action-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span>{link.label}</span>
            <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </React.Fragment>
      ))}

      {videoModal && (
        <>
          {hasLinks && <span className="action-sep" aria-hidden="true">·</span>}
          <button
            type="button"
            className="inline-action-btn"
            onClick={() => onOpenVideo(videoModal)}
          >
            <Play size={12} strokeWidth={2} aria-hidden="true" />
            <span>Video</span>
          </button>
        </>
      )}
    </div>
  );
}
