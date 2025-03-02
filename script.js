document.addEventListener("DOMContentLoaded", () => {
    console.log("Login Page Loaded!");

    const loginForm = document.getElementById("login-form");
    const successMessage = document.getElementById("success-message");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            let isValid = true;
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();
            
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            // Validate Username
            if (!emailPattern.test(username)) {
                document.getElementById("username-error").innerText = "Enter a valid email address.";
                isValid = false;
            } else {
                document.getElementById("username-error").innerText = "";
            }

            // Validate Password
            if (password.length < 6) {
                document.getElementById("password-error").innerText = "Password must be at least 6 characters.";
                isValid = false;
            } else {
                document.getElementById("password-error").innerText = "";
            }

            // If valid, show success or failure message
            if (isValid) {
                successMessage.innerText = "Login Successful!";
                successMessage.style.color = "green";
                successMessage.style.display = "block";

                setTimeout(() => {
                    successMessage.innerText = "";
                    window.location.href = "dashboard.html"; // Redirect after login
                }, 2000);
            } else {
                successMessage.innerText = "Login Failed! Please check your credentials.";
                successMessage.style.color = "red";
                successMessage.style.display = "block";
            }
        });
    }
});

// Show/Hide Password Function
function togglePassword() {
    let passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
