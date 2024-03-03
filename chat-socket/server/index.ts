import express from "express";
import http from "http";
import { Server } from "socket.io";

const PORT = 3010; //포트 설정
const app = express();
const server = http.createServer(app);

// 소켓 설정
const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (ws) => {
    console.log("connected");

    // client에서 send-chat를 받으면 io로 발송
    ws.on("send-chat", (data: any) => {
      io.emit("return-chat", data);
    });

    ws.on("disconnect", () => console.log("user disconnected", ws.id));
  });
};

socket(server);
server.listen(PORT, () => console.log(`app is listening on port ${PORT}!`));
