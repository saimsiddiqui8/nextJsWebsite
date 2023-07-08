
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNo-aIk-My7PQoLEcQXny-iMiNaEK4eKo",
    authDomain: "starwood-properties.firebaseapp.com",
    projectId: "starwood-properties",
    storageBucket: "starwood-properties.appspot.com",
    messagingSenderId: "64061926537",
    appId: "1:64061926537:web:98b515e5904f1ae3292a58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;