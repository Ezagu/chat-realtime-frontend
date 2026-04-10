import type { ChatVM } from "../types/chat"
import { ChatCard } from "./ChatCard"

export const ListChatCards = ({ chats } : { chats: ChatVM[] }) => {
  return (
    <section className="flex gap-3 flex-col">
      {
        chats.map(chat => (
          <ChatCard chat={chat}/>
        ))
      }
    </section>
  )
}