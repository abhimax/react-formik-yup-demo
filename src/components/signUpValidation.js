import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string().min(3).required("Pleas enter name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  password: Yup.string()
    .matches(
      /^(?=.*[0-9])\w{3,}$/,
      "Password must contain at least one digit and be at least 3 characters long"
    )
    .required("Please enter a password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password is not matched"
  ),
});
