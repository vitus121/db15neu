// server.js
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

let counter = 0;

wss.on('connection', function connection(ws) {
    // Nachricht vom Client empfangen
    ws.on('message', function incoming(message) {
        if (message === 'increment') {
            counter++;
            // Den aktualisierten Zählerwert an alle Clients senden
            wss.clients.forEach(function each(client) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify({ counter }));
                }
            });
        }
    });

    // Beim Verbindungsaufbau den aktuellen Zählerwert an den Client senden
    ws.send(JSON.stringify({ counter }));
});
