import { projects } from "../constants"
import { ProjectCard } from "../components"

const Projects = () => {
  return (
    <section className="section-container bg-primary-700">
      <div className="section-content">
        <span className="section-tittle">- MIS PROYECTOS</span>
        <h2 className="text-secondary-base">Proyectos Recientes</h2>
        <p className="mb-8">En esta sección puedes ver algunos de los proyectos que he realizado o en los que estoy trabajando actualmente.</p>
        <div>
          {
            projects.map((project) => <ProjectCard	{...project} />)
          }
        </div>
      </div>
    </section>
  )
}
export default Projects
