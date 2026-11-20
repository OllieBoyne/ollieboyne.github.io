import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption || item.alt || 'Media preview'}
      onClick={onClose}
    >
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-bar">
          <span className="lightbox-caption">{item.caption || item.alt || 'Preview'}</span>
          <button
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Close preview"
            autoFocus
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        <div
          className={`lightbox-stage${item.studioFrame ? ' is-studio' : ''}${
            item.letterbox ? ' is-letterbox' : ''
          }`}
        >
          {item.type === 'video' && (
            <video className="lightbox-media" controls autoPlay loop playsInline poster={item.poster}>
              <source src={item.src} type="video/webm" />
            </video>
          )}

          {item.type === 'youtube' && (
            <div className="lightbox-youtube-wrap">
              <iframe
                src={item.src}
                title={item.title || 'Project Video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          {item.type === 'image' && (
            <img className="lightbox-media" src={item.src} alt={item.alt || ''} />
          )}
        </div>
      </div>
    </div>
  );
}
