import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/principal");
    } catch (error) {
      setMsg("Email ou senha inválidos");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={fazerLogin}>Login</button>
      <br />
      <h2>{msg}</h2>

    </div>
  );
};

export default Login;
