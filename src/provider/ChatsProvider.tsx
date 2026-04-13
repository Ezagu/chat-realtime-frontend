import { useEffect, useState, type ReactNode } from "react";
import { ChatsContext } from "../context/ChatsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { getChatsServices } from "../services/http/chatService";
import type { ChatVM } from "../types/chat";
import type { MessageVM } from "../types/message";
import { getSocket } from "../services/websocket/socketService";

export const ChatsProvider = ({children}: {children: ReactNode}) => {

  const { userIdentity } = useAuthContext()
  const [chats, setChats] = useState<ChatVM[]>([])

  const readLastMessage = ({ chatId }: {chatId: string}) => {
    setChats(prev => prev.map(chat => 
      chat.id?.toString() !== chatId.toString()
        ? chat
        : {
          ...chat,
          lastMessage: chat.lastMessage ? {
            ...chat.lastMessage,
            read: true
          } : null
        }
    ))
  }

  useEffect(() => {
    if(userIdentity?.id) {
      getChatsServices(userIdentity.id)
        .then(chatsRes => setChats(chatsRes))
    }

    // Escuchar si leyeron mis chats
    const socket = getSocket()
    socket?.on('chat:read', (chatId: string) => {
      console.log('SE ESCUCHO EL READ en chat:', chatId)
      readLastMessage({ chatId })
    })

  }, [userIdentity])

  const setLastMessage = ({chatId, message}: {chatId: string, message: MessageVM}) => {
    if(!chats) return
    setChats(prev => prev.map(chat => 
      chat.id?.toString() === chatId.toString()
        ? {...chat, lastMessage: message}
        : chat
    ))
  }

  const addChat = ({ chat } : { chat: ChatVM }) => {
    setChats(prev => ([chat, ...prev]))
  }

  const moveChatToTop = ({ chatId }: { chatId: string }) => {
    const chatIndex = chats.findIndex(chat => chat.id?.toString() === chatId.toString())
    if(chatIndex === -1) return

    const newChats = [...chats]
    newChats.splice(chatIndex, 1)
    newChats.unshift(chats[chatIndex])
    setChats(newChats)
  }

  return (
    <ChatsContext.Provider value={{chats, setLastMessage, addChat, moveChatToTop, readLastMessage}}>
      {children}
    </ChatsContext.Provider>
  )
}