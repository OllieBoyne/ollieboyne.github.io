import React from 'react';

/**
 * Renders an array of text/link segments cleanly without raw HTML injection.
 */
export function RichText({ segments }) {
  return (
    <>
      {segments.map((seg, idx) => {
        if (!seg.href) {
          return <React.Fragment key={idx}>{seg.text}</React.Fragment>;
        }
        const isInternalAnchor = seg.href.startsWith('#');
        return (
          <a
            key={idx}
            href={seg.href}
            target={isInternalAnchor ? undefined : '_blank'}
            rel={isInternalAnchor ? undefined : 'noreferrer'}
          >
            {seg.text}
          </a>
        );
      })}
    </>
  );
}
