import * as Yup from "yup";

export const mensajes_error = Yup.object().shape({
  nombre: Yup.string().required("Nombres y apellidos requeridos"),
  email: Yup.string()
    .email("Ingrese un correo valido")
    .required("Tu Email es requerido"),
  password: Yup.string()
    .min(8, "Tu contraseña debe contener mas de 8 caracteres")
    .matches(
      /(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "Tu contraseña debe contener Mayusculas, Minusculas, Carateres especiales y Numeros"
    )
    .required("Tu contraseña es requerida"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Debes confirmar la contraseña digitada anteriormente")
    .required("Debes confirmar tu contraseña"),
  transporte: Yup.string()
    .oneOf(["maritimo", "terrestre", "multimodal", "aereo"], "Debes seleccionar una opcion")
    .required("Medio de transporte requerido"),
  terms: Yup.bool().oneOf([true], "Debes aceptar los terminos"),
  bl: Yup.string().required("ingrese Numero de BL"),
});
