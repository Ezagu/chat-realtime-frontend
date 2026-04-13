import { useChatsContext } from "../hooks/useChatsContext"
import { ChatCard } from "./ChatCard"

export const ListChatCards = () => {

  const {chats} = useChatsContext()

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