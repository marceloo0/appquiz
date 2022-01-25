import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDUlQPvOVWCLgeXOyYQpBly1ty9TP3aq5M',
  authDomain: 'quizapp-f2d3e.firebaseapp.com',
  projectId: 'quizapp-f2d3e',
  storageBucket: 'quizapp-f2d3e.appspot.com',
  messagingSenderId: '642907245777',
  appId: '1:642907245777:web:321595776091f0a91309f0',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
