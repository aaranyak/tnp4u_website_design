function signupWithEmailAction() {
    var emailField = document.getElementById("eml");
    var passwordField = document.getElementById("psw");
    var nameField = document.getElementById("name");
    console.log({email: emailField.value, password: passwordField.value, name: nameField.value});
    window.signupWithEmail(emailField.value, passwordField.value).then(async (userCredential) => {
        var user = userCredential.user;
        userDocument = await window.createUserDocument(user.uid, user.email, nameField.value);
        window.close();
    }).catch((error) => {
        if (error.code == "auth/email-already-in-use") {
            window.alert(`Sorry, the user ${emailField.value} already exists.`);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
        if (error.code == "auth/invalid-email") {
            window.alert(`Sorry, the email is invalid.`);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
        if (error.code == "auth/weak-password") {
            window.alert(`Password should be of atleast 6 characters.`);
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