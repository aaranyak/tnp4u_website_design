import {app} from "/scripts/firebaseInit.js";
import {getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const auth = getAuth(app);

window.logOut = () => {
    return signOut(auth);
}