// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId

    apiKey: "AIzaSyATp37nDNcTO-O14KeKVnSU0HkfAKt0Y6M",
    authDomain: "car-doctor-77e78.firebaseapp.com",
    projectId: "car-doctor-77e78",
    storageBucket: "car-doctor-77e78.appspot.com",
    messagingSenderId: "358913711089",
    appId: "1:358913711089:web:3423f0ba6349fa166e0250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;