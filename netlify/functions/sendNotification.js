// netlify/functions/sendNotification.js
const webPush = require('web-push');

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const { subscription, payload } = JSON.parse(event.body);

        // Aquí reemplace las claves VAPID
        const vapidKeys = {
            publicKey: 'BNMMP6oIPW8h_DwovXqjWhw3l8dVNBG41fkbImNI5I7-Ekl0sWAV1DNr9PlxBFiHKmON7u_FCsrshhKcrUCARcI',
            privateKey: 'cDrkmzC0aB6e2kYtKwhiKuI_AwJ2n7B20Fv7O6rKokA'
        };

        webPush.setVapidDetails(
            'mailto:miiguelean@gmail.com',
            vapidKeys.publicKey,
            vapidKeys.privateKey
        );

        try {
            await webPush.sendNotification(subscription, payload);
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Notificación enviada' }),
            };
        } catch (error) {
            console.error('Error al enviar la notificación:', error);
            return { statusCode: 500, body: 'Error al enviar la notificación' };
        }
    }

    return {
        statusCode: 405, // Método no permitido
        body: 'Method Not Allowed',
    };
};