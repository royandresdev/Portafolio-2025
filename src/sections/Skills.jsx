import { Frame } from "../components"
import reactLogo from "../assets/reactLogo.svg"
import tailwindLogo from "../assets/tailwindLogo.svg"
import reduxLogo from "../assets/reduxLogo.svg"
import javascriptLogo from "../assets/javascriptLogo.svg"
import htmlLogo from "../assets/htmlLogo.svg"
import cssLogo from "../assets/cssLogo.svg"
import certificate from "../assets/certificate.svg"
import universityGrade from "../assets/universityGrade.svg"


const Skills = () => {
  return (
    <section id="skills" className="section-container bg-primary-700">
      <div className="section-content">
        <span className="section-tittle">- MI APRENDIZAJE</span>
        <h2 className="text-secondary-base mb-4">Educación y Habilidades</h2>
        <div className="flex justify-between">
          <div>
            <div className="mb-8 flex gap-4 items-center">
              <img src={universityGrade} alt="University Grade Icon" />
              <div>
                <h6 className="font-bold">Instituto San Ignacio de Loyola</h6>
                <p>Ingeniería de Software</p>
                <p>2021 - actualmente</p>
              </div>
            </div>
            <div className="mb-8 flex gap-4 items-center">
              <img src={certificate} alt="Certificate Icon" />
              <div>
                <h6 className="font-bold">Cibertec</h6>
                <p>Java</p>
                <p>2020 - 2021</p>
              </div>
            </div>
          </div>
          <div className="w-[660px]">
            <p className="mb-4">En esta sección puedes ver las tecnologías que domino como desarrollador frontend. Estas son las que uso para diseñar aplicaciones y páginas web:</p>
            <Frame className="flex gap-4 py-4 items-center bg-primary-base">
              <div className="px-4">
                <img className="h-[72px] w-auto" src={reactLogo} alt="React Logo" />
                <p className="text-center">React</p>
              </div>
              <div className="px-4">
                <img className="h-[72px] w-auto" src={tailwindLogo} alt="Tailwind CSS Logo" />
                <p className="text-center">Tailwind</p>
              </div>
              <div className="px-4">
                <img className="h-[72px] w-auto" src={reduxLogo} alt="Redux Logo" />
                <p className="text-center">Redux</p>
              </div>
              <div className="px-4">
                <img className="h-[72px] w-auto" src={javascriptLogo} alt="JavaScript Logo" />
                <p className="text-center">JavaScript</p>
              </div>
              <div className="px-4">
                <img className="h-[72px] w-auto" src={htmlLogo} alt="HTML Logo" />
                <p className="text-center">HTML</p>
              </div>
              <div className="px-4">
                <img className="h-[72px] w-auto" src={cssLogo} alt="CSS Logo" />
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
