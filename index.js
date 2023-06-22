
import express from "express";
import { WebSocketServer } from "ws";

const app = express();

const server = app.listen(3000,'0.0.0.0',()=>{console.log('listening on port 3000')}) 



app.get('/',(req,res)=>{
  res.send("Hello");
});

app.get('/ws',(req,res)=>{
  const ws = new WebSocketServer({server})

  ws.on("connection",(stream) => {
    console.log('someone connected! %s', stream);
  })
})
