import {app} from "/scripts/firebaseInit.js";
import {getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const auth = getAuth(app);

function onAuthUpdate(callback) {
    onAuthStateChanged(auth, callback);
}
export {onAuthUpdate};
