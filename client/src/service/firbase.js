import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

try {
    firebase.initializeApp({
        // apiKey: process.env.REACT_APP_API_KEY,
        // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        // projectId: process.env.REACT_APP_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        // appId: process.env.REACT_APP_APP_ID
        apiKey: "AIzaSyAbsNC_zxnAa5dbdt90Mrigh_w9Q1pGvAw",
        authDomain: "cmpe295-9aa05.firebaseapp.com",
        projectId: "cmpe295-9aa05",
        storageBucket: "cmpe295-9aa05.appspot.com",
        messagingSenderId: "246441619823",
        appId: "1:246441619823:web:bf5f4ff48dff4c2d09789a"
    });
} catch (error) {
    if (!/already exists/u.test(error.message)) {
        console.log("Firebase admin initialization error", error.stack);
    }
}

export const fb = {
    storage: firebase.storage(),
};