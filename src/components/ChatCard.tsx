import type { ChatVM } from "../types/chat"
import { MessageChecked } from "./MessageChecked"

export const ChatCard = ({ chat } : {chat: ChatVM}) => {
  return (
    <article 
      className={`bg-card hover:bg-card-hover p-2 px-4 border-r-4 rounded-xl cursor-pointer
      ${
        !chat.lastMessage.isMine && !chat.lastMessage.read 
          ? "border-primary"
          : "border-transparent"
        
      }`}
    >
      <header className="flex gap-2 items-baseline">
        <h2 className="text-lg font-medium truncate">
          {chat.user.username}
        </h2>
      </header>
      <main className="flex items-center">
        <p className="grow truncate">
          {chat.lastMessage.text}
        </p>
        {
          chat.lastMessage.isMine && <MessageChecked read={chat.lastMessage.read}/>
        }
        <span className="ml-1 -mr-2 text-text-secondary">
          {chat.lastMessage.time}
        </span>
      </main>
    </article>
  )
}