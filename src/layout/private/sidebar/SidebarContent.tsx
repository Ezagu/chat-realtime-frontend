import { ListChatCards } from "../../../components/ListChatCards"
import { SearchUsers } from "../../../components/SearchUsers"

export const SidebarContent = () => {
  return (
    <main className="py-2 px-4">
      <SearchUsers />
      <ListChatCards chats={[
        {
          id: "asdad",
          lastMessage: {
            text: "Te amo miamorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
            isMine: true,
            read: true,
            time: "1:33"
          },
          user: {
            id:"asdasd",
            username: "Kiara miamor"
          }
        },
        {
          id: "asdad",
          lastMessage: {
            text: "Te amo miamorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
            isMine: true,
            read: false,
            time: "1:33"
          },
          user: {
            id:"asdasd",
            username: "Kiara miamor"
          }
        },
        {
          id: "asdad",
          lastMessage: {
            text: "Te amo miamorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
            isMine: false,
            read: false,
            time: "1:33"
          },
          user: {
            id:"asdasd",
            username: "Kiara miamor"
          }
        },
        {
          id: "asdad",
          lastMessage: {
            text: "Te amo miamorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
            isMine: false,
            read: true,
            time: "1:33"
          },
          user: {
            id:"asdasd",
            username: "Kiara miamor"
          }
        }
      ]}/>
    </main>
  )
}