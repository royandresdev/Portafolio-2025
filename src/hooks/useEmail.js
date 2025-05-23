import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export function useEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      );
      console.log(result.text);
      alert("Mensaje enviado");
    } catch (error) {
      console.log(error.text);
      alert("Error al enviar el mensaje");
    } finally {
      setIsLoading(false);
    }
  };

  return { formRef, sendEmail, isLoading };
}
