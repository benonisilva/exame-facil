// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOStTptLpMPqtghPnpkoYCMGNAFqISEmk",
  authDomain: "exames-de5bd.firebaseapp.com",
  projectId: "exames-de5bd",
  storageBucket: "exames-de5bd.appspot.com",
  messagingSenderId: "926215901986",
  appId: "1:926215901986:web:f055c58b69ea481b9f8b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };