import { useAuthContext } from "../hooks/useAuthContext"
import { ChatPanel } from "./private/panel/ChatPanel"
import { AuthPanel } from "./public/panel/AuthPanel"

export const MainPanel = () => {

  const {userIdentity} = useAuthContext()
  
  if(!userIdentity) return <AuthPanel />
  return <ChatPanel />
}