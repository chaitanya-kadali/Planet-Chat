import express from "express";

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server,{
    cors:{
        origin:"*",
    }
})

io.on("connection",(socket)=>{
    console.log("sock ",socket);
    
    socket.on("chat", (payload)=>{ // on = LISTEN from the other/ALL users
        console.log("payload : ", payload);
        io.emit("chat", payload)  // emit is to emit to ALL users     
    })
})

server.listen(3002, ()=>{
    console.log("server running at 3002");
})