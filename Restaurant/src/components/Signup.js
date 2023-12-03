import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const collectData = async (e) => {
    if (!name || !email || !password) {
      window.alert("Please fill in all fields");

      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.alert("fill Correct Email");
      console.error("Invalid email format");
      return false;
    }
    if (password.length <= 5) {
      window.alert("fill Corect  Password");

      console.error("Password should be at least 5 characters long");
      return false;
    }
  };
  return (
    <div className="singup">
      <br></br>
      <h1 className="decoration">Registration : </h1>
      <input
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter the Name "
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        type="email"
        placeholder="Enter the Email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Enter the password"
      />
      <button onClick={collectData} className="button" type="button">
        Singup
      </button>
    </div>
  );
};
export default Signup;
