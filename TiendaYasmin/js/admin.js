// Admin logout
document.getElementById('logout-button').addEventListener('click', () => {
    // Aquí deberías implementar la lógica para cerrar sesión según tu nuevo método de autenticación.
    // Ejemplo:
     cerrarSesion();
    window.location.href = 'login.html';
});

// Add product
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    // Aquí deberías implementar la lógica para agregar un producto a tu nueva base de datos/local storage.
    // Ejemplo:
    agregarProducto(name, price, description, image);
});
