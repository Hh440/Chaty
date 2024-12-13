import {
    MessageSquare,
    User,
    Zap,
    Lock,
    Globe,
    Code,
    Shield,
    Headphones,
    Check,
    Copy,
    ChevronUp,
    ChevronDown
  } from "lucide-react";
  import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";



  const faqs = [
    {
      question: "Is ChatRooms free to use?",
      answer: "Yes, ChatRooms is completely free for basic use. We also offer premium features for power users and teams."
    },
    {
      question: "How secure are the chat rooms?",
      answer: "We use end-to-end encryption to ensure your conversations remain private and secure."
    },
    {
      question: "Can I use ChatRooms for my team?",
      answer: "ChatRooms is perfect for team collaboration, with features designed specifically for group communication."
    },
    {
      question: "Is there a limit to the number of participants?",
      answer: "Free rooms can host up to 50 participants. For larger groups, check out our premium plans."
    },
  ]
  
  export const Home = () => {
    const [generatedRoomId, setGeneratedRoomId] = useState("");
    const [copied, setCopied] = useState(false);
    const inputRef=useRef<HTMLInputElement>(null)

    const navigate= useNavigate()
  
    const createRoom = () => {
      const newRoomId = Math.random().toString(36).substring(7);
      setGeneratedRoomId(newRoomId);
    };
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(generatedRoomId);
      setCopied(true);
      toast.success("Room ID copied to clipboard!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => setCopied(false), 2000);
    };

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const JoinRoom = ()=>{
        const roomId= inputRef.current?.value
        if(!roomId){
            toast.error("Input box empty",{
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

            })
            return
        }
        navigate(`/chatRoom/${roomId}`)

    }
  
    return (
      <div className="h-screen bg-black">
        <div className="text-white flex flex-col gap-2 items-center justify-center pt-10">
          <h1 className="text-6xl font-Jap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Welcome to Chaty
          </h1>
          <p className="text-lg">Connect, collaborate, and chat in real-time like never before</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-11/12 justify-center pl-52">
          <div className="flex flex-col gap-8">
            <div className="border-2 w-11/12 flex flex-col gap-4 bg-gray-900/50 backdrop-blur-md border-gray-700 shadow-xl p-6">
              <div className="grid grid-cols-2 text-white gap-4">
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <MessageSquare className="w-6 h-6" />
                  RealChat
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <User />
                  Team Discussion
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Zap />
                  Instant Sharing
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Lock />
                  Private Rooms
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Globe />
                  Global Access
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Code />
                  Code Snippets
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Shield />
                  Secure Chats
                </div>
                <div className="flex gap-2 border p-3 rounded-md items-center">
                  <Headphones />
                  Voice Calls
                </div>
              </div>
              <div className="space-y-4">
                <button
                  onClick={createRoom}
                  className="bg-sky-500 text-center w-full h-9 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Create New Room
                </button>
  
                {generatedRoomId && (
                  <div className="flex items-center space-x-2 bg-gray-800/50 p-2 rounded-md">
                    <span className="flex-grow text-white">{generatedRoomId}</span>
                    <button
                      onClick={copyToClipboard}
                      aria-label="Copy Room ID"
                      className="text-white"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input ref={inputRef} placeholder="Enter Room ID" className="w-full h-9 bg-gray-700 p-2 rounded-md text-white"/>
                <button onClick={JoinRoom} className="bg-pink-600 text-white h-9 rounded-md hover:bg-pink-700">Join Room</button>

              </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-white text-3xl">Why Choose ChatRooms?</h2>
                <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><Zap className="w-5 h-5 mr-2 text-yellow-400"/>Lighting-fast real-time messaging</li>
                    <li className="flex items-center"><Lock className="w-5 h-5 mr-2 text-green-400" />End-to-End encryption for ultimate privacy</li>
                    <li className="flex items-center"><Globe className="w-5 h-5 mr-2 text-blue-400"/>Connect with users Worldwide</li>
                    <li className="flex items-center"><Code className="w-5 h-5 mr-2 text-purple-400"/>Built-in code editor for developers</li>
                    <li className="flex items-center"><User className="w-5 h-5 mr-2 text-pink-400"/>Seamless team collaboration tools</li>
                </ul>
            </div>

          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 border p-6 bg-gray-900/50 backdrop-blur-md border-gray-700 shadow-xl">
                <h1 className="text-2xl text-white">How it Works</h1>
                <ol className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold mr-3">1</span>
                        <p>Create a new chat room or join an existing one using a unique Room ID.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-bold mr-3">2</span>
                        <p>Share the Room ID with your team members, friends, or collaborators.</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white font-bold mr-3">3</span>
                        <p>Start chatting, sharing ideas, and collaborating in real-time!</p>
                    </li>
                    <li className="flex items-start">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-white font-bold mr-3">4</span>
                        <p>Utilize advanced features like code sharing, voice calls, and file transfers.</p>
                    </li>
                  </ol>
            </div>
            <div >
            <h2 className="text-3xl font-medium text-white sm:text-4xl mb-8">
            Frequently Asked Questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="text-lg font-medium text-white">{faq.question}</span>
                        {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                    {openIndex === index && (
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                    </div>
                ))}
            </div>
        </div>
          </div>
        </div>
      </div>
    );
  };
  