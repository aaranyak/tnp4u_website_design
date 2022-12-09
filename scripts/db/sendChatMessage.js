import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {getFirestore, doc, collection, getDoc, updateDoc, addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
async function sendMessage(text) {
    logEvent(analytics, "send_message");
    var lastCount = (await getDoc(doc(db, "chats", auth.currentUser.uid))).data().count;
    await updateDoc(doc(db, "chats", auth.currentUser.uid), {
        count: lastCount + 1,
    })
    return addDoc(collection(doc(db, "chats", auth.currentUser.uid), "messages"), {
        count: lastCount + 1,
        sender: "user",
        text: text,
    });
}
window.sendMessage = sendMessage