import { useState } from "react";

import AuthContext from "./context/AuthContext";

import Crear from "./components/Crear";
import Elegir from "./components/Elegir";
import Ingresar from "./components/Ingresar";
import Cambia from "./components/Cambia";

const App = () => {
  const [step, setStep] = useState("Ingresar");

  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "Crear" && <Crear />}
        {step === "Ingresar" && <Ingresar />}
        {step === "Elegir" && <Elegir />}
        {step === "Cambia" && <Cambia />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
