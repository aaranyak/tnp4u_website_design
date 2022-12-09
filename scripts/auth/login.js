import {app} from "/scripts/firebaseInit.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const auth = getAuth(app);
const analytics = getAnalytics(app);
function loginWithEmail(email, password) {
    logEvent(analytics, "log_in");
    return signInWithEmailAndPassword(auth, email, password);
}
window.loginWithEmail = loginWithEmail;
