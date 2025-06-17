export default function Form() {
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form>
          <div className="form-control">
            <label>Email:</label>
            <input type="email" required />
          </div>

          <div className="form-control">
            <label>Password:</label>
            <input type="password" required />
          </div>

          <button className="login-btn">Login</button>
          <p className="text">
            Don't have an account? <a href="#"> Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
