function updateTextSize() {
    email = document.getElementById("eml");
    password = document.getElementById("psw");
    if (email.value != 0) {
        document.getElementById("emlLabel").style.fontSize = "10px";
        document.getElementById("emlLabel").style.top = "-40px";
    }
    else {
        document.getElementById("emlLabel").style.fontSize = "20px";
        document.getElementById("emlLabel").style.top = "-30px";
    }
    if (password.value != 0) {
        document.getElementById("pswLabel").style.fontSize = "10px";
        document.getElementById("pswLabel").style.top = "-40px";
    }
    else {
        document.getElementById("pswLabel").style.fontSize = "20px";
        document.getElementById("pswLabel").style.top = "-30px";
    }
    try {
        uname = document.getElementById("name");
        if (password.value != 0) {
            document.getElementById("nameLabel").style.fontSize = "10px";
            document.getElementById("nameLabel").style.top = "-40px";
        }
        else {
            document.getElementById("nameLabel").style.fontSize = "20px";
            document.getElementById("nameLabel").style.top = "-30px";
        }
        document.getElementById("nameLabel").style.color = "black";
    }
    catch {}
    document.getElementById("pswLabel").style.color = "black";
    document.getElementById("emlLabel").style.color = "black";


}
function focusText(elementId) {
    label = document.getElementById(elementId);
    label.style.fontSize = "10px";
    label.style.top = "-40px";
    label.style.color = "#947171";
}