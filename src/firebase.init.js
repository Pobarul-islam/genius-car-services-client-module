



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLon1JJ5r8VU_yHarrLox_D2uFlVCR25c",
  authDomain: "genius-car-services-f922c.firebaseapp.com",
  projectId: "genius-car-services-f922c",
  storageBucket: "genius-car-services-f922c.appspot.com",
  messagingSenderId: "577020626225",
  appId: "1:577020626225:web:37bfa1c475446b0496dc10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;