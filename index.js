
// import express from "express";
// import { WebSocketServer } from 'ws';


// const app = express().use(express.json());
// const server = app.listen(8000);


// app.get('/', (req, res) => {
//     if (req.url == '/api') {
//         const wss = new WebSocketServer({ server });
//         wss.on('connection', (ws, req) => {
//             console.log('Incoming connection: %s', req.url);
//             ws.send(JSON.stringify([{ "message": "Good connet!" }]))
//         });
//     }//0242432092:0530635526
//     res.send("<p>Basic Examp...</p>");

// });


import { WebSocketServer } from 'ws';
import url from 'url';

const wss = new WebSocketServer({ port: 8000 });
const ihDB = {
    "buddies": [{
        "userid": "xrsolomon",
        "bType": "single",
        "bio": "comp.",
        "name": "Paa Solo",
        "imageUrl": "https://image.com",
        "state": "color",
        "seenWhen": "yesterday",
        "favDate": "2671:T8y28",
        "bkList": ["bkList"],
        "country": "Ghana",
    }], "shorts": []
};
const token = "419";
const print = (v) => console.log(v);
const toJson = (v)=> JSON.stringify(v);

wss.on('connection', (ws, req) => {
    const uq = url.parse(req.url, true).query;
    const r = uq.r;
    const veri = uq.k == token;
    print(req.url);
    if (veri) {
        var db = ihDB[uq.t]
        var rs = toJson(db);
        if (uq.u != '') {
            ws.send(rs);
        }

        ws.on('message', function incoming(data) {
            var d = JSON.parse(data);
            if(d['r'] == "set"){
                const dq = d['q'];
                db.unshift(dq)
                ws.send(toJson(db))
            }
            if (d['r'] == 'update') {
                const dq = d['q'];
                for (const x in db) {
                    if (Object.hasOwnProperty.call(db, x)) {
                        for (const y in dq) {
                            if (Object.hasOwnProperty.call(dq, y)) {
                                if (uq.u == db[x]["userid"]) {
                                    if (db[x][y] == dq[y]) continue;
                                    db[x][y] = dq[y];
                                }
                            }
                        }
                    }
                }
                ws.send(toJson(db))
            }
            console.log('received: %s', data);
        });
        // ws.send('sucessfully connected to ihuen websocket');
    }
});