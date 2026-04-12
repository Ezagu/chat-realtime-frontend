import ReactTimeAgo from "react-time-ago"
import { useMainChatContext } from "../hooks/useMainChatContext"
import type { ChatVM } from "../types/chat"
import { CheckCheck } from "lucide-react"

export const ChatCard = ({ chat } : {chat: ChatVM}) => {

  const {setMainChat} = useMainChatContext()

  const handleClick = () => {
    setMainChat(chat)
  }

  return (
    <button 
      className={`bg-card hover:bg-card-hover p-2 px-4 border-r-4 rounded-xl cursor-pointer
      ${
        !chat.lastMessage.isMine && !chat.lastMessage.read 
          ? "border-primary"
          : "border-transparent"
        
      }`}
      onClick={handleClick}
    >
      <header className="flex gap-2 items-baseline">
        <h2 className="text-lg font-medium truncate">
          {chat.user.username}
        </h2>
      </header>
      <main className="flex items-center">
        <p className="grow truncate text-start">
          {chat.lastMessage.text}
        </p>
        {
          chat.lastMessage.isMine && <CheckCheck className={`size-4 ${chat.lastMessage.read && 'text-blue-600'}`}/>
        }
        <span className="ml-1 -mr-2 text-text-secondary">
          <ReactTimeAgo 
            date={new Date(chat.lastMessage.time).getTime()}
            timeStyle='mini-minute-now'
          />
        </span>
      </main>
    </button>
  )
}