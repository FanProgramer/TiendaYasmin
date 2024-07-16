// Inicializar Firebase con tu configuración
const firebaseConfig = {
    apiKey: "tu-api-key",
    authDomain: "tu-auth-domain",
    projectId: "tu-project-id",
    storageBucket: "tu-storage-bucket",
    messagingSenderId: "tu-messaging-sender-id",
    appId: "tu-app-id"
};

firebase.initializeApp(firebaseConfig);

// Función para registrar al administrador
function registrarAdministrador() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro exitoso
            const user = userCredential.user;
            console.log('Administrador registrado:', user.uid);
            alert('Administrador registrado exitosamente');
            // Aquí podrías redireccionar a otra página, mostrar un mensaje, etc.
        })
        .catch((error) => {
            // Error en el registro
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al registrar administrador:', errorCode, errorMessage);
            alert(`Error al registrar administrador: ${errorMessage}`);
        });
}
