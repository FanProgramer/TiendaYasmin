document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Logged in successfully
            console.log('User logged in:', userCredential.user);
            window.location.href = 'admin.html';
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});
