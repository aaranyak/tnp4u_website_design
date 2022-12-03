function addReviewAction() {
    username = document.getElementById("nameInput").value;
    title = document.getElementById("titleInput").value;
    content = document.getElementById("reviewContent").value;
    rating = window.rating;
    timestamp = Math.floor(Date.now() / 1000);
    window.writeReview(username, title, rating, timestamp, content).then((docSnap) => {
        window.location.reload();
    }).catch((e) => {window.alert(e.message)});
}