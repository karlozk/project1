let generatedOTP;

function sendOTP() {
    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Please enter your email');
        return;
    }
    

    // Simple mock of OTP generation
    generatedOTP = Math.floor(10 + Math.random() * 90);
    alert('Your OTP is: ' + generatedOTP);

    console.log('Generated OTP:', generatedOTP); // For demonstration purposes only

    // Display OTP section
    document.getElementById('otpSection').style.display = 'block';

    // Show a message to the user
    document.getElementById('message').innerText = 'OTP sent to ' + email;
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otpInput').value;

    if (enteredOTP == generatedOTP) {
        document.getElementById('message').innerText = 'OTP verified successfully!';
        document.getElementById('message').style.color = 'green';
        setTimeout(function() {
            window.location.href = 'newpd.html';
        }, 1500); // 1.5 seconds delay before redirect

    } else {
        document.getElementById('message').innerText = 'Invalid OTP. Please try again.';
        document.getElementById('message').style.color = 'red';
    }
}
    
// document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const newPassword = document.getElementById('newPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
//     const errorMessage = document.getElementById('errorMessage');

//     if (newPassword === confirmPassword) {
//         // Here you would typically send the new password to your server for processing
//         alert('Password reset successfully!');
//         errorMessage.textContent = ''; // Clear any previous error message
//     } else {
//         errorMessage.textContent = 'Passwords do not match. Please try again.';
//     }
// });
