// Get the login form
const loginForm = document.getElementById('loginForm');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get the entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored password for the entered username
    const storedUserData = localStorage.getItem(username);
    const storedPassword = storedUserData ? JSON.parse(storedUserData).password : null;

    // Check if the entered password matches the stored password
    if (storedPassword === password) {
        alert('Login successful!');
        // Optionally, redirect the user to a new page after login
        window.location.href = "dashboard.html"; // Assuming a welcome.html page exists
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});