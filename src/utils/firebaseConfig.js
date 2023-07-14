import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyBR72JcLO46UrJWSt91dpXH3j2Z8wNIWTE",
    authDomain: "simple-social-app-593ba.firebaseapp.com",
    projectId: "simple-social-app-593ba",
    storageBucket: "simple-social-app-593ba.appspot.com",
    messagingSenderId: "1091229653659",
    appId: "1:1091229653659:web:ec01508d1701008e4e443e"
});

// Firebase storage reference
export const storage = getStorage(app);
export const db = getFirestore(app);

