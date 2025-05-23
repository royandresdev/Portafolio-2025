import { Icon } from "@iconify/react";
import { useEmail } from "../hooks/useEmail";

const Contact = () => {
  const { formRef, sendEmail, isLoading } = useEmail();

  return (
    <section id="contact" className="section-container bg-primary-700">
      <div className="section-content">
        <span className="section-title">- DÉJAME UN MENSAJE</span>
        <h2 className="text-secondary-base">Contacto</h2>
        <p className="mb-6">
          Gracias por visitar mi portafolio web. Espero que te haya gustado lo
          que has visto. Aquí puedes encontrar mis datos de contacto.
        </p>
        <div className="flex items-start w-full gap-12">
          <form className="w-[600px]" ref={formRef} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="block bg-primary-600 border border-primary-300 rounded w-full text-primary-100 p-2"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Correo
              </label>
              <input
                className="form-input w-full"
                type="text"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="form-input w-full"
                type="text"
                id="message"
                name="message"
              />
            </div>
            <input
              disabled={isLoading}
              className="btn-secondary w-full"
              type="submit"
              value={isLoading ? "Enviando..." : "Enviar Mensaje"}
            />
          </form>
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <Icon
                height={24}
                icon="mdi:location"
                className="text-secondary-base"
              />
              <div>
                <p>Dirección</p>
                <p className="text-secondary-base">Lima, Perú</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Icon
                height={24}
                icon="ic:round-phone"
                className="text-secondary-base"
              />
              <div>
                <p>Celular</p>
                <p className="text-secondary-base">985 928 578</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Icon
                height={24}
                icon="material-symbols:mail"
                className="text-secondary-base"
              />
              <div>
                <p>Correo</p>
                <p className="text-secondary-base">info@royandresdev.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
