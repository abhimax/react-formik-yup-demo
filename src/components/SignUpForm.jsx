import "../styles/sign-up-form.css";
function SignUpForm() {
  return (
    <form className="sign-up-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
export default SignUpForm;
