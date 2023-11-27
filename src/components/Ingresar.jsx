import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";
import { mensajes_error } from "../schemas/mensajes_error";


const initialValues = {
  email: "",
  password: "",
  
};

const Ingresar = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Autentica tus Credenciales</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={mensajes_error}
        >
          <Form autoComplete="off">
            <fieldset>
            
              <label htmlFor="email">Digita tu email </label>
              <Field name="email" id="email" type="email" autoFocus />
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
            <button type="submit" onClick={() => setStep("Elegir")}>Ingresar</button>
          </Form>
        </Formik>
      </div>
      <p>
        No tienes Usuario?{" "}
        <span onClick={() => setStep("Crear")}>Crearlo</span>
      </p>
      <p>
        No recuerdas tu contraseña?{" "}
        <span onClick={() => setStep("Cambia")}>reestablecer</span>
      </p>
    </main>
  );
};

export default Ingresar;