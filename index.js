import { WebSocketServer } from 'ws';
import url from 'url';
// var NoSQL = require('nosql');
const PORT = 5000;
const wss = new WebSocketServer({ port: PORT });
// var db = NoSQL.load('/db/ihuendb.nosql');

function print() {
  return console.log(...arguments);
}
const toJson = (v) => JSON.stringify(v);

wss.on('connection', (ws, req) => {
  print('A client just connected')
  wss.on("close", function(closemsg) {
    print("Client got disconnected: %s", closemsg)
  })
  ws.on("message", function(msg) {
    print("Received message from client: %s",msg)
    wss.clients.forEach(client => {
      if(client != ws && client.readyState == ws.OPEN)
      client.send("Someone said: "+ msg)
    });
  })
});