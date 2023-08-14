// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");

    // Redirect to login page
    loginButton.addEventListener("click", function () {
        window.location.href = "../login/login.html"; // Replace with your login page URL
    });

    // Redirect to register page
    registerButton.addEventListener("click", function () {
        window.location.href = "../register/register.html"; // Replace with your register page URL
    });
});
