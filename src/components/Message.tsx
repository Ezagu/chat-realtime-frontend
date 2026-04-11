import type { MessageVM } from "../types/message"
import ReactTimeAgo from "react-time-ago"
import { CheckCheck } from "lucide-react"

export const Message = ({ message }: {message: MessageVM}) => {
  return (
    <article 
      className={`text-xl px-4 py-2   rounded-2xl mb-3 mx-3 flex flex-col max-w-2/3 ${message.isMine ? "bg-primary-dark self-end" : "bg-panel self-start"}`}
    >
      <p>
        {message.text}
      </p>
      <span className="flex items-center text-sm self-end gap-1">
        <p>
          <ReactTimeAgo 
            date={new Date(message.time)} 
            timeStyle='twitter'
          />
        </p>
        <div>
          {
            message.isMine && <CheckCheck className={`size-4 ${message.read && 'text-blue-600'}`}/>
          }
        </div>
      </span>
    </article>
  )
}