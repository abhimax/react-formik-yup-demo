import * as Yup from "yup";

export const signUpValidation = Yup.object({
  name: Yup.string().min(3).required("Pleas enter name"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  password: Yup.string().matches(RegExp, "^(?=.*[0-9])[wW]{3,}$"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Password is not matched"
  ),
});
//password Reg Exp
//^: Asserts the start of the string.
//(?=.*[0-9]): Positive lookahead assertion ensuring that at least one digit (0-9) is present.
//[\w\W]{3,}: Matches any character (word character \w or non-word character \W) for at least 3 times.
//$: Asserts the end of the string.
