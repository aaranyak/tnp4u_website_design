import {app} from "/scripts/firebaseInit.js";
import {getAnalytics, logEvent} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";

const analytics = getAnalytics(app);