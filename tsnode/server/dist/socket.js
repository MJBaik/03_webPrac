"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
let interval = 3000;
const socket = (server) => {
    const ws = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
        },
    });
    ws.on("connection", (socket) => {
        console.log("new client connected");
        socket.on("disconnected", () => console.log("user disconnect", socket.id));
        socket.on("good", (data) => {
            console.log(data);
        });
        setInterval(() => {
            socket.emit("hi", "서버 -> 클라이언트");
        }, interval);
    });
};
exports.default = socket;
