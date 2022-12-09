import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, getDoc, doc, collection, setDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
async function sendRequest(title, age, content) {
    logEvent(analytics, "send_request", {
        title: title,
        age: age,
    });
    var uid = auth.currentUser.uid;
    var userData = await getDoc(doc(db, "users", uid));
    var name = userData.data().name;
    var email = userData.data().email;
    var date = new Timestamp(Math.floor(Date.now() / 1000), 0);
    return setDoc(doc(db, "requests", uid), {
        name: name,
        title: title,
        age: age,
        date: date,
        content: content,
        email: email,
        user: uid,
    });
}
window.sendRequest = sendRequest;