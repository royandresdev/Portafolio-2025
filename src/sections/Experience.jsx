import MakeItRealIcon from "../assets/makeItRealLogo.png";
import useApplication from "../hooks/useApplication";

const Experience = () => {
  const { isAcceptedCookies } = useApplication();
  return (
    <section id="experience" className="section-container bg-primary-700">
      <div className="section-content">
        <div>
          <span className="section-title">- RUTA DE CARRERA</span>
          <h2 className="text-secondary-base mb-6">Experiencia</h2>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-12 items-center flex-1 pb-12">
          <div className="w-full h-auto md:min-w-[650px] order-2 md:order-1">
            {
              isAcceptedCookies ? (
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube-nocookie.com/embed/-SJfrF_vJ3A?si=TTO7f-YBR8tPcwUh"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <a href="https://www.youtube.com/watch?v=-SJfrF_vJ3A" target="_blank" rel="noopener noreferrer" title="Watch the TuVideo project demonstration on YouTube">
                  <img src="https://res.cloudinary.com/dcvwghrfp/image/upload/v1750507576/TuVideo-YoutubePlaceholder.webp" alt="Placeholder image for TuVideo project demonstration video" />
                </a>
              )
            }
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-4 mb-2">
              <img src={MakeItRealIcon} alt="Make It Real Logo" />
              <h3>
                <span className="block text-secondary-base">Make It Real</span>
                <span className="block">Desarrollador Fullstack</span>
              </h3>
            </div>
            <p className="mb-5">Jul 2022 - Actualidad - Full-time</p>
            <h4 className="mb-2 font-bold">TuVideo (Video Platform)</h4>
            <p className="mb-2">
              App que te permite ver y compartir videos con otras personas.
              Puedes crear una cuenta y subir tus propios videos 📽️, o ver los
              que han subido otros usuarios. También puedes dejar comentarios ✍️
              y decir lo que te gusta o no de los videos. Además, puedes
              personalizar tu canal 🎨 y hacerlo más atractivo para tus
              seguidores.
            </p>
            <p className="hidden md:block">
              Me encargué de diseñar y programar el modelo de Usuario/Canal,
              permitiendo al usuario crear, leer, actualizar y eliminar su
              información personal y de su canal. También implementé la sección
              de edición total del Canal, donde el usuario puede personalizar el
              aspecto y el contenido de su canal según sus preferencias.
              Finalmente, colaboré en la sección de comentarios, desarrollando
              la lógica del backend para facilitar la interacción entre los
              usuarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
