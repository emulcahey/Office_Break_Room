// possible login handler
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // Performs client-side validation
        if (!username || !password) {
            alert('Please enter both a username and password.');
            return;
        }
        
        // I'm not super great with await v. fetch so feel free to change this needed be!
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            return response.json();
        })
        .then(data => {
            console.log('Logged in successfully:', data);
            // Redirect to the homepage or perform other actions
        })
        .catch(error => {
            console.error('Error logging in:', error.message);
            // Display error message or perform other actions
        });
    });
});

// TODO: event listener for game link redirect

// TODO: event listener for settings menu

// TODO: event listener for timer selection

// etc...
