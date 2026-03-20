import type { ChatDto } from "../types/chat"
import { ChatCard } from "./ChatCard"

export const ListChatCards = ({ chats } : { chats: ChatDto[] }) => {
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