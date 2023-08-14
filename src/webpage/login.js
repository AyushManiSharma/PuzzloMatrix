document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Simulate a successful login for demonstration purposes
      if (username === "user" && password === "password") {
        // Clear error message
        errorMessage.textContent = "";

        // You can redirect the user to another page or perform any other action here
        alert("Login successful!");
      } else {
        // Display an error message
        errorMessage.textContent = "Invalid username or password.";
      }
    });
  });
