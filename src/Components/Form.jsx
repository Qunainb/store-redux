import { useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/index";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(authActions.login({ email, password }));
    navigate("/main");
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button className="login-btn">Login</button>
          {/* <p className="text">
            Don't have an account? <a href="#"> Register</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}
