document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí deberías implementar la lógica para iniciar sesión según tu nuevo método de autenticación.
    // Ejemplo:
       iniciarSesion(email, password);
    window.location.href = 'admin.html';
});
