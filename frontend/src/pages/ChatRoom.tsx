import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../Config"


export const ChatRoom =()=>{

    const ChatId=  useParams()
    
     
    const inputRef= useRef<HTMLInputElement>(null)

    const[message,setMessage]=useState<string[]>([])

    const wsRef= useRef<WebSocket>()
    //const userIdRef = useRef<string>(`user-${Math.random().toString(36).substr(2, 9)}`); 


  

    useEffect(()=>{
        const ws= new WebSocket(BACKEND_URL)

        wsRef.current=ws

        ws.onopen=()=>{
            ws.send(JSON.stringify({
                type:"join",
                payload:{
                    roomId:ChatId.roomId
                }
            }))
        }


        ws.onmessage= (event)=>{
            const payload = event.data;

            setMessage((prevMessages) => {
                // if (prevMessages.includes(newMessage)) {
                //     return prevMessages; 
                // }
                return [...prevMessages,payload];
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
                message:message,
               // sender:userIdRef.current
            }
        }))

        inputRef.current.value=""



    }



    return(
        <div className="h-screen bg-black flex justify-center items-center">
            <div className="border-2 flex flex-col justify-between w-4/12 h-5/6 rounded-md p-2">

                <div className="border-red-400 overflow-y-auto h-[90vh] no-scrollbar">
                    {message.map((m,index)=>(
                        <div key={index}className={`flex justify-start mb-2`}>
                            <span
                                className={`rounded-md p-2
                                     bg-gray-500 text-white
                                `}
                            >
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