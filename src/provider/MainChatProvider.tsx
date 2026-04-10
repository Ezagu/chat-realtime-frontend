import { useState, type ReactNode } from "react"
import { MainChatContext } from "../context/MainChatContext"
import type { ChatVM } from "../types/chat"

export const MainChatProvider = ({children}: {children: ReactNode}) => {

  const [mainChat, setMainChat] = useState<ChatVM>()

  const clearMainChat = () => setMainChat(undefined)

  return (
    <MainChatContext.Provider value={{mainChat, setMainChat, clearMainChat}}>
      {children}
    </MainChatContext.Provider>
  )
}
