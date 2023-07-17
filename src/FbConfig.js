import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA3It_np9YlydN7vanMPJvlHzkXaRbcYt0",
    authDomain: "feedbackmanagement-dbb8e.firebaseapp.com",
    databaseURL: "https://feedbackmanagement-dbb8e-default-rtdb.firebaseio.com",
    projectId: "feedbackmanagement-dbb8e",
    storageBucket: "feedbackmanagement-dbb8e.appspot.com",
    messagingSenderId: "350425059515",
    appId: "1:350425059515:web:d5dd35216bf5c31235199e",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
