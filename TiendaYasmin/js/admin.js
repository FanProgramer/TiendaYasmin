// Admin logout
document.getElementById('logout-button').addEventListener('click', () => {
    auth.signOut().then(() => {
        window.location.href = 'login.html';
    });
});

// Add product
document.getElementById('product-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    // Upload image to Firebase Storage
    const storageRef = storage.ref('product-images/' + image.name);
    const uploadTask = storageRef.put(image);

    uploadTask.on('state_changed', 
        (snapshot) => {
            // Progress of the upload
        }, 
        (error) => {
            console.error('Error uploading image:', error);
        }, 
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                // Add product to Firestore
                db.collection('products').add({
                    name,
                    price,
                    description,
                    imageUrl: downloadURL
                }).then(() => {
                    fetchProducts();  // Update product list
                }).catch((error) => {
                    console.error('Error adding product:', error);
                });
            });
        }
    );
});

// Fetch and display products in admin page
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
