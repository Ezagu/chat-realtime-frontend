import { useAuthContext } from "../hooks/useAuthContext"
import type { User } from "../types/user"
import { UserCard } from "./UserCard"

export const ListUsers = ({users}: {users: User[]}) => {
  const { userIdentity } = useAuthContext()
  return (
    <ul className="flex flex-col gap-2 p-2">
      {
        users.map((user) => {
          // No renderizar mismo usuario logueado
          if(userIdentity?.id.toString() === user.id.toString()) return
          return <UserCard user={user} key={user.id}/>
        })
      }
    </ul>
  )
}