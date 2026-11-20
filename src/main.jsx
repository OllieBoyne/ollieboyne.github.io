import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tokens.css';
import './styles/global.css';

const LEGACY_REDIRECTS = {
  '/found': 'https://ollieboyne.github.io/FOUND',
  '/find': 'https://ollieboyne.github.io/FIND',
  '/synfoot': 'https://github.com/OllieBoyne/SynFoot',
  '/wldo': 'https://sites.google.com/view/wldo',
};

// Preserve GitHub Pages 404.html session redirect behavior
(function restoreRedirect() {
  try {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== window.location.href) {
      window.history.replaceState(null, '', redirect);
    }
  } catch {
    // Ignore sessionStorage errors
  }
})();

const normalizedPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
const redirectTarget = LEGACY_REDIRECTS[normalizedPath];

if (redirectTarget) {
  window.location.replace(redirectTarget);
} else {
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
