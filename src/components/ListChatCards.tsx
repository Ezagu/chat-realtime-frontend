import type { ChatVM } from "../types/chat"
import { ChatCard } from "./ChatCard"

export const ListChatCards = ({ chats }: { chats: ChatVM[] }) => {
  return (
    <section className="flex gap-3 flex-col overflow-y-auto flex-1 min-h-0 scrollbar">
      {
        chats?.map(chat => (
          <ChatCard chat={chat} key={chat.id}/>
        ))
      }
    </section>
  )
}