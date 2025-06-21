import { useEffect, useState } from 'react'
import './App.css'
import { BannerCookies, NavBar } from './components'
import { About, Contact, Experience, Projects, Skills } from './sections'
import { Toaster } from 'sonner';
import { ApplicationProvider } from './state/Application/ApplicationProvider';
import useApplication from './hooks/useApplication';

const gtagId = import.meta.env.VITE_GTAG_ID;

function App() {
  const [currentSection, setCurrentSection] = useState(null);
  const { isAcceptedCookies } = useApplication();

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
    if (gtagId && isAcceptedCookies) {
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
  }, [isAcceptedCookies])

  return (
    <ApplicationProvider>
      <main className='relative overflow-hidden bg-primary-700'>
        <Toaster />
        <NavBar currentSection={currentSection} />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <BannerCookies />
      </main>
    </ApplicationProvider>
  )
}

export default App
