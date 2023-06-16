
import express from "express";
import { WebSocketServer } from 'ws';


const app = express().use(express.json());
const server = app.listen(3000);


app.get('/', (req, res) => {
    if (req.url == '/api') {
        const wss = new WebSocketServer({ server });
        wss.on('connection', (ws, req) => {
            console.log('Incoming connection: %s', req.url);
            ws.send(JSON.stringify([{ "message": "Good connet!" }]))
        });
    }//0242432092:0530635526
    res.send("<p>Basic Examp...</p>");

});


