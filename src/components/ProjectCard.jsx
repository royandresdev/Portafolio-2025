import { InlineIcon } from "@iconify/react/dist/iconify.js";
import Frame from "./Frame";

const ProjectCard = ({ project }) => {
  const {
    name,
    description,
    image,
    technologies,
    linkDemo,
    linkRepo,
    linkFigma,
  } = project;
  return (
    <Frame
      styleContent="bg-primary-400 px-8 pt-4 pb-8 flex flex-col gap-3 flex-1 w-full h-full"
      styleFrame="h-full project-card"
    >
      <div>
        <img src={image} alt="Project Image" />
      </div>
      <h4 className="">{name}</h4>
      <div className="space-x-2 ">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-primary-base px-1 py-0.5 rounded text-primary-100 text-sm md:text-base"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="w-full flex-1 text-sm md:text-base">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {linkDemo && (
          <a href={linkDemo} target="_blank" className="btn-secondary-outline">
            <InlineIcon icon="material-symbols:monitor" className="inline" />{" "}
            Demo
          </a>
        )}
        {linkRepo && (
          <a href={linkRepo} target="_blank" className="btn-secondary-outline">
            <InlineIcon icon="mdi:github" className="inline text-lg" />{" "}
            Repositorio
          </a>
        )}
        {linkFigma && (
          <a href={linkFigma} target="_blank" className="btn-secondary-outline">
            <InlineIcon icon="gg:figma" className="inline" /> Figma
          </a>
        )}
      </div>
    </Frame>
  );
};
export default ProjectCard;
