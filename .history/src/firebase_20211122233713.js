import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBCAd_uBJAEZ9sS5MjaT7okewIAMEhhlek",
  authDomain: "makuss88games.firebaseapp.com",
  projectId: "makuss88games",
  storageBucket: pmakuss88games.appspot.com,
  messagingSenderId: process.env.GAMES_MESSENGER_SENDER_ID,
  appId: process.env.GAMES_APP_ID,
  // databaseURL: process.env.GAMES.DATABASE_URL
}

const fire = firebase.initializeApp(firebaseConfig);

export default fire;