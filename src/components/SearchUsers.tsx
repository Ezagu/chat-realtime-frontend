import { Search } from "lucide-react"

export const SearchUsers = () => {
  return (
    <label className="flex mb-5 mt-3 bg-card px-4 py-2 rounded-2xl has-[input:focus-within]:outline-primary has-[input:focus-within]:outline-2">
      <Search className="text-text-secondary"/>
      <input 
        className="w-full placeholder:text-text-secondary pl-2 outline-0"
        placeholder="Busca chats o usuarios"
      />
    </label>
  )
  
}