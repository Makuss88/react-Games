import firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: process.env.GAMES_API_KEY,
  authDomain: process.env.GAMES_AUTH_DOMAIN,
  projectId: process.env.GAMES_PROJECT_ID,
  storageBucket: process.env.GAMES_STORAGE_BUCKET,
  messagingSenderId: process.env.GAMES_MESSENGER_SENDER_ID,
  appId: process.env.GAMES_APP_ID,
  // databaseURL: process.env.GAMES.DATABASE_URL
})

const fire = firebase.initializeApp(firebase.onfig)