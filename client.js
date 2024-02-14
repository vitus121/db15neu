// client.js
const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    document.getElementById('counter').innerText = data.counter;
};

function incrementCounter() {
    ws.send('increment');
}
