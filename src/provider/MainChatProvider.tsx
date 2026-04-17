import { useEffect, useState, type ReactNode } from "react"
import { MainChatContext } from "../context/MainChatContext"
import type { ChatVM } from "../types/chat"
import type { MessageVM, NewMessage } from "../types/message"
import { useAuthContext } from "../hooks/useAuthContext"
import { getMessages } from "../services/http/messageService"
import { getSocket } from "../services/websocket/socketService"
import { toMessageVM } from "../adapters/messageAdapter"
import { useChatsContext } from "../hooks/useChatsContext"
import { toChatVM } from "../adapters/chatAdapter"

export const MainChatProvider = ({children}: {children: ReactNode}) => {
  const { userIdentity } = useAuthContext()
  const { chats, setLastMessage, addChat, moveChatToTop, readLastMessage } = useChatsContext()
  const [mainChat, setMainChat] = useState<ChatVM>()
  const [messages, setMessages] = useState<MessageVM[]>([])
  
  const clearMainChat = () => {
    clearMessages()
    setMainChat(undefined)
  }

  const clearMessages = () => setMessages([])

  const loadMainChat = ({ chat }: { chat: ChatVM }) => {

    if(chat.id?.toString() === mainChat?.id?.toString()) return

    clearMessages()
    setMainChat(chat)

    // Leer mensajes
    if(chat.id && !chat.lastMessage?.isMine && !chat.lastMessage?.read) {
      const socket = getSocket()
      socket?.emit('chat:read', chat.id)
      readLastMessage({chatId: chat.id})
    }
  }

  useEffect(() => {
    if(!userIdentity) return

    if(mainChat?.id) {
      // Recuperar los mensajes
      getMessages({chatId: mainChat.id, myId: userIdentity?.id})
        .then(m => setMessages(m))
    }

    const socket = getSocket()

    const handleNewMessage = (newMessage: NewMessage) => {
      // Si es un chat nuevo, agregar a lista de chats
      if(!chats?.find((chat) => chat.id?.toString() === newMessage.chat.id.toString())) {
        const chat = toChatVM({ chat: newMessage.chat, myId: userIdentity.id })
        addChat({ chat })
        // si el toUser es igual al del mainChat, entoces setear como main chat
        if(newMessage.chat.users.find(user => user.id.toString() === mainChat?.user.id.toString())) {
          loadMainChat({ chat })
        }
      } else {
        // Poner chat en primer lugar
        moveChatToTop({ chatId: newMessage.chat.id })
      }
      const mappedMessage = toMessageVM({message: newMessage.message, myId: userIdentity.id})
      
      // Si el mensaje es del chat principal
      if(newMessage.chat.id.toString() === mainChat?.id?.toString()) {
        // Si no es mio, leerlo
        if(newMessage.message.userId.toString() !== userIdentity.id.toString()) {
          socket?.emit('chat:read', newMessage.chat.id)
          mappedMessage.read = true
        }
        // Agregarlo a mensajes
        setMessages(prev => [mappedMessage, ...prev])
      }
      //Setear lastMessage
      setLastMessage({chatId: newMessage.message.chatId, message: mappedMessage})
    }

    socket?.on('message:new', handleNewMessage)

    return () => {
      socket?.off('message:new', handleNewMessage)
    }
  }, [mainChat, userIdentity, setLastMessage])

  return (
    <MainChatContext.Provider value={{mainChat, clearMainChat, messages, loadMainChat}}>
      {children}
    </MainChatContext.Provider>
  )
}
