import { useEffect, useRef } from "react"
import Logo from "../assets/Logo.svg"
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
    <nav id="navbar" ref={navbarRef} className="fixed bg-primary-600 left-0 right-0 shadow">
      <div className="container mx-auto py-4 flex gap-3 justify-center relative">
        <img className="absolute left-0 top-1/2 transform -translate-y-1/2" src={Logo} alt="Logo RoyAndresDev" />
        <a href="#about">Acerca de mi</a>
        <a href="#projects">Proyectos</a>
        <a href="#experience">Experiencia</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contacto</a>
      </div>
    </nav>
  )
}
export default NavBar
