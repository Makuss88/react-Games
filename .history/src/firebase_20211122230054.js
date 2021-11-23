import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.GAMES_API_KEY,
  authDomain: process.env.GAMES_AUTH_DOMAIN,
  projectId: process.env.GAMES_PROJECT_ID,
  storageBucket: process.env.GAMES_STORAGE_BUCKET,
  messagingSenderId: process.env.GAMES_MESSENGER_SENDER_ID,
  appId: process.env.GAMES_APP_ID,
  databaseUrl: process.env.GAMES.DATABASE_URL
})

export const auth = app.auth()
export default app;