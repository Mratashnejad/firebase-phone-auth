// Import the functions you need from the SDKs you need

//here you must add your configs form Firebase website :https://firebase.google.com/

import { initializeApp } from "firebase/app";
import 'firebase/auth'
// Import the functions you need from the SDKs you need


//copy and Paste
const firebaseConfig = {
  apiKey: "YOUR API KEY FROM FIREBASE",
  authDomain: "YOUR AUTH DOMAIN FROM FIREBASE",
  projectId: "YOUR PROJECT ID FROM FROM FIREBASE",
  storageBucket: "YOUR STORAGE BUCKET FROM FIREBASE",
  messagingSenderId: "YOUR MESSAGIN SENDER ID FROM FIREBASE",
  appId: "YOUR APP ID FROM FIREBASE",
  measurementId: "YOUR MEASUREMENT ID FROM FIREBASE"
};


//IT MUST BE LIKE THIS  DONT CHANGE IT
const app = initializeApp(firebaseConfig);
export {app}