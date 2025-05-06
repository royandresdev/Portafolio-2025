import { Frame } from "../components"
import edutrackImg from "../assets/edutrack-1.png"

const Projects = () => {
  return (
    <section className="h-dvh bg-primary-700">
      <div className="container m-auto pt-4">
        <h2 className="text-secondary-base">Proyectos Recientes</h2>
        <p className="mb-8">En esta sección puedes ver algunos de los proyectos que he realizado o en los que estoy trabajando actualmente.</p>
        <div>
          <Frame className="bg-primary-600 px-8 pt-4 pb-8">
            <div>
              <img src={edutrackImg} alt="Project Image" />
            </div>
            <h3>EDUTRACK</h3>
            <div className="space-x-2 mb-4">
              <span className="bg-primary-500 px-1 py-0.5 rounded text-secondary-base">React</span>
              <span className="bg-primary-500 px-1 py-0.5 rounded text-secondary-base">TailwindCSS</span>
              <span className="bg-primary-500 px-1 py-0.5 rounded text-secondary-base">Javascript</span>
            </div>
            <p className="w-[320px] mb-4">
              Solución digital diseñada para mejorar la comunicación y el seguimiento del progreso académico entre estudiantes, padres y profesores. El objetivo es ofrecer un entorno donde el rendimiento académico pueda ser monitoreado de manera transparente y efectiva.
            </p>
            <div className="space-x-2">
              <button className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Demo</button>
              <button className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Repositorio</button>
              <button className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Figma</button>
            </div>
          </Frame>
        </div>
      </div>
    </section>
  )
}
export default Projects
