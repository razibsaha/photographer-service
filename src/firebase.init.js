// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR83rX2oejyOPKkOdfR8XjQiOlx5y9UO4",
  authDomain: "photography-service-2f5b8.firebaseapp.com",
  projectId: "photography-service-2f5b8",
  storageBucket: "photography-service-2f5b8.appspot.com",
  messagingSenderId: "216614896533",
  appId: "1:216614896533:web:780dd145db567e5760ec9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;