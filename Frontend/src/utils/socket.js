import io from 'socket.io-client';

const socketUrl = import.meta.env.VITE_SOCKET_URL;
const socket = io.connect(socketUrl);

console.log("entry data of this file");

let userNamest="not loaded";

socket.on("disconnect", (reason) => {
  console.log("Socket disconnected!", reason);
  emitChat(userNamest, "I left the chat"  );
});


export function emitChat(Name, msg){
    socket.emit("chat", {
                    user : Name,
                    message : msg
                    })
    userNamest = Name;
}

export function listenChat(setMsgs, msgs){
    socket.on("chat", (payload)=>{
        setMsgs([...msgs,payload])
    })
}