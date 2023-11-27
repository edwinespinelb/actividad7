import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";
import { mensajes_error } from "../schemas/mensajes_error";


const initialValues = {
  nombre: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const Crear = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Bienvenido, Por favor crea tu usuario</h3>
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
            <fieldset>
              <label htmlFor="password">Digita tu contraseña</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirma tu contraseña</label>
              <Field name="confirm" id="confirm" type="password" />
              <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field name="terms" id="terms" type="checkbox" /> Acepto los terminos y condiciones
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message error-message-terms"
              />
            </fieldset>
            <button type="submit" onClick={() => setStep("Ingresar")}>Registrate</button>
          </Form>
        </Formik>
      </div>
      <br />
    </main>
  );
};

export default Crear;