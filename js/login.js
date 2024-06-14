document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send login credentials to the server for validation
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard'; // Redirect to dashboard on successful login
        } else {
            document.getElementById('error-message').innerText = data.message; // Display error message
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

    // Clear the form fields after submission
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
