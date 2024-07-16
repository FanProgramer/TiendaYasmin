document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registered successfully
            console.log('User registered:', userCredential.user);
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error('Error registering:', error);
        });
});
