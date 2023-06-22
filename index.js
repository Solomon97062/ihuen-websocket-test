
import express from "express";
import { WebSocketServer } from "ws";

const app = express().use(express.json());

const server = app.listen(3000,()=>{console.log('listening on port 3000')}) 



app.get('/',(req,res)=>{
  res.send("Hello");
});

app.get('/ws',(req,res)=>{
  const ws = new WebSocketServer({port: 40510})

  ws.on("connection",(stream) => {
    console.log('someone connected! %s', stream);
  })
})
