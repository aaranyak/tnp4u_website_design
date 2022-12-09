import {listenToChats} from "/scripts/db/listenToChats.js";
import {onAuthUpdate} from "/scripts/auth/onRefreshFunction.js";
var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body.firstChild;
};

function renderMessage(message,side) {
    const messageTemplate = ` 
        <div class="messageContainer">
            <div class="${side}MessageBox">
                ${message}
            </div>
        </div>
    `
    return stringToHTML(messageTemplate);
}

function finalTransform() {
    var messageContainer = document.getElementById("messages");
    var offset = messageContainer.scrollHeight;
    messageContainer.style.bottom = (-offset.toString() + 1500) + "px";
    var extras = Math.floor(offset / 1500);
    const backgrounds = document.getElementById("backgrounds");
    backgrounds.innerHTML = ""
    for (let index = -1; index < extras; index++) {
        if (index % 2) {
            var newBackground1 = stringToHTML(`<img src="/assets/backgrounds/pageDecoration.svg" id="background1">`);
            newBackground1.style.top = ((index * 1500) + 1500).toString() + "px";
            backgrounds.appendChild(newBackground1);
            var newBackground2 = stringToHTML(`<img src="/assets/backgrounds/pageDecoration.svg" id="background2">`);
            newBackground2.style.top = ((index * 1500) + 1500).toString() + "px";
            backgrounds.appendChild(newBackground2);
        }
        else {
            var newBackground1 = stringToHTML(`<img src="/assets/backgrounds/pageDecoration.svg" id="background1" style="transform: scaleY(-1) scaleX(-1);">`);
            newBackground1.style.top = ((index * 1500) + 1500).toString() + "px";
            backgrounds.appendChild(newBackground1);
            var newBackground2 = stringToHTML(`<img src="/assets/backgrounds/pageDecoration.svg" id="background2" style="transform: scaleY(-1);">`);
            newBackground2.style.top = ((index * 1500) + 1500).toString() + "px";
            backgrounds.appendChild(newBackground2);
        }
    }
    messageContainer.style.bottom = `calc(100% - (${extras * 1500}px - 100px) - 1400px)`
    window.scrollTo(0, document.getElementById("messages").scrollHeight + 1500);

}

function chatListener() {
    listenToChats((chatSnapshot) => {
        var messages = document.getElementById("messages");
        messages.innerHTML = `<div class="title">
        <h1 id="title">Chat With Admin</h1>
        <h1 id="titlel2"></h1>
        <h2 id="subtitle">Use this page to chat with the course admin.</h2>
    </div>`
        chatSnapshot.forEach((message) => {
            messages.appendChild(renderMessage(message.data().text, message.data().sender));
        });
        finalTransform();
    });
}
onAuthUpdate((user) => {
    if (user) {
        chatListener();
    }
});