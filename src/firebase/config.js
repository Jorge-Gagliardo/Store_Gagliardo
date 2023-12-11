// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu0yxKNjKUDhqThwJUX19LmAJ34KKP_Uo",
  authDomain: "levelupgames-91ed7.firebaseapp.com",
  projectId: "levelupgames-91ed7",
  storageBucket: "levelupgames-91ed7.appspot.com",
  messagingSenderId: "1030324116172",
  appId: "1:1030324116172:web:0ee8aacd9f8bbc04f60069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)