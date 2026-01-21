// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeJ0A01tICP8EUP-L6dK6rn3uiMTW7aQ8",
  authDomain: "netflixgpt-e34ec.firebaseapp.com",
  projectId: "netflixgpt-e34ec",
  storageBucket: "netflixgpt-e34ec.firebasestorage.app",
  messagingSenderId: "419793507262",
  appId: "1:419793507262:web:1bf673f4e0b5b34727dfef",
  measurementId: "G-LNKZY21YFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);