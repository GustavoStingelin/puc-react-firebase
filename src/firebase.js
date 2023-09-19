import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCH97QKDIjBDAzWAMs7Cn50ex5Ik-TGM4Y",
    authDomain: "puc-react.firebaseapp.com",
    projectId: "puc-react",
    storageBucket: "puc-react.appspot.com",
    messagingSenderId: "70929149958",
    appId: "1:70929149958:web:aa5d82f97fcb93f5f49387",
    measurementId: "G-BFJR0DNPG3"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
