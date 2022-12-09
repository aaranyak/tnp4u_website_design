import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, doc, getDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(app);
async function checkIfActivated(uid) {
    var docData = await getDoc(doc(db, "users", uid));
    return docData.data().account_activated
}
export {checkIfActivated};