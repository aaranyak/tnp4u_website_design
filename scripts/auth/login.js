import {app} from "/scripts/firebaseInit.js";
import {getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.14.0/firbase-auth.js";

const auth = getAuth(app);

function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}
window.loginWithEmail = loginWithEmail;
