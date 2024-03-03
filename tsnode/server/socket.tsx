import http from "http";
import { Server } from "socket.io";

const www = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on("disconnect", () => {
      console.log(`${socket.id} disconnected`);
    });
  });
};

export default www;
