import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
const Principal = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {

        const docRef = doc(db, "usuarios", user.uid);
        getDoc(docRef).then((docSnap) => {
          if (docSnap.exists) {
            setUserData(docSnap.data());
          } else {
            console.error("Usuário " + user.uid + " não encontrado no Firestore.");
          }
        })
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
