import io from 'socket.io-client';

const socket = io.connect("http://localhost:3002/");

console.log("entry data of this file");

export function emitChat(Name, msg){
    socket.emit("chat", {
                    user : Name,
                    message : msg
                    })
}

export function listenChat(setMsgs, msgs){
    socket.on("chat", (payload)=>{
        setMsgs([...msgs,payload])
    })
}