import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqZy5lVFg-5aX0WJt2qPDuO4vyG0pIlJM",
  authDomain: "proyecto-9ba8c.firebaseapp.com",
  projectId: "proyecto-9ba8c",
  storageBucket: "proyecto-9ba8c.appspot.com",
  messagingSenderId: "341467172956",
  appId: "1:341467172956:web:97fc14a7b6108130ab9699",
  measurementId: "G-T2X7YW7Q25"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);