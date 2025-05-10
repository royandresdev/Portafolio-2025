import { ProjectCard } from "../components"

const Projects = () => {
  return (
    <section className="h-dvh bg-primary-700">
      <div className="container m-auto pt-4">
        <h2 className="text-secondary-base">Proyectos Recientes</h2>
        <p className="mb-8">En esta sección puedes ver algunos de los proyectos que he realizado o en los que estoy trabajando actualmente.</p>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}
export default Projects
