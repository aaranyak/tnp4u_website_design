function sendRequestAction() {
    var title = document.getElementById("titleInput").value;
    var age = document.getElementById("age").value;
    var content = document.getElementById("requestContent").value;
    window.sendRequest(title, age, content);
}