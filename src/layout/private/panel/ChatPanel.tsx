import { MessageList } from "../../../components/MessageList"
import { ChatHeader } from "./ChatHeader"
import { ChatInput } from "./ChatInput"

export const ChatPanel = () => {
  return (
    <main className="min-w-0 flex flex-col">
      <ChatHeader username="canela" status={true}/>

      <MessageList messages={
        [
          {
            time:"19:53",
            text:"Hola este es un mensaje muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy largooooooooooooooooooooooooo", 
            isMine: true, 
            read: false  
          },
          {
            time:"19:53",
            text:"Hola este es un mensaje muuuuuuuuuuuuuuuuuuuuuuuuuuuuuuy largooooooooooooooooooooooooo", 
            isMine: true, 
            read: true  
          },
          {
            time:"19:53",
            text:"Hola este es un mensaje", 
            isMine: false, 
            read: false  
          }
        ]
      }/>
      
      <ChatInput />

    </main>
  )
}