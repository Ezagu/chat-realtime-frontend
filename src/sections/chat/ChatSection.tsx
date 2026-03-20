import { MessageList } from "../../components/MessageList"
import type { User } from "../../types/user"
import { FooterChatSection } from "./FooterChatSection"
import { HeaderChatSection } from "./HeaderChatSection"

export const ChatSection = ({ user } : {user: User}) => {
  return (
    <main className="min-w-0 flex flex-col">
      <HeaderChatSection username={user.username} status={true}/>

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
      
      <FooterChatSection />

    </main>
  )
}