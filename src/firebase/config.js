// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
  apiKey: "AIzaSyD4FibmvHjsgQ7ndbB6VPVbYs3n7tjy7SU",
  authDomain: "testing-eb245.firebaseapp.com",
  projectId: "testing-eb245",
  storageBucket: "testing-eb245.appspot.com",
  messagingSenderId: "1034242638894",
  appId: "1:1034242638894:web:f495d1846edcb4511a8bbf",
  measurementId: "G-5JRZVBEFKL"
};

// Initialize Firebase
export const FirabaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FirabaseApp);
export const FirebaseDB = getFirestore(FirabaseApp);
