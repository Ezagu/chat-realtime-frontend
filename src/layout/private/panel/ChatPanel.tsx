import type { MessageVM } from "../../../types/message"
import { useEffect, useState } from "react"
import { useMainChatContext } from "../../../hooks/useMainChatContext"
import { useAuthContext } from "../../../hooks/useAuthContext"
import { getMessages } from "../../../services/http/messageService"
import { MessageList } from "../../../components/MessageList"
import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"

export const ChatPanel = () => {
  const { userIdentity } = useAuthContext()
  const { mainChat } = useMainChatContext()
  const [ messages, setMessages ] = useState<MessageVM[]>([])

  useEffect(() => {
    if(!mainChat || !userIdentity) return

    getMessages({chatId: mainChat.id, myId: userIdentity?.id})
      .then(m => setMessages(m))

  }, [mainChat, userIdentity])

  if(!mainChat) return

  return (
    <main className="min-w-0 flex flex-col">
      <ChatHeader status={true}/>
      <MessageList messages={messages}/>
      <ChatInput />
    </main>
  )
}