import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCAd_uBJAEZ9sS5MjaT7okewIAMEhhlek",
  authDomain: "makuss88games.firebaseapp.com",
  projectId: "makuss88games",
  storageBucket: "makuss88games.appspot.com",
  messagingSenderId: 1017874362842,
  appId: process.env.GAMES_APP_ID,
  // databaseURL: process.env.GAMES.DATABASE_URL
}

const fire = firebase.initializeApp(firebaseConfig);

export default fire;