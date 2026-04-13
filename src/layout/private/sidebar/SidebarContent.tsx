import { ListChatCards } from "../../../components/ListChatCards"
import { SearchUsers } from "../../../components/SearchUsers"

export const SidebarContent = () => {
  return (
    <main className="py-2 px-4 flex flex-col flex-1 min-h-0">
      <SearchUsers />
      <ListChatCards/>
    </main>
  )
}