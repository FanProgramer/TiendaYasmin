from flask import Flask, request, jsonify
import sqlite3
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/product-images'  # Carpeta para imágenes de productos
DATABASE = 'database.db'

# Crear la tabla de productos si no existe
def create_product_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS products (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        price REAL NOT NULL,
                        description TEXT NOT NULL,
                        imageUrl TEXT DEFAULT 'default-image.jpg'
                    )''')
    conn.commit()
    conn.close()

# Registrar un nuevo producto
@app.route('/add_product', methods=['POST'])
def add_product():
    try:
        data = request.json
        name = data['name']
        price = data['price']
        description = data['description']
        imageUrl = data['imageUrl']  # Nombre de la imagen
        
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO products (name, price, description, imageUrl) VALUES (?, ?, ?, ?)",
                       (name, price, description, imageUrl))
        conn.commit()
        conn.close()

        return jsonify({"message": "Producto agregado exitosamente"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Obtener todos los productos
@app.route('/products', methods=['GET'])
def get_products():
    try:
        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM products")
        products = cursor.fetchall()
        conn.close()

        # Formatear los productos para enviarlos como JSON
        formatted_products = []
        for product in products:
            formatted_products.append({
                'id': product[0],
                'name': product[1],
                'price': product[2],
                'description': product[3],
                'imageUrl': product[4]
            })

        return jsonify(formatted_products), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    create_product_table()
    app.run(debug=True)
