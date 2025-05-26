import { Icon } from "@iconify/react";
import { ContactForm } from "../components";
const Contact = () => {
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
          <ContactForm />
          <div className="space-y-8">
            <div className="flex gap-4 items-center">
              <Icon
                height={24}
                icon="mdi:location"
                className="text-secondary-base"
              />
              <div>
                <p>Dirección</p>
                <a
                  href="https://maps.app.goo.gl/LxKoSHqiybmKi9ZD9"
                  target="_blank"
                  className="text-secondary-base hover:text-secondary-200 transition-colors duration-300"
                >
                  Lima, Perú
                </a>
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
                <a
                  href="https://wa.link/gijicg"
                  target="_blank"
                  className="text-secondary-base hover:text-secondary-200 transition-colors duration-300"
                >
                  985 928 578
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Icon
                height={24}
                icon="material-symbols:mail"
                className="text-secondary-base "
              />
              <div>
                <p>Correo</p>
                <a
                  href="mailto:contact@royandresdev.com"
                  className="text-secondary-base hover:text-secondary-200 transition-colors duration-300"
                >
                  contact@royandresdev.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
