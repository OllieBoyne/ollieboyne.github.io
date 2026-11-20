import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

/**
 * Renders a clickable thumbnail (image or looping muted video) with optional studio framing
 * and an onError fallback for remote GIFs.
 */
export function MediaFrame({ media, onOpen }) {
  const [src, setSrc] = useState(media.src);

  const handleError = () => {
    if (media.fallback && src !== media.fallback) {
      setSrc(media.fallback);
    }
  };

  const fitClass = media.fit === 'contain' ? 'fit-contain' : 'fit-cover';
  const frameClass = `media-trigger${media.studioFrame ? ' is-studio' : ''}${
    media.letterbox ? ' is-letterbox' : ''
  }`;

  return (
    <button
      type="button"
      className={frameClass}
      onClick={() => onOpen({ ...media, src })}
      aria-label={`Inspect ${media.alt || 'media'}`}
    >
      {media.type === 'video' ? (
        <video
          className={`media-asset ${fitClass}`}
          autoPlay
          loop
          muted
          playsInline
          poster={media.poster}
        >
          <source src={src} type="video/webm" />
        </video>
      ) : (
        <img
          className={`media-asset ${fitClass}`}
          src={src}
          alt={media.alt}
          loading="lazy"
          onError={handleError}
        />
      )}
      <span className="media-expand-badge" aria-hidden="true">
        <Maximize2 size={13} strokeWidth={2} />
      </span>
    </button>
  );
}
