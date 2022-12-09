import {app} from "/scripts/firebaseInit.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

function signInWithGoogle() {
    logEvent(analytics, "log_in");
    return signInWithPopup(auth, provider);
}
window.signInWithGoogle = signInWithGoogle;