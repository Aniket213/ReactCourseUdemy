// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBinJEg5Pus4Sj_D-q-37wd1CRyGCzvJVQ",
  authDomain: "fir-5fe4c.firebaseapp.com",
  projectId: "fir-5fe4c",
  storageBucket: "fir-5fe4c.appspot.com",
  messagingSenderId: "400789880804",
  appId: "1:400789880804:web:a2c9b31d53f1e18617d1f1",
  measurementId: "G-DT4PSL9S37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);