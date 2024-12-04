// app.js

// Función para convertir la clave VAPID a un formato adecuado
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    return new Uint8Array([...Array(rawData.length)].map((_, i) => rawData.charCodeAt(i)));
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('ServiceWorker registrado:', registration);

            // Solicitar permiso para las notificaciones
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    console.log('Permiso concedido para notificaciones.');

                    // Suscribirse a las notificaciones
                    const applicationServerKey = urlB64ToUint8Array('BNMMP6oIPW8h_DwovXqjWhw3l8dVNBG41fkbImNI5I7-Ekl0sWAV1DNr9PlxBFiHKmON7u_FCsrshhKcrUCARcI'); // Cambia esto por tu clave pública
                    registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: applicationServerKey
                    }).then(subscription => {
                        console.log('Usuario suscrito:', subscription);

                        // Enviar la suscripción al servidor
                        return fetch('/subscribe', {
                            method: 'POST',
                            body: JSON.stringify(subscription),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }).catch(err => {
                        console.log('Error al suscribirse:', err);
                    });
                } else {
                    console.error('Permiso denegado para las notificaciones.');
                }
            });
        }).catch(err => {
            console.error('Error al registrar el Service Worker:', err);
        });
} else {
    console.warn('Las notificaciones push no están soportadas en este navegador.');
}