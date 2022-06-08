// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8ohAVySbKAhETBmkt8ZY1ivkSCE4Od_0",
    authDomain: "expenses-tracker-c247e.firebaseapp.com",
    projectId: "expenses-tracker-c247e",
    storageBucket: "expenses-tracker-c247e.appspot.com",
    messagingSenderId: "945061789617",
    appId: "1:945061789617:web:8010bb878fe3659d7f4790",
    measurementId: "G-F06CQ67PT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);