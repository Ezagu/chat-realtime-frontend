import { useEffect, useState } from "react"
import type { User } from "../types/user"
import { searchUserService } from "../services/http/userService"

export const useSearchUsers = () => {

  const [search, setSearch] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])

  const searchUser = async () => {
    try {
      setUsers(await searchUserService(search))
    } catch(e) {
      console.log(e instanceof Error ? e.message : 'Unexpected Error')
    }
  }

  useEffect(() => {
    searchUser()
  }, [search])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return {
    handleChange,
    users,
    searchUser,
    search
  }
}
