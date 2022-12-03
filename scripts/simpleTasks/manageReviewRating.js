window.rating = 0;
const offButton = "/assets/icons/star_off.svg";
const onButton = "/assets/icons/star_on.svg";
function updateRating(rating) {
    ratingButtons = document.getElementById("ratingButtons").children;
    for (let buttonIndex = 0; buttonIndex < ratingButtons.length; buttonIndex++) {
        const ratingButton = ratingButtons[buttonIndex];
        if (buttonIndex != 0) {
            ratingImage = (buttonIndex > rating)? offButton : onButton;
            var innerImage = ratingButton.children[0];
            innerImage.src = ratingImage;
        }
    }
    window.rating = rating;
}