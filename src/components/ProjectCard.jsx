import { InlineIcon } from "@iconify/react/dist/iconify.js"
import Frame from "./Frame"

const ProjectCard = ({ project }) => {
  const { name, description, image, technologies, linkDemo, linkRepo, linkFigma } = project
  return (
    <Frame styleContent="bg-primary-600 px-8 pt-4 pb-8 flex flex-col gap-3 flex-1 w-full h-full" styleFrame="h-full">
      <div>
        <img src={image} alt="Project Image" />
      </div>
      <h4 className="">{name}</h4>
      <div className="space-x-2 ">
        {
          technologies.map((tech) => <span className="bg-primary-500 px-1 py-0.5 rounded text-secondary-base">{tech}</span>)
        }
      </div>
      <p className="w-full flex-1">
        {description}
      </p>
      <div className="space-x-2">
        <a href={linkDemo} target="_blank" className="btn-secondary-outline">
          <InlineIcon icon="material-symbols:monitor" className="inline" /> Demo
        </a>
        <a href={linkRepo} target="_blank" className="btn-secondary-outline">
          <InlineIcon icon="mdi:github" className="inline text-lg" /> Repositorio
        </a>
        <a href={linkFigma} target="_blank" className="btn-secondary-outline">
          <InlineIcon icon="gg:figma" className="inline" /> Figma
        </a>
      </div>
    </Frame>
  )
}
export default ProjectCard
