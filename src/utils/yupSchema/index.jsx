import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Email invalid"),
  password: Yup.string()
    .required("Required")
    .min(5, "Password must be more than 4 chars")
    .max(15, "Password must not be more than 15 chars"),
});

export const SignUpSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Email invalid"),
  password: Yup.string()
    .required("Required")
    .min(4, "Password must be more than 4 chars")
    .max(15, "Password must not be more than 15 chars"),
});
