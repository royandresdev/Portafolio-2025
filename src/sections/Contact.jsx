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
