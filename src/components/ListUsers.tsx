import type { User } from "../types/user"
import { UserCard } from "./UserCard"

export const ListUsers = ({users}: {users: User[]}) => {
  return (
    <ul className="flex flex-col gap-2 p-2">
      {
        users.map((user) => (
          <UserCard user={user}/>
        ))
      }
    </ul>
  )
}