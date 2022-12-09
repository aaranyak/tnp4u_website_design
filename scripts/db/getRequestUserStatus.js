import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, doc, onSnapshot} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(app);
const auth = getAuth(app);
function onRequestSent(callback) {
    return onSnapshot(doc(db, "requests", auth.currentUser.uid), (snapshot) => {
        if (snapshot.exists()) {
            callback();
        }
    });   
}
function onUserDataChanged(callback) {
    return onSnapshot(doc(db, "users", auth.currentUser.uid), (snapshot) => {
        callback(snapshot.data());
    });
}
export {onRequestSent, onUserDataChanged};