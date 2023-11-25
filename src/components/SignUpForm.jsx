import { useFormik } from "formik";
import "../styles/sign-up-form.css";
import { signUpValidation } from "./signUpValidation";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const { values, handleSubmit, handleBlur, handleChange, errors } = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <small className="error-text">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && (
          <small className="error-text">{errors.password}</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && (
          <small className="error-text">{errors.confirmPassword}</small>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
export default SignUpForm;
