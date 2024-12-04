import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
    authDomain: "the-chill-spot-b94ae.firebaseapp.com",
    projectId: "the-chill-spot-b94ae",
    storageBucket: "the-chill-spot-b94ae.firebasestorage.app",
    messagingSenderId: "519997067329",
    appId: "1:519997067329:web:023cffe155db50c797f6c0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Solicitar permiso para las notificaciones
const solicitarPermiso = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            console.log("Permiso para notificaciones concedido.");

            // Obtener el token
            const currentToken = await getToken(messaging, {
                vapidKey: "BGvxRdsdfnqOKKjJCOnLNe6Fc7xJdn9pxhXnxOKJNWyuzOGsyH9715HfZlP254QaIxm4VpKpYI4AjvgeUjbWYtY"
            });

            if (currentToken) {
                console.log("Token generado:", currentToken);

                // Guardar el token en localStorage o mostrarlo en consola
                localStorage.setItem("fcmToken", currentToken);
            } else {
                console.warn("No se pudo obtener el token.");
            }
        } else {
            console.error("Permiso para notificaciones denegado.");
        }
    } catch (err) {
        console.error("Error al solicitar permiso:", err);
    }
};

// Escuchar mensajes mientras la app está abierta
onMessage(messaging, (payload) => {
    console.log("Mensaje recibido:", payload);

    // Mostrar una notificación
    if (Notification.permission === "granted") {
        new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: payload.notification.icon,
        });
    }
});

// Solicitar permiso al cargar la página
solicitarPermiso();
