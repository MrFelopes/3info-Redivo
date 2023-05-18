import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApFcI5eYs2_tiJd8JhZnbJr43uRAAOCSs",
  authDomain: "info-felipe-redivo.firebaseapp.com",
  projectId: "info-felipe-redivo",
  storageBucket: "info-felipe-redivo.appspot.com",
  messagingSenderId: "744336192349",
  appId: "1:744336192349:web:f4fbdfdb2c22942f76aeb4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);