import * as yup from "yup";
const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir E-Posta adresi girin.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Parolanız en az 5 karakterden oluşmalıdır")
    .required("Zorunlu Alan"),
});

export default validations;
