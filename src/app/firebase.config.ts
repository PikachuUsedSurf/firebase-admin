// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9FxrF7RngtBg31IbadwWXOs-o3qP-DuE",
  authDomain: "admin-test-66987.firebaseapp.com",
  projectId: "admin-test-66987",
  storageBucket: "admin-test-66987.appspot.com",
  messagingSenderId: "54906517812",
  appId: "1:54906517812:web:21cd644bc5507a3ed88d61",
  measurementId: "G-HL2PC41X5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
export default app;
