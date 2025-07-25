import { Frame } from "../components"
import certificate from "../assets/certificate.svg"
import universityGrade from "../assets/universityGrade.svg"
import { Icon } from "@iconify/react/dist/iconify.js"


const Skills = () => {
  return (
    <section id="skills" className="section-container bg-primary-700 min-h-fit">
      <div className="section-content">
        <span className="section-title">- MI APRENDIZAJE</span>
        <h2 className="text-secondary-base mb-4">Educación y Habilidades</h2>
        <div className="flex justify-between flex-col md:flex-row gap-8">
          <div>
            <div className="mb-8 flex gap-4 items-center">
              <img src={universityGrade} alt="University Grade Icon" />
              <div>
                <h3 className="font-bold">Instituto San Ignacio de Loyola</h3>
                <p>Ingeniería de Software</p>
                <p>2021 - actualmente</p>
              </div>
            </div>
            <div className="mb-8 flex gap-4 items-center">
              <img src={certificate} alt="Certificate Icon" />
              <div>
                <h3 className="font-bold">Cibertec</h3>
                <p>Java</p>
                <p>2020 - 2021</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-fit">
            <p className="mb-4 max-w-[660px]">En esta sección puedes ver las tecnologías que domino como desarrollador frontend. Estas son las que uso para diseñar aplicaciones y páginas web:</p>
            <Frame styleContent="flex flex-wrap justify-center gap-4 py-4 items-center bg-primary-400">
              <div className="px-4">
                <Icon icon="mdi:react" className="text-7xl text-secondary-100" />
                <p className="text-center">React</p>
              </div>
              <div className="px-4">
                <Icon icon="mdi:tailwind" className="text-7xl text-secondary-100" />
                <p className="text-center">Tailwind</p>
              </div>
              <div className="px-4">
                <Icon icon="akar-icons:redux-fill" className="text-7xl text-secondary-100" />
                <p className="text-center">Redux</p>
              </div>
              <div className="px-4">
                <Icon icon="akar-icons:javascript-fill" className="text-7xl text-secondary-100" />
                <p className="text-center">JavaScript</p>
              </div>
              <div className="px-4">
                <Icon icon="akar-icons:html-fill" className="text-7xl text-secondary-100" />
                <p className="text-center">HTML</p>
              </div>
              <div className="px-4">
                <Icon icon="simple-icons:css" className="text-7xl text-secondary-100" />
                <p className="text-center">CSS</p>
              </div>
            </Frame>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
