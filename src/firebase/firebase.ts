// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASyxNcOdiSToq_OOrUkHiy_8NUgl95TRM",
  authDomain: "chat-app-75adc.firebaseapp.com",
  projectId: "chat-app-75adc",
  storageBucket: "chat-app-75adc.appspot.com",
  messagingSenderId: "242503348897",
  appId: "1:242503348897:web:e7e2c4d3006aa0411376e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();