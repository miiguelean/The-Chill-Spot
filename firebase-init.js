// Importar las bibliotecas necesarias de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js";

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

// Solicitar permiso para recibir notificaciones
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    console.log('Permiso otorgado para notificaciones.');

    // Obtener el token de registro para enviar notificaciones
    getToken(messaging, { vapidKey: 'BGvxRdsdfnqOKKjJCOnLNe6Fc7xJdn9pxhXnxOKJNWyuzOGsyH9715HfZlP254QaIxm4VpKpYI4AjvgeUjbWYtY' }).then(currentToken => {
      if (currentToken) {
        console.log('Token del dispositivo:', currentToken);

        // Aquí puedes enviar este token a tu servidor para que lo almacene
      } else {
        console.log('No se pudo obtener el token.');
      }
    }).catch(err => {
      console.error('Error al obtener el token:', err);
    });
  } else {
    console.log('Permiso denegado para notificaciones.');
  }
});

console.log("Firebase inicializado correctamente.");