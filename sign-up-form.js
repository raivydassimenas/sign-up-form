function validateForm() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.forms["sign-up-form"]["email"].value;
    const password = document.forms["sign-up-form"]["password"].value;
    const confirmPassword = document.forms["sign-up-form"]["confirm-password"].value;
    if (!email.match(mailformat)) {
        alert("You have entered an invalid email address!");
        document.forms["sign-up-form"]["email"].focus();
        return false;
    }
    else if (password !== confirmPassword) {
        alert("Passowrd and Confirm Password do not match");
        return false
    }
    return true;
}