import express from "express";

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server,{
    cors:{
        origin:"*",
    }
})

io.on("connection",(socket)=>{
    
    socket.on("chat", (payload)=>{ // on = LISTEN from the other/ALL users
        // console.lgo("payload : ", payload);
        io.emit("chat", payload)  // emit is to emit to ALL users     
    })
    socket.on("join", (payload)=>{
        io.emit("join", payload)
    })
    socket.on("disconnect", (reason) => {
    console.log("Socket disconnected", reason);
    io.emit("chat", {
                    user : "joins",
                    message : `user ${reason} left the chat`
                    })
  });
})

const PORT = process.env.PORT || 3002;
server.listen(PORT, ()=>{
    console.log("server running at 3002");
})