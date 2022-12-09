import {onAuthUpdate} from "/scripts/auth/onRefreshFunction.js";
import {checkIfActivated} from "/scripts/db/checkIfActivated.js";
onAuthUpdate((user) => {
    if (user) {
        checkIfActivated(user.uid).then((activated) => {
            if (!activated) {
                window.location.replace("/requests");
            }
        })
    }
});