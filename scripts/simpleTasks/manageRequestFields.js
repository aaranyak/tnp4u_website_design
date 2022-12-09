function updateTextSize() {
    console.log("BLAH")
    titleInput = document.getElementById("titleInput");
    if (titleInput.value == 0) {
        document.getElementById("titleLabel").style.fontSize = "35px";
        document.getElementById("titleLabel").style.top = "-0px";
    }
    else {
        document.getElementById("titleLabel").style.fontSize = "20px";
        document.getElementById("titleLabel").style.top = "-15px";
    }
    document.getElementById("titleLabel").style.color = "black";

}
function focusText(elementId) {
    label = document.getElementById(elementId);
    label.style.fontSize = "20px";
    label.style.top = "-15px";
    label.style.color = "#947171";
}