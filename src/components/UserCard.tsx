import { useOnlineUsersContext } from "../hooks/useOnlineUsersContext"
import type { User } from "../types/user"
import { UserStatus } from "./UserStatus"

export const UserCard = ({user}: {user: User}) => {
  const {isOnline} = useOnlineUsersContext()

  return (
    <button className="cursor-pointer px-4 py-2 text-lg rounded-2xl bg-panel flex justify-between hover:bg-surface" key={user.id}>
        {user.username}
        <UserStatus status={isOnline(user.id)} />
      </button>
  )
}
