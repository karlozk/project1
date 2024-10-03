// Get the signup form
const signupForm = document.getElementById('signupForm');

// Add event listener for form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered by the user
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return; // Stop the function if passwords don't match
    }

    // Check if the username already exists in localStorage
    if (localStorage.getItem(username)) {
        alert('Username already exists. Please choose a different username.');
    } else {
        // Store the user details in localStorage (Note: avoid storing sensitive data like passwords as plain text in localStorage)
        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password // You should hash the password for real-world scenarios
        };

        // Convert the user data to a string and store it in localStorage
        localStorage.setItem(username, JSON.stringify(userData));

        alert('Sign-up successful! You can now log in.');

        // Clear the form
        signupForm.reset();

        // Redirect to the login page after sign-up
        window.location.href = "login.html"; // Ensure you have a login.html file
    }
});
