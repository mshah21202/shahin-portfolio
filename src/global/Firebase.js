// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWNoQSWUcAlsjLo1uQeFvOakK3zjtj2Qw",
  authDomain: "mohamad-shahin.firebaseapp.com",
  projectId: "mohamad-shahin",
  storageBucket: "mohamad-shahin.appspot.com",
  messagingSenderId: "738975509890",
  appId: "1:738975509890:web:ba962e24b02eccb7dbb39b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);