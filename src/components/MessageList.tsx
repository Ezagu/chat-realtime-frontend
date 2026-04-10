import type { MessageVM } from "../types/message";
import { Message } from "./Message";

export const MessageList = ({messages}: {messages: MessageVM[]}) => {
  return (
    <section className="flex flex-col-reverse grow">
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