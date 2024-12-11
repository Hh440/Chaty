
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ChatRoom } from './pages/ChatRoom'



function App() {

  // const [message,setMessage]= useState<String[]>([])
  // const inputRef=useRef()
  // const wsRef= useRef<WebSocket>()

  // useEffect(()=>{

  //   const ws=  new WebSocket("ws://localhost:8080")
  //   wsRef.current=ws

  //   ws.onopen=()=>{
  //     ws.send((JSON.stringify({
  //       type:"join",
  //       payload:{
  //         roomId:"red"
  //       }
  //     })))
  //   }
  //   ws.onmessage=(event)=>{
  //     setMessage(m=>[...m,event.data ])

  //   }

  // },[])


  // const handleClick= ()=>{
  //   if(!wsRef.current){
  //     return
  //   }

  //   const message= inputRef.current.value;

  //   wsRef.current.send(JSON.stringify({
  //     type:"chat",
  //     payload:{
  //       message:message
  //     }
  //   }))


    
  // }


  // return (
  //   <div className='h-screen bg-black'>
  //     <div className='h-[95vh] '>
  //       {message.map(message=>
  //       <div className='p-4'>
  //       <span className='bg-white text-black p-4 m-8 '>{message}
  //         </span>
  //         </div>)}

  //     </div>
  //     <div className='w-full  bg-white flex '> 
  //       <input ref={inputRef} type='text' className='flex-1 p-4'/>
  //       <button  onClick={handleClick} className='bg-purple-700 text=white'>Send Message</button>

  //     </div>


  //   </div>
  
  // )



  return(
    <BrowserRouter>
      <Routes>
        <Route path='/chatRoom' element={<ChatRoom/>}/>
        

      </Routes>
    </BrowserRouter>
  )


}

export default App
