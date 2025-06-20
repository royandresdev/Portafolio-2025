import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components'
import { About, Contact, Experience, Projects, Skills } from './sections'
import { Toaster } from 'sonner';

const gtagId = import.meta.env.VITE_GTAG_ID;


function App() {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-container");

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setCurrentSection(visibleEntry.target.id);
      }
    }, {
      threshold: 0.7
    })

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [])

  useEffect(() => {
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
      console.error("ID no está definido.");
    }
  }, [])
  return (
    <main className='relative overflow-hidden bg-primary-700'>
      <Toaster />
      <NavBar currentSection={currentSection} />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
