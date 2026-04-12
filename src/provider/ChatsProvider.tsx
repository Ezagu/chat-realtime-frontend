import { useEffect, useState, type ReactNode } from "react";
import { ChatsContext } from "../context/ChatsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { getChatsServices } from "../services/http/chatService";
import type { ChatVM } from "../types/chat";
import type { MessageVM } from "../types/message";

export const ChatsProvider = ({children}: {children: ReactNode}) => {

  const { userIdentity } = useAuthContext()
  const [chats, setChats] = useState<ChatVM[]>()

  useEffect(() => {
    if(userIdentity?.id) {
      getChatsServices(userIdentity.id)
        .then(chatsRes => setChats(chatsRes))
    }
  }, [userIdentity])

  const setLastMessage = ({chatId, message}: {chatId: string, message: MessageVM}) => {
    if(!chats) return
    const chatsUpdated = [...chats]
    chatsUpdated.map((chat) => {
      if(chat.id.toString() !== chatId.toString()) return
      chat.lastMessage = message
    })
    setChats(chatsUpdated)
  }

  return (
    <ChatsContext.Provider value={{chats, setLastMessage}}>
      {children}
    </ChatsContext.Provider>
  )
}