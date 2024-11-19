// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSv0XVaXoksc4pgWq9H4RF2J45VKhDvd8",
  authDomain: "todo-login-24bd6.firebaseapp.com",
  projectId: "todo-login-24bd6",
  storageBucket: "todo-login-24bd6.appspot.com",
  messagingSenderId: "778000006389",
  appId: "1:778000006389:web:8e0b14d397d6b6c2e0d9bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export default app;