import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, getDocs, collection, addDoc, query, orderBy, Timestamp, limit} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const db = getFirestore(app);

function getReviews() {
    let reviewsQuery = query(collection(db, "reviews"), orderBy("date", "desc"));
    return getDocs(reviewsQuery);
}
function getPreview(maxFeedback) {
    let reviewsQuery = query(collection(db, "reviews"), orderBy("rating", "desc"), limit(maxFeedback));
    return getDocs(reviewsQuery);
}
function writeReview(name, title, rating, timestamp, content) {
    return addDoc(collection(db, "reviews"), {
        username: name,
        title: title,
        rating: rating,
        date: new Timestamp(timestamp, 0),
        content: content
    });
}
window.writeReview = writeReview;
export {getReviews, getPreview}