import { useCallback, useEffect, useState } from "react"
import type { User } from "../types/user"
import { searchUserService } from "../services/http/userService"

export const useSearchUsers = () => {
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<string>('')
  const [users, setUsers] = useState<User[]>([])

  const searchUser = useCallback(async () => {
    try {
      setUsers(await searchUserService(search))
    } catch(e) {
      console.log(e instanceof Error ? e.message : 'Unexpected Error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => {
    if(search === '') return

    setUsers([])
    setLoading(true)

    const timeout = setTimeout(() => {
      searchUser()
    }, 300)

    return () => clearTimeout(timeout)
  }, [search, searchUser])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const clearSearch = () => setSearch('')

  return {
    handleChange,
    users,
    search,
    loading,
    clearSearch
  }
}
