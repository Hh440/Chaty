"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
//event handler
let userCount = 0;
let allSockets = [];
wss.on("connection", function (socket) {
    allSockets.push(socket);
    userCount++;
    console.log("user Connected " + userCount);
    socket.on("message", (message) => {
        console.log("message recived" + message, toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from server");
        }
    });
});
