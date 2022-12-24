// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOm7JlsaaHvUPa_ysUB8KBu4qKAKjC4uM',
  authDomain: 'portfolio-2dc5b.firebaseapp.com',
  projectId: 'portfolio-2dc5b',
  storageBucket: 'portfolio-2dc5b.appspot.com',
  messagingSenderId: '178150592800',
  appId: '1:178150592800:web:511e8299c6fb7f26d5c745',
};

// Initialize Firebase
// module.exports = firebaseConfig;
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
