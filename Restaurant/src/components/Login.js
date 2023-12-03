import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const loginhandel = async () => {
    console.warn({ email, password });
  };

  return (
    <div className="login">
      <h1 className="decoration">Login:</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        placeholder="Enter Email"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        placeholder="Enter Password"
      ></input>
      <button className="button1" type="button" onClick={loginhandel}>
        Login
      </button>
    </div>
  );
};
export default Login;
