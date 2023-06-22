import WebSocket from "ws";

const ws = new WebSocket('wss://ihuen-websock.onrender.com/',
    {
        headers: {
            "user-agent": "Mozilla",

        },
    },
);

ws.on("open", function (stream) {
    ws.send("Hello");
})

ws.on("message",function(msg) {
    console.log("Received message from the server: %s", msg)
})

ws.on("error", function (err) {
    console.log("error: %s", err)
})