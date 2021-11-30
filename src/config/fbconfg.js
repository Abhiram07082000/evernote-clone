// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBuiHT6mWOsJbJjzFcrejXZr1zbaODWSyk",
  authDomain: "evernote-clone-ae895.firebaseapp.com",
  projectId: "evernote-clone-ae895",
  storageBucket: "evernote-clone-ae895.appspot.com",
  messagingSenderId: "714647743385",
  appId: "1:714647743385:web:404e2a1e9a95c585d5c108"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase