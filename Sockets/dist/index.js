"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    }
});
io.on("connection", (socket) => {
    console.log("sock ", socket);
    socket.on("chat", (payload) => {
        console.log("payload : ", payload);
        io.emit("chat", payload); // emit is to emit to ALL users     
    });
});
server.listen(3002, () => {
    console.log("server running at 3002");
});
//# sourceMappingURL=index.js.map