// Fetch and display products
function fetchProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear the product list

    // Aquí deberías implementar la lógica para obtener y mostrar los productos desde tu nueva base de datos/local storage.
    // Ejemplo:
         obtenerProductos().forEach(product => {
           const productElement = document.createElement('div');
           productElement.className = 'product';
           productElement.innerHTML = `
               <h2>${product.name}</h2>
               <p>${product.price}</p>
               <p>${product.description}</p>
               <img src="${product.imageUrl}" alt="${product.name}">
           `;
           productList.appendChild(productElement);
       });
}

// Initial fetch of products
fetchProducts();
