import { useContext } from "react"
import { OnlineUsersContext } from "../context/OnlineUsersContext"

export const useOnlineUsersContext = () => {

  const context = useContext(OnlineUsersContext)

  if(!context) throw new Error('useOnlineUsersContext must be used in OnlineUsersProvider')

  return context
}
