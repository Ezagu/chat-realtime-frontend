import { Check, CheckCheck } from "lucide-react"

export const Message = ({
  messageText, 
  timeStamp, 
  isMine,
  read
} : { 
  messageText: string, 
  isMine: boolean,
  timeStamp: string,
  read: boolean
}) => {
  return (
    <article 
      className={`text-xl px-4 py-2   rounded-2xl mb-3 mx-3 flex flex-col max-w-2/3 ${isMine ? "bg-primary-dark self-end" : "bg-panel self-start"}`}
    >
      <p>
        {messageText}
      </p>
      <span className="flex items-center text-sm self-end gap-0.5">
        <p >
          {timeStamp}
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