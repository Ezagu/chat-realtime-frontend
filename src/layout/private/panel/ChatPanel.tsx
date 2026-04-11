import { useMainChatContext } from "../../../hooks/useMainChatContext"
import { MessageList } from "../../../components/MessageList"
import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"
import { useMessages } from "../../../hooks/useMessages"

export const ChatPanel = () => {
  const { mainChat } = useMainChatContext()
  const { messages, sendMessage } = useMessages()

  if(!mainChat) return

  return (
    <main className="min-w-0 flex flex-col min-h-0">
      <ChatHeader status={true}/>
      <MessageList messages={messages}/>
      <ChatInput sendMessage={sendMessage} chatId={mainChat.id}/>
    </main>
  )
}