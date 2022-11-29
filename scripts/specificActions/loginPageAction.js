function loginWithEmailAction() {
    var emailField = document.getElementById("eml");
    var passwordField = document.getElementById("psw");
    window.loginWithEmail(emailField.value, passwordField.value).then((userCredential) => {
        var user = userCredential.user;
        window.close();
    }).catch((error) => {
        if (error.code == "auth/user-not-found") {
            window.alert(`Sorry, the user ${emailField.value} doesn't exist.`);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
        if (error.code == "auth/wrong-password") {
            window.alert(`Sorry, the password is incorrect.`);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
        else {
            window.alert(error.message);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
    });
}