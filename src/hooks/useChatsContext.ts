import { useContext } from "react"
import { ChatsContext } from "../context/ChatsContext"

export const useChatsContext = () => {

  const context = useContext(ChatsContext)

  if(!context) throw new Error('useChatsContext must be used in ChatsProvider')

  return context
}
