import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAdRNMBPNzPG4grrUBiID1CVPDUxzS7rP0",
    authDomain: "tnp4u-backend.firebaseapp.com",
    projectId: "tnp4u-backend",
    storageBucket: "tnp4u-backend.appspot.com",
    messagingSenderId: "220789530565",
    appId: "1:220789530565:web:e5d6cbd2374b8ec69c75ac",
    measurementId: "G-5CQN4ZDJ3D"
};
const app = initializeApp(firebaseConfig);
export { app };