import { toast } from "sonner";
import { useEmail } from "../hooks/useEmail";
import { Formik } from "formik";

function ContactForm() {
  const { formRef, sendEmail } = useEmail();

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 2) {
      errors.name = "El nombre debe tener al menos 2 caracteres";
    }
    if (!values.email) {
      errors.email = "Requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Dirección de correo inválida";
    }
    if (!values.message) {
      errors.message = "Requerido";
    } else if (values.message.length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres";
    }
    return errors;
  }

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      await sendEmail(formRef);
      toast.success("Mensaje enviado correctamente");
    } catch (error) {
      toast.error("Error al enviar el mensaje: " + error.message);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validate={validate}
      onSubmit={onSubmit}
    >
      {
        ({ handleSubmit, isSubmitting, values, handleChange, handleBlur, errors, touched }) => (
          <form className="w-[600px]" onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="form-input w-full mb-2"
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                data-error={errors.name && touched.name ? true : false}
              />
              {(touched.name && errors.name) && <div className="text-error text-sm">{errors.name}</div>}
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Correo
              </label>
              <input
                className="form-input w-full mb-2"
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                data-error={errors.email && touched.email ? true : false}
              />
              {(touched.email && errors.email) && <div className="text-error text-sm">{errors.email}</div>}
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="form-input w-full mb-2"
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                data-error={errors.message && touched.message ? true : false}
              />
              {(touched.message && errors.message) && <div className="text-error text-sm">{errors.message}</div>}
            </div>
            <input
              disabled={isSubmitting}
              className="btn-secondary w-full"
              type="submit"
              value={isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            />
          </form>
        )
      }
    </Formik>
  )
}
export default ContactForm
