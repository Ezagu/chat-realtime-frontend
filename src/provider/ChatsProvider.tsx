import { useEffect, useState, type ReactNode } from "react";
import { ChatsContext } from "../context/ChatsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { getChatsServices } from "../services/http/chatService";
import type { ChatVM } from "../types/chat";

export const ChatsProvider = ({children}: {children: ReactNode}) => {

  const { userIdentity } = useAuthContext()
  const [chats, setChats] = useState<ChatVM[]>()

  useEffect(() => {
    if(userIdentity?.id) {
      getChatsServices(userIdentity.id)
        .then(chatsRes => setChats(chatsRes))
    }
  }, [userIdentity])

  return (
    <ChatsContext.Provider value={{chats}}>
      {children}
    </ChatsContext.Provider>
  )
}