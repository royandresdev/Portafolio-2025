import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

function BannerCookies() {
  const [consented, setConsented] = useState(
    localStorage.getItem("cookiesAccepted")
  );
  const [isOpen, setIsOpen] = useState(consented === null || consented === "false");

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setConsented(true);
    setIsOpen(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setConsented(false);
    setIsOpen(false);
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-10 ${isOpen ? "fixed" : "hidden"}
        }`}
    >
      <div className="container flex flex-wrap gap-3 items-center bg-primary-400 text-primary-100 mx-auto mb-4 p-4 rounded-[20px]">
        <Icon
          icon="material-symbols:cookie"
          fontSize="2.5rem"
          color="var(--color-secondary-base)"
        />
        <p className="text-primary-100 md:flex-1">
          Este sitio utiliza cookies para mejorar tu experiencia, analizar
          estadísticas y mostrar contenido embebido como videos de YouTube.
          Puedes aceptarlas o gestionarlas cuando lo desees.
        </p>
        <div className="flex gap-4 ml-4">
          <button
            className="text-primary-100 cursor-pointer hover:text-primary-200"
            onClick={handleRejectCookies}
          >
            Rechazar
          </button>
          <button className="btn-secondary" onClick={handleAcceptCookies}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
export default BannerCookies;
