import { X } from "lucide-react"
import { UserStatus } from "../../../components/UserStatus"
import { useMainChatContext } from "../../../hooks/useMainChatContext"

export const ChatHeader = ({ status }: { status: boolean }) => {

  const { mainChat, clearMainChat } = useMainChatContext()

  return (
    <header className="flex px-4 py-2 bg-panel rounded-tr-2xl ">
      <div className="flex flex-col items-start grow truncate">
        <h1 className="text-2xl font-medium text-start -mb-1">
          { mainChat?.user.username }
        </h1>
        <UserStatus status={status}/>
      </div>
      <button className="cursor-pointer" onClick={clearMainChat}>
        <X/>
      </button>
    </header>
  )
}