import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBy-Eab8BReagGYFixV4iygM95jeSisNrM",
    authDomain: "veldora-54d14.firebaseapp.com",
    projectId: "veldora-54d14",
    storageBucket: "veldora-54d14.firebasestorage.app",
    messagingSenderId: "701867335412",
    appId: "1:701867335412:web:b557578313a687c07448a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
