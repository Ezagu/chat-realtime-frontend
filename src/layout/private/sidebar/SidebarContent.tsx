import { ListChatCards } from "../../../components/ListChatCards"
import { SearchUsers } from "../../../components/SearchUsers"

export const SidebarContent = () => {
  return (
    <main className="py-2 px-4">
      <SearchUsers />
      <ListChatCards/>
    </main>
  )
}