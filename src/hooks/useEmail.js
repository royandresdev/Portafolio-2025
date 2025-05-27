import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export function useEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async () => {
    setIsLoading(true);
    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
    } catch (error) {
      throw new Error("Error al enviar el mensaje: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return { formRef, sendEmail, isLoading };
}
