import { useContext } from "react"
import { MainChatContext } from "../context/MainChatContext"

export const useMainChatContext = () => {

  const context = useContext(MainChatContext)

  if(!context) throw new Error('useMainChatContext must be used in MainChatProvider')

  return context
}
