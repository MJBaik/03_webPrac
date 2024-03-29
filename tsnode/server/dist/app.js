"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_1 = __importDefault(require("./socket"));
const PORT = 3010;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, socket_1.default)(server);
server.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
