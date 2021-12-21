import firebase from "firebase";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBKqzFAYTA0hMI9CR06QR5D9m5nGIfuhvA",
  authDomain: "makussgames.firebaseapp.com",
  databaseURL: "https://makussgames-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "makussgames",
  storageBucket: "makussgames.appspot.com",
  messagingSenderId: "934543797217",
  appId: "1:934543797217:web:170e658da969d8e5b340a0"
})

export const auth = firebase.auth(app);