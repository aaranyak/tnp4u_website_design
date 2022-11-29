import {app} from "/scripts/firebaseInit.js";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function signInWithGoogle() {
    return signInWithPopup(auth, provider);
}
window.signInWithGoogle = signInWithGoogle;