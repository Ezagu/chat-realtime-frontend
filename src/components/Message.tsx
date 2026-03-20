import { Check, CheckCheck } from "lucide-react"
import type { MessageDto } from "../types/message"

export const Message = ({text, time, isMine, read}: MessageDto) => {
  return (
    <article 
      className={`text-xl px-4 py-2   rounded-2xl mb-3 mx-3 flex flex-col max-w-2/3 ${isMine ? "bg-primary-dark self-end" : "bg-panel self-start"}`}
    >
      <p>
        {text}
      </p>
      <span className="flex items-center text-sm self-end gap-0.5">
        <p >
          {time}
        </p>
        <div>
          {
            isMine && (read
            ? <CheckCheck className="size-4"/>
            : <Check className="size-4"/>)
          }
        </div>
      </span>
    </article>
  )
}