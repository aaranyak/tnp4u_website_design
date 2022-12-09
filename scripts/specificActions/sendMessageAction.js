function sendMessageAction() {
    window.sendMessage(document.getElementById("messageInput").value);
    document.getElementById("messageInput").value = "";
}