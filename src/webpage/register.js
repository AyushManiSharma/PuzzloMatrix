document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Save data to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        //create a redirect back to login page
        window.location.href = "./login.html";
    });
});
