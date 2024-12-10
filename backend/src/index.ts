import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})


//event handler
let userCount=0;
let allSockets=[]


wss.on("connection",function(socket){

    allSockets.push(socket)

    userCount++;

    console.log("user Connected "+userCount)

    socket.on("message",(message)=>{

        console.log("message recived"+ message,toString())
        for(let i=0;i<allSockets.length;i++){
            const s =allSockets[i];
            s.send(message.toString()+": sent from server")
        }

        
    })

})