import {onAuthUpdate} from "/scripts/auth/onRefreshFunction.js"
onAuthUpdate((user) => {
    if (user) {
        window.location.replace("/requests/")
    }
});