import tuVideoImg from "../assets/tu-video-1.png"
import MakeItRealIcon from "../assets/makeItRealLogo.png"

const Experience = () => {
  return (
    <section className="h-dvh bg-primary-700">
      <div className="container m-auto pt-12 h-full flex flex-col">
        <h2 className="text-secondary-base mb-6">Experiencia</h2>
        <div className="flex gap-12 items-center flex-1 pb-12">
          <img src={tuVideoImg} alt="TuVideo presentation image" />
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img src={MakeItRealIcon} alt="Make It Real Logo" />
              <h5>
                <span className="block text-secondary-base">Make It Real</span>
                <span className="block">Desarrollador Fullstack</span>
              </h5>
            </div>
            <p className="mb-5">Jul 2022 - Actualidad - Full-time</p>
            <h6 className="mb-2 font-bold">TuVideo (Video Platform)</h6>
            <p className="mb-2">App que te permite ver y compartir videos con otras personas. Puedes crear una cuenta y subir tus propios videos 📽️, o ver los que han subido otros usuarios. También puedes dejar comentarios ✍️ y decir lo que te gusta o no de los videos. Además, puedes personalizar tu canal 🎨 y hacerlo más atractivo para tus seguidores.</p>
            <p>Me encargué de diseñar y programar el modelo de Usuario/Canal, permitiendo al usuario crear, leer, actualizar y eliminar su información personal y de su canal. También implementé la sección de edición total del Canal, donde el usuario puede personalizar el aspecto y el contenido de su canal según sus preferencias. Finalmente, colaboré en la sección de comentarios, desarrollando la lógica del backend para facilitar la interacción entre los usuarios.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
