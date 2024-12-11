import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// Event handler
//let userCount = 0;

interface User{
    socket:WebSocket;
    room:string;
}
let allSockets:User[]=[]

wss.on("connection", function (socket: WebSocket) {
    

    // userCount++;
    // console.log("User Connected: " + userCount);

    socket.on("message", (message: string) => {
       const parsedMessage = JSON.parse(message)

       if(parsedMessage.type==="join"){
        allSockets.push({
            socket,
            room:parsedMessage.payload.roomId 
        })
       }

       if(parsedMessage.type==="chat"){
          let currentUSerRomm =null;

          for(let i=0;i<allSockets.length;i++){
            if(allSockets[i].socket==socket){
                currentUSerRomm=allSockets[i].room
            }
          }


          for(let i=0;i<allSockets.length;i++){
            if(allSockets[i].room==currentUSerRomm){
                allSockets[i].socket.send(parsedMessage.payload.message)
            }
          }
       }



    });

    // socket.on("disconnected", () => {
    //     allSockets = allSockets.filter((x) => x !== socket);
    //     //console.log("User disconnected");
    // });
});
