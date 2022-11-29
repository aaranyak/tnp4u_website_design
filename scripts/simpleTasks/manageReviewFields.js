function updateTextSize() {
    console.log("BLAH")
    nameInput = document.getElementById("nameInput");
    titleInput = document.getElementById("titleInput");
    if (nameInput.value == 0) {
        document.getElementById("nameLabel").style.fontSize = "35px";
        document.getElementById("nameLabel").style.top = "30px";
    }
    else {
        document.getElementById("nameLabel").style.fontSize = "20px";
        document.getElementById("nameLabel").style.top = "10px";
    }
    if (titleInput.value == 0) {
        document.getElementById("titleLabel").style.fontSize = "35px";
        document.getElementById("titleLabel").style.top = "30px";
    }
    else {
        document.getElementById("titleLabel").style.fontSize = "20px";
        document.getElementById("titleLabel").style.top = "10px";
    }
    document.getElementById("nameLabel").style.color = "black";
    document.getElementById("titleLabel").style.color = "black";

}
function focusText(elementId) {
    label = document.getElementById(elementId);
    label.style.fontSize = "20px";
    label.style.top = "10px";
    label.style.color = "#947171";
}