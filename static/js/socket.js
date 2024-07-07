const socket = io();

// Display message when client is connected to server.
socket.on('connect', () => {
    let p = document.createElement('p');
    p.innerHTML = 'Connected to server';

    document.querySelector('.messages').appendChild(p);
});

// Listen for messages and emit them to the server.
let messageInput = document.getElementById('messageInput');

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        socket.emit('message', messageInput.value);
        messageInput.value = '';
    }
});

// Display messages from the server.
socket.on('message', (message) => {
    let p = document.createElement('p');
    p.innerHTML = message;

    document.querySelector('.messages').appendChild(p);
});