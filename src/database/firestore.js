// Conveniently import this file anywhere to use db

import firebase from "firebase/app";
import "firebase/firestore";

export const firestore = firebase
  .initializeApp({
    apiKey: "AIzaSyC1VJ4FhFPfSubYp2uN-6KlblpQuuiLqgY",
    authDomain: "chat-app-8fdc9.firebaseapp.com",
    projectId: "chat-app-8fdc9",
    storageBucket: "chat-app-8fdc9.appspot.com",
    messagingSenderId: "866383912741",
    appId: "1:866383912741:web:8fb196b101af730e2584cc",
    measurementId: "G-6EE2848GFJ",
  })
  .firestore();

// Export types that exists in Firestore - Uncomment if you need them in your app
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }