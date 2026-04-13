import type { MessageVM } from "../types/message";
import { Message } from "./Message";

export const MessageList = ({messages}: {messages: MessageVM[]}) => {
  return (
    <section className="flex flex-col justify-end grow overflow-y-auto scrollbar scrollbar-thumb-panel scrollbar-medium scrollbar-track-transparent">
      {
        messages.map((message) => (
          <Message
            message={message}
            key={message.id}
          />
        ))
      }
    </section>
  )
} 