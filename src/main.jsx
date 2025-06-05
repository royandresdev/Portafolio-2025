import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const gtagId = import.meta.env.VITE_GTAG_ID;

if (gtagId) {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", gtagId);
} else {
  console.error("Google Analytics ID no está definido.");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
