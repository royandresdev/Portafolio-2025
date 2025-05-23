import { Icon } from "@iconify/react/dist/iconify.js";
import AvatarSrc from "../assets/Avatar.jpg"
import { Frame } from '../components'

const About = () => {
  return (
    <section id="about" className="section-container pt-14 bg-primary-700">
      <div className="section-content flex gap-6 justify-center">
        <Frame>
          <div className="size-[500px] overflow-hidden">
            <img className="w-full" src={AvatarSrc} alt="Foto de Roy Huaman" />
          </div>
        </Frame>
        <div className="flex-1/2 max-w-[500px]">
          <span className="section-title">- MI NOMBRE ES</span>
          <h1 className="leading-14 mb-6">
            <span className="text-secondary-base block">Roy Huaman</span>
            Frontend Developer
          </h1>
          <p className="mb-6">
            ¡Bienvenido! Soy un entusiasta de la programación. Desde siempre me ha fascinado entender cómo funciona el software. Al codificar, siento que tengo la libertad de explotar al máximo mi creatividad, creando código sólido y profesional.
          </p>
          <p className="mb-6">
            Me encanta mostrar los resultados a los usuarios, lo que me apasiona de esta área. Estoy comprometido con sacar adelante mis proyectos y que estos sean reconocidos.
          </p>
          <div className="flex gap-3">
            <a href="https://github.com/royandresdev" target="_blank">
              <Icon icon="mdi:github" className="text-4xl text-primary-100 hover:text-secondary-base" />
            </a>
            <a href="https://www.linkedin.com/in/royhuamanavila" target="_blank">
              <Icon icon="mdi:linkedin" className="text-4xl text-primary-100 hover:text-secondary-base" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
