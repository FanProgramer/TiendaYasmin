document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí deberías implementar la lógica para registrar un nuevo usuario según tu nuevo método de autenticación.
    // Ejemplo:
       registrarUsuario(email, password);
    window.location.href = 'login.html';
});
