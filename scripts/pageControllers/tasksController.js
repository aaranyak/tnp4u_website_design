import {listenToTasks} from "/scripts/db/listenToTasks.js";
import {onAuthUpdate} from "/scripts/auth/onRefreshFunction.js";
var stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc.body.firstChild;
};
function renderVideoPost(title, due, url, description) {
    var date = Date(due.seconds * 1000);
    var dateString = date.toString().split(" ")[0] + " " + date.toString().split(" ")[2] + "'th " + date.toString().split(" ")[1] + " " + date.toString().split(" ")[3];
    var embedUrl = "https://youtube.com/embed/" + url.split("?v=")[1];
    console.log(embedUrl);
    const template = `
        <div class="postContainer">
            <div class="post">
                <div class="postTitle">
                    ${title}: ${dateString}
                </div>
                <hr>
                <span style="display: inline;">
                    <div class="postDescription">
                        ${description}
                    </div>
                    <div class="content">
                        <iframe width="300" height="200"  src="${embedUrl}"></iframe>
                    </div>
                </span>
            </div>
        </div>
    `;
    return stringToHTML(template);
}
function renderSheetPost(title, due, url, description) {
    var date = Date(due.seconds * 1000);
    var dateString = date.toString().split(" ")[0] + " " + date.toString().split(" ")[2] + "'th " + date.toString().split(" ")[1] + " " + date.toString().split(" ")[3];
    const template = `
        <div class="postContainer">
            <div class="post">
                <div class="postTitle">
                    ${title}: ${dateString}
                </div>
                <hr>
                <span style="display: inline;">
                    <div class="postDescription">
                        ${description}
                    </div>
                    <div class="content">
                        <a href="${url}">
                            <div class="sheetsPage">
                                <img src="/assets/icons/sheetsLogo.png" alt="">
                            </div>
                        </a>
                    </div>
                </span>
            </div>
        </div>
    `;
    return stringToHTML(template);
}
function finalTransform() {
    var messageContainer = document.getElementById("posts");
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
    messageContainer.style.bottom = `calc(100% - (${extras * 1500}px - 20px) - 1400px)`
    window.scrollTo(0, document.getElementById("posts").scrollHeight + 1500);

}
onAuthUpdate((user) => {
    if (user) {
        var unsub = listenToTasks((tasks) => {
            var postContainer = document.getElementById("posts");
            postContainer.innerHTML = `
                <div class="title">
                    <h1 id="title">View tasks</h1>
                    <h2 id="subtitle">View all the task posts here.</h2>
                </div>
            `;
            tasks.forEach(taskSnapshot => {
                if (taskSnapshot.data().type == "video") {
                    var videoPost = renderVideoPost(taskSnapshot.data().title, taskSnapshot.data().due, taskSnapshot.data().url, taskSnapshot.data().description);
                    postContainer.appendChild(videoPost);
                }
                else if (taskSnapshot.data().type == "sheet") {
                    var sheetPost = renderSheetPost(taskSnapshot.data().title, taskSnapshot.data().due, taskSnapshot.data().url, taskSnapshot.data().description);
                    postContainer.appendChild(sheetPost);
                }
            });
            finalTransform();
        });
    }
});