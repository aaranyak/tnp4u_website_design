import { getReviews} from "/scripts/db/getReviews.js";
var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body;
};

function mapRatingToStars(rating) {
    var retVal = "";
    for (let i = 1; i < 6; i++) {
        console.log("Blah")
        if (rating >= i) {
            retVal += "<img src='/assets/icons/star_on.svg'>";
        }
        else {
            retVal += "<img src='/assets/icons/star_off.svg'>";
        }
        console.log(retVal)
    }
    return retVal;
}
function generateReview(name, title, rating, timestamp, content) {
    var reviewDate = new Date(timestamp.seconds * 1000);
    var ratingSection = mapRatingToStars(rating);
    var readyTemplate = `
    <div class="reviewContainer">
        <div class="reviewBox">
            <div class="rTitleSection">
                <span style="font-weight: bold;">${name + ": "}</span>
                <span>${title}</span>
            </div>
            <div class="rRatingSection">
                <span id="ratingSection">Rating: 
                    ${ratingSection}
                </span>
                <span>${reviewDate.toString().split(" ")[0] + " " + reviewDate.toString().split(" ")[2] + "'th " + reviewDate.toString().split(" ")[1] + " " + reviewDate.toString().split(" ")[3]}</span>
            </div>
            <hr>
            <div class="review">
                ${content}
            </div>
        </div>
    </div>
    `;
    var reviewObject = stringToHTML(readyTemplate);
    return reviewObject;
}
function generateReviews() {
    getReviews().then((querySnapshot) => {
        querySnapshot.forEach(doc => {
            var reviewData = doc.data()
            var review = generateReview(reviewData.username, reviewData.title, reviewData.rating, reviewData.date, reviewData.content);
            document.getElementById("reviewsSection").appendChild(review);
        });
    });
}
generateReviews();