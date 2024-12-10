
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {


  const [socket,setSocket]= useState()
  const inputRef = useRef()

  const sendMessage=()=>{
    if(!socket){
      return
    }

    const message = inputRef.current.value
      //@ts-ignore
    socket.send(message)

  }

  useEffect(()=>{

    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
   
    ws.onmessage= (ev)=>{
      alert(ev.data)
    }

  },[])
 
  return (
    <div className='bg-blue-600 w-screen h-screen justify-center items-center flex gap-3'>
      <input ref={inputRef} type="text" placeholder='Message..'/>
      <button className='h-7 bg-red-600 w-14 rounded ' onClick={sendMessage}>Send</button>
      
    </div>
  )
}

export default App
