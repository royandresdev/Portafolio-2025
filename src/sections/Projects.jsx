import { ProjectCard } from "../components"
import { Carousel } from "../components"
import useProjects from "../hooks/useProjects"

const Projects = () => {
  const { projects } = useProjects()

  return (
    <section id="projects" className="section-container bg-primary-700">
      <div className="section-content md:px-0">
        <span className="section-title">- MIS PROYECTOS</span>
        <h2 className="text-secondary-base text-2xl md:text-[40px] mb-4">Proyectos Recientes</h2>
        <p className="mb-8 text-sm md:text-base">En esta sección puedes ver algunos de los proyectos que he realizado o en los que estoy trabajando actualmente.</p>
        <Carousel itemsToView="auto" style={{ height: "600px" }}>
          {
            projects?.map((project) => <ProjectCard key={project.id} project={project} />)
          }
        </Carousel>
      </div>
    </section>
  )
}
export default Projects
