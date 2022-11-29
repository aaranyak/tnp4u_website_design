import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, doc, getDoc, setDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const db = getFirestore(app);
const auth = getAuth(app);

async function createUserDocument(uid, email, name) {
    var userInfo = await setDoc(doc(db, "users", uid), {
        id: uid,
        name: name,
        email: email,
        request_accepted: false,
        account_activated: false
    });
} 
window.createUserDocument = createUserDocument;