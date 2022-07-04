import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8ohAVySbKAhETBmkt8ZY1ivkSCE4Od_0",
    authDomain: "expenses-tracker-c247e.firebaseapp.com",
    projectId: "expenses-tracker-c247e",
    storageBucket: "expenses-tracker-c247e.appspot.com",
    messagingSenderId: "945061789617",
    appId: "1:945061789617:web:8010bb878fe3659d7f4790",
  };

if (!firebase.apps.length) 
{
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }
 
export { firebase };