import React, { useState } from "react";
import { auth, firestore } from "./firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate(); // Use 'useNavigate' em vez de 'useHistory'

  const cadastrarUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await firestore.collection("usuarios").doc(user.uid).set({
        nome,
        sobrenome,
        dataNascimento,
      });

      navigate("/principal"); // Use 'navigate' para redirecionar para /principal
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input
        type="text"
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
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <button onClick={cadastrarUsuario}>Cadastrar</button>
    </div>
  );
};

export default Signup;
