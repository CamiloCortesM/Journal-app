// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers/getEnvironments";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// console.log(process.env)
// console.log(import.meta.env)

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyCLWsIQ_cuC9RNQk1CxBwVwdCEJdy2fZzo",
//   authDomain: "react-cursos-eeb8f.firebaseapp.com",
//   projectId: "react-cursos-eeb8f",
//   storageBucket: "react-cursos-eeb8f.appspot.com",
//   messagingSenderId: "948113951542",
//   appId: "1:948113951542:web:77675fd2c0e87a1efb0197",
// };

//Testing
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

console.log(firebaseConfig);
// Initialize Firebase
export const FirabaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirabaseApp);
export const FirebaseDB = getFirestore(FirabaseApp);
