// Fetch and display products
function fetchProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear the product list

    db.collection('products').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const product = doc.data();
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <h2>${product.name}</h2>
                <p>Precio: ${product.price}</p>
                <p>${product.description}</p>
                <img src="${product.imageUrl}" alt="${product.name}">
            `;
            productList.appendChild(productElement);
        });
    });
}

// Initial fetch of products
fetchProducts();
