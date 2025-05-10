import Frame from "./Frame"

const ProjectCard = ({ image, name, technologies, description, linkDemo, linkRepo, linkFigma }) => {
  return (
    <Frame className="bg-primary-600 px-8 pt-4 pb-8">
      <div>
        <img className="max-w-[342px]" src={image} alt="Project Image" />
      </div>
      <h3>{name}</h3>
      <div className="space-x-2 mb-4">
        {
          technologies.map((tech) => <span className="bg-primary-500 px-1 py-0.5 rounded text-secondary-base">{tech}</span>)
        }
      </div>
      <p className="w-[320px] mb-4">
        {description}
      </p>
      <div className="space-x-2">
        <a href={linkDemo} target="_blank" className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Demo</a>
        <a href={linkRepo} target="_blank" className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Repositorio</a>
        <a href={linkFigma} target="_blank" className="text-secondary-base px-2 py-1 border border-secondary-base rounded">Figma</a>
      </div>
    </Frame>
  )
}
export default ProjectCard
