import { useEffect, useRef } from "react"
import Logo from "../assets/Logo.svg"
import { Icon } from "@iconify/react/dist/iconify.js"
const NavBar = ({ currentSection }) => {
  const navbarRef = useRef()

  useEffect(() => {
    if (navbarRef.current) {
      const linksCollection = Array.from(navbarRef.current.children[0].children);

      linksCollection.forEach((link) => {
        if (!link.getAttribute("href")) return

        if (!link.getAttribute("href").includes(currentSection)) {
          link.classList.remove("active");
        } else {
          link.classList.add("active");
        }
      });
    }
  }, [currentSection])

  return (
    <nav id="navbar" ref={navbarRef} className="fixed top-0 left-0 w-full bg-primary-400 shadow min-h-[56px] overflow-x-hidden">
      <div className="container mx-auto py-4 flex gap-3 md:justify-center justify-between relative px-4">
        <img className="md:absolute left-0 top-1/2 md:transform md:-translate-y-1/2" src={Logo} alt="Logo RoyAndresDev" />
        <a href="#about" className="md:block hidden">Acerca de mi</a>
        <a href="#projects" className="md:block hidden">Proyectos</a>
        <a href="#experience" className="md:block hidden">Experiencia</a>
        <a href="#skills" className="md:block hidden">Habilidades</a>
        <a href="#contact" className="md:block hidden">Contacto</a>
        <Icon icon="mi:menu" className="size-10 text-secondary-base md:hidden" />
      </div>
    </nav>
  )
}
export default NavBar
