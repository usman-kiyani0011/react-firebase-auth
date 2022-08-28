import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxY5DVW8rGtoP2f9fBGvRUgxJtDnjqkXI",
  authDomain: "react-auth-d2b1c.firebaseapp.com",
  projectId: "react-auth-d2b1c",
  storageBucket: "react-auth-d2b1c.appspot.com",
  messagingSenderId: "303734635826",
  appId: "1:303734635826:web:aebbbc65c225e02364eb2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
