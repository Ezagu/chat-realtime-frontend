import type { MessageVM } from "../types/message";
import { Message } from "./Message";

export const MessageList = ({messages}: {messages: MessageVM[]}) => {
  return (
    <section className="flex flex-col-reverse grow min-h-0 overflow-y-auto scrollbar scrollbar-thumb-panel scrollbar-medium scrollbar-track-transparent p-2 gap-1">
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