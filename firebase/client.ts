// Import the functions you need from the SDKs you need
import {  getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOzUf7SwiFHEao_Cv1mZiBl6p1Ot82X3s",
  authDomain: "prepwise-2de4d.firebaseapp.com",
  projectId: "prepwise-2de4d",
  storageBucket: "prepwise-2de4d.firebasestorage.app",
  messagingSenderId: "617301989679",
  appId: "1:617301989679:web:4dc5e2bd22328dbcfbe9da",
  measurementId: "G-9QL124ZYZS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);