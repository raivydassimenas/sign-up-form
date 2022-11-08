function validateForm() {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.forms["sign-up-form"]["email"].value;
    if (email.match(mailformat)) {
        alert("Valid email address!");
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.forms["sign-up-form"]["email"].focus();
        return false;
    }
}