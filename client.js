import WebSocket from "ws";

const ws = new WebSocket("wss://happy-fox-tam.cyclic.app/",
    {
        headers: {
            "user-agent": "Mozilla",
        },
    },
);

ws.on("open", function (stream) {
    ws.send("Hello");
})

ws.on("error", function (err) {
    console.log("error: %s", err)
})