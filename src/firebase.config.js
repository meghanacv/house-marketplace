import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_jX93ZDsQGzlzdWkMPzgU_SdcT9ERsCw",
  authDomain: "house-marketplace-app-d07b3.firebaseapp.com",
  projectId: "house-marketplace-app-d07b3",
  storageBucket: "house-marketplace-app-d07b3.appspot.com",
  messagingSenderId: "804976261763",
  appId: "1:804976261763:web:f08f8c9a64e0b2cce339b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();