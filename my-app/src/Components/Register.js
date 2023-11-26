import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PrimaryContainer from "./PrimaryContainer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      console.log("Registration successful:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <PrimaryContainer>
      <div className="HomeContainer">
        <div className="register-login-container">
          <h2>Register Page</h2>
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
          <button onClick={handleRegister}>Register</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </PrimaryContainer>
  );
};

export default Register;
