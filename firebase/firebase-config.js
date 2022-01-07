// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, child, get,  } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fc6CYXEcgONvS5wvzy_57w74MBnliFE",
  authDomain: "flikpik-ee8b9.firebaseapp.com",
  databaseURL: "https://flikpik-ee8b9-default-rtdb.firebaseio.com/",
  projectId: "flikpik-ee8b9",
  storageBucket: "flikpik-ee8b9.appspot.com",
  messagingSenderId: "1008085365307",
  appId: "1:1008085365307:web:e30a80271eae9495c0621e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
const database = getDatabase(app);
