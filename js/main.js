// Importar Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging.js";

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
const messaging = getMessaging(app);

// Función para obtener el token FCM
function obtenerToken() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permiso concedido');
      
      // Obtener el token FCM
      getToken(messaging, { vapidKey: 'BGvxRdsdfnqOKKjJCOnLNe6Fc7xJdn9pxhXnxOKJNWyuzOGsyH9715HfZlP254QaIxm4VpKpYI4AjvgeUjbWYtY' }).then((currentToken) => {
        if (currentToken) {
          console.log('Token de FCM:', currentToken);
          // Aquí puedes enviar el token al servidor para almacenarlo y enviarlo cuando sea necesario
        } else {
          console.log('No se pudo obtener el token');
        }
      }).catch((err) => {
        console.log('Error al obtener el token:', err);
      });
    } else {
      console.log('Permiso denegado');
    }
  });
}

// Manejar notificaciones cuando la aplicación está en primer plano
onMessage(messaging, (payload) => {
  console.log('Mensaje recibido en primer plano:', payload);
  // Aquí puedes mostrar una notificación, actualizar la interfaz de usuario, etc.
});

// Evento para suscribir al usuario cuando haga clic en el botón
document.getElementById('btn-notificar').addEventListener('click', () => {
  obtenerToken();
});

// Registrar el Service Worker para las notificaciones push de Firebase
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
    console.log('Firebase Messaging Service Worker registrado con éxito:', registration);
  }).catch((error) => {
    console.log('Error al registrar el Firebase Messaging Service Worker:', error);
  });
  
  // Opcional: Registrar otro Service Worker para otras funcionalidades como caché, si tienes un sw.js adicional
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker de caché registrado con éxito:', registration);
  }).catch((error) => {
    console.log('Error al registrar el Service Worker de caché:', error);
  });
}
