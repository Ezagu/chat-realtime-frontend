import { useMainChatContext } from "../../../hooks/useMainChatContext"
import { MessageList } from "../../../components/MessageList"
import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"

export const ChatPanel = () => {
  const { mainChat, messages } = useMainChatContext()

  if(!mainChat) return

  return (
    <main className="min-w-0 flex flex-col min-h-0">
      <ChatHeader/>
      <MessageList messages={messages}/>
      <ChatInput toUserId={mainChat.user.id}/>
    </main>
  )
}