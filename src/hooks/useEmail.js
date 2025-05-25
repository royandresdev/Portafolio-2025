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
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      );
      console.log("Su mensaje ha sido enviado correctamente: " + result.text);
      alert("Su mensaje ha sido enviado correctamente: " + result.text);
    } catch (error) {
      throw new Error("Error al enviar el mensaje: " + error);
    } finally {
      setIsLoading(false);
      formRef.current.reset();
    }
  };

  return { formRef, sendEmail, isLoading };
}
