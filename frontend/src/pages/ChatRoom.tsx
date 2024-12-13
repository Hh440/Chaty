import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"


export const ChatRoom =()=>{

    const ChatId= useParams()
    console.log(ChatId)
     
    const inputRef= useRef<HTMLInputElement>(null)

    const[message,setMessage]=useState<string[]>([])

    const wsRef= useRef<WebSocket>()
  

    useEffect(()=>{
        const ws= new WebSocket('ws://localhost:8080')

        wsRef.current=ws

        ws.onopen=()=>{
            ws.send(JSON.stringify({
                type:"join",
                payload:{
                    roomId:ChatId
                }
            }))
        }


        ws.onmessage= (event)=>{
            const newMessage = event.data;
            setMessage((prevMessages) => {
                // if (prevMessages.includes(newMessage)) {
                //     return prevMessages; 
                // }
                return [...prevMessages, newMessage];
            });
        }


        return () => {
            ws.close();
        };





    },[])


    const sendMessage= ()=>{

        if(!wsRef.current){
                 return
            }

        if(!inputRef.current){
            return

        }

        const message= inputRef.current?.value.trim()

        wsRef.current?.send(JSON.stringify({
            type:"chat",
            payload:{
                message:message
            }
        }))

        inputRef.current.value=""



    }



    return(
        <div className="h-screen bg-black flex justify-center items-center">
            <div className="border-2 flex flex-col justify-between w-4/12 h-5/6 rounded-md p-2">

                <div className="border-red-400 overflow-y-auto h-[90vh] no-scrollbar">
                    {message.map((m,index)=>(
                        <div key={index} className="flex w-fit pl-2">
                            <span className="rounded-sm bg-white mb-2 p-2">
                                {m}
                            </span>
                        </div>
                    ))}

                </div>

                <div className=" flex border-black w-full">
                    <input ref={inputRef} placeholder="Type your message" className="w-full pl-5" />
                    <button onClick={sendMessage} className="bg-blue-700">Send Message</button>

                </div>

              
            </div>

        </div>
    )
}