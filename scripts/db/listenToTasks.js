import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, doc, collection, query, orderBy, Timestamp, limit, onSnapshot} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const db = getFirestore(app);
const auth = getAuth(app);
function listenToTasks(callback) {
    var tasksQuery = query(collection(doc(db, "tasks", auth.currentUser.uid), "posts"), orderBy("count"));
    return onSnapshot(tasksQuery, callback);
}
export {listenToTasks};