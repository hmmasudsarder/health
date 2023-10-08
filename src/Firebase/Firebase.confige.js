// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsCFufW8hGaM6EqL8t3QWa1bpQMiymnAY",
  authDomain: "sm-health-foundataion.firebaseapp.com",
  projectId: "sm-health-foundataion",
  storageBucket: "sm-health-foundataion.appspot.com",
  messagingSenderId: "628308409674",
  appId: "1:628308409674:web:73f922ed41b11acea6d5b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;