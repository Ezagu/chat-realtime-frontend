import { Send } from "lucide-react"
import { useState } from "react"
import { sendMessageService } from "../../../services/websocket/socketService"

export const ChatInput = ({toUserId}: {toUserId: string}) => {
  const [text, setText] = useState('')

  return (
    <footer className="bg-panel rounded-br-2xl">
      <form className="flex" onSubmit={e => {
        e.preventDefault()
        sendMessageService({text, toUserId})
        setText('')
      }}>
        <input 
          type="text"
          placeholder="Send a message..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="bg-card text-lg px-4 py-1 grow m-2 rounded-4xl placeholder:text-text-secondary outline-0"
        />
        <button 
          className="m-2 ml-0 size-10 flex items-center justify-center bg-primary-dark rounded-full hover:bg-primary-deeper cursor-pointer transition-colors hover:text-text-secondary"
          type="submit"
        >
          <Send className="mr-0.5 mt-1"/>
        </button>
      </form>
    </footer>
  )
}