function validateForm() {
    var firstname = document.forms["signup-form"]["firstname"].value;
    var lastname = document.forms["signup-form"]["lastname"].value;
    var email = document.forms["signup-form"]["email"].value;
    var username = document.forms["signup-form"]["username"].value;
    var password = document.forms["signup-form"]["password"].value;
    var error = document.getElementById("error");

    // check if first name is empty
    if (firstname == "") {
        error.innerHTML = "Please enter your first name";
        return false;
    }

    // check if last name is empty
    if (lastname == "") {
        error.innerHTML = "Please enter your last name";
        return false;
    }

    // check if email is empty and is a valid email format
    if (email == "") {
        error.innerHTML = "Please enter your email";
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        error.innerHTML = "Please enter a valid email";
        return false;
    }

    // check username length and alphanumeric characters
    if (username.length > 8 || !/^[a-zA-Z0-9]+$/.test(username)) {
        error.innerHTML = "Username must be 1-8 characters and contain only letters and numbers";
        return false;
    }

    // check password length and special characters
    if (password.length > 8 || !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{1,8}$/.test(password)) {
        error.innerHTML = "Password must be 1-8 characters and contain at least one number, one letter, and one special character (@#$%^&+=)";
        return false;
    }
}
