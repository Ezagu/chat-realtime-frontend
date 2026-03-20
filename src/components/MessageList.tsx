import type { MessageDto } from "../types/message";
import { Message } from "./Message";

export const MessageList = ({messages}: {messages: MessageDto[]}) => {
  return (
    <section className="flex flex-col-reverse grow">
      {
        messages.map((message) => (
          <Message
            time={message.time}
            text={message.text}
            isMine={message.isMine}
            read={message.read}
          />
        ))
      }
    </section>
  )
} 