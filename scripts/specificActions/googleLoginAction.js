function logInWithGoogleAction() {
    window.signInWithGoogle().then(async (userCredential) => {
        var user = userCredential.user;
        var userInfo = window.createUserDocument(user.uid, user.email, user.displayName);
    }).catch((error) => {
        if (error.code != "auth/popup-closed-by-user") {
            window.alert(error.message);
            document.getElementById("inputForm").reset();
            updateTextSize();
        }
    });
}