import { Search, X } from "lucide-react"
import { useSearchUsers } from "../hooks/useSearchUsers"
import type { User } from "../types/user"
import { ListUsers } from "./ListUsers"

const LoadingUsers = () => {
  return (
    <p className="w-full text-center my-4">
      Searching users...
    </p>
  )
}

const UserNotFound = () => {
  return (
    <p className="w-full text-center my-4 text-red-300">
      User not found
    </p>
  )
}

const SearchResult = ({users, loading}: {users: User[], loading: boolean}) => {
  if(loading) return <LoadingUsers/>
  if(users.length === 0) return <UserNotFound />
  return <ListUsers users={users}/>
}

export const SearchUsers = () => {
  const {handleChange, search, users, loading, clearSearch} = useSearchUsers()

  return (
    <div className="relative">
      <label className="flex mb-5 mt-3 bg-card px-4 py-2 rounded-2xl has-[input:focus-within]:outline-primary has-[input:focus-within]:outline-2">
        <Search className="text-text-secondary"/>
        <input 
          className="w-full placeholder:text-text-secondary pl-2 outline-0"
          placeholder="Search users"
          onChange={handleChange}
          value={search}
        />
        {search && (
          <button onClick={clearSearch} className="cursor-pointer text-text-secondary">
            <X />
          </button>
        )}
      </label>
      
      {search && (
        <div className="absolute backdrop-blur-2xl w-full rounded-2xl -mt-2">
          <SearchResult users={users} loading={loading}/>
        </div>
      )}
    </div>
  )
}