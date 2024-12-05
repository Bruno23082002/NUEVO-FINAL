// Script para la página principal
document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente
    var userName = document.getElementById("userName").value; // Obtiene el nombre ingresado
    if (userName) {
        document.getElementById("personalGreeting").textContent = "¡Bienvenido, " + userName + "!"; // Muestra el saludo personalizado
        document.getElementById("greeting").style.display = "block"; // Muestra la sección de saludo
    }
});

// Script para el login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente
    var username = document.getElementById("username").value; // Obtiene el nombre de usuario ingresado
    var password = document.getElementById("password").value; // Obtiene la contraseña ingresada
    if (username === "USER" && password === "PASS") {
        document.getElementById("loginMessage").textContent = "Inicio de sesión correcto";
        // Simulación de envío de correo
        alert("Correo enviado a user@example.com indicando inicio de sesión");
        // Redirige a la página principal
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMessage").textContent = "Inicio de sesión incorrecto";
    }
});

// Funciones para la página de API
function enviarCorreo() {
    alert("Correo enviado a user@example.com");
}

function verImagenes() {
    alert("Mostrando imágenes...");
    // Aquí podrías implementar la lógica para mostrar imágenes
}

function apiOpcional() {
    alert("API Opcional en uso...");
    // Implementa la funcionalidad que prefieras
}

// Script para el formulario
document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario enviado");
    // Aquí podrías implementar la lógica para enviar los datos del formulario
});

