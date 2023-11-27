import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";
import { mensajes_error } from "../schemas/mensajes_error";


const initialValues = {
  nombre: "",
  email: "",
};

const Cambia = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Digita los datos para reestablecer tus credenciales</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={mensajes_error}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="nombre">Digita tu Nombre Completo </label>
              <Field name="nombre" id="nombre" type="text" autoFocus />
              <ErrorMessage
                name="nombre"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email">Digita tu email </label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit" onClick={() => setStep("Ingresar")}>Recordar</button>
          </Form>
        </Formik>
      </div>
      <br />
    </main>
  );
};

export default Cambia;