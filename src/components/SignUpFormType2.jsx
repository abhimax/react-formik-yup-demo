import { Formik, Form, Field } from "formik";
import "../styles/sign-up-form.css";
import { signUpValidation } from "./signUpValidation";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpFormType2() {
  return (
    <Formik initialValues={initialValues} validationSchema={signUpValidation}>
      {({ errors }) => (
        <Form className="sign-up-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            {errors.email && (
              <small className="error-text">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            {errors.password && (
              <small className="error-text">{errors.password}</small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            {errors.confirmPassword && (
              <small className="error-text">{errors.confirmPassword}</small>
            )}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
export default SignUpFormType2;
