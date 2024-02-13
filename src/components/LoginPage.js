import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignLoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login:", username, password);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      } else {
        const data = await response.json();
        console.log("Login success:", data);

        localStorage.setItem("userInfo", JSON.stringify(data.user));
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
