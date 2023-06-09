
import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("Basic Examp...");
});

const server = app.listen(8000);