import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// GitHub Pages SPA redirect handling (only in production)
// https://github.com/rafgraph/spa-github-pages
if (process.env.NODE_ENV === 'production') {
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// 只在生产环境使用 basename
const basename = process.env.NODE_ENV === 'production' ? '/qinlin2026' : '';

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
