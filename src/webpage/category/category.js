// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");

    // Retrieve username from local storage
    const username = localStorage.getItem("username");
    if (username) {
        // If username exists, update the label with "Logged in as {username}"
        const loggedInLabel = document.getElementById("loggedInLabel");
        loggedInLabel.textContent = `Logged in as: ${username} ‎ ‎ ‎ ‎ `;
    }
    else{
        window.location.href = "../login/login.html";
    }

    // Redirect to login page
    loginButton.addEventListener("click", function () {
        window.location.href = "../login/login.html"; // Replace with your login page URL
    });
});
