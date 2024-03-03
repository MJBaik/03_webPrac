import express from "express";
import http from "http";
import www from "./socket";

const PORT = 3010;

const app = express();
const server = http.createServer(app);

www(server);

server.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
