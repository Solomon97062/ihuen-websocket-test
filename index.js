import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const app = express().use(express.json()); // creates http server
const server = createServer(app);
const wss = new WebSocketServer({ server });
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi buddies');
});

wss.on('connection', (ws, req) => {
    ws.send(JSON.stringify([{"name":"Welcome New Client"}]));
});

server.listen(port, () => console.log("Websocket Listening on port %s", port));