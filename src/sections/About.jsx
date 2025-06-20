import { Icon } from "@iconify/react/dist/iconify.js";
import { Frame } from "../components";

const About = () => {
  return (
    <section
      id="about"
      className="section-container min-h-dvh pt-20 md:pt-[56px] bg-primary-700"
    >
      <div className="section-content flex flex-col md:flex-row gap-6 justify-center">
        <Frame styleFrame="order-2 md:order-1 mx-4">
          <div className="w-full aspect-square overflow-hidden md:max-w-[500px]">
            <picture>
              <source
                media="(min-width:650px)"
                srcSet="https://res.cloudinary.com/dcvwghrfp/image/upload/f_webp,q_auto,w_1000/Avatar.webp"
              />
              <img src="https://res.cloudinary.com/dcvwghrfp/image/upload/f_webp,q_auto,w_400/Avatar.webp" alt="Imagen de Roy Huaman" />
            </picture>
          </div>
        </Frame>
        <div className="md:flex-1/2 max-w-[500px] md:order-2">
          <span className="section-title text-sm md:text-base">
            - MI NOMBRE ES
          </span>
          <h1 className="md:leading-14 mb-6 text-3xl md:text-5xl">
            <span className="text-secondary-base block">Roy Huaman</span>
            Frontend Developer
          </h1>
          <p className="mb-6 text-sm md:text-base">
            ¡Bienvenido! Soy un entusiasta de la programación. Desde siempre me
            ha fascinado entender cómo funciona el software. Al codificar,
            siento que tengo la libertad de explotar al máximo mi creatividad,
            creando código sólido y profesional.
          </p>
          <p className="mb-6 text-sm md:text-base">
            Me encanta mostrar los resultados a los usuarios, lo que me apasiona
            de esta área. Estoy comprometido con sacar adelante mis proyectos y
            que estos sean reconocidos.
          </p>
          <a
            className="btn-primary mb-4"
            href="/ROY HUAMAN AVILA.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="text-2xl" icon="basil:document-solid" /> Revisar CV
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/royandresdev"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
            >
              <Icon
                icon="mdi:github"
                className="text-4xl text-primary-100 hover:text-secondary-base"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/royhuamanavila"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
            >
              <Icon
                icon="mdi:linkedin"
                className="text-4xl text-primary-100 hover:text-secondary-base"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
