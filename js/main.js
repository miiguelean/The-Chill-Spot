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
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Función para obtener el token de FCM
function obtenerToken() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permiso concedido');
      
      firebase.messaging().getToken({ vapidKey: 'BGvxRdsdfnqOKKjJCOnLNe6Fc7xJdn9pxhXnxOKJNWyuzOGsyH9715HfZlP254QaIxm4VpKpYI4AjvgeUjbWYtY' })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Token de FCM:', currentToken);
            // Enviar este token a tu servidor o almacenarlo
          } else {
            console.log('No se pudo obtener el token');
          }
        })
        .catch((err) => {
          console.log('Error al obtener el token:', err);
        });
    } else {
      console.log('Permiso denegado');
    }
  });
}

// Manejar notificaciones en primer plano
firebase.messaging().onMessage((payload) => {
  console.log('Mensaje recibido en primer plano:', payload);
});

// Evento del botón de suscripción a notificaciones
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
}
