import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components'
import { About, Contact, Experience, Projects, Skills } from './sections'

function App() {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-container");

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        console.log(visibleEntry.target.id)
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
  return (
    <main>
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
