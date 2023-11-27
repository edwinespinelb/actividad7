import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";
import { mensajes_error } from "../schemas/mensajes_error";

const initialValues = {
  transporte: "",
  bl: "",
  password: "",
  confirm: "",
  framework: "",
  terms: false,
};

const Elegir = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Elige tus opciones</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={mensajes_error}
        >
          <Form autoComplete="off">
          <fieldset>
              <label htmlFor="transporte">Elige tu medio de transporte</label>
              <Field name="transporte" id="transporte" as="select" autoFocus>
                <option value="maritimo">Maritimo</option>
                <option value="terreste">Terrestre</option>
                <option value="multimodal">Multimodal</option>
                <option value="aereo">Aereo</option>
              </Field>
              <ErrorMessage
                name="transporte"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="BL">Digita el Numero de BL</label>
              <Field name="bl" id="bl" type="text" />
              <ErrorMessage
                name="bl"
                component="p"
                className="error-message"
              />
            </fieldset>
            
            <fieldset>
              <label htmlFor="icoterm">Elige el termino de negociacion</label>
              <Field name="icoterm" id="icoterm" as="select">
                <option value="FOB">FOB</option>
                <option value="FCA">FCA</option>
                <option value="EXW">EWX</option>
              </Field>
              <ErrorMessage
                name="icoterm"
                component="p"
                className="error-message"
              />
            </fieldset>

            
            <fieldset>
              <label htmlFor="dropoff">
                <Field name="dropoff" id="dropoff" type="checkbox" /> tiene aprobado Dropoff
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message error-message-terms"
              />
            </fieldset>
            <button type="submit">Registrate</button>
          </Form>
        </Formik>
      </div>
      <br />
    </main>
  );
};

export default Elegir;