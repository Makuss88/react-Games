import firebase from 'firebase';
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBCAd_uBJAEZ9sS5MjaT7okewIAMEhhlek",
  authDomain: "makuss88games.firebaseapp.com",
  databaseURL: "ttps://makuss88games-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "makuss88games",
  storageBucket: "makuss88games.appspot.com",
  messagingSenderId: "1017874362842",
  appId: "1:1017874362842:web:909672538d0e5eff93d0e3",
}
  
export const auth = app.auth()
export default app