import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBpiemtanGPh3aVkpUokNSc4bVfGPxUYWE",
  authDomain: "zuel-frend.firebaseapp.com",
  projectId: "zuel-frend",
  storageBucket: "zuel-frend.appspot.com",
  messagingSenderId: "1049554229424",
  appId: "1:1049554229424:web:eba5014edb72908fc84375",
  measurementId: "G-G6CFDDBKTG"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

const analytics = getAnalytics(app);