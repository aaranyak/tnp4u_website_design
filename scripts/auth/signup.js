import {app} from "/scripts/firebaseInit.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

const auth = getAuth(app);
const analytics = getAnalytics(app);

function signupWithEmail(email, password) {
    logEvent(analytics, "sign_up");
    return createUserWithEmailAndPassword(auth, email, password);
}
window.signupWithEmail = signupWithEmail;
