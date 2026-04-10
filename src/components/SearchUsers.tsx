import { Search } from "lucide-react"
import { UserStatus } from "./UserStatus"
import { useSearchUsers } from "../hooks/useSearchUsers"


export const SearchUsers = () => {

  const {handleChange, search, users} = useSearchUsers()

  return (
    <div className="relative">
      <label className="flex mb-5 mt-3 bg-card px-4 py-2 rounded-2xl has-[input:focus-within]:outline-primary has-[input:focus-within]:outline-2">
        <Search className="text-text-secondary"/>
        <input 
          className="w-full placeholder:text-text-secondary pl-2 outline-0"
          placeholder="Search users"
          onChange={handleChange}
        />
      </label>
      {
        search &&
        (
        <div className="absolute backdrop-blur-2xl w-full rounded-2xl -mt-2">
          <ul className="flex flex-col gap-2 p-2">
            {JSON.stringify(users)}
            {/* <button className="cursor-pointer px-4 py-2 text-lg rounded-2xl bg-panel flex justify-between hover:bg-surface">
              Kiara
              <UserStatus status={false} />
            </button>
            <button className="cursor-pointer px-4 py-2 text-lg rounded-2xl bg-panel flex justify-between hover:bg-surface">
              Kiara
              <UserStatus status={true} />
            </button>
            <button className="cursor-pointer px-4 py-2 text-lg rounded-2xl bg-panel flex justify-between hover:bg-surface">
              Kiara
              <UserStatus status={true} />
            </button> */}
          </ul>
        </div>
        )
      }
      
    </div>
    
  )
  
}