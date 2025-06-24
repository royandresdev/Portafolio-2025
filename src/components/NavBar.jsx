import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import useResponsive from "../hooks/useResponsive";

const NavbarDesktop = ({ currentSection }) => {
  const navbarDesktopRef = useRef();

  useEffect(() => {
    if (navbarDesktopRef.current) {
      const linksCollection = Array.from(navbarDesktopRef.current.children);

      linksCollection.forEach((link) => {
        if (!link.getAttribute("href")) return;

        if (!link.getAttribute("href").includes(currentSection)) {
          link.classList.remove("active");
        } else {
          link.classList.add("active");
        }
      });
    }
  }, [currentSection]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-primary-400 shadow min-h-[56px] overflow-x-hidden"
    >
      <div
        ref={navbarDesktopRef}
        className="container mx-auto py-4 flex gap-3 md:justify-center justify-between relative px-4"
      >
        <img
          className="md:absolute left-4 top-1/2 md:transform md:-translate-y-1/2"
          src={Logo}
          alt="Logo RoyAndresDev"
        />
        <a href="#about" className="md:block hidden">
          Acerca de mi
        </a>
        <a href="#projects" className="md:block hidden">
          Proyectos
        </a>
        <a href="#experience" className="md:block hidden">
          Experiencia
        </a>
        <a href="#skills" className="md:block hidden">
          Habilidades
        </a>
        <a href="#contact" className="md:block hidden">
          Contacto
        </a>
      </div>
    </nav>
  )
}

const NavBarMobile = ({ currentSection }) => {
  const sideMenuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (sideMenuRef.current) {
      const linksCollection = Array.from(sideMenuRef.current.children);

      linksCollection.forEach((link) => {
        if (!link.getAttribute("href")) return;

        if (!link.getAttribute("href").includes(currentSection)) {
          link.classList.remove("active");
        } else {
          link.classList.add("active");
        }
      });
    }
  }, [currentSection, isMenuOpen]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-primary-400 shadow min-h-[56px] overflow-x-hidden"
    >
      <div
        ref={sideMenuRef}
        className="container mx-auto py-4 flex gap-3 justify-between relative px-4"
      >
        <a
          className="flex items-center justify-center"
          href="#about"
        >
          <img src={Logo} alt="Logo RoyAndresDev" />
        </a>
        <button onClick={handleMenuOpen} title="Toggle sidebar">
          <Icon
            icon="mi:menu"
            className="size-10 text-secondary-base"
          />
        </button>
      </div>
      <SideMenu sideMenuRef={sideMenuRef} isMenuOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </nav>
  )
}

const SideMenu = ({ sideMenuRef, isMenuOpen, handleMenuClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-primary-400 z-50 side-menu ${isMenuOpen ? "isOpen" : ""}`}>
      <div className="flex justify-end p-4 absolute top-0 right-0">
        <button onClick={handleMenuClose} title="Close sidebar">
          <Icon icon="mi:close" className="size-10 text-secondary-base" />
        </button>
      </div>
      <div ref={sideMenuRef} className="flex flex-col items-center justify-center h-full gap-4">
        <a onClick={handleMenuClose} href="#about" className="text-2xl">
          Acerca de mi
        </a>
        <a onClick={handleMenuClose} href="#projects" className="text-2xl">
          Proyectos
        </a>
        <a onClick={handleMenuClose} href="#experience" className="text-2xl">
          Experiencia
        </a>
        <a onClick={handleMenuClose} href="#skills" className="text-2xl">
          Habilidades
        </a>
        <a onClick={handleMenuClose} href="#contact" className="text-2xl">
          Contacto
        </a>
      </div>
    </div>
  )
}

const NavBar = ({ currentSection }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <>
      {isDesktop && <NavbarDesktop currentSection={currentSection} />}
      {(isMobile || isTablet) && <NavBarMobile currentSection={currentSection} />}
    </>
  );
};
export default NavBar;
