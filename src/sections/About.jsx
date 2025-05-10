import { Icon } from "@iconify/react/dist/iconify.js";
import AvatarSrc from "../assets/Avatar.jpg"
import { Frame } from '../components'

const About = () => {
  return (
    <section className="bg-primary-700">
      <div className="container mx-auto h-dvh flex items-center gap-6 justify-center">
        <Frame>
          <div className="size-[500px] overflow-hidden">
            <img className="w-full" src={AvatarSrc} alt="Foto de Roy Huaman" />
          </div>
        </Frame>
        <div className="flex-1/2 max-w-[500px]">
          <p className="text-grey- tracking-widest mb-6">- MI NOMBRE ES</p>
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
          <div className="flex gap-4">
            <a href="#">
              <Icon icon="mdi:github" className="text-4xl text-primary-100" />
            </a>
            <a href="#">
              <Icon icon="mdi:linkedin" className="text-4xl text-primary-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
