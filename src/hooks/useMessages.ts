import { useEffect, useState } from "react"
import type { Message, MessageVM, SendMessage } from "../types/message"
import { useMainChatContext } from "./useMainChatContext"
import { useAuthContext } from "./useAuthContext"
import { getMessages } from "../services/http/messageService"
import { getSocket } from "../services/websocket/socketService"
import { toMessageVM } from "../adapters/messageAdapter"
import { useChatsContext } from "./useChatsContext"

export const useMessages = () => {
  const [ messages, setMessages ] = useState<MessageVM[]>([])
  const { userIdentity } = useAuthContext()
  const { mainChat } = useMainChatContext()
  const { setLastMessage } = useChatsContext()
  
  useEffect(() => {
    if(!mainChat || !userIdentity) return

    // Recuperar mensajes del chat
    getMessages({chatId: mainChat.id, myId: userIdentity?.id})
      .then(m => setMessages(m))

    // Escuchar mensajes nuevos
    const socket = getSocket()
    
    const handleNewMessage = (message: Message) => {
      const mappedMessage = toMessageVM({message, myId: userIdentity.id})
      setMessages(prev => [mappedMessage, ...prev])
      setLastMessage({chatId: mainChat.id, message: mappedMessage})
    }

    socket?.on('message:new', handleNewMessage)

    return () => {
      socket?.off('message:new', handleNewMessage)
    }
  }, [mainChat, userIdentity, setLastMessage])

  const sendMessage = (message: SendMessage) => {
    const socket = getSocket()
    socket?.emit('message:send', message)
  }

  return {
    messages,
    sendMessage
  }
}
