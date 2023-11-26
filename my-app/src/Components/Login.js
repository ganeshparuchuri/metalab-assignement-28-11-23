import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import PrimaryContainer from "./PrimaryContainer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username,
          password,
        });
        console.log("Login successful:", response.data);
        navigate("/Home");
      } catch (error) {
        console.error("Login failed:", error.response.data.error);
        setErrorMessage("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <PrimaryContainer>
      <div className="HomeContainer">
        <div className="register-login-container">
          <h2>Login Page</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>
            Don't have an account? <Link to="/register">Register here</Link>.
          </p>
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Login;
