import './App.css'
import { NavBar } from './components'
import { About, Contact, Experience, Projects, Skills } from './sections'

function App() {
  return (
    <main>
      <NavBar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
