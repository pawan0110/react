import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handlesubmit = () => {
    e.preventDefault();
    setUser({ username }, { password });
  };
};

const Login = () => {
  return (
    <div>
      <h2>login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={passwrod}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handlesubmit}>submit</button>
    </div>
  );
};

export default Login;
