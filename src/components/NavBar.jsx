import Logo from "../assets/Logo.svg"
const NavBar = () => {
  return (
    <nav className="fixed bg-primary-600 left-0 right-0 shadow">
      <div className="container mx-auto py-4 flex gap-3 justify-center relative">
        <img className="absolute left-0 top-1/2 transform -translate-y-1/2" src={Logo} alt="Logo RoyAndresDev" />
        <a className="text-secondary-base hover:text-secondary-base" href="#about">Acerca de mi</a>
        <a className="text-primary-100 hover:text-secondary-base" href="#projects">Proyectos</a>
        <a className="text-primary-100 hover:text-secondary-base" href="#experience">Experiencia</a>
        <a className="text-primary-100 hover:text-secondary-base" href="#skills">Habilidades</a>
        <a className="text-primary-100 hover:text-secondary-base" href="#contact">Contacto</a>
      </div>
    </nav>
  )
}
export default NavBar
