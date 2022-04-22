// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgbzqN4AJrZezVNaKuQ0xQrbiSqYsmVzI",
    authDomain: "ts-tutor-center.firebaseapp.com",
    projectId: "ts-tutor-center",
    storageBucket: "ts-tutor-center.appspot.com",
    messagingSenderId: "169691938446",
    appId: "1:169691938446:web:c3e19fcd7f92c239c653df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;