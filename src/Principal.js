import React, { useEffect, useState } from "react";
import { auth, firestore } from "./firebase";

const Principal = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection("usuarios")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUserData(doc.data());
            } else {
              console.error("Usuário não encontrado no Firestore.");
            }
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Página Principal</h2>
      {userData && (
        <div>
          <p>Nome: {userData.nome}</p>
          <p>Sobrenome: {userData.sobrenome}</p>
          <p>Data de Nascimento: {userData.dataNascimento}</p>
        </div>
      )}
    </div>
  );
};

export default Principal;
