from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)
DATABASE = 'database.db'

# Crear la tabla de administradores si no existe
def create_admin_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS admins (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        username TEXT NOT NULL UNIQUE,
                        password TEXT NOT NULL
                    )''')
    conn.commit()
    conn.close()

# Registrar un nuevo administrador
@app.route('/register', methods=['POST'])
def register_admin():
    username = request.json.get('username')
    password = request.json.get('password')

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO admins (username, password) VALUES (?, ?)", (username, password))
    conn.commit()
    conn.close()

    return jsonify({"message": "Administrador registrado exitosamente"}), 201

if __name__ == '__main__':
    create_admin_table()
    app.run(debug=True)
