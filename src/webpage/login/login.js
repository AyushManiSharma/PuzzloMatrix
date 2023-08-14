document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // Retrieve saved data from local storage
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");

      if (username === storedUsername && password === storedPassword) {
          // Clear error message
          errorMessage.textContent = "Login successful!";

          // You can redirect the user to another page or perform any other action here
      } else {
          // Display an error message
          errorMessage.textContent = "Invalid username or password!";
      }
  });
});
