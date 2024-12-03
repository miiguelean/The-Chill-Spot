// Importar las bibliotecas necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCLATOoJaHm1ik6fCWHJYAkPgIhMQ5B5O4",
    authDomain: "the-chill-spot-b94ae.firebaseapp.com",
    projectId: "the-chill-spot-b94ae",
    storageBucket: "the-chill-spot-b94ae.firebasestorage.app",
    messagingSenderId: "519997067329",
    appId: "1:519997067329:web:023cffe155db50c797f6c0",
    measurementId: "G-NS2XWVYFF2"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializar el servicio de mensajería
const messaging = getMessaging(app);

// Registrar tu Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);

      // Obtener el token utilizando el registro del Service Worker
      getToken(messaging, {
        vapidKey: 'BGvxRdsdfnqOKKjJCOnLNe6Fc7xJdn9pxhXnxOKJNWyuzOGsyH9715HfZlP254QaIxm4VpKpYI4AjvgeUjbWYtY',
        serviceWorkerRegistration: registration
      }).then((currentToken) => {
        if (currentToken) {
          console.log('Token del dispositivo:', currentToken);
        } else {
          console.log('No se pudo obtener el token.');
        }
      }).catch((err) => {
        console.error('Error al obtener el token:', err);
      });
    })
    .catch((error) => {
      console.error('Error al registrar el Service Worker:', error);
    });
} else {
  console.log('El navegador no soporta Service Workers.');
}


console.log("Firebase inicializado correctamente.");
