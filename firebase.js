
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Dd7cjgZw7UkJsiak8x9hiL-nmU-kiQ8",
    authDomain: "carbonzero-database.firebaseapp.com",
    projectId: "carbonzero-database",
    storageBucket: "carbonzero-database.appspot.com",
    messagingSenderId: "1011093304209",
    appId: "1:1011093304209:web:b14f2cfdf754d3c6c82030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);