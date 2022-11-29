import {app} from "/scripts/firebaseInit.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const auth = getAuth(app);

function signupWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}
window.signupWithEmail = signupWithEmail;
