import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import useResponsive from "../hooks/useResponsive";

const links = [
  { href: "#about", label: "Acerca de mi" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contacto" },
  { href: "https://dev.to/royandresdev_", label: <>Blog <Icon icon="mdi:open-in-new" /></>, target: "_blank" },
];

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
        {
          links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.target}
              className="flex items-center gap-2"
            >
              {link.label}
            </a>
          ))
        }
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
        {
          links.map((link) => (
            <a
              key={link.href}
              onClick={handleMenuClose}
              href={link.href}
              className="text-2xl"
            >
              {link.label}
            </a>
          ))
        }
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
