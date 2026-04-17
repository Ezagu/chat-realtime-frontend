import { ListChatCards } from "../../../components/ListChatCards"
import { SearchUsers } from "../../../components/SearchUsers"
import { useChatsContext } from "../../../hooks/useChatsContext"

const WithoutChats = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-30 text-text-secondary text-center">
      <h2 className="text-lg font-bold text-text-primary">
        You haven't started a conversation yet
      </h2>
      <h3 className="font-bold">
        find someone to chat with!
      </h3>
    </div>
  )
}

export const SidebarContent = () => {
  const {chats} = useChatsContext()

  return (
    <main className="py-2 px-4 flex flex-col flex-1 min-h-0">
      <SearchUsers />
      {
        chats && chats?.length !== 0
          ? <ListChatCards chats={chats}/>
          : <WithoutChats />
      }
    </main>
  )
}