import {onRequestSent, onUserDataChanged} from "/scripts/db/getRequestUserStatus.js";
import {app} from "/scripts/firebaseInit.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getAnalytics, logEvent, setUserProperties} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
const analytics = getAnalytics(app);
const auth = getAuth(app);
var alreadyAccepted = false;
setTimeout(() => {
    onRequestSent(() => {
        if (!alreadyAccepted){
            document.getElementById("title").innerHTML = `Your request has`;
            document.getElementById("titlel2").innerHTML = `been sent`;
            document.getElementById("titlel2").style.position = "relative";
            document.getElementById("titlel2").style.top = "40px";
            document.getElementById("subtitle").style.position = "relative";
            document.getElementById("subtitle").style.top = "40px";
            document.getElementById("subtitle").innerHTML = "We will try to reply as soon as possible.";
            document.getElementById("pageContent").innerHTML = "";
        }
    });},
    2000
);
setTimeout(() => {
    onUserDataChanged((userData) => {
        setUserProperties(analytics, {name: userData.name, uid: userData.id, email: userData.email, request_accepted: userData.request_accepted, account_activated: userData.account_activated})
        alreadyAccepted = true;
        if (userData.request_accepted) {
            document.getElementById("title").innerHTML = `Your request has`;
            document.getElementById("titlel2").innerHTML = `been accepted`;
            document.getElementById("titlel2").style.position = "relative";
            document.getElementById("titlel2").style.top = "40px";
            document.getElementById("subtitle").style.position = "relative";
            document.getElementById("subtitle").style.top = "40px";
            document.getElementById("subtitle").innerHTML = "Please pay 5000Rs using the link below";
            document.getElementById("pageContent").innerHTML = `<button class="payButton"">Use this link to pay -&#62;</button>`;
        }
        if (userData.account_activated) {
            document.getElementById("title").innerHTML = `Your account has`;
            document.getElementById("titlel2").innerHTML = `been activated`;
            document.getElementById("titlel2").style.position = "relative";
            document.getElementById("titlel2").style.top = "40px";
            document.getElementById("subtitle").style.position = "relative";
            document.getElementById("subtitle").style.top = "40px";
            document.getElementById("subtitle").innerHTML = "To begin the course, open the tasks page.";
            document.getElementById("pageContent").innerHTML = ``;
        }
    });},
    2000
);
