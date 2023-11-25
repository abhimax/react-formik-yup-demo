import SignUpForm from "./components/SignUpForm";
import SignUpFormType2 from "./components/SignUpFormType2";

function App() {
  return (
    <div className="app-wrapper">
      <h2>Formik and Yup Form Demo</h2>
      <h4>Method 01 : useFormik hook</h4>
      <SignUpForm />
      <h4>Method 02 : Formik Form and Inputs</h4>
      <SignUpFormType2 />
    </div>
  );
}

export default App;
