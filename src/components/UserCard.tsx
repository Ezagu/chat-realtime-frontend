import { useChatsContext } from "../hooks/useChatsContext"
import { useMainChatContext } from "../hooks/useMainChatContext"
import { useOnlineUsersContext } from "../hooks/useOnlineUsersContext"
import type { User } from "../types/user"
import { UserStatus } from "./UserStatus"

export const UserCard = ({user}: {user: User}) => {
  const { isOnline } = useOnlineUsersContext()
  const { loadMainChat } = useMainChatContext()
  const { chats } = useChatsContext()

  const handleClick = () => {
    const chat = chats?.find((chat) => chat.user.id.toString() === user.id.toString()) || {
        id: null,
        user,
        lastMessage: null
    }
    loadMainChat({chat})
  }

  return (
    <button 
      className="cursor-pointer px-4 py-2 text-lg rounded-2xl bg-panel flex justify-between hover:bg-surface" 
      key={user.id}
      onClick={handleClick}
    >
        {user.username}
        <UserStatus status={isOnline(user.id)} />
      </button>
  )
}
