// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0McnyNlXoIJ0BSQbmfhVf0SGi3hnVau4",
    authDomain: "lions-club-vicente-noble.firebaseapp.com",
    projectId: "lions-club-vicente-noble",
    storageBucket: "lions-club-vicente-noble.appspot.com",
    messagingSenderId: "718125838393",
    appId: "1:718125838393:web:6630e856e577650dbd1de8",
    measurementId: "G-PR6CTVQCZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);