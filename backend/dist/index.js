"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", function (socket) {
    // userCount++;
    // console.log("User Connected: " + userCount);
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId,
            });
        }
        if (parsedMessage.type === "chat") {
            let currentUSerRomm = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUSerRomm = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUSerRomm) {
                    allSockets[i].socket.send(parsedMessage.payload.message);
                }
            }
        }
    });
    // socket.on("disconnected", () => {
    //     allSockets = allSockets.filter((x) => x !== socket);
    //     //console.log("User disconnected");
    // });
});
